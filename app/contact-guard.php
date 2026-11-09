<?php
/**
 * Enquiry spam protection:
 *  - hidden "website" field that people never fill (bots do)
 *  - signed time token: form must be loaded from our page and not submitted within 3 seconds
 *  - at most 5 enquiries per visitor per hour
 *  - messages full of links are rejected
 */
declare(strict_types=1);

require_once __DIR__ . '/security.php';

const ENQUIRY_LIMIT_PER_HOUR = 5;
const ENQUIRY_MAX_LINKS = 3;

/**
 * @return string|null null if allowed, otherwise "spam", "expired" or "rate-limit".
 *                     "spam" is answered with a fake success so bots learn nothing.
 */
function contact_guard(array $post, string $message): ?string
{
    if (trim((string) ($post['website'] ?? '')) !== '') {
        return 'spam';
    }

    $problem = form_token_problem((string) ($post['token'] ?? ''));
    if ($problem === 'expired') {
        return 'expired';
    }
    if ($problem !== null) {
        return 'spam';
    }

    if (preg_match_all('#https?://|www\.#i', $message) > ENQUIRY_MAX_LINKS) {
        return 'spam';
    }

    $visitor = hash('sha256', client_ip() . '|' . app_secret());
    $limited = false;
    store_update('ratelimit', static function (array $hits) use ($visitor, &$limited): array {
        $hourAgo = time() - 3600;
        foreach ($hits as $key => $times) {
            $hits[$key] = array_values(array_filter((array) $times, static fn ($t) => $t > $hourAgo));
            if (!$hits[$key]) {
                unset($hits[$key]);
            }
        }
        if (count($hits[$visitor] ?? []) >= ENQUIRY_LIMIT_PER_HOUR) {
            $limited = true;
            return $hits;
        }
        $hits[$visitor][] = time();
        return $hits;
    });

    return $limited ? 'rate-limit' : null;
}
