<?php
/**
 * Admin panel core: admin accounts, secure sessions, CSRF, login limits,
 * login history and the activity log. Everything is stored as JSON in
 * storage/private (admins.json, logins.json, activity.json, loginlimit.json).
 */
declare(strict_types=1);

require_once __DIR__ . '/cms.php';
require_once __DIR__ . '/security.php';
require_once __DIR__ . '/contact-mail.php';

const ADMIN_IDLE_SECONDS = 7200;          // log out after 2 hours without activity
const ADMIN_LOGIN_TRIES = 5;              // wrong passwords allowed ...
const ADMIN_LOGIN_WINDOW = 900;           // ... per 15 minutes per visitor
const ADMIN_LOG_KEEP = 500;
const ADMIN_ROLES = ['super' => 'Super Admin', 'admin' => 'Admin', 'editor' => 'Content Editor'];

/* ---------- Session ---------- */

function admin_session_start(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }
    $https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
        || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');
    session_name('cretech_admin');
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'secure' => $https,
        'httponly' => true,
        'samesite' => 'Strict',
    ]);
    ini_set('session.use_strict_mode', '1');
    session_start();

    if (isset($_SESSION['admin_id']) && time() - (int) ($_SESSION['seen'] ?? 0) > ADMIN_IDLE_SECONDS) {
        $_SESSION = [];
        session_regenerate_id(true);
        $_SESSION['flash'] = 'You were logged out after 2 hours of no activity.';
    }
    $_SESSION['seen'] = time();
}

