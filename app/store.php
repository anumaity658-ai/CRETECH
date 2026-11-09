<?php
/**
 * Safe read/write of JSON files in storage/private (cms.json, enquiries.json, ...).
 *
 * Every write takes an exclusive lock on "<name>.json.lock", writes a temp file
 * and renames it over the old one, so a crash never leaves a half-written file.
 * Readers take a shared lock on the same lock file, which also keeps Windows
 * happy (a file cannot be replaced while another handle has it open).
 */
declare(strict_types=1);

const STORE_DIR = __DIR__ . '/../storage/private';

final class StoreConflict extends RuntimeException {}

function store_path(string $name): string
{
    if (!preg_match('/^[a-z0-9_-]+$/', $name)) {
        throw new InvalidArgumentException('Invalid store name');
    }
    return STORE_DIR . '/' . $name . '.json';
}

function store_ensure_dir(): void
{
    if (!is_dir(STORE_DIR) && !mkdir(STORE_DIR, 0775, true) && !is_dir(STORE_DIR)) {
        throw new RuntimeException('Could not create storage directory');
    }
    // Belt and braces: the root .htaccess blocks /storage too.
    $guard = dirname(STORE_DIR) . '/.htaccess';
    if (!is_file($guard)) {
        file_put_contents($guard, "Require all denied\n");
    }
}

/** @return resource */
function store_lock(string $name, int $mode)
{
    store_ensure_dir();
    $lock = fopen(store_path($name) . '.lock', 'c');
    if ($lock === false || !flock($lock, $mode)) {
        throw new RuntimeException('Could not lock store: ' . $name);
    }
    return $lock;
}

function store_read(string $name, array $default = []): array
{
    $path = store_path($name);
    if (!is_file($path)) {
        return $default;
    }
    $lock = store_lock($name, LOCK_SH);
    try {
        $data = json_decode((string) file_get_contents($path), true);
    } finally {
        flock($lock, LOCK_UN);
        fclose($lock);
    }
    return is_array($data) ? $data : $default;
}

/**
 * Locked read-modify-write. $change receives the current data and returns the new data.
 */
function store_update(string $name, callable $change, array $default = []): array
{
    $path = store_path($name);
    $lock = store_lock($name, LOCK_EX);
    try {
        $current = $default;
        if (is_file($path)) {
            $decoded = json_decode((string) file_get_contents($path), true);
            if (is_array($decoded)) {
                $current = $decoded;
            }
        }

        $next = $change($current);
        $json = json_encode($next, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        if ($json === false) {
            throw new RuntimeException('Could not encode store: ' . $name);
        }

        $tmp = $path . '.' . bin2hex(random_bytes(4)) . '.tmp';
        if (file_put_contents($tmp, $json) === false) {
            throw new RuntimeException('Could not write store: ' . $name);
        }
        if (!rename($tmp, $path)) {
            @unlink($tmp);
            throw new RuntimeException('Could not replace store: ' . $name);
        }
        return $next;
    } finally {
        flock($lock, LOCK_UN);
        fclose($lock);
    }
}

/**
 * Save only if nobody else saved since $expectedVersion was read
 * (two admins editing at once). Bumps "version" on success.
 */
function store_update_versioned(string $name, int $expectedVersion, callable $change): array
{
    return store_update($name, static function (array $current) use ($expectedVersion, $change): array {
        $version = (int) ($current['version'] ?? 0);
        if ($version !== $expectedVersion) {
            throw new StoreConflict('This content was changed by someone else. Reload and try again.');
        }
        $next = $change($current);
        $next['version'] = $version + 1;
        $next['updated_at'] = date('c');
        return $next;
    });
}
