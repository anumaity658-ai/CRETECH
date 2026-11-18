<?php
/**
 * Admin edit forms: which sections each page has, and how a submitted form is
 * applied to the content safely.
 *
 * Saving rules
 *  - Only keys that already exist in the content can be changed (no new keys).
 *  - Design-only settings (positions, colours, glass, sizes...) are never shown and
 *    are always kept as they are.
 *  - Lists replace whole in cms_merge(), so a change inside a list saves the whole list.
 *  - Every save keeps the previous content in "cms-history" so it can be restored.
 */
declare(strict_types=1);

require_once __DIR__ . '/admin.php';

/** Keys that only control the design. Never shown, always preserved. */
const FORM_HIDE = ['focus', 'zoomFrom', 'slug', 'icon', 'color', 'gradientTop', 'gradientBottom', 'box', 'x', 'y', 'w', 'h',
    'photoAt', 'side', 'path', 'start', 'end', 'colors', 'width', 'flag', 'marker', 'imageBox', 'textWidth', 'line', 'node',
    'textSize', 'lineHeight', 'titleSize', 'canvasHeight', 'glass', 'opacity', 'blur', 'tint', 'edge', 'spread', 'glassBox',
    'titleColor', 'glassImage', 'number', 'tone', 'page', 'dropdown', 'logo', 'logoLight'];

/** Lists whose items sit at fixed places in the design: text can change, but not add / delete / move. */
const FORM_FIXED_KEYS = ['x', 'y', 'box', 'photoAt', 'start', 'end', 'path', 'side'];

/** Hidden keys that belong to a place in the list (row 1, row 2...), not to the item: they stay put when items move. */
const FORM_SLOT_KEYS = ['glassImage'];

const FORM_HISTORY_KEEP = 40;
const FORM_TEXT_MAX = 4000;

/**
 * Sections of every editable page: id => [path in the content, title, short description].
 */
function form_pages(): array
{
    return [
        'home' => [
            'hero' => [['home', 'heroSlides'], 'Hero Slider', 'The big sliding banner at the top.'],
            'services' => [['home', 'servicesSection'], 'Our Services', 'Service cards under the banner.'],
            'work' => [['home', 'workSection'], 'Our Work', 'The project cards.'],
            'journey' => [['home', 'journeySection'], 'Our Journey', 'Who we work with.'],
            'build' => [['home', 'buildSection'], 'What We Build', 'Types of websites.'],
            'why' => [['home', 'whySection'], 'Why Choose Us', 'Reasons and the side photo.'],
            'different' => [['home', 'differentSection'], 'What Makes Us Different', 'Four cards.'],
            'process' => [['home', 'processFlow'], 'Our Working Process', 'The flow of cards.'],
            'faq' => [['home', 'faqSection'], 'FAQ', 'Questions and answers.'],
            'cta' => [['cta'], 'Bottom CTA banner', 'The same banner on every page.'],
        ],
        'about' => [
            'banner' => [['about', 'banner'], 'Banner', 'Top of the About page.'],
            'intro' => [['about', 'intro'], 'Introduction', 'Short intro under the banner.'],
            'why' => [['about', 'why'], 'Why CRETECH', 'Text, points and photo.'],
            'belief' => [['about', 'belief'], 'Our Belief', 'Quote and paragraphs.'],
            'requirements' => [['about', 'requirements'], 'Built Around Real Requirements', 'List of items.'],
            'think' => [['about', 'think'], 'How We Think', 'Steps and background.'],
            'people' => [['about', 'people'], 'People', 'Text and photo.'],
            'partner' => [['about', 'partner'], 'Partner CTA', 'The closing call to action.'],
        ],
        'services' => [
            'banner' => [['servicesPage', 'banner'], 'Services page banner', 'Top of the Services page.'],
            'cta' => [['servicesPage', 'cta'], 'Services page CTA', 'The box at the end of the Services page.'],
            'detail' => [['serviceDetail'], 'Service detail page headings', 'Headings used on every service detail page.'],
        ],
        'process' => [
            'hero' => [['processPage', 'hero'], 'Hero', 'Top of the Work Process page.'],
            'stages' => [['processPage', 'stages'], 'Project stages', 'The stage cards with photos.'],
            'clear' => [['processPage', 'clear'], 'Clear process', 'Heading, text and points.'],
            'faq' => [['processPage', 'faq'], 'FAQ', 'Questions and answers with photo.'],
            'cta' => [['processPage', 'cta'], 'CTA', 'The box at the end.'],
        ],
        'contact' => [
            'hero' => [['contactPage', 'hero'], 'Hero', 'Top of the Contact page.'],
            'form' => [['contactPage', 'form'], 'Contact form', 'Form heading and field labels.'],
            'features' => [['contactPage', 'features'], 'Features', 'Three small feature boxes.'],
            'touch' => [['contactPage', 'touch'], 'Get in touch', 'Text and photo.'],
            'details' => [['contactPage', 'details'], 'Contact details', 'Phone, email, address, timing.'],
            'ribbon' => [['contactPage', 'ribbon'], 'Ribbon', 'The line at the bottom.'],
            'messages' => [['contact'], 'Form messages', 'Messages shown after sending the form.'],
        ],
        'layout' => [
            'nav' => [['nav'], 'Header menu', 'Menu items and their links.'],
            'headerCta' => [['headerCta'], 'Header button', 'The button at the right of the menu.'],
            'site' => [['site'], 'Company details & footer text', 'Name, phone, email, address, footer text and social links.'],
            'footerLinks' => [['footerLinks'], 'Footer links', 'Quick links, service links and legal links.'],
        ],
    ];
}

