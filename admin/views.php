<?php
/**
 * Admin panel HTML: layout, sidebar, dashboard and the management pages.
 */
declare(strict_types=1);

defined('CRETECH_ADMIN') || exit;

/* ---------- URLs ---------- */

function admin_base(): string
{
    return rtrim(str_replace('\\', '/', dirname((string) ($_SERVER['SCRIPT_NAME'] ?? '/admin/index.php'))), '/');
}

function site_base(): string
{
    return rtrim(dirname(admin_base()), '/\\');
}

function admin_url(?string $page = null, array $query = []): string
{
    $q = ($page !== null && $page !== 'dashboard' ? ['p' => $page] : []) + $query;
    return admin_base() . '/index.php' . ($q ? '?' . http_build_query($q) : '');
}

function asset(string $path): string
{
    $file = __DIR__ . '/' . $path;
    return admin_base() . '/' . $path . (is_file($file) ? '?v=' . filemtime($file) : '');
}

/** Sidebar, in the exact order of the design. "nav" = shown in the sidebar, "under" = which item lights up. */
function admin_pages(): array
{
    return [
        'dashboard' => ['Dashboard', 'home', true],
        'home' => ['Home Page', 'monitor', true],
        'about' => ['About Page', 'users', true],
        'services' => ['Services', 'layers', true],
        'blog' => ['Blog', 'blog', true],
        'contact' => ['Contact Page', 'mail', true],
        'layout' => ['Header & Footer', 'browser', true],
        'media' => ['Media Library', 'image', true],
        'style' => ['Color & Font', 'palette', true],
        'account' => ['My Account', 'user', true],
        'settings' => ['Site Settings', 'gear', true],
        'enquiries' => ['Enquiries', 'mail', false, 'contact'],
        'activity' => ['Recent Updates', 'refresh', false, 'dashboard'],
        'logins' => ['Login Activity', 'shield', false, 'dashboard'],
        'search' => ['Search', 'search', false, 'dashboard'],
    ];
}

/* ---------- Icons (simple line icons) ---------- */

function icon(string $name, string $class = 'ic'): string
{
    $p = [
        'home' => '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 9.5V20h5v-5.5h3V20h5V9.5"/>',
        'monitor' => '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v4M8 20h8"/>',
        'users' => '<circle cx="9" cy="8.5" r="3.2"/><circle cx="16.5" cy="9" r="2.6"/><path d="M3 19.5c.6-3.3 3-5 6-5s5.4 1.7 6 5"/><path d="M15 14.6c2.8-.4 5.3 1 6 4.4"/>',
        'layers' => '<path d="m12 3 9 4.5-9 4.5-9-4.5z"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 16.5 9 4.5 9-4.5"/>',
        'blog' => '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 11h7M9 14.5h7M9 18h4"/>',
        'mail' => '<rect x="3" y="5.5" width="18" height="13" rx="1.5"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>',
        'browser' => '<rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="M3 9h18"/><circle cx="6" cy="6.8" r=".4"/><circle cx="8.3" cy="6.8" r=".4"/><circle cx="10.6" cy="6.8" r=".4"/>',
        'image' => '<rect x="3" y="4.5" width="18" height="15" rx="1.5"/><circle cx="8.5" cy="9.5" r="1.7"/><path d="m3.5 17.5 5-5 4 4 2.5-2.5 5.5 5"/>',
        'palette' => '<path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 1.6-2.1-.5-1.2.3-2.4 1.6-2.4H17a4 4 0 0 0 4-4C21 7 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.1"/><circle cx="10" cy="7.3" r="1.1"/><circle cx="14.5" cy="7.3" r="1.1"/><circle cx="17" cy="10.8" r="1.1"/>',
        'user' => '<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.8-4.2 3.8-6.5 7.5-6.5s6.7 2.3 7.5 6.5"/>',
        'gear' => '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v2.6M12 18.9v2.6M21.5 12h-2.6M5.1 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1 5.3 5.3"/><circle cx="12" cy="12" r="6.6"/>',
        'search' => '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',
        'bell' => '<path d="M6 17V11a6 6 0 0 1 12 0v6l1.5 2h-15z"/><path d="M10 21h4"/>',
        'chevron' => '<path d="m6 9 6 6 6-6"/>',
        'chart' => '<path d="M4 20V14M9 20V10M14 20v-7M19 20V7"/><path d="m4 10 5-4 5 3 6-5"/><path d="M17 4h3v3"/>',
        'refresh' => '<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 4v5h-5"/>',
        'shield' => '<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
        'check' => '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
        'arrow' => '<path d="M4 12h15M13 6l6 6-6 6"/>',
        'logout' => '<path d="M15 4h4v16h-4"/><path d="M10 8l-4 4 4 4M6 12h10"/>',
        'menu' => '<path d="M4 7h16M4 12h16M4 17h16"/>',
        'plus' => '<path d="M12 5v14M5 12h14"/>',
        'eye' => '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
        'lock' => '<rect x="5" y="10.5" width="14" height="10" rx="1.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
        'info' => '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.6v.2"/>',
    ][$name] ?? '';
    return '<svg class="' . $class . '" viewBox="0 0 24 24" aria-hidden="true">' . $p . '</svg>';
}

