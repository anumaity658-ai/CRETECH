<?php
/**
 * Core: settings (.env), default content, saved overrides, page list and text cleaning.
 * Every PHP entry point (page.php, sitemap.php, admin/*) starts by requiring this file.
 */
declare(strict_types=1);

require_once __DIR__ . '/store.php';

date_default_timezone_set('Asia/Kolkata');

function cms_root(): string
{
    return dirname(__DIR__);
}

/** Read a setting from the real environment or the optional .env file. */
function app_env(string $key, ?string $default = null): ?string
{
    static $file = null;
    if ($file === null) {
        $file = [];
        $path = cms_root() . '/.env';
        if (is_file($path)) {
            foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [] as $line) {
                $line = trim($line);
                if ($line === '' || $line[0] === '#' || strpos($line, '=') === false) {
                    continue;
                }
                [$k, $v] = array_map('trim', explode('=', $line, 2));
                $file[$k] = trim($v, "\"'");
            }
        }
    }
    $value = getenv($key);
    if ($value !== false && $value !== '') {
        return $value;
    }
    return ($file[$key] ?? '') !== '' ? $file[$key] : $default;
}

/** Default content from content/site-config.js (strict JSON after the "=" sign). */
function cms_defaults(): array
{
    static $defaults = null;
    if ($defaults === null) {
        $raw = (string) file_get_contents(cms_root() . '/content/site-config.js');
        $start = strpos($raw, '{');
        $end = strrpos($raw, '}');
        $decoded = ($start !== false && $end !== false)
            ? json_decode(substr($raw, $start, $end - $start + 1), true)
            : null;
        if (!is_array($decoded)) {
            throw new RuntimeException('content/site-config.js is not valid JSON: ' . json_last_error_msg());
        }
        unset($decoded['_note']);
        $defaults = $decoded;
    }
    return $defaults;
}

/**
 * Objects merge key by key; lists (services, FAQs, steps...) are replaced whole,
 * so deleting an item in the admin panel really deletes it.
 */
function cms_merge(array $base, array $over): array
{
    foreach ($over as $key => $value) {
        if (is_array($value) && isset($base[$key]) && is_array($base[$key])
            && !array_is_list($value) && !array_is_list($base[$key])) {
            $base[$key] = cms_merge($base[$key], $value);
        } else {
            $base[$key] = $value;
        }
    }
    return $base;
}

/** Defaults + whatever the admin panel saved in storage/private/cms.json. */
function cms_data(): array
{
    static $data = null;
    if ($data === null) {
        $saved = store_read('cms');
        $data = cms_merge(cms_defaults(), is_array($saved['content'] ?? null) ? $saved['content'] : []);
    }
    return $data;
}

/** What the browser is allowed to see (tracking settings stay on the server). */
function cms_public_data(): array
{
    $data = cms_data();
    unset($data['tracking']);
    return $data;
}

/**
 * Every page of the site. "path" is the clean address; {slug} pages are
 * one template shared by all items of a collection.
 */
function cms_pages(): array
{
    return [
        'home'                 => ['template' => 'index.html',            'path' => ''],
        'about'                => ['template' => 'about.html',            'path' => 'about'],
        'services'             => ['template' => 'services.html',         'path' => 'services'],
        'service-detail'       => ['template' => 'service-detail.html',   'path' => 'services/{slug}'],
        'process'              => ['template' => 'process.html',          'path' => 'process'],
        'contact'              => ['template' => 'contact.html',          'path' => 'contact'],
        'privacy-policy'       => ['template' => 'privacy-policy.html',   'path' => 'privacy-policy'],
        'terms-and-conditions' => ['template' => 'terms-and-conditions.html', 'path' => 'terms-and-conditions'],
        'disclaimer'           => ['template' => 'disclaimer.html',       'path' => 'disclaimer'],
        'not-found'            => ['template' => '404.html',              'path' => null],
    ];
}

function cms_service(string $slug): ?array
{
    foreach (cms_data()['services'] ?? [] as $service) {
        if (($service['slug'] ?? '') === $slug) {
            return $service;
        }
    }
    return null;
}

/** Plain text only: no tags, no control characters, limited length (UTF-8 safe, no mbstring needed). */
function clean_text(string $value, int $max = 500, bool $multiline = false): string
{
    $value = strip_tags($value);
    $value = $multiline
        ? (string) preg_replace('/[^\P{C}\n\t]/u', '', str_replace("\r\n", "\n", $value))
        : (string) preg_replace('/\p{C}+/u', ' ', $value);
    $value = trim($value);
    if (preg_match('/^.{0,' . $max . '}/us', $value, $m)) {
        $value = $m[0];
    }
    return $value;
}

function slugify(string $value): string
{
    $value = strtolower(trim($value));
    $value = (string) preg_replace('/&/', ' and ', $value);
    $value = (string) preg_replace('/[^a-z0-9]+/', '-', $value);
    return trim($value, '-');
}

function h(?string $value): string
{
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}
