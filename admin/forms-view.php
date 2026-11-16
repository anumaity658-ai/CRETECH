<?php
/**
 * Edit forms (HTML). Every editable value becomes a "node" that admin.js turns
 * back into JSON on save:
 *   data-node="leaf"  one text / image value      data-p = its path inside the nearest container
 *   data-node="lines" a list of text lines
 *   data-node="list"  a list of items (cards, slides, FAQ...)
 *   data-node="item"  one item of a list (a container), data-src = its original position
 *   data-node="root"  the section (a container)
 */
declare(strict_types=1);

defined('CRETECH_ADMIN') || exit;

const FORM_LABELS = [
    'title' => 'Heading', 'text' => 'Text', 'eyebrow' => 'Small label above heading', 'button' => 'Button', 'label' => 'Label',
    'titleLines' => 'Heading lines', 'script' => 'Handwritten word', 'intro' => 'Intro text', 'primary' => 'Main button',
    'secondary' => 'Second button', 'imageAlt' => 'Photo description (for Google)', 'cards' => 'Cards', 'projects' => 'Projects',
    'paragraphs' => 'Paragraphs', 'milestones' => 'Milestones', 'boxes' => 'Boxes', 'items' => 'Items', 'q' => 'Question',
    'a' => 'Answer', 'kind' => 'Type of project', 'name' => 'Name', 'url' => 'Link', 'link' => 'Link', 'done' => 'What we did (tags)',
    'doneLabel' => 'Label above the tags', 'checklist' => 'Checklist', 'background' => 'Section background', 'visual' => 'Side photo',
    'cta' => 'Button', 'image' => 'Photo', 'imageSmall' => 'Phone photo', 'href' => 'Link', 'points' => 'Points', 'steps' => 'Steps',
    'highlights' => 'Highlights', 'features' => 'Features', 'details' => 'Details', 'quote' => 'Quote',
    'lead' => 'Lead text', 'subtitle' => 'Subtitle', 'highlight' => 'Highlighted words', 'short' => 'Short text',
    'summary' => 'Summary', 'messageHelp' => 'Help text under message', 'email' => 'Email', 'phone' => 'Phone',
    'message' => 'Message', 'location' => 'Address / location', 'tagline' => 'Tagline', 'footerTagline' => 'Footer tagline',
    'footerText' => 'Footer text', 'socials' => 'Social media links', 'quick' => 'Quick links', 'services' => 'Service links',
    'legal' => 'Legal links', 'success' => 'Message after sending', 'error' => 'Message if sending fails',
    'nav' => 'Menu items', 'heroSlides' => 'Slides', 'stages' => 'Stages',
    'includedTitle' => 'Heading: what is included', 'processTitle' => 'Heading: how we work', 'otherTitle' => 'Heading: other services',
];

function f_label(string $key): string
{
    return FORM_LABELS[$key] ?? ucfirst(trim((string) preg_replace('/([A-Z])/', ' $1', $key)));
}

function f_p(array $rel): string
{
    return h((string) json_encode(array_values(array_map('strval', $rel))));
}

function f_tip(array $path, string $key): string
{
    $p = implode('.', array_map('strval', $path));
    if (preg_match('/heroSlides\.\d+\.image$/', $p)) return 'Desktop. Keep the left ~45% calm — the heading sits there.';
    if (preg_match('/heroSlides\.\d+\.imageSmall$/', $p)) return 'Phone version of the same photo.';
    if (str_contains($p, 'background') || $key === 'background') return $key === 'imageSmall' ? 'Phone background of this section.' : 'Background of this section.';
    if (str_contains($p, 'projects')) return 'Screenshot of the top of the website.';
    return 'Use this size so the photo stays sharp and fits the design.';
}

/** The size the design was made for: the original image at the same place (or the first item of the list). */
function f_needed_size(array $path, string $current): ?array
{
    $candidates = [path_get(cms_defaults(), $path)];
    $alt = $path;
    foreach ($alt as $i => $k) {
        if (is_int($k)) {
            $alt[$i] = 0;
        }
    }
    $candidates[] = path_get(cms_defaults(), $alt);
    $candidates[] = $current;
    foreach ($candidates as $c) {
        if (is_string($c) && is_file(cms_root() . '/' . $c) && ($s = @getimagesize(cms_root() . '/' . $c))) {
            return [$s[0], $s[1]];
        }
    }
    return null;
}