/** One service = its card on the Services page + (optional) its detail page. */
function service_sections(int $i): array
{
    $cards = cms_data()['servicesPage']['cards'] ?? [];
    if (!isset($cards[$i])) {
        return [];
    }
    $sections = ['card' => [['servicesPage', 'cards', $i], 'Card on the Services page', 'Title and short text. The card photo is the banner of its detail page (set automatically); this photo is used only when the service has no detail page banner.']];
    $j = service_detail_index($cards[$i]);
    if ($j !== null) {
        $sections['detail'] = [['services', $j], 'Detail page', 'Text, features and photo of its own page.'];
    }
    return $sections;
}

function service_detail_index(array $card): ?int
{
    if (!preg_match('#^services/([a-z0-9-]+)$#', trim((string) ($card['href'] ?? ''), '/'), $m)) {
        return null;
    }
    foreach (cms_data()['services'] ?? [] as $j => $s) {
        if (($s['slug'] ?? '') === $m[1]) {
            return $j;
        }
    }
    return null;
}

/* ---------- Reading / writing by path ---------- */

function path_get(array $data, array $path)
{
    foreach ($path as $k) {
        if (!is_array($data) || !array_key_exists($k, $data)) {
            return null;
        }
        $data = $data[$k];
    }
    return $data;
}

function path_set(array $data, array $path, $value): array
{
    if (!$path) {
        return is_array($value) ? $value : $data;
    }
    $k = array_shift($path);
    $data[$k] = $path ? path_set(is_array($data[$k] ?? null) ? $data[$k] : [], $path, $value) : $value;
    return $data;
}

/** The part of the path that is saved as one override: it stops before the first list index. */
function override_path(array $path): array
{
    $out = [];
    foreach ($path as $k) {
        if (is_int($k)) {
            break;
        }
        $out[] = $k;
    }
    return $out;
}

function list_is_fixed(array $list): bool
{
    foreach ($list as $item) {
        if (is_array($item) && array_intersect(array_keys($item), FORM_FIXED_KEYS)) {
            return true;
        }
    }
    return false;
}

function form_is_image_path($v): bool
{
    return is_string($v) && (bool) preg_match('#^(assets|uploads)/[A-Za-z0-9/._-]+\.(jpe?g|png|webp|gif|svg)$#i', $v);
}

/* ---------- Applying a submitted form ---------- */

final class FormUploads
{
    /** @var array<string,string> upload id => saved path */
    public static array $saved = [];
    public static array $errors = [];
}

/**
 * Applies the posted value onto the current value. Unknown keys are ignored and
 * hidden keys are kept, so the design can never be broken from a form.
 */
function form_apply($base, $posted, string $key = '')
{
    if (in_array($key, FORM_HIDE, true) || str_starts_with($key, '_')) {
        return $base;
    }
    if (is_string($base)) {
        if (!is_string($posted)) {
            return $base;
        }
        if (form_is_image_path($base)) {
            return form_image_value($base, $posted);
        }
        if (preg_match('/^#[0-9a-f]{3,8}$|^rgba?\(/i', $base)) {
            return $base; // colour
        }
        $value = clean_text($posted, FORM_TEXT_MAX, true);
        if (in_array($key, ['href', 'url', 'link'], true) && preg_match('/^\s*(javascript|data|vbscript):/i', $value)) {
            return $base;
        }
        return $value;
    }
    if (!is_array($base)) {
        return $base; // numbers and switches are design settings
    }
    if (array_is_list($base)) {
        if (!is_array($posted) || !array_is_list($posted)) {
            return $base;
        }
        if (!$base || !is_array($base[0])) { // list of text lines
            $lines = [];
            foreach ($posted as $line) {
                if (is_string($line) && ($line = clean_text($line, FORM_TEXT_MAX)) !== '') {
                    $lines[] = $line;
                }
            }
            return $lines;
        }
        $fixed = list_is_fixed($base);
        $out = [];
        foreach ($posted as $n => $item) {
            if (!is_array($item)) {
                continue;
            }
            $src = (int) ($item['__src'] ?? -1);
            if ($fixed) {
                $src = $n; // fixed layout: every slot keeps its place
            }
            $template = $base[$src] ?? null;
            if (!is_array($template)) {
                continue;
            }
            unset($item['__src']);
            $slot = $base[count($out)] ?? end($base);
            foreach (FORM_SLOT_KEYS as $k) {
                if (isset($slot[$k], $template[$k])) {
                    $template[$k] = $slot[$k];
                }
            }
            $out[] = form_apply($template, $item);
        }
        if ($fixed && count($out) !== count($base)) {
            return $base;
        }
        return $out;
    }
    if (!is_array($posted) || array_is_list($posted) && $posted) {
        return $base;
    }
    foreach ($base as $k => $v) {
        if (array_key_exists($k, $posted)) {
            $base[$k] = form_apply($v, $posted[$k], (string) $k);
        }
    }
    return $base;
}

