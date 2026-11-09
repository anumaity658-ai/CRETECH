<?php
/**
 * Every enquiry is saved to storage/private/enquiries.json (so nothing is lost
 * if email fails, and the admin panel can list them) and then emailed to the office.
 */
declare(strict_types=1);

require_once __DIR__ . '/cms.php';

const ENQUIRY_KEEP_MAX = 5000;

function enquiry_save(array $enquiry): array
{
    $enquiry = ['id' => bin2hex(random_bytes(8)), 'created_at' => date('c'), 'status' => 'new'] + $enquiry;
    store_update('enquiries', static function (array $all) use ($enquiry): array {
        array_unshift($all, $enquiry);
        return array_slice($all, 0, ENQUIRY_KEEP_MAX);
    });
    return $enquiry;
}

function enquiry_mark_mailed(string $id, bool $mailed): void
{
    store_update('enquiries', static function (array $all) use ($id, $mailed): array {
        foreach ($all as &$row) {
            if (($row['id'] ?? '') === $id) {
                $row['mailed'] = $mailed;
                break;
            }
        }
        return $all;
    });
}

function enquiry_mail(array $enquiry): bool
{
    $site = cms_data()['site'] ?? [];
    $to = app_env('MAIL_TO', (string) ($site['email'] ?? ''));
    $host = preg_replace('/^www\./', '', (string) parse_url(site_url(), PHP_URL_HOST)) ?: 'localhost';
    $from = app_env('MAIL_FROM', 'website@' . $host);
    if ($to === '' || !filter_var($to, FILTER_VALIDATE_EMAIL)) {
        return false;
    }

    // Header values must never contain line breaks (header injection).
    $oneLine = static fn (string $v): string => trim(str_replace(["\r", "\n"], ' ', $v));

    $subject = 'New ' . ($site['name'] ?? 'website') . ' enquiry: ' . $oneLine($enquiry['service'] ?: 'General');
    $body = "Name: {$enquiry['name']}\n"
        . "Email: {$enquiry['email']}\n"
        . "Phone: {$enquiry['phone']}\n"
        . "Service: {$enquiry['service']}\n"
        . "Received: " . date('d M Y, h:i A') . " IST\n\n"
        . "Message:\n{$enquiry['message']}\n";
    $headers = implode("\r\n", [
        'From: ' . $oneLine((string) $from),
        'Reply-To: ' . $oneLine($enquiry['email']),
        'Content-Type: text/plain; charset=UTF-8',
    ]);

    return @mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers);
}