function f_image(string $value, string $key, array $rel, array $path): string
{
    $need = f_needed_size($path, $value);
    $title = $key === 'background' || str_contains(implode('.', array_map('strval', $path)), 'background.')
        ? ($key === 'imageSmall' ? 'Background (phone)' : 'Section background')
        : f_label($key);
    $uid = bin2hex(random_bytes(5));
    $src = h(site_base() . '/' . $value);
    $isSvg = str_ends_with(strtolower($value), '.svg');
    return '<div class="ib" data-w="' . ($need[0] ?? 0) . '" data-h="' . ($need[1] ?? 0) . '">'
        . '<a class="ib-thumb" href="' . $src . '" target="_blank" rel="noopener"><img src="' . $src . '" alt="" loading="lazy"></a>'
        . '<div class="ib-info"><b>' . h($title) . '</b>'
        . '<span class="ib-need">Needed: ' . ($need ? $need[0] . ' × ' . $need[1] . ' px' : 'any size') . '</span>'
        . '<small>' . h(f_tip($path, $key)) . '</small><span class="ib-file">' . h(basename($value)) . '</span>'
        . '<input type="hidden" data-node="leaf" data-p="' . f_p($rel) . '" value="' . h($value) . '">'
        . ($isSvg ? '' : '<label class="ib-btn">' . icon('plus') . ' Upload new<input type="file" name="up_' . $uid . '" data-uid="' . $uid . '" accept="image/jpeg,image/png,image/webp,image/gif" hidden></label>')
        . '<em class="ib-check"></em></div></div>';
}

function f_text(string $value, string $key, array $rel): string
{
    $long = strlen($value) > 70 || str_contains($value, "\n") || in_array($key, ['text', 'intro', 'summary', 'a', 'quote', 'lead', 'footerText'], true);
    $hint = str_contains($value, '*') ? '<small class="hint">Words inside *stars* show in orange.</small>' : '';
    $attr = 'data-node="leaf" data-p="' . f_p($rel) . '"';
    $input = $long
        ? '<textarea ' . $attr . ' rows="' . min(7, max(2, (int) ceil(strlen($value) / 75) + substr_count($value, "\n"))) . '">' . h($value) . '</textarea>'
        : '<input ' . $attr . ' value="' . h($value) . '">';
    return '<label class="fd"><span>' . h(f_label($key)) . '</span>' . $input . $hint . '</label>';
}

function f_item_title($item, int $i, string $key): string
{
    if (is_array($item)) {
        if (isset($item['titleLines'])) {
            return cut(implode(' ', (array) $item['titleLines']), 48);
        }
        foreach (['title', 'label', 'name', 'q', 'text'] as $k) {
            if (isset($item[$k]) && is_string($item[$k]) && trim($item[$k]) !== '') {
                return cut(str_replace(['*', "\n"], ['', ' '], $item[$k]), 48);
            }
        }
    }
    return rtrim(f_label($key), 's') . ' ' . ($i + 1);
}

function f_is_button($v): bool
{
    return is_array($v) && isset($v['label']) && (isset($v['href']) || array_key_exists('href', $v))
        && !array_diff(array_keys($v), ['label', 'href']);
}

/**
 * @return array{0:string,1:string} [fields html, images html]
 */
function f_render($value, string $key, array $rel, array $path): array
{
    if (in_array($key, FORM_HIDE, true) || str_starts_with($key, '_') || !is_string($value) && !is_array($value)) {
        return ['', ''];
    }
    if (is_string($value)) {
        if (preg_match('/^#[0-9a-f]{3,8}$|^rgba?\(/i', $value)) {
            return ['', ''];
        }
        return form_is_image_path($value) ? ['', f_image($value, $key, $rel, $path)] : [f_text($value, $key, $rel), ''];
    }
    if (f_is_button($value)) {
        return ['<div class="fd btn-pair"><span>' . h(f_label($key)) . '</span><div>'
            . '<input data-node="leaf" data-p="' . f_p(array_merge($rel, ['label'])) . '" value="' . h((string) $value['label']) . '" aria-label="Button text" placeholder="Button text">'
            . '<span class="arrow">→</span>'
            . '<input data-node="leaf" data-p="' . f_p(array_merge($rel, ['href'])) . '" value="' . h((string) ($value['href'] ?? '')) . '" aria-label="Link" placeholder="Link, e.g. contact" class="link">'
            . '</div></div>', ''];
    }
    if (array_is_list($value)) {
        if (!$value || !is_array($value[0])) {
            $rows = '';
            foreach ($value ?: [''] as $line) {
                $rows .= '<div class="line"><input value="' . h((string) $line) . '"><button type="button" class="ic-btn" data-del-line title="Remove">✕</button></div>';
            }
            return ['<div class="fd lines" data-node="lines" data-p="' . f_p($rel) . '"><span>' . h(f_label($key)) . '</span><div class="line-list">' . $rows . '</div>'
                . '<button type="button" class="add sm" data-add-line>+ Add line</button></div>', ''];
        }
        $fixed = list_is_fixed($value);
        $cards = '';
        foreach ($value as $i => $item) {
            [$f, $im] = f_children($item, [], array_merge($path, [$i]));
            $tools = $fixed ? '' : '<span class="item-tools"><button type="button" class="ic-btn" data-up title="Move up">↑</button><button type="button" class="ic-btn" data-down title="Move down">↓</button><button type="button" class="ic-btn del" data-del-item title="Delete">✕</button></span>';
            $cards .= '<div class="item" data-node="item" data-src="' . $i . '"><div class="item-head"><span class="drag">' . ($i + 1) . '</span><b>' . h(f_item_title($item, $i, $key)) . '</b>' . $tools . '</div>'
                . '<div class="item-body' . ($im ? ' has-img' : '') . '"><div class="cols-f">' . ($f ?: '<p class="muted">Nothing to edit here.</p>') . '</div>' . ($im ? '<div class="cols-i">' . $im . '</div>' : '') . '</div></div>';
        }
        $foot = $fixed
            ? '<p class="fixed-note">' . icon('info') . ' These ' . count($value) . ' sit at fixed places in the design, so they can be edited but not added, removed or moved.</p>'
            : '<button type="button" class="add" data-add-item>+ Add ' . h(['nav' => 'menu item', 'heroSlides' => 'slide', 'stages' => 'stage', 'items' => 'item'][$key] ?? strtolower(rtrim(f_label($key), 's'))) . '</button>';
        return ['<div class="group"><p class="group-title">' . h(f_label($key)) . ' <small>' . count($value) . '</small></p>'
            . '<div class="items" data-node="list" data-p="' . f_p($rel) . '">' . $cards . '</div>' . $foot . '</div>', ''];
    }
    [$f, $im] = f_children($value, $rel, $path);
    return [$f !== '' ? '<div class="sub"><p class="sub-title">' . h(f_label($key)) . '</p>' . $f . '</div>' : '', $im];
}