/* ---------- Page shell ---------- */

function view_head(string $title, string $bodyClass = ''): void
{
    ?><!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title><?= h($title) ?> · CRETECH Admin</title>
<link rel="stylesheet" href="<?= h(asset('admin.css')) ?>">
<link rel="icon" href="<?= h(site_base()) ?>/assets/images/favicon.svg" type="image/svg+xml">
<script src="<?= h(asset('admin.js')) ?>" defer></script>
</head>
<body class="<?= h($bodyClass) ?>">
<?php
}

function logo(): string
{
    return '<img class="logo" src="' . h(site_base()) . '/assets/images/logo.svg" alt="CRETECH Digital Solutions" width="234" height="60">';
}

/** Soft peach waves (decoration). */
function waves(string $class): string
{
    return '<svg class="' . $class . '" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true">'
        . '<path d="M0 120C200 60 380 170 600 110S980 40 1200 100V200H0z" fill="#fbd9c0" opacity=".55"/>'
        . '<path d="M0 150C240 100 420 190 650 140S1000 90 1200 140V200H0z" fill="#f9c7a2" opacity=".5"/>'
        . '<path d="M0 175C260 140 480 205 720 170S1040 140 1200 168V200H0z" fill="#f6b88c" opacity=".35"/>'
        . '</svg>';
}

function view_page(string $page, array $me): void
{
    $pages = admin_pages();
    $active = $pages[$page][3] ?? $page;
    $newCount = count(array_filter(enquiries_all(), static fn ($e) => ($e['status'] ?? 'new') === 'new'));
    $flash = flash();

    view_head($pages[$page][0], 'adm');
    ?>
<div class="shell">
  <aside class="side" id="side">
    <div class="side-brand">
      <a href="<?= h(admin_url()) ?>"><?= logo() ?></a>
      <p class="side-tag"><span>Admin Panel</span></p>
    </div>
    <nav class="side-nav" aria-label="Admin">
      <?php foreach ($pages as $key => $item): if (!$item[2]) continue; ?>
      <a href="<?= h(admin_url($key)) ?>" class="<?= $key === $active ? 'on' : '' ?>"<?= $key === $active ? ' aria-current="page"' : '' ?>><?= icon($item[1]) ?><span><?= h($item[0]) ?></span></a>
      <?php endforeach; ?>
    </nav>
    <div class="side-foot">
      <svg class="leaf" viewBox="0 0 120 120" aria-hidden="true"><path d="M20 108C30 60 60 26 108 14 102 64 70 98 20 108z" fill="#f9c39b" opacity=".55"/><path d="M20 108C46 74 70 50 100 22" fill="none" stroke="#f08a45" stroke-width="2" opacity=".55"/></svg>
      <strong>CRETECH</strong>
      <span>Admin Console</span>
    </div>
    <?= waves('side-waves') ?>
  </aside>
  <button class="side-scrim" type="button" data-close-side aria-label="Close menu"></button>

  <main class="main">
    <header class="top">
      <button class="menu-btn" type="button" data-open-side aria-label="Open menu"><?= icon('menu') ?></button>
      <div class="welcome">
        <svg class="sun" viewBox="0 0 140 80" aria-hidden="true"><defs><linearGradient id="sunG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb24a"/><stop offset="1" stop-color="#f47721"/></linearGradient></defs><circle cx="86" cy="48" r="28" fill="url(#sunG)"/><path d="M0 70c22-14 40-20 62-12s40 6 78-6v28H0z" fill="#fbd3b5"/><path d="M0 76c30-10 56-12 80-6s40 4 60-2v12H0z" fill="#f8bf95"/></svg>
        <div>
          <h1><?= $page === 'dashboard' ? 'Welcome Back, ' . h(ucfirst($me['name'])) . '!' : h($pages[$page][0]) ?></h1>
          <p><?= $page === 'dashboard' ? 'Manage and update your CRETECH website from here.' : h(page_intro($page)) ?></p>
        </div>
      </div>
      <form class="search" action="<?= h(admin_url()) ?>" method="get" role="search">
        <?= icon('search') ?>
        <input type="hidden" name="p" value="search">
        <input type="search" name="q" placeholder="Search here..." value="<?= h($page === 'search' ? (string) ($_GET['q'] ?? '') : '') ?>" aria-label="Search the admin panel">
      </form>
      <div class="pop">
        <button class="bell" type="button" data-pop aria-expanded="false" aria-label="Notifications"><?= icon('bell') ?><?= $newCount ? '<i class="dot"></i>' : '' ?></button>
        <div class="pop-box" hidden>
          <p class="pop-title">Notifications</p>
          <?php if ($newCount): ?>
            <a href="<?= h(admin_url('enquiries')) ?>"><?= icon('mail') ?> <?= $newCount ?> new enquir<?= $newCount === 1 ? 'y' : 'ies' ?> waiting</a>
          <?php else: ?>
            <p class="pop-empty">You're all caught up. New enquiries will appear here.</p>
          <?php endif; ?>
        </div>
      </div>
      <span class="top-rule" aria-hidden="true"></span>
      <div class="pop">
        <button class="who" type="button" data-pop aria-expanded="false">
          <span class="avatar"><?= icon('user') ?></span>
          <span class="who-txt"><b><?= h(ucfirst($me['name'])) ?></b><small><?= h(admin_role_label($me)) ?></small></span>
          <?= icon('chevron', 'ic chev') ?>
        </button>
        <div class="pop-box pop-menu" hidden>
          <a href="<?= h(admin_url('account')) ?>"><?= icon('user') ?> My Account</a>
          <a href="<?= h(admin_url('settings')) ?>"><?= icon('gear') ?> Site Settings</a>
          <a href="<?= h(site_base()) ?>/" target="_blank" rel="noopener"><?= icon('eye') ?> View Website</a>
          <form action="<?= h(admin_url('logout')) ?>" method="post"><input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>"><button type="submit"><?= icon('logout') ?> Log out</button></form>
        </div>
      </div>
    </header>

    <?php if ($flash): ?><p class="flash" role="status"><?= h($flash) ?></p><?php endif; ?>

    <div class="content">
      <?php
      $fn = 'page_' . $page;
      $fn($me);
      ?>
    </div>
    <?= waves('main-waves') ?>
  </main>
</div>
</body>
</html>
<?php
}