function csrf_token(): string
{
    if (empty($_SESSION['csrf'])) {
        $_SESSION['csrf'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf'];
}

function csrf_ok(): bool
{
    $expected = (string) ($_SESSION['csrf'] ?? '');
    return $expected !== '' && hash_equals($expected, (string) ($_POST['csrf'] ?? ''));
}

function flash(?string $message = null): ?string
{
    if ($message !== null) {
        $_SESSION['flash'] = $message;
        return null;
    }
    $m = $_SESSION['flash'] ?? null;
    unset($_SESSION['flash']);
    return $m;
}

/* ---------- Admin accounts ---------- */

function admins_all(): array
{
    return store_read('admins');
}

function admin_find(string $id): ?array
{
    foreach (admins_all() as $a) {
        if (($a['id'] ?? '') === $id) {
            return $a;
        }
    }
    return null;
}

function admin_current(): ?array
{
    static $me = false;
    if ($me === false) {
        $me = isset($_SESSION['admin_id']) ? admin_find((string) $_SESSION['admin_id']) : null;
        if ($me !== null && !empty($me['disabled'])) {
            $me = null;
        }
    }
    return $me;
}

function admin_role_label(array $admin): string
{
    return ADMIN_ROLES[$admin['role'] ?? 'admin'] ?? 'Admin';
}

function admin_password_problem(string $password): ?string
{
    if (strlen($password) < 10) {
        return 'Password must be at least 10 characters.';
    }
    if (!preg_match('/[A-Za-z]/', $password) || !preg_match('/[0-9]/', $password)) {
        return 'Password must contain letters and numbers.';
    }
    return null;
}

/** @return array|string the new admin, or an error message */
function admin_create(string $name, string $email, string $password, string $role)
{
    $name = clean_text($name, 60);
    $email = strtolower(clean_text($email, 150));
    if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return 'Please enter a name and a valid email address.';
    }
    if (!isset(ADMIN_ROLES[$role])) {
        return 'Please choose a role.';
    }
    if ($p = admin_password_problem($password)) {
        return $p;
    }
    $error = null;
    $admin = [
        'id' => bin2hex(random_bytes(8)),
        'name' => $name,
        'email' => $email,
        'role' => $role,
        'hash' => password_hash($password, PASSWORD_DEFAULT),
        'created_at' => date('c'),
    ];
    store_update('admins', static function (array $all) use ($admin, &$error): array {
        foreach ($all as $a) {
            if (($a['email'] ?? '') === $admin['email']) {
                $error = 'An admin with this email already exists.';
                return $all;
            }
        }
        $all[] = $admin;
        return $all;
    });
    return $error ?? $admin;
}

function admin_update(string $id, callable $change): void
{
    store_update('admins', static function (array $all) use ($id, $change): array {
        foreach ($all as &$a) {
            if (($a['id'] ?? '') === $id) {
                $a = $change($a);
            }
        }
        return $all;
    });
}

/** First Super Admin may only be created from this computer, or with ADMIN_SETUP_KEY from .env. */
function admin_setup_allowed(string $key = ''): bool
{
    if (admins_all()) {
        return false;
    }
    $setupKey = app_env('ADMIN_SETUP_KEY');
    if ($setupKey !== null) {
        return hash_equals($setupKey, $key);
    }
    return in_array(client_ip(), ['127.0.0.1', '::1'], true);
}

/* ---------- Login ---------- */

function login_visitor(): string
{
    return hash('sha256', client_ip() . '|' . app_secret());
}

function login_blocked(): bool
{
    $hits = store_read('loginlimit')[login_visitor()] ?? [];
    $recent = array_filter((array) $hits, static fn ($t) => $t > time() - ADMIN_LOGIN_WINDOW);
    return count($recent) >= ADMIN_LOGIN_TRIES;
}

function login_failed(): void
{
    $visitor = login_visitor();
    store_update('loginlimit', static function (array $all) use ($visitor): array {
        foreach ($all as $k => $times) {
            $all[$k] = array_values(array_filter((array) $times, static fn ($t) => $t > time() - ADMIN_LOGIN_WINDOW));
            if (!$all[$k]) {
                unset($all[$k]);
            }
        }
        $all[$visitor][] = time();
        return $all;
    });
}

/** @return string|null error message, null on success */
function admin_login(string $email, string $password): ?string
{
    if (login_blocked()) {
        return 'Too many wrong attempts. Please wait 15 minutes and try again.';
    }
    $email = strtolower(trim($email));
    $found = null;
    foreach (admins_all() as $a) {
        if (($a['email'] ?? '') === $email) {
            $found = $a;
        }
    }
    // Always run password_verify so wrong emails take as long as wrong passwords.
    $ok = password_verify($password, $found['hash'] ?? password_hash('no-such-admin', PASSWORD_DEFAULT));
    if (!$found || !$ok || !empty($found['disabled'])) {
        login_failed();
        return 'Email or password is incorrect.';
    }
    if (password_needs_rehash($found['hash'], PASSWORD_DEFAULT)) {
        $hash = password_hash($password, PASSWORD_DEFAULT);
        admin_update($found['id'], static fn ($a) => ['hash' => $hash] + $a);
    }
    session_regenerate_id(true);
    $_SESSION['admin_id'] = $found['id'];
    $_SESSION['seen'] = time();
    unset($_SESSION['csrf']);
    login_record($found);
    return null;
}

function admin_logout(): void
{
    $_SESSION = [];
    session_regenerate_id(true);
}

/* ---------- Device / browser from the User-Agent ---------- */

function ua_device(string $ua): array
{
    $os = 'Unknown device';
    foreach ([
        'Android' => '/Android/i', 'iPhone' => '/iPhone/i', 'iPad' => '/iPad/i',
        'Windows' => '/Windows/i', 'macOS' => '/Macintosh|Mac OS X/i', 'Linux' => '/Linux/i',
    ] as $name => $re) {
        if (preg_match($re, $ua)) {
            $os = $name;
            break;
        }
    }
    $browser = '';
    foreach ([
        'Edge' => '/Edg\//', 'Opera' => '/OPR\//', 'Samsung Internet' => '/SamsungBrowser/',
        'Chrome' => '/Chrome\//', 'Firefox' => '/Firefox\//', 'Safari' => '/Safari\//',
    ] as $name => $re) {
        if (preg_match($re, $ua)) {
            $browser = $name;
            break;
        }
    }
    return ['os' => $os, 'browser' => $browser];
}

function login_record(array $admin): void
{
    $device = ua_device((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''));
    $row = [
        'admin_id' => $admin['id'],
        'name' => $admin['name'],
        'role' => $admin['role'],
        'at' => date('c'),
        'os' => $device['os'],
        'browser' => $device['browser'],
        'ip' => client_ip(),
    ];
    store_update('logins', static function (array $all) use ($row): array {
        array_unshift($all, $row);
        return array_slice($all, 0, ADMIN_LOG_KEEP);
    });
}

/* ---------- Activity log ---------- */

/**
 * $kind "update" = existing content changed (Recent Updates),
 *       "work"   = something added, removed, uploaded or drafted (Recent Work Updates).
 */
function activity_log(string $kind, string $title, string $detail = ''): void
{
    $me = admin_current();
    $row = [
        'kind' => $kind === 'work' ? 'work' : 'update',
        'title' => clean_text($title, 120),
        'detail' => clean_text($detail, 120),
        'admin_id' => $me['id'] ?? '',
        'admin' => $me['name'] ?? '',
        'at' => date('c'),
    ];
    store_update('activity', static function (array $all) use ($row): array {
        array_unshift($all, $row);
        return array_slice($all, 0, ADMIN_LOG_KEEP);
    });
}

/* ---------- Small helpers for the views ---------- */

function when(string $iso): string
{
    $t = strtotime($iso);
    if (!$t) {
        return '';
    }
    $day = date('Y-m-d', $t);
    $label = $day === date('Y-m-d') ? 'Today' : ($day === date('Y-m-d', strtotime('-1 day')) ? 'Yesterday' : date('d M Y', $t));
    return $label . ', ' . date('h:i A', $t);
}

function enquiries_all(): array
{
    return store_read('enquiries');
}

/** Enquiries per month for the last $months months (oldest first). */
function enquiry_trend(int $months = 6): array
{
    $counts = [];
    for ($i = $months - 1; $i >= 0; $i--) {
        $counts[date('Y-m', strtotime("first day of -$i month"))] = 0;
    }
    foreach (enquiries_all() as $e) {
        $key = substr((string) ($e['created_at'] ?? ''), 0, 7);
        if (isset($counts[$key])) {
            $counts[$key]++;
        }
    }
    return $counts;
}

function admin_settings(): array
{
    return store_read('admin-settings', ['total_clients' => 0]);
}

/** Shorten text to $max characters (UTF-8 safe, no mbstring needed). */
function cut(string $text, int $max): string
{
    $text = trim((string) preg_replace('/\s+/u', ' ', $text));
    return preg_match('/^.{' . ($max + 1) . '}/us', $text) && preg_match('/^.{0,' . $max . '}/us', $text, $m)
        ? rtrim($m[0]) . '…'
        : $text;
}
