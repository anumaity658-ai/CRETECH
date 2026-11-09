<?php
/**
 * Public endpoints used by the website (no login needed):
 *   GET  admin/public.php?action=data     -> site content as JSON
 *   POST admin/public.php?action=enquiry  -> contact form submission
 */
declare(strict_types=1);

require_once __DIR__ . '/../app/cms.php';
require_once __DIR__ . '/../app/security.php';
require_once __DIR__ . '/../app/urls.php';
require_once __DIR__ . '/../app/contact-guard.php';
require_once __DIR__ . '/../app/contact-mail.php';

send_security_headers();

$action = (string) ($_GET['action'] ?? '');
$method = (string) ($_SERVER['REQUEST_METHOD'] ?? 'GET');

if ($action === 'data' && $method === 'GET') {
    json_reply(['ok' => true, 'data' => cms_public_data()]);
}

if ($action === 'enquiry' && $method === 'POST') {
    $messages = cms_data()['contact'] ?? [];

    $reply = static function (bool $ok, string $message, int $status = 200): never {
        if (wants_json()) {
            json_reply(['ok' => $ok, 'message' => $message], $status);
        }
        header('Location: ' . url_to('contact') . ($ok ? '?sent=1' : '?error=1'), true, 303);
        exit;
    };

    $enquiry = [
        'name' => clean_text((string) ($_POST['name'] ?? ''), 100),
        'email' => clean_text((string) ($_POST['email'] ?? ''), 150),
        'phone' => clean_text((string) ($_POST['phone'] ?? ''), 30),
        'service' => clean_text((string) ($_POST['service'] ?? ''), 100),
        'message' => clean_text((string) ($_POST['message'] ?? ''), 4000, true),
    ];

    $allowedServices = array_merge(array_column(cms_data()['services'] ?? [], 'title'), ['Other', '']);
    $valid = $enquiry['name'] !== ''
        && filter_var($enquiry['email'], FILTER_VALIDATE_EMAIL)
        && preg_match('/^[0-9+()\-.\s]*$/', $enquiry['phone'])
        && in_array($enquiry['service'], $allowedServices, true)
        && $enquiry['message'] !== '';
    if (!$valid) {
        $reply(false, 'Please enter your name, a valid email address and your message.', 422);
    }

    $guard = contact_guard($_POST, $enquiry['message']);
    if ($guard === 'spam') {
        $reply(true, (string) ($messages['success'] ?? 'Thank you!')); // bots get a fake success
    }
    if ($guard === 'expired') {
        $reply(false, 'This form has expired. Please reload the page and try again.', 419);
    }
    if ($guard === 'rate-limit') {
        $reply(false, 'You have sent several messages recently. Please try again later or email us directly.', 429);
    }

    try {
        $saved = enquiry_save($enquiry + ['ip' => client_ip()]);
    } catch (Throwable $e) {
        error_log('Enquiry save failed: ' . $e->getMessage());
        $saved = null;
    }
    $mailed = enquiry_mail($enquiry);
    if ($saved !== null) {
        enquiry_mark_mailed($saved['id'], $mailed);
    }

    if ($saved === null && !$mailed) {
        $reply(false, (string) ($messages['error'] ?? 'Your message could not be sent.'), 500);
    }
    $reply(true, (string) ($messages['success'] ?? 'Thank you!'));
}

json_reply(['ok' => false, 'message' => 'Not found'], 404);
