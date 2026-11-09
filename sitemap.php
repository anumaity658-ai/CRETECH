<?php
/**
 * Builds /sitemap.xml from the page list and the services collection.
 */
declare(strict_types=1);

require_once __DIR__ . '/app/cms.php';
require_once __DIR__ . '/app/urls.php';

$saved = store_read('cms');
$lastmod = isset($saved['updated_at'])
    ? date('Y-m-d', (int) strtotime((string) $saved['updated_at']))
    : date('Y-m-d', (int) filemtime(__DIR__ . '/content/site-config.js'));

$paths = [];
foreach (cms_pages() as $page) {
    if ($page['path'] !== null && !str_contains($page['path'], '{')) {
        $paths[] = $page['path'];
    }
}
foreach (cms_data()['services'] ?? [] as $service) {
    if (!empty($service['slug']) && empty($service['draft'])) {
        $paths[] = 'services/' . $service['slug'];
    }
}

header('Content-Type: application/xml; charset=utf-8');
echo '<?xml version="1.0" encoding="UTF-8"?>', "\n";
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', "\n";
foreach ($paths as $path) {
    $priority = $path === '' ? '1.0' : (str_starts_with($path, 'services') ? '0.8' : '0.6');
    echo '  <url><loc>', h(absolute_url($path)), '</loc><lastmod>', $lastmod,
        '</lastmod><priority>', $priority, '</priority></url>', "\n";
}
echo '</urlset>', "\n";