function f_children(array $obj, array $rel, array $path): array
{
    $f = $im = '';
    foreach ($obj as $k => $v) {
        [$a, $b] = f_render($v, (string) $k, array_merge($rel, [(string) $k]), array_merge($path, [$k]));
        $f .= $a;
        $im .= $b;
    }
    return [$f, $im];
}

/** One section with its own form and Save button. */
function f_section(string $page, string $id, array $def, bool $open, int $n, array $extraQuery = []): string
{
    [$path, $title, $desc] = $def;
    $value = path_get(cms_data(), $path);
    if ($value === null) {
        return '';
    }
    if (is_array($value) && array_is_list($value)) {
        [$f, $im] = f_render($value, end($path) === false ? 'items' : (string) end($path), [], $path);
    } elseif (is_string($value)) {
        [$f, $im] = f_render($value, 'text', [], $path);
    } else {
        [$f, $im] = f_children($value, [], $path);
    }
    $action = admin_url($page, $extraQuery);
    return '<details class="sec-form" id="sec-' . h($id) . '"' . ($open ? ' open' : '') . '>'
        . '<summary><span class="num">' . $n . '</span><span class="st"><b>' . h($title) . '</b><small>' . h($desc) . '</small></span><span class="chev">▾</span></summary>'
        . '<form method="post" action="' . h($action) . '" enctype="multipart/form-data" data-cms-form>'
        . '<input type="hidden" name="csrf" value="' . h(csrf_token()) . '">'
        . '<input type="hidden" name="do" value="save"><input type="hidden" name="section" value="' . h($id) . '">'
        . '<input type="hidden" name="version" value="' . (int) (cms_saved()['version'] ?? 0) . '">'
        . '<input type="hidden" name="payload" value="">'
        . '<div class="sec-body' . ($im ? ' has-img' : '') . '" data-node="root"><div class="cols-f">' . ($f ?: '<p class="muted">Nothing to edit.</p>') . '</div>' . ($im ? '<div class="cols-i">' . $im . '</div>' : '') . '</div>'
        . '<div class="sec-foot"><span>Saving updates the live website straight away.</span><button type="submit" class="save">Save this section</button></div>'
        . '</form></details>';
}

function f_page(string $page, array $sections, array $extraQuery = [], string $viewUrl = ''): void
{
    $open = (string) ($_GET['open'] ?? array_key_first($sections));
    echo '<div class="form-top"><div><b>' . count($sections) . ' section' . (count($sections) === 1 ? '' : 's') . '</b> · click a section to open its form</div><div class="ft-actions">'
        . ($viewUrl !== '' ? '<a class="ghost" href="' . h(site_base() . '/' . $viewUrl) . '" target="_blank" rel="noopener">' . icon('eye') . ' View page</a>' : '')
        . '<a class="ghost" href="' . h(admin_url('history')) . '">' . icon('refresh') . ' Restore previous version</a></div></div>';
    $n = 0;
    foreach ($sections as $id => $def) {
        echo f_section($page, (string) $id, $def, (string) $id === $open, ++$n, $extraQuery);
    }
}
