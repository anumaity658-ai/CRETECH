<?php
/**
 * Google Tag Manager, Google Analytics / Ads, Ahrefs and Search Console tags.
 * IDs live in the "tracking" block of the content (editable from the admin panel
 * in phase 2). Each ID is checked against its format so nothing else can be injected.
 */
declare(strict_types=1);

require_once __DIR__ . '/cms.php';

function tracking_settings(): array
{
    $t = cms_data()['tracking'] ?? [];
    $valid = static fn (string $key, string $pattern): string =>
        preg_match($pattern, (string) ($t[$key] ?? '')) ? (string) $t[$key] : '';

    return [
        'gtmId' => $valid('gtmId', '/^GTM-[A-Z0-9]{4,12}$/'),
        'gaId' => $valid('gaId', '/^G-[A-Z0-9]{4,15}$/'),
        'adsId' => $valid('adsId', '/^AW-\d{6,15}$/'),
        'ahrefsKey' => $valid('ahrefsKey', '/^[A-Za-z0-9_-]{6,64}$/'),
        'searchConsole' => $valid('searchConsole', '/^[A-Za-z0-9_-]{10,100}$/'),
    ];
}

function tracking_head(): string
{
    $t = tracking_settings();
    $out = [];

    if ($t['searchConsole'] !== '') {
        $out[] = '<meta name="google-site-verification" content="' . $t['searchConsole'] . '">';
    }
    if ($t['gtmId'] !== '') {
        $out[] = "<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});"
            . "var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;"
            . "j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})"
            . "(window,document,'script','dataLayer','" . $t['gtmId'] . "');</script>";
    }
    $gtag = array_values(array_filter([$t['gaId'], $t['adsId']]));
    if ($gtag) {
        $out[] = '<script async src="https://www.googletagmanager.com/gtag/js?id=' . $gtag[0] . '"></script>';
        $config = implode('', array_map(static fn ($id) => "gtag('config','" . $id . "');", $gtag));
        $out[] = "<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());" . $config . '</script>';
    }
    if ($t['ahrefsKey'] !== '') {
        $out[] = '<script src="https://analytics.ahrefs.com/analytics.js" data-key="' . $t['ahrefsKey'] . '" async></script>';
    }
    return implode("\n", $out);
}

function tracking_body(): string
{
    $id = tracking_settings()['gtmId'];
    return $id === '' ? '' :
        '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' . $id
        . '" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';
}
