<?php
/**
 * CRETECH Admin Panel — front controller.
 *   /admin            dashboard (login first)
 *   /admin?p=<page>   one of the pages in admin_pages()
 */
declare(strict_types=1);

const CRETECH_ADMIN = true;

require_once __DIR__ . '/../app/admin.php';
require_once __DIR__ . '/../app/admin-forms.php';
require_once __DIR__ . '/views.php';
require_once __DIR__ . '/forms-view.php';

send_security_headers();
header('Cache-Control: no-store');
header("Content-Security-Policy: default-src 'self'; img-src 'self' data: https://images.unsplash.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; script-src 'self'; frame-ancestors 'self'; form-action 'self'; base-uri 'self'");
header('X-Robots-Tag: noindex, nofollow');

admin_session_start();

$page = (string) ($_GET['p'] ?? 'dashboard');
$post = ($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST';
$self = admin_url();

if ($post && !csrf_ok()) {
    $tooBig = empty($_POST) && (int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 0;
    flash($tooBig ? 'The photos were too large to upload together. Please upload fewer or smaller photos at a time.' : 'Your session expired. Please try again.');
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
            $made = admin_create((string) ($_POST['username'] ?? ''), (string) ($_POST['password'] ?? ''), 'super');
            if (is_array($made)) {
                admin_login((string) $_POST['username'], (string) $_POST['password']);
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
    $error = admin_login((string) ($_POST['username'] ?? ''), (string) ($_POST['password'] ?? ''));
    if ($error === null) {
        header('Location: ' . $self, true, 303);
        exit;
    }
    view_login($error, (string) ($_POST['username'] ?? ''));
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
if ($post && in_array($page, ['home', 'about', 'services', 'service', 'process', 'contact', 'layout', 'history'], true)) {
    admin_cms_post($page);
}
if ($post) {
    $back = admin_url($page);
    switch ($page) {
        case 'account':
            $new = (string) ($_POST['new_password'] ?? '');
            if (!password_verify((string) ($_POST['current_password'] ?? ''), $me['hash'])) {
                flash('Current password is not correct.');
            } elseif ($problem = admin_password_problem($new)) {
                flash($problem);
            } elseif ($new !== (string) ($_POST['confirm_password'] ?? '')) {
                flash('The two new passwords do not match.');
            } else {
                $hash = password_hash($new, PASSWORD_DEFAULT);
                admin_update($me['id'], static fn ($a) => ['hash' => $hash] + $a);
                activity_log('update', 'My Account updated', 'Password changed');
                flash('Your password has been changed.');
            }
            break;

        case 'settings':
            if (($_POST['do'] ?? '') === 'add-admin') {
                if (($me['role'] ?? '') !== 'super') {
                    flash('Only the Super Admin can add admins.');
                    break;
                }
                $made = admin_create((string) ($_POST['username'] ?? ''), (string) ($_POST['password'] ?? ''), (string) ($_POST['role'] ?? ''));
                if (is_array($made)) {
                    activity_log('work', 'New admin – Added', $made['name'] . ' (' . admin_role_label($made) . ')');
                    flash('Admin added. They can now log in with that username and password.');
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
    }
    header('Location: ' . $back, true, 303);
    exit;
}

/* ---------- Pages (GET) ---------- */
if (!isset(admin_pages()[$page])) {
    $page = 'dashboard';
}
view_page($page, $me);

/* ---------- Content forms (POST) ---------- */
function admin_cms_post(string $page): void
{
    $version = (int) ($_POST['version'] ?? -1);
    $do = (string) ($_POST['do'] ?? '');
    $i = (int) ($_GET['i'] ?? -1);
    $pageName = admin_pages()[$page][0] ?? 'Website';
    $back = admin_url($page, $page === 'service' ? ['i' => $i] : []);

    try {
        if ($page === 'history') {
            $label = history_restore((string) ($_POST['id'] ?? ''), $version);
            if ($label !== null) {
                activity_log('update', 'Website restored', 'to before: ' . $label);
                flash('Done. The website is back to how it was before “' . $label . '”.');
            }
            redirect_to(admin_url('history'));
        }

        if ($do === 'save') {
            $id = (string) ($_POST['section'] ?? '');
            $sections = $page === 'service' ? service_sections($i) : (form_pages()[$page] ?? []);
            if (!isset($sections[$id])) {
                flash('This section was not found.');
                redirect_to($back);
            }
            [$path, $title] = $sections[$id];
            $posted = json_decode((string) ($_POST['payload'] ?? ''), true);
            if (json_last_error() !== JSON_ERROR_NONE) {
                flash('The form could not be read. Please try again.');
                redirect_to($back);
            }
            $current = path_get(cms_data(), $path);
            $new = form_apply($current, $posted);
            if ($page === 'service') {
                $name = str_replace("\n", ' ', (string) (cms_data()['servicesPage']['cards'][$i]['title'] ?? 'Service'));
                $label = 'Service “' . $name . '” – ' . $title;
            } else {
                $label = $pageName . ' – ' . $title;
            }
            if ($new === $current) {
                flash(FormUploads::$errors ? implode(' ', FormUploads::$errors) : 'No changes to save in “' . $title . '”.');
            } else {
                cms_save_path($path, $new, $version, $label);
                activity_log('update', $label . ' updated');
                flash('Saved. “' . $title . '” is now live on the website.' . (FormUploads::$errors ? ' Note: ' . implode(' ', FormUploads::$errors) : ''));
            }
            redirect_to($back . (str_contains($back, '?') ? '&' : '?') . 'open=' . rawurlencode($id) . '#sec-' . rawurlencode($id));
        }

        $data = cms_data();
        $cards = $data['servicesPage']['cards'] ?? [];
        $details = $data['services'] ?? [];

        if ($page === 'services' && $do === 'add-service' && $cards) {
            $new = end($cards);
            $new['title'] = 'New Service';
            $new['text'] = '';
            $new['href'] = '';
            $cards[] = $new;
            cms_save_parts([[['servicesPage', 'cards'], $cards]], $version, 'New service added');
            activity_log('work', 'New Service – Added');
            flash('New service added. Fill in its card below and save.');
            redirect_to(admin_url('service', ['i' => count($cards) - 1]));
        }

        if ($page === 'service' && isset($cards[$i]) && $do === 'create-detail' && $details) {
            $title = str_replace("\n", ' ', (string) $cards[$i]['title']);
            $slug = slugify($title) ?: 'service';
            $taken = array_column($details, 'slug');
            for ($n = 2, $base = $slug; in_array($slug, $taken, true); $n++) {
                $slug = $base . '-' . $n;
            }
            $template = $details[0];
            $detail = ['slug' => $slug, 'title' => $title, 'short' => (string) ($cards[$i]['text'] ?? ''), 'summary' => '', 'intro' => '', 'image' => (string) ($cards[$i]['image'] ?? ''), 'features' => []]
                + array_map(static fn ($v) => is_string($v) ? '' : (is_array($v) ? [] : $v), $template);
            $detail['icon'] = (string) ($template['icon'] ?? '');
            $details[] = $detail;
            $cards[$i]['href'] = 'services/' . $slug;
            cms_save_parts([[['services'], $details], [['servicesPage', 'cards'], $cards]], $version, 'Detail page created for “' . $title . '”');
            activity_log('work', 'Service detail page – Added', $title);
            flash('Detail page created. Fill in its text and save.');
            redirect_to(admin_url('service', ['i' => $i, 'open' => 'detail']) . '#sec-detail');
        }

        if ($page === 'service' && isset($cards[$i]) && $do === 'delete-service') {
            $title = str_replace("\n", ' ', (string) $cards[$i]['title']);
            $j = service_detail_index($cards[$i]);
            array_splice($cards, $i, 1);
            $parts = [[['servicesPage', 'cards'], $cards]];
            if ($j !== null) {
                $slug = $details[$j]['slug'];
                array_splice($details, $j, 1);
                $parts[] = [['services'], $details];
                // Remove footer links to the deleted page.
                $footer = $data['footerLinks']['services'] ?? [];
                $parts[] = [['footerLinks', 'services'], array_values(array_filter($footer, static fn ($l) => trim((string) ($l['href'] ?? ''), '/') !== 'services/' . $slug))];
            }
            cms_save_parts($parts, $version, 'Service “' . $title . '” deleted');
            activity_log('work', 'Service – Deleted', $title);
            flash('“' . $title . '” was deleted. Changed your mind? Use Restore previous version.');
            redirect_to(admin_url('services'));
        }
    } catch (StoreConflict $e) {
        flash('Someone else saved changes a moment ago. The page has been reloaded — please make your change again.');
        redirect_to($back);
    }
    redirect_to($back);
}

function redirect_to(string $url): never
{
    header('Location: ' . $url, true, 303);
    exit;
}