function page_intro(string $page): string
{
    return [
        'home' => 'Sections, text and images of the home page.',
        'about' => 'Sections, text and images of the About page.',
        'services' => 'All services shown on the Services page.',
        'blog' => 'Write and manage blog posts.',
        'contact' => 'Contact page details and form.',
        'layout' => 'Menu, header button and footer links.',
        'media' => 'Every image of the website, with its size.',
        'style' => 'Brand colours and fonts used on the website.',
        'account' => 'Your name and password.',
        'settings' => 'Dashboard numbers and admin users.',
        'enquiries' => 'Messages sent from the contact form.',
        'activity' => 'Every change made in the admin panel.',
        'logins' => 'Who logged in, from which device, and when.',
        'search' => 'Results from pages, services and enquiries.',
    ][$page] ?? '';
}

/* ---------- Dashboard ---------- */

function page_dashboard(array $me): void
{
    $cfg = cms_data();
    $enquiries = enquiries_all();
    $sitePages = array_filter(cms_pages(), static fn ($p) => $p['path'] !== null && !str_contains((string) $p['path'], '{'));
    $stats = [
        ['Total Services', count($cfg['servicesPage']['cards'] ?? []), 'layers', 'services'],
        ['Total Website Pages', count($sitePages), 'browser', 'home'],
        ['Total Clients', (int) (admin_settings()['total_clients'] ?? 0), 'users', 'settings'],
        ['New Enquiries', count(array_filter($enquiries, static fn ($e) => ($e['status'] ?? 'new') === 'new')), 'mail', 'enquiries'],
    ];
    $activity = store_read('activity');
    $updates = array_slice(array_values(array_filter($activity, static fn ($a) => ($a['kind'] ?? '') === 'update')), 0, 3);
    $work = array_slice(array_values(array_filter($activity, static fn ($a) => ($a['kind'] ?? '') === 'work')), 0, 3);
    $logins = array_slice(store_read('logins'), 0, 3);
    ?>
    <section class="stats" aria-label="Summary">
      <?php foreach ($stats as [$label, $value, $ic, $link]): ?>
      <a class="card stat" href="<?= h(admin_url($link)) ?>">
        <?= icon($ic, 'ic stat-ic') ?>
        <span class="stat-txt"><span class="stat-label"><?= h($label) ?></span><b class="stat-num"><?= str_pad((string) $value, 2, '0', STR_PAD_LEFT) ?></b></span>
        <?= waves('card-waves') ?>
      </a>
      <?php endforeach; ?>
    </section>

    <section class="row-mid">
      <?php trend_panel(); ?>
      <div class="card panel enq-panel">
        <div class="panel-head"><h2><?= icon('mail', 'ic head-ic') ?> Recent Enquiries</h2><a class="all" href="<?= h(admin_url('enquiries')) ?>">View All <?= icon('arrow') ?></a></div>
        <?php enquiry_table(array_slice($enquiries, 0, 2), true); ?>
      </div>
    </section>

    <section class="row-bottom">
      <div class="card panel">
        <div class="panel-head"><h2><?= icon('refresh', 'ic head-ic') ?> Recent Updates</h2><a class="all" href="<?= h(admin_url('activity', ['kind' => 'update'])) ?>">View All <?= icon('arrow') ?></a></div>
        <?php activity_list($updates, 'Website changes you save will be listed here.'); ?>
      </div>
      <div class="card panel">
        <div class="panel-head"><h2><?= icon('layers', 'ic head-ic') ?> Recent Work Updates</h2><a class="all" href="<?= h(admin_url('activity', ['kind' => 'work'])) ?>">View All <?= icon('arrow') ?></a></div>
        <?php activity_list($work, 'New items, uploads and drafts will be listed here.'); ?>
      </div>
      <div class="card panel">
        <div class="panel-head"><h2><?= icon('shield', 'ic head-ic') ?> Login Activity</h2><a class="all" href="<?= h(admin_url('logins')) ?>">View All <?= icon('arrow') ?></a></div>
        <?php login_list($logins); ?>
      </div>
    </section>
    <?php
}

