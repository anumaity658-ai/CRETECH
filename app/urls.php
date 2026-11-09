<?php
/**
 * Clean addresses: where the site lives, which template answers a path,
 * and 301 redirects from old addresses (about.php, terms.php, *.html ...).
 */
declare(strict_types=1);

require_once __DIR__ . '/cms.php';

/** URL folder the site is served from: "/" on a domain, "/CRETECH_New/" in a XAMPP subfolder. */
function url_base(): string
{
    $base = app_env('SITE_BASE');
    if ($base === null) {
        $docRoot = realpath((string) ($_SERVER['DOCUMENT_ROOT'] ?? '')) ?: '';
        $root = realpath(cms_root()) ?: cms_root();
        $base = ($docRoot !== '' && stripos($root, $docRoot) === 0)
            ? str_replace('\\', '/', substr($root, strlen($docRoot)))
            : '';
    }
    return '/' . trim($base, '/') . (trim($base, '/') === '' ? '' : '/');
}

/** Full origin + base, e.g. https://cretech.in (no trailing slash). */
function site_url(): string
{
    $configured = app_env('SITE_URL');
    if ($configured !== null) {
        return rtrim($configured, '/');
    }
    $https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
        || ($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https';
    $host = preg_replace('/[^A-Za-z0-9.\-:\[\]]/', '', (string) ($_SERVER['HTTP_HOST'] ?? 'localhost'));
    return ($https ? 'https' : 'http') . '://' . $host . rtrim(url_base(), '/');
}

function url_to(string $path = ''): string
{
    return url_base() . ltrim($path, '/');
}

function absolute_url(string $path = ''): string
{
    return site_url() . '/' . ltrim($path, '/');
}

/** Path asked for, relative to the site base. Returns [path, needsCleanup]. */
function url_request_path(): array
{
    $uri = (string) (parse_url((string) ($_SERVER['REQUEST_URI'] ?? '/'), PHP_URL_PATH) ?: '/');
    $base = url_base();
    if ($uri . '/' === $base) {
        return ['', false];
    }
    $relative = str_starts_with($uri, $base) ? substr($uri, strlen($base)) : ltrim($uri, '/');
    $relative = rawurldecode($relative);
    $clean = strtolower(trim($relative, '/'));
    return [$clean, $clean !== $relative];
}

/** Old or alternative addresses that should permanently move to a clean one. */
function url_redirect_for(string $path, array $query): ?string
{
    $legacy = [
        'index' => '', 'index.php' => '', 'index.html' => '', 'home' => '', 'page.php' => '',
        'terms' => 'terms-and-conditions', 'terms.php' => 'terms-and-conditions',
        'our-process' => 'process',
    ];
    if (array_key_exists($path, $legacy)) {
        return $legacy[$path];
    }

    if (preg_match('/^service-detail(\.html)?$/', $path)) {
        $slug = slugify((string) ($query['slug'] ?? ''));
        return $slug !== '' ? 'services/' . $slug : 'services';
    }

    // about.php, about.html, services.html ... -> about, services
    if (preg_match('/^([a-z0-9-]+)\.(php|html)$/', $path, $m)) {
        foreach (cms_pages() as $page) {
            if ($page['path'] === $m[1]) {
                return $m[1];
            }
        }
    }
    return null;
}

/**
 * @return array{page:string, template:string, status:int, slug:?string, service:?array, path:string}
 */
function url_resolve(string $path): array
{
    $pages = cms_pages();
    foreach ($pages as $key => $page) {
        if ($page['path'] === $path) {
            return ['page' => $key, 'template' => $page['template'], 'status' => 200, 'slug' => null, 'service' => null, 'path' => $path];
        }
    }

    if (preg_match('#^services/([a-z0-9-]+)$#', $path, $m) && ($service = cms_service($m[1])) !== null) {
        return ['page' => 'service-detail', 'template' => $pages['service-detail']['template'], 'status' => 200, 'slug' => $m[1], 'service' => $service, 'path' => $path];
    }

    return ['page' => 'not-found', 'template' => $pages['not-found']['template'], 'status' => 404, 'slug' => null, 'service' => null, 'path' => $path];
}

function redirect_permanent(string $path): never
{
    $query = $_GET;
    unset($query['slug']);
    $location = url_to($path) . ($query ? '?' . http_build_query($query) : '');
    header('Location: ' . $location, true, 301);
    exit;
}
