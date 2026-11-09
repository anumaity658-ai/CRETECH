<?php
/**
 * Serves every page of the site.
 *  1. Works out the clean address (/about, /services/seo-services ...)
 *  2. 301-redirects old addresses (about.php, terms.php, *.html, trailing slashes, capitals)
 *  3. Loads the matching HTML template and fills in: <base>, SEO tags, structured data,
 *     tracking tags and the page data that js/script.js renders.
 */
declare(strict_types=1);

require_once __DIR__ . '/app/cms.php';
require_once __DIR__ . '/app/security.php';
require_once __DIR__ . '/app/urls.php';
require_once __DIR__ . '/app/seo.php';
require_once __DIR__ . '/app/tracking.php';

send_security_headers();

[$path, $needsCleanup] = url_request_path();

$redirect = url_redirect_for($path, $_GET);
if ($redirect !== null) {
    redirect_permanent($redirect);
}
if ($needsCleanup) {
    redirect_permanent($path);
}

$route = url_resolve($path);
$data = cms_public_data();

$template = (string) file_get_contents(__DIR__ . '/' . $route['template']);

$pageData = [
    'page' => $route['page'],
    'slug' => $route['slug'],
    'formToken' => $route['page'] === 'contact' ? form_token() : null,
];
$jsonFlags = JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT;
$dataScript = '<script>window.SITE_DATA=' . json_encode($data, $jsonFlags)
    . ';window.PAGE_DATA=' . json_encode($pageData, $jsonFlags) . ';</script>';

$head = '<base href="' . h(url_base()) . '">' . "\n" . seo_head($route, $data);
$trackingHead = tracking_head();
if ($trackingHead !== '') {
    $head .= "\n" . $trackingHead;
}

$html = (string) preg_replace('#<title>.*?</title>\s*#s', '', $template, 1);
$html = str_replace(
    ['<!--HEAD-->', '<!--BODY-START-->', '<!--DATA-->', '<script src="content/site-config.js"></script>'],
    [$head, tracking_body(), $dataScript, ''],
    $html
);

http_response_code($route['status']);
header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-cache');
echo $html;
