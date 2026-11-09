<?php
/**
 * Same routing as .htaccess, for the PHP test server on your laptop:
 *     php -S localhost:8000 router.php
 */
declare(strict_types=1);

$uri = rawurldecode((string) (parse_url((string) ($_SERVER['REQUEST_URI'] ?? '/'), PHP_URL_PATH) ?: '/'));

// Private folders and dot-files (.env, .git, .htaccess) are never served.
if (preg_match('#^/(app|storage|database|docs)(/|$)#i', $uri) || preg_match('#/\.(?!well-known/)#', $uri)) {
    http_response_code(403);
    echo 'Forbidden';
    return true;
}

if ($uri === '/sitemap.xml') {
    require __DIR__ . '/sitemap.php';
    return true;
}

$file = realpath(__DIR__ . $uri);
$insideSite = $file !== false && str_starts_with($file, realpath(__DIR__) ?: __DIR__);

// Real files (css, js, images, admin/*.php) are served as they are.
// HTML templates go through page.php so they get SEO tags and redirect to clean addresses.
if ($insideSite && is_file($file) && !preg_match('/\.html$/i', $uri)) {
    return false;
}

require __DIR__ . '/page.php';
return true;