function trend_panel(): void
{
    $trend = enquiry_trend(6);
    $max = max(1, ...array_values($trend));
    $top = max(10, (int) (ceil($max / 2) * 2));
    $empty = array_sum($trend) === 0;
    $current = date('Y-m');
    ?>
    <div class="card panel trend">
      <div class="panel-head"><h2><?= icon('chart', 'ic head-ic') ?> Enquiry Trend</h2></div>
      <div class="chart" role="img" aria-label="Enquiries per month: <?= h(implode(', ', array_map(static fn ($k, $v) => date('M', strtotime($k . '-01')) . ' ' . $v, array_keys($trend), $trend))) ?>">
        <div class="chart-y" aria-hidden="true">
          <?php for ($v = $top; $v >= 0; $v -= $top / 5): ?><span><?= (int) $v ?></span><?php endfor; ?>
        </div>
        <div class="chart-plot">
          <?php for ($i = 0; $i <= 5; $i++): ?><i class="grid" style="bottom:<?= $i * 20 ?>%"></i><?php endfor; ?>
          <?php foreach ($trend as $month => $count): ?>
          <div class="bar-col">
            <span class="bar<?= $month === $current ? ' now' : '' ?>" style="height:<?= round($count / $top * 100, 2) ?>%" tabindex="0" data-tip="<?= h(date('F Y', strtotime($month . '-01')) . ': ' . $count . ' enquir' . ($count === 1 ? 'y' : 'ies')) ?>"></span>
            <span class="bar-x"><?= h(date('M', strtotime($month . '-01'))) ?></span>
          </div>
          <?php endforeach; ?>
          <?php if ($empty): ?><p class="chart-empty">No enquiries yet. The chart fills in as messages arrive.</p><?php endif; ?>
        </div>
      </div>
    </div>
    <?php
}

function enquiry_table(array $rows, bool $short = false): void
{
    if (!$rows) {
        echo '<p class="empty">' . icon('mail') . ' No enquiries yet. Messages from the contact form will appear here.</p>';
        return;
    }
    ?>
    <div class="table-wrap">
      <table class="tbl">
        <thead><tr><th>Name</th><th>Service</th><th>Message</th><th>Date</th><?= $short ? '' : '<th>Contact</th><th>Status</th>' ?></tr></thead>
        <tbody>
        <?php foreach ($rows as $e): ?>
          <tr>
            <td class="nm"><?= icon('user', 'ic person') ?><?= h($e['name'] ?? '') ?></td>
            <td><?= h(($e['service'] ?? '') ?: 'General') ?></td>
            <td class="msg"><?= h(cut((string) ($e['message'] ?? ''), $short ? 34 : 400)) ?></td>
            <td class="dt"><?= h(when((string) ($e['created_at'] ?? ''))) ?></td>
            <?php if (!$short): ?>
            <td class="ct"><a href="mailto:<?= h($e['email'] ?? '') ?>"><?= h($e['email'] ?? '') ?></a><?= ($e['phone'] ?? '') !== '' ? '<br><a href="tel:' . h(preg_replace('/[^0-9+]/', '', $e['phone'])) . '">' . h($e['phone']) . '</a>' : '' ?></td>
            <td>
              <form method="post" action="<?= h(admin_url('enquiries')) ?>" class="status-form">
                <input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>"><input type="hidden" name="id" value="<?= h($e['id'] ?? '') ?>">
                <select name="status" data-autosubmit aria-label="Status">
                  <?php foreach (['new' => 'New', 'read' => 'Read', 'done' => 'Replied'] as $k => $l): ?><option value="<?= $k ?>"<?= ($e['status'] ?? 'new') === $k ? ' selected' : '' ?>><?= $l ?></option><?php endforeach; ?>
                </select>
                <noscript><button type="submit">Save</button></noscript>
              </form>
            </td>
            <?php endif; ?>
          </tr>
        <?php endforeach; ?>
        </tbody>
      </table>
    </div>
    <?php
}

function activity_list(array $rows, string $empty): void
{
    if (!$rows) {
        echo '<p class="empty">' . icon('info') . ' ' . h($empty) . '</p>';
        return;
    }
    echo '<ul class="acts">';
    foreach ($rows as $a) {
        $title = (string) $a['title'];
        $detail = (string) ($a['detail'] ?? '');
        echo '<li><span class="tick">' . icon('check') . '</span><span class="act-txt">' . h($title)
            . ($detail !== '' ? '<small>' . h($detail) . (($a['admin'] ?? '') !== '' ? ' · by ' . h($a['admin']) : '') . '</small>' : '')
            . '</span><time>' . h(when((string) $a['at'])) . '</time></li>';
    }
    echo '</ul>';
}

function login_list(array $rows): void
{
    if (!$rows) {
        echo '<p class="empty">' . icon('shield') . ' Logins will be recorded here.</p>';
        return;
    }
    $tones = ['t1', 't2', 't3'];
    $ids = [];
    echo '<ul class="logins">';
    foreach ($rows as $l) {
        $tone = $tones[($ids[$l['admin_id']] ??= count($ids)) % 3];
        $from = trim(($l['os'] ?? '') . (($l['browser'] ?? '') !== '' ? ' · ' . $l['browser'] : ''));
        echo '<li><span class="avatar sm ' . $tone . '">' . icon('user') . '</span><span class="lg-txt"><b>' . h($l['name'])
            . ' <em>(' . h(ADMIN_ROLES[$l['role']] ?? 'Admin') . ')</em></b><small>Logged in from ' . h($from) . ' · ' . h(when((string) $l['at'])) . '</small></span></li>';
    }
    echo '</ul>';
}

