<?php
/**
 * Security helpers: app secret, signed tokens, JSON replies, HTTP headers.
 * Phase 2 adds admin sessions, timeout and CSRF tokens here.
 */
declare(strict_types=1);

require_once __DIR__ . '/cms.php';

/** APP_SECRET from .env, or a random key created once in storage/private. */
function app_secret(): string
{
    static $secret = null;
    if ($secret !== null) {
        return $secret;
    }
    $secret = app_env('APP_SECRET');
    if ($secret === null) {
        store_ensure_dir();
        $path = STORE_DIR . '/secret.key';
        if (!is_file($path)) {
            file_put_contents($path, bin2hex(random_bytes(32)), LOCK_EX);
        }
        $secret = trim((string) file_get_contents($path));
    }
    return $secret;
}

/** A token proving the form was loaded from our page, and when. */
function form_token(string $purpose = 'enquiry'): string
{
    $time = (string) time();
    return $time . '.' . hash_hmac('sha256', $purpose . '|' . $time, app_secret());
}

/**
 * @return string|null null when valid, otherwise "invalid", "too-fast" or "expired"
 */
function form_token_problem(string $token, string $purpose = 'enquiry', int $minSeconds = 3, int $maxSeconds = 7200): ?string
{
    if (!preg_match('/^(\d{9,11})\.([a-f0-9]{64})$/', $token, $m)) {
        return 'invalid';
    }
    if (!hash_equals(hash_hmac('sha256', $purpose . '|' . $m[1], app_secret()), $m[2])) {
        return 'invalid';
    }
    $age = time() - (int) $m[1];
    if ($age < $minSeconds) {
        return 'too-fast';
    }
    return $age > $maxSeconds ? 'expired' : null;
}

function client_ip(): string
{
    return (string) ($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0');
}

function send_security_headers(): void
{
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: SAMEORIGIN');
    header('Referrer-Policy: strict-origin-when-cross-origin');
    header('Permissions-Policy: camera=(), microphone=(), geolocation=()');
}

function json_reply(array $body, int $status = 200): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function wants_json(): bool
{
    return str_contains((string) ($_SERVER['HTTP_ACCEPT'] ?? ''), 'application/json');
}
