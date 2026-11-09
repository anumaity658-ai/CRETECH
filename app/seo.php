<?php
/**
 * SEO: title, description, canonical, share (Open Graph / Twitter) tags and
 * structured data (JSON-LD) for every page.
 */
declare(strict_types=1);

require_once __DIR__ . '/urls.php';

function seo_strip_markup(string $text): string
{
    return trim((string) preg_replace('/\s+/', ' ', str_replace(['*', "\n"], ['', ' '], $text)));
}

function seo_image(string $image): string
{
    return str_starts_with($image, 'http')
        ? $image
        : 'https://images.unsplash.com/' . $image . '?auto=format&fit=crop&w=1200&q=80';
}

/** @return array{title:string, description:string, canonical:string, image:string, type:string, robots:string} */
function seo_meta(array $route, array $data): array
{
    $pages = $data['seo']['pages'] ?? [];
    $meta = $pages[$route['page']] ?? $pages['home'] ?? [];
    $title = (string) ($meta['title'] ?? $data['site']['name'] ?? '');
    $description = (string) ($meta['description'] ?? '');
    $image = (string) ($data['seo']['image'] ?? '');

    if ($route['service'] !== null) {
        $service = $route['service'];
        $title = ($service['seoTitle'] ?? '') ?: $service['title'] . ' | ' . ($data['site']['name'] ?? '');
        $description = ($service['seoDescription'] ?? '') ?: ($service['summary'] ?? $service['short'] ?? '');
        $image = (string) ($service['image'] ?? $image);
    }

    return [
        'title' => seo_strip_markup($title),
        'description' => seo_strip_markup($description),
        'canonical' => absolute_url($route['path']),
        'image' => $image !== '' ? seo_image($image) : '',
        'type' => $route['page'] === 'home' ? 'website' : 'article',
        'robots' => $route['status'] === 200 ? 'index, follow' : 'noindex, follow',
    ];
}

function seo_schema(array $route, array $data): array
{
    $site = $data['site'] ?? [];
    $home = absolute_url('');
    $sameAs = array_values(array_filter(array_map(
        static fn ($s) => (string) ($s['url'] ?? ''),
        $site['socials'] ?? []
    ), static fn ($url) => str_starts_with($url, 'http')));

    $locationParts = array_map('trim', explode(',', (string) ($site['location'] ?? '')));
    $organization = array_filter([
        '@type' => 'Organization',
        '@id' => $home . '#organization',
        'name' => $site['name'] ?? '',
        'url' => $home,
        'email' => $site['email'] ?? null,
        'telephone' => $site['phone'] ?? null,
        'address' => count($locationParts) > 1 ? [
            '@type' => 'PostalAddress',
            'addressLocality' => $locationParts[0],
            'addressCountry' => end($locationParts),
        ] : null,
        'sameAs' => $sameAs ?: null,
    ]);

    $graph = [$organization];

    if ($route['page'] === 'home') {
        $graph[] = ['@type' => 'WebSite', '@id' => $home . '#website', 'name' => $site['name'] ?? '', 'url' => $home, 'publisher' => ['@id' => $home . '#organization']];
        $faqs = $data['home']['faq']['items'] ?? [];
        if ($faqs) {
            $graph[] = [
                '@type' => 'FAQPage',
                'mainEntity' => array_map(static fn ($f) => [
                    '@type' => 'Question',
                    'name' => $f['q'],
                    'acceptedAnswer' => ['@type' => 'Answer', 'text' => $f['a']],
                ], $faqs),
            ];
        }
    }

    if ($route['service'] !== null) {
        $graph[] = [
            '@type' => 'Service',
            'name' => $route['service']['title'],
            'description' => $route['service']['summary'] ?? '',
            'url' => absolute_url($route['path']),
            'provider' => ['@id' => $home . '#organization'],
        ];
    }

    if ($route['page'] !== 'home' && $route['status'] === 200) {
        $crumbs = [['Home', '']];
        if ($route['service'] !== null) {
            $crumbs[] = ['Services', 'services'];
            $crumbs[] = [$route['service']['title'], $route['path']];
        } else {
            $crumbs[] = [seo_strip_markup(explode('|', seo_meta($route, $data)['title'])[0]), $route['path']];
        }
        $graph[] = [
            '@type' => 'BreadcrumbList',
            'itemListElement' => array_map(static fn ($c, $i) => [
                '@type' => 'ListItem', 'position' => $i + 1, 'name' => trim($c[0]), 'item' => absolute_url($c[1]),
            ], $crumbs, array_keys($crumbs)),
        ];
    }

    return ['@context' => 'https://schema.org', '@graph' => $graph];
}

function seo_head(array $route, array $data): string
{
    $m = seo_meta($route, $data);
    $siteName = (string) ($data['seo']['siteName'] ?? $data['site']['name'] ?? '');
    $tags = [
        '<title>' . h($m['title']) . '</title>',
        '<meta name="description" content="' . h($m['description']) . '">',
        '<meta name="robots" content="' . h($m['robots']) . '">',
    ];
    if ($route['status'] === 200) {
        $tags[] = '<link rel="canonical" href="' . h($m['canonical']) . '">';
    }
    $tags[] = '<meta property="og:site_name" content="' . h($siteName) . '">';
    $tags[] = '<meta property="og:type" content="' . h($m['type']) . '">';
    $tags[] = '<meta property="og:title" content="' . h($m['title']) . '">';
    $tags[] = '<meta property="og:description" content="' . h($m['description']) . '">';
    $tags[] = '<meta property="og:url" content="' . h($m['canonical']) . '">';
    $tags[] = '<meta name="twitter:card" content="summary_large_image">';
    if ($m['image'] !== '') {
        $tags[] = '<meta property="og:image" content="' . h($m['image']) . '">';
        $tags[] = '<meta name="twitter:image" content="' . h($m['image']) . '">';
    }
    $schema = json_encode(seo_schema($route, $data), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP);
    $tags[] = '<script type="application/ld+json">' . $schema . '</script>';
    return implode("\n", $tags);
}