/* ---------- Content pages (overview; editing forms come in the next step) ---------- */

/** Every image path inside a piece of content. */
function images_in($value, array &$out): void
{
    if (is_array($value)) {
        foreach ($value as $v) {
            images_in($v, $out);
        }
    } elseif (is_string($value) && preg_match('#^(assets|uploads)/.+\.(jpe?g|png|webp|gif|svg)$#i', $value)) {
        $out[$value] = true;
    }
}

function image_box(string $path): string
{
    $file = cms_root() . '/' . $path;
    $size = is_file($file) ? @getimagesize($file) : false;
    $label = $size ? $size[0] . ' × ' . $size[1] . ' px' : (str_ends_with($path, '.svg') ? 'SVG (any size)' : 'missing');
    return '<figure class="img-box"><a href="' . h(site_base() . '/' . $path) . '" target="_blank" rel="noopener"><img src="' . h(site_base() . '/' . $path) . '" alt="" loading="lazy"></a>'
        . '<figcaption><span class="size">' . h($label) . '</span><span class="path">' . h(basename($path)) . '</span></figcaption></figure>';
}

function section_title(string $key): string
{
    $key = preg_replace('/(Section|Page)$/', '', $key);
    return ucfirst(trim((string) preg_replace('/([A-Z])/', ' $1', (string) $key)));
}

function sections_overview(array $sections, string $viewPath): void
{
    ?>
    <div class="card panel">
      <div class="panel-head"><h2><?= icon('layers', 'ic head-ic') ?> Sections on this page</h2><a class="all" href="<?= h(site_base() . '/' . $viewPath) ?>" target="_blank" rel="noopener">View page <?= icon('arrow') ?></a></div>
      <p class="note"><?= icon('info') ?> Editing forms for each section are the next step of the admin panel. For now this page shows every section and the exact size of each image, so new images can be prepared at the right size.</p>
      <div class="sections">
      <?php $n = 0; foreach ($sections as $key => $value): if (str_starts_with((string) $key, '_') || !is_array($value)) continue; $imgs = []; images_in($value, $imgs); ?>
        <details class="sec"<?= $n++ === 0 ? ' open' : '' ?>>
          <summary><span class="sec-n"><?= $n ?></span> <?= h(section_title((string) $key)) ?> <small><?= count($imgs) ?> image<?= count($imgs) === 1 ? '' : 's' ?></small></summary>
          <?php if ($imgs): ?><div class="img-grid"><?php foreach (array_keys($imgs) as $img) echo image_box($img); ?></div><?php else: ?><p class="empty">Text only — no images in this section.</p><?php endif; ?>
        </details>
      <?php endforeach; ?>
      </div>
    </div>
    <?php
}

function page_home(array $me): void
{
    sections_overview(cms_data()['home'] ?? [], '');
}

function page_about(array $me): void
{
    $about = cms_data()['about'] ?? [];
    sections_overview(array_filter($about, 'is_array') ?: ['about' => $about], 'about');
}

function page_contact(array $me): void
{
    $cp = cms_data()['contactPage'] ?? [];
    sections_overview(array_filter($cp, 'is_array'), 'contact');
}

function page_layout(array $me): void
{
    $cfg = cms_data();
    ?>
    <div class="grid-2">
      <div class="card panel">
        <div class="panel-head"><h2><?= icon('browser', 'ic head-ic') ?> Header menu</h2></div>
        <ul class="list"><?php foreach ($cfg['nav'] ?? [] as $item): ?><li><b><?= h($item['label'] ?? '') ?></b><span><?= h($item['href'] ?? '') ?></span></li><?php endforeach; ?></ul>
        <?php if (!empty($cfg['headerCta'])): ?><p class="note"><?= icon('info') ?> Header button: <b><?= h($cfg['headerCta']['label'] ?? '') ?></b></p><?php endif; ?>
      </div>
      <div class="card panel">
        <div class="panel-head"><h2><?= icon('browser', 'ic head-ic') ?> Footer links</h2></div>
        <ul class="list"><?php foreach ($cfg['footerLinks'] ?? [] as $group => $item): ?><li><b><?= h(is_array($item) ? (string) ($item['label'] ?? $item['title'] ?? $group) : (string) $item) ?></b><span><?= h(is_array($item) ? (string) ($item['href'] ?? '') : '') ?></span></li><?php endforeach; ?></ul>
        <p class="note"><?= icon('info') ?> Logo: <?= image_box('assets/images/logo.svg') ?></p>
      </div>
    </div>
    <?php
}

