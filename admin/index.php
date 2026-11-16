<?php
/**
 * CRETECH Admin Panel — front controller.
 *   /admin            dashboard (login first)
 *   /admin?p=<page>   one of the pages in admin_pages()
 */
declare(strict_types=1);

const CRETECH_ADMIN = true;

require_once __DIR__ . '/../app/admin.php';
require_once __DIR__ . '/views.php';

send_security_headers();
header('Cache-Control: no-store');
header("Content-Security-Policy: default-src 'self'; img-src 'self' data: https://images.unsplash.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; script-src 'self'; frame-ancestors 'self'; form-action 'self'; base-uri 'self'");
header('X-Robots-Tag: noindex, nofollow');

admin_session_start();

$page = (string) ($_GET['p'] ?? 'dashboard');
$post = ($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST';
$self = admin_url();

if ($post && !csrf_ok()) {
    flash('Your session expired. Please try again.');
    header('Location: ' . admin_url($page === 'dashboard' ? null : $page), true, 303);
    exit;
}

/* ---------- First run: create the Super Admin ---------- */
if (!admins_all()) {
    $error = null;
    $key = (string) ($_POST['setup_key'] ?? $_GET['key'] ?? '');
    if ($post && $page === 'setup') {
        if (!admin_setup_allowed($key)) {
            $error = 'Setup is not allowed from here.';
        } else {
            $made = admin_create((string) $_POST['name'], (string) $_POST['email'], (string) $_POST['password'], 'super');
            if (is_array($made)) {
                admin_login((string) $_POST['email'], (string) $_POST['password']);
                activity_log('work', 'Admin panel set up', 'Super Admin account created');
                header('Location: ' . $self, true, 303);
                exit;
            }
            $error = $made;
        }
    }
    view_setup(admin_setup_allowed($key) || app_env('ADMIN_SETUP_KEY') !== null, $error, $key);
    exit;
}

/* ---------- Login / logout ---------- */
if ($page === 'login' && $post) {
    $error = admin_login((string) ($_POST['email'] ?? ''), (string) ($_POST['password'] ?? ''));
    if ($error === null) {
        header('Location: ' . $self, true, 303);
        exit;
    }
    view_login($error, (string) ($_POST['email'] ?? ''));
    exit;
}
if ($page === 'logout' && $post) {
    admin_logout();
    flash('You have been logged out.');
    header('Location: ' . $self, true, 303);
    exit;
}

$me = admin_current();
if ($me === null) {
    view_login(flash(), '');
    exit;
}

/* ---------- Actions (POST) ---------- */
if ($post) {
    $back = admin_url($page);
    switch ($page) {
        case 'account':
            $name = clean_text((string) ($_POST['name'] ?? ''), 60);
            $new = (string) ($_POST['new_password'] ?? '');
            if (!password_verify((string) ($_POST['current_password'] ?? ''), $me['hash'])) {
                flash('Current password is not correct.');
            } elseif ($name === '') {
                flash('Please enter your name.');
            } elseif ($new !== '' && ($problem = admin_password_problem($new))) {
                flash($problem);
            } elseif ($new !== '' && $new !== (string) ($_POST['confirm_password'] ?? '')) {
                flash('The two new passwords do not match.');
            } else {
                $hash = $new !== '' ? password_hash($new, PASSWORD_DEFAULT) : $me['hash'];
                admin_update($me['id'], static fn ($a) => ['name' => $name, 'hash' => $hash] + $a);
                activity_log('update', 'My Account updated', $new !== '' ? 'Name and password' : 'Name');
                flash('Your account has been saved.');
            }
            break;

        case 'settings':
            if (($_POST['do'] ?? '') === 'add-admin') {
                if (($me['role'] ?? '') !== 'super') {
                    flash('Only the Super Admin can add admins.');
                    break;
                }
                $made = admin_create((string) $_POST['name'], (string) $_POST['email'], (string) $_POST['password'], (string) $_POST['role']);
                if (is_array($made)) {
                    activity_log('work', 'New admin – Added', $made['name'] . ' (' . admin_role_label($made) . ')');
                    flash('Admin added. They can now log in with that email and password.');
                } else {
                    flash($made);
                }
            } elseif (($_POST['do'] ?? '') === 'toggle-admin' && ($me['role'] ?? '') === 'super') {
                $id = (string) ($_POST['id'] ?? '');
                if ($id !== $me['id'] && ($target = admin_find($id))) {
                    admin_update($id, static fn ($a) => ['disabled' => empty($a['disabled'])] + $a);
                    activity_log('update', 'Admin ' . (empty($target['disabled']) ? 'disabled' : 'enabled'), $target['name']);
                }
            } else {
                $clients = max(0, min(99999, (int) ($_POST['total_clients'] ?? 0)));
                store_update('admin-settings', static fn ($s) => ['total_clients' => $clients] + $s);
                activity_log('update', 'Site Settings updated', 'Total clients: ' . $clients);
                flash('Settings saved.');
            }
            break;

        case 'enquiries':
            $id = (string) ($_POST['id'] ?? '');
            $status = in_array($_POST['status'] ?? '', ['new', 'read', 'done'], true) ? $_POST['status'] : 'read';
            store_update('enquiries', static function (array $all) use ($id, $status): array {
                foreach ($all as &$row) {
                    if (($row['id'] ?? '') === $id) {
                        $row['status'] = $status;
                    }
                }
                return $all;
            });
            break;

        case 'media':
            flash(media_upload($_FILES['image'] ?? null));
            break;
    }
    header('Location: ' . $back, true, 303);
    exit;
}

/* ---------- Pages (GET) ---------- */
if (!isset(admin_pages()[$page])) {
    $page = 'dashboard';
}
view_page($page, $me);

/* ---------- Media upload ---------- */
function media_upload(?array $file): string
{
    if (!$file || ($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK || !is_uploaded_file($file['tmp_name'])) {
        return 'Please choose an image to upload (max 8 MB).';
    }
    if ($file['size'] > 8 * 1024 * 1024) {
        return 'This image is larger than 8 MB.';
    }
    $info = @getimagesize($file['tmp_name']);
    $types = [IMAGETYPE_JPEG => 'jpg', IMAGETYPE_PNG => 'png', IMAGETYPE_WEBP => 'webp', IMAGETYPE_GIF => 'gif'];
    if (!$info || !isset($types[$info[2]])) {
        return 'Only JPG, PNG, WebP or GIF images can be uploaded.';
    }
    $base = slugify(pathinfo((string) $file['name'], PATHINFO_FILENAME)) ?: 'image';
    $name = substr($base, 0, 60) . '-' . bin2hex(random_bytes(3)) . '.' . $types[$info[2]];
    $dir = cms_root() . '/uploads/media';
    if (!is_dir($dir)) {
        mkdir($dir, 0775, true);
    }
    if (!move_uploaded_file($file['tmp_name'], $dir . '/' . $name)) {
        return 'The image could not be saved. Please try again.';
    }
    activity_log('work', 'Media Library – Image uploaded', $name . ' (' . $info[0] . ' × ' . $info[1] . ' px)');
    return 'Image uploaded: ' . $name;
}