/** An image field: keep, use a new upload ("upload:<id>"), or pick an existing image path. */
function form_image_value(string $current, string $posted): string
{
    if (preg_match('/^upload:([a-z0-9]{6,20})$/', $posted, $m)) {
        if (isset(FormUploads::$saved[$m[1]])) {
            return FormUploads::$saved[$m[1]];
        }
        $result = admin_save_upload($_FILES['up_' . $m[1]] ?? null);
        if (is_array($result)) {
            FormUploads::$saved[$m[1]] = $result['path'];
            return $result['path'];
        }
        FormUploads::$errors[] = $result;
        return $current;
    }
    if (form_is_image_path($posted) && is_file(cms_root() . '/' . $posted)) {
        return $posted;
    }
    return $current;
}

/**
 * Saves an uploaded image into uploads/media.
 * @return array{path:string,w:int,h:int}|string
 */
function admin_save_upload(?array $file)
{
    if (!$file || ($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK || !is_uploaded_file($file['tmp_name'])) {
        return 'An image could not be uploaded (max 8 MB).';
    }
    if ($file['size'] > 8 * 1024 * 1024) {
        return 'An image is larger than 8 MB.';
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
        return 'An image could not be saved. Please try again.';
    }
    activity_log('work', 'Image uploaded', $name . ' (' . $info[0] . ' × ' . $info[1] . ' px)');
    return ['path' => 'uploads/media/' . $name, 'w' => $info[0], 'h' => $info[1]];
}

/* ---------- Saving with history ---------- */

function cms_saved(): array
{
    return store_read('cms', ['version' => 0, 'content' => []]);
}

/**
 * Writes a new value at $path (in the merged content) and stores it as an override.
 * @throws StoreConflict when someone else saved in between
 */
function cms_save_path(array $path, $value, int $version, string $label): void
{
    $merged = path_set(cms_data(), $path, $value);
    $target = override_path($path);
    $me = admin_current();
    store_update_versioned('cms', $version, static function (array $saved) use ($merged, $target, $label, $me): array {
        $content = is_array($saved['content'] ?? null) ? $saved['content'] : [];
        history_push($content, $label, $me);
        $saved['content'] = path_set($content, $target, path_get($merged, $target));
        return $saved;
    });
}

/** Replaces several top-level parts at once (used by add / delete service). */
function cms_save_parts(array $parts, int $version, string $label): void
{
    $me = admin_current();
    store_update_versioned('cms', $version, static function (array $saved) use ($parts, $label, $me): array {
        $content = is_array($saved['content'] ?? null) ? $saved['content'] : [];
        history_push($content, $label, $me);
        foreach ($parts as [$path, $value]) {
            $content = path_set($content, $path, $value);
        }
        $saved['content'] = $content;
        return $saved;
    });
}

function history_push(array $before, string $label, ?array $me): void
{
    store_update('cms-history', static function (array $all) use ($before, $label, $me): array {
        array_unshift($all, [
            'id' => bin2hex(random_bytes(6)),
            'at' => date('c'),
            'label' => $label,
            'admin' => $me['name'] ?? '',
            'before' => $before,
        ]);
        return array_slice($all, 0, FORM_HISTORY_KEEP);
    });
}

function history_restore(string $id, int $version): ?string
{
    $entry = null;
    foreach (store_read('cms-history') as $h) {
        if (($h['id'] ?? '') === $id) {
            $entry = $h;
        }
    }
    if (!$entry) {
        return null;
    }
    $me = admin_current();
    store_update_versioned('cms', $version, static function (array $saved) use ($entry, $me): array {
        history_push(is_array($saved['content'] ?? null) ? $saved['content'] : [], 'Before restoring: ' . $entry['label'], $me);
        $saved['content'] = $entry['before'];
        return $saved;
    });
    return (string) $entry['label'];
}