function page_services(array $me): void
{
    $cards = cms_data()['servicesPage']['cards'] ?? [];
    ?>
    <div class="card panel">
      <div class="panel-head"><h2><?= icon('layers', 'ic head-ic') ?> <?= count($cards) ?> services</h2><a class="all" href="<?= h(site_base()) ?>/services" target="_blank" rel="noopener">View page <?= icon('arrow') ?></a></div>
      <p class="note"><?= icon('info') ?> Each service will get its own edit form in the next step.</p>
      <div class="table-wrap">
        <table class="tbl svc-tbl">
          <thead><tr><th>#</th><th>Card image</th><th>Service</th><th>Short text</th><th>Link</th></tr></thead>
          <tbody>
          <?php foreach ($cards as $i => $c): ?>
            <tr>
              <td><?= $i + 1 ?></td>
              <td class="thumb"><?= !empty($c['image']) ? image_box((string) $c['image']) : '' ?></td>
              <td><b><?= h($c['title'] ?? '') ?></b></td>
              <td class="msg"><?= h(cut((string) ($c['text'] ?? ''), 110)) ?></td>
              <td><?php if (!empty($c['href'])): ?><a href="<?= h(site_base() . '/' . ltrim((string) $c['href'], '/')) ?>" target="_blank" rel="noopener">Open</a><?php endif; ?></td>
            </tr>
          <?php endforeach; ?>
          </tbody>
        </table>
      </div>
    </div>
    <?php
}

function page_blog(array $me): void
{
    ?>
    <div class="card panel blank">
      <?= icon('blog', 'ic big-ic') ?>
      <h2>No blog posts yet</h2>
      <p>The website does not have a blog section yet. Once the blog is added to the website, posts will be written and managed here.</p>
    </div>
    <?php
}

function page_media(array $me): void
{
    $root = cms_root();
    $files = [];
    foreach (['assets/images', 'uploads/media'] as $dir) {
        if (!is_dir($root . '/' . $dir)) {
            continue;
        }
        $it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root . '/' . $dir, FilesystemIterator::SKIP_DOTS));
        foreach ($it as $f) {
            if (preg_match('/\.(jpe?g|png|webp|gif|svg)$/i', $f->getFilename())) {
                $rel = str_replace('\\', '/', substr($f->getPathname(), strlen($root) + 1));
                $files[dirname($rel)][] = $rel;
            }
        }
    }
    ksort($files);
    ?>
    <div class="card panel">
      <div class="panel-head"><h2><?= icon('plus', 'ic head-ic') ?> Upload an image</h2></div>
      <form class="upload" method="post" action="<?= h(admin_url('media')) ?>" enctype="multipart/form-data">
        <input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>">
        <input type="file" name="image" accept="image/jpeg,image/png,image/webp,image/gif" required>
        <button class="btn" type="submit">Upload</button>
        <small>JPG, PNG, WebP or GIF · max 8 MB</small>
      </form>
    </div>
    <?php foreach ($files as $dir => $list): sort($list); ?>
    <div class="card panel">
      <div class="panel-head"><h2><?= icon('image', 'ic head-ic') ?> <?= h(str_replace(['assets/images', 'uploads/media'], ['Website images', 'Uploaded images'], $dir)) ?> <small class="count"><?= count($list) ?></small></h2></div>
      <div class="img-grid"><?php foreach ($list as $img) echo image_box($img); ?></div>
    </div>
    <?php endforeach;
}

function page_style(array $me): void
{
    $css = (string) @file_get_contents(cms_root() . '/css/style.css');
    preg_match_all('/--([a-z0-9-]+):\s*(#[0-9a-f]{3,8})\s*;/i', $css, $m, PREG_SET_ORDER);
    preg_match_all('/--(font-[a-z]+):\s*([^;]+);/i', $css, $f, PREG_SET_ORDER);
    ?>
    <div class="grid-2">
      <div class="card panel">
        <div class="panel-head"><h2><?= icon('palette', 'ic head-ic') ?> Brand colours</h2></div>
        <ul class="swatches"><?php foreach ($m as $c): ?><li><i style="background:<?= h($c[2]) ?>"></i><b><?= h($c[1]) ?></b><code><?= h($c[2]) ?></code></li><?php endforeach; ?></ul>
      </div>
      <div class="card panel">
        <div class="panel-head"><h2><?= icon('palette', 'ic head-ic') ?> Fonts</h2></div>
        <ul class="list"><?php foreach ($f as $x): ?><li><b><?= h($x[1]) ?></b><span><?= h(trim($x[2])) ?></span></li><?php endforeach; ?></ul>
        <p class="note"><?= icon('info') ?> Colours and fonts are shown here for reference. Changing them from the panel comes in a later step.</p>
      </div>
    </div>
    <?php
}

function page_account(array $me): void
{
    ?>
    <div class="card panel form-panel">
      <div class="panel-head"><h2><?= icon('user', 'ic head-ic') ?> My Account</h2></div>
      <form method="post" action="<?= h(admin_url('account')) ?>" class="form">
        <input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>">
        <label>Username<input value="<?= h($me['username'] ?? $me['name']) ?>" disabled></label>
        <label>Role<input value="<?= h(admin_role_label($me)) ?>" disabled></label>
        <label>New password <small>(min 10 characters, letters and numbers)</small><input type="password" name="new_password" autocomplete="new-password" minlength="10" required></label>
        <label>Repeat new password<input type="password" name="confirm_password" autocomplete="new-password" required></label>
        <label>Current password<input type="password" name="current_password" autocomplete="current-password" required></label>
        <button class="btn" type="submit">Change password</button>
      </form>
    </div>
    <?php
}

function page_settings(array $me): void
{
    $s = admin_settings();
    $super = ($me['role'] ?? '') === 'super';
    ?>
    <div class="grid-2">
      <div class="card panel form-panel">
        <div class="panel-head"><h2><?= icon('gear', 'ic head-ic') ?> Dashboard numbers</h2></div>
        <form method="post" action="<?= h(admin_url('settings')) ?>" class="form">
          <input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>">
          <label>Total clients <small>(shown on the dashboard)</small><input type="number" name="total_clients" min="0" max="99999" value="<?= (int) ($s['total_clients'] ?? 0) ?>"></label>
          <button class="btn" type="submit">Save</button>
        </form>
      </div>
      <div class="card panel">
        <div class="panel-head"><h2><?= icon('users', 'ic head-ic') ?> Admin users</h2></div>
        <ul class="list users">
          <?php foreach (admins_all() as $a): ?>
          <li><b><?= h($a['name']) ?> <em>(<?= h(admin_role_label($a)) ?>)</em><?= !empty($a['disabled']) ? ' <span class="off">disabled</span>' : '' ?></b><span>@<?= h($a['username'] ?? '') ?></span>
            <?php if ($super && $a['id'] !== $me['id']): ?>
            <form method="post" action="<?= h(admin_url('settings')) ?>"><input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>"><input type="hidden" name="do" value="toggle-admin"><input type="hidden" name="id" value="<?= h($a['id']) ?>"><button class="link-btn" type="submit"><?= empty($a['disabled']) ? 'Disable' : 'Enable' ?></button></form>
            <?php endif; ?>
          </li>
          <?php endforeach; ?>
        </ul>
        <?php if ($super): ?>
        <form method="post" action="<?= h(admin_url('settings')) ?>" class="form">
          <input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>"><input type="hidden" name="do" value="add-admin">
          <p class="form-title">Add an admin</p>
          <label>Username <small>(3–30 characters: letters, numbers, dot, dash or underscore)</small><input name="username" required pattern="[A-Za-z0-9._\-]{3,30}" autocomplete="off"></label>
          <label>Role<select name="role"><option value="admin">Admin</option><option value="editor">Content Editor</option><option value="super">Super Admin</option></select></label>
          <label>Password <small>(min 10 characters, letters and numbers)</small><input type="password" name="password" required minlength="10" autocomplete="new-password"></label>
          <button class="btn" type="submit">Add admin</button>
        </form>
        <?php endif; ?>
      </div>
    </div>
    <?php
}

function page_enquiries(array $me): void
{
    ?>
    <div class="card panel">
      <div class="panel-head"><h2><?= icon('mail', 'ic head-ic') ?> All enquiries</h2></div>
      <?php enquiry_table(enquiries_all()); ?>
    </div>
    <?php
}

function page_activity(array $me): void
{
    $kind = (string) ($_GET['kind'] ?? '');
    $rows = array_values(array_filter(store_read('activity'), static fn ($a) => $kind === '' || ($a['kind'] ?? '') === $kind));
    ?>
    <div class="card panel">
      <div class="panel-head"><h2><?= icon('refresh', 'ic head-ic') ?> <?= $kind === 'work' ? 'Recent Work Updates' : ($kind === 'update' ? 'Recent Updates' : 'All activity') ?></h2>
        <span class="tabs"><a class="<?= $kind === '' ? 'on' : '' ?>" href="<?= h(admin_url('activity')) ?>">All</a><a class="<?= $kind === 'update' ? 'on' : '' ?>" href="<?= h(admin_url('activity', ['kind' => 'update'])) ?>">Updates</a><a class="<?= $kind === 'work' ? 'on' : '' ?>" href="<?= h(admin_url('activity', ['kind' => 'work'])) ?>">Work</a></span>
      </div>
      <?php activity_list(array_slice($rows, 0, 200), 'Nothing recorded yet.'); ?>
    </div>
    <?php
}

function page_logins(array $me): void
{
    ?>
    <div class="card panel">
      <div class="panel-head"><h2><?= icon('shield', 'ic head-ic') ?> Login Activity</h2></div>
      <?php login_list(array_slice(store_read('logins'), 0, 200)); ?>
    </div>
    <?php
}

function page_search(array $me): void
{
    $q = trim((string) ($_GET['q'] ?? ''));
    $hits = [];
    if ($q !== '') {
        $needle = strtolower($q);
        $has = static fn (string $s): bool => str_contains(strtolower($s), $needle);
        foreach (admin_pages() as $key => $p) {
            if ($p[2] && $has($p[0])) {
                $hits[] = ['Admin page', $p[0], admin_url($key)];
            }
        }
        foreach (cms_data()['servicesPage']['cards'] ?? [] as $c) {
            if ($has(($c['title'] ?? '') . ' ' . ($c['text'] ?? ''))) {
                $hits[] = ['Service', (string) $c['title'], admin_url('services')];
            }
        }
        foreach (enquiries_all() as $e) {
            if ($has(($e['name'] ?? '') . ' ' . ($e['email'] ?? '') . ' ' . ($e['message'] ?? ''))) {
                $hits[] = ['Enquiry', ($e['name'] ?? '') . ' — ' . when((string) ($e['created_at'] ?? '')), admin_url('enquiries')];
            }
        }
    }
    ?>
    <div class="card panel">
      <div class="panel-head"><h2><?= icon('search', 'ic head-ic') ?> <?= $q === '' ? 'Type something to search' : count($hits) . ' result' . (count($hits) === 1 ? '' : 's') . ' for “' . h($q) . '”' ?></h2></div>
      <?php if ($hits): ?><ul class="list"><?php foreach ($hits as [$type, $label, $url]): ?><li><a href="<?= h($url) ?>"><b><?= h($label) ?></b></a><span><?= h($type) ?></span></li><?php endforeach; ?></ul>
      <?php elseif ($q !== ''): ?><p class="empty"><?= icon('info') ?> Nothing found.</p><?php endif; ?>
    </div>
    <?php
}

/* ---------- Login & first-run setup ---------- */

function auth_shell(string $title, string $eyebrow, string $heading, string $lead, callable $body): void
{
    view_head($title, 'auth');
    ?>
<main class="auth-wrap">
  <div class="auth-card">
    <section class="auth-art" aria-hidden="true">
      <img class="auth-logo" src="<?= h(site_base()) ?>/assets/images/logo-white.svg" alt="">
      <div class="auth-art-copy">
        <span class="auth-rule"></span>
        <p class="auth-quote">Your website,<br><em>beautifully</em> in control.</p>
        <p class="auth-sub">Pages, services, images and enquiries — managed from one quiet place.</p>
      </div>
      <p class="auth-mark">CRETECH · Admin Console</p>
      <span class="orb o1"></span><span class="orb o2"></span><span class="orb o3"></span>
    </section>
    <section class="auth-form">
      <img class="auth-logo-sm" src="<?= h(site_base()) ?>/assets/images/logo.svg" alt="CRETECH Digital Solutions">
      <p class="auth-eyebrow"><?= h($eyebrow) ?></p>
      <h1><?= h($heading) ?></h1>
      <p class="auth-lead"><?= h($lead) ?></p>
      <?php $body(); ?>
      <p class="auth-foot"><?= icon('lock') ?> Secure, private area · <?= date('Y') ?> CRETECH</p>
    </section>
  </div>
</main>
</body>
</html>
<?php
}

function auth_field(string $label, string $name, string $type, string $icon, string $value = '', string $extra = ''): string
{
    $id = 'f-' . $name;
    $toggle = $type === 'password'
        ? '<button type="button" class="peek" data-peek aria-label="Show password">' . icon('eye') . '</button>'
        : '';
    return '<div class="field"><label for="' . $id . '">' . h($label) . '</label><div class="field-box">' . icon($icon)
        . '<input id="' . $id . '" type="' . $type . '" name="' . $name . '" value="' . h($value) . '" ' . $extra . '>' . $toggle . '</div></div>';
}

function view_login(?string $error, string $username): void
{
    auth_shell('Log in', 'Admin Panel', 'Welcome back', 'Sign in to manage the CRETECH website.', static function () use ($error, $username): void {
        ?>
        <?php if ($error): ?><p class="auth-alert" role="alert"><?= h($error) ?></p><?php endif; ?>
        <form method="post" action="<?= h(admin_url('login')) ?>" class="auth-fields">
          <input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>">
          <?= auth_field('Username', 'username', 'text', 'user', $username, 'required autocomplete="username" autocapitalize="none" spellcheck="false"' . ($username === '' ? ' autofocus' : '')) ?>
          <?= auth_field('Password', 'password', 'password', 'lock', '', 'required autocomplete="current-password"' . ($username !== '' ? ' autofocus' : '')) ?>
          <button class="auth-btn" type="submit">Sign in <?= icon('arrow') ?></button>
        </form>
        <?php
    });
}

function view_setup(bool $allowed, ?string $error, string $key): void
{
    auth_shell('Set up', 'First-time setup', 'Create your access', 'Choose the username and password for the Super Admin.', static function () use ($allowed, $error, $key): void {
        if (!$allowed) {
            echo '<p class="auth-alert">The admin panel is not set up yet. Open it on the computer running the website, or add ADMIN_SETUP_KEY to the .env file.</p>';
            return;
        }
        ?>
        <?php if ($error): ?><p class="auth-alert" role="alert"><?= h($error) ?></p><?php endif; ?>
        <form method="post" action="<?= h(admin_url('setup')) ?>" class="auth-fields">
          <input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>">
          <?php if (app_env('ADMIN_SETUP_KEY') !== null): ?><?= auth_field('Setup key', 'setup_key', 'password', 'shield', $key, 'required') ?><?php endif; ?>
          <?= auth_field('Username', 'username', 'text', 'user', (string) ($_POST['username'] ?? ''), 'required autofocus autocomplete="username" autocapitalize="none" spellcheck="false" pattern="[A-Za-z0-9._\-]{3,30}"') ?>
          <?= auth_field('Password', 'password', 'password', 'lock', '', 'required minlength="10" autocomplete="new-password"') ?>
          <p class="auth-hint">At least 10 characters, with letters and numbers.</p>
          <button class="auth-btn" type="submit">Create account <?= icon('arrow') ?></button>
        </form>
        <?php
    });
}
