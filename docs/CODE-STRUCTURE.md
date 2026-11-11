# CRETECH website: code structure

```
CRETECH_New/
│
├── index.html                      # Homepage template (slots filled by JS)
├── about.html                      # About page
├── services.html                   # All services list
├── service-detail.html             # One template for every service (by slug)
├── process.html                    # Our Working Process page
├── contact.html                    # Contact page + enquiry form
├── privacy-policy.html             # Legal pages
├── terms-and-conditions.html
├── disclaimer.html
├── 404.html                        # Page not found
│
├── page.php                        # Serves every page: clean URLs, 301s, SEO tags, schema, tracking
├── sitemap.php                     # Builds /sitemap.xml
├── robots.txt                      # Search engine rules
├── .htaccess                       # Apache: routing, security, WebP, cache, upload size, site URL
├── router.php                      # Same routing for the laptop test server
├── .env.example                    # Optional settings template
├── .gitignore                      # Keeps data, uploads and .env out of Git
│
├── app/                            # Server logic (blocked from the browser)
│   ├── store.php                   # Safe read/write of JSON data (locks, version check)
│   ├── cms.php                     # Core: settings, defaults, page list, text cleaning
│   ├── security.php                # Secret key, signed tokens, JSON replies, headers
│   ├── urls.php                    # Clean addresses and old-address redirects
│   ├── seo.php                     # SEO tags, share images, structured data
│   ├── tracking.php                # Google Ads / Analytics, Tag Manager, Ahrefs, Search Console
│   ├── contact-guard.php           # Enquiry spam protection
│   └── contact-mail.php            # Save + email each enquiry
│
├── admin/
│   └── public.php                  # Public data for the site + enquiry submit
│
├── js/
│   ├── script.js                   # Main site script: loads data, renders pages, menu, form
│   └── site-components.js          # Shared HTML: header, footer, heroes, cards, buttons, FAQ, CTA
│
├── css/
│   ├── style.css                   # Base design system (colours, spacing, breakpoints, shared parts)
│   └── cms.css                     # All section and page styles
│
├── content/
│   └── site-config.js              # Default content and images (ALL text lives here)
│
├── assets/images/                  # Logos, favicon
├── uploads/                        # Admin uploads (phase 2); scripts blocked by uploads/.htaccess
├── storage/private/                # enquiries.json, saved content, secret key (server only, not in Git)
├── database/schema.sql             # Optional MySQL table
└── docs/CODE-STRUCTURE.md          # This guide
```

## How a page is built

1. A visitor opens `/services/seo-services`.
2. `.htaccess` (on Apache) or `router.php` (on the laptop) sends the request to `page.php`.
3. `page.php` matches the address (`app/urls.php`) to `service-detail.html`, adds the
   title, description, canonical link, share tags and structured data (`app/seo.php`),
   tracking tags (`app/tracking.php`) and the page data as `window.SITE_DATA`.
4. In the browser, `js/script.js` renders the page into the template's
   `data-slot` areas using the building blocks in `js/site-components.js`.

Old addresses (`about.php`, `terms.php`, `about.html`, `/About`, `/about/`) redirect
permanently (301) to the clean address, so old links and Google results keep working.

## Changing content

All text, services, FAQs, steps and image links are in `content/site-config.js`.

- Keep it strict JSON after `window.SITE_CONFIG =` (double quotes, no comments,
  no trailing commas), because `app/cms.php` reads the same file on the server.
- In text, `*word*` shows as orange italic and `\n` is a line break.
- Images are Unsplash photo IDs (`photo-...`) or full image URLs.
- The homepage hero is a slider: each item in `home.heroSlides` is one slide:
  `label`, `titleLines`, `script` (the highlighted word), `intro`, `primary` /
  `secondary` buttons, `image` + `imageSmall`, `imageAlt`, `focus` (which part of
  the photo stays visible on phones, e.g. "84% center"), `zoomFrom` (where the slow
  zoom grows from, default "center"; use "right center" when the subject reaches
  the right edge) and `textTone: "light"`
  (white text, for dark photos). The stats in `home.heroStats` show on every slide
  (a slide can override them with its own `stats`).
  Motion: a new slide every 5 s (1.2 s cross-fade, slow Ken Burns zoom), heading
  words rise one by one, then paragraph and buttons; a gold light sweeps over the
  script word. Photos 2+ load 1.5 s after the page. All timings: `css/cms.css`
  (hero section) and `js/script.js` (Hero slider). The header is a separate
  component, so slides never touch the logo or menu.
  Hero photos live in `assets/images/hero/`: a **20:9** JPG (2400 x 1080) plus a
  1200 x 540 copy for phones. Keep the left ~45% of the photo empty (text goes
  there) and the top ~12% clear (header). Banner height is `--banner-h` and text
  size is `--s`, both in css/cms.css.
- "For Every Step of Your Journey" (after the services cards) is `home.journeySection`:
  `background` (image + phone copy + colours), `eyebrow`, `title`, `paragraphs`, five
  `cards` (icon, title, text, image, cta, `box` = position on the 1672 x 941 desktop canvas,
  `photoAt` = where the photo starts in % of the card), five `milestones` (label, x, y,
  side `right` / `left` / `below`). Images: `assets/images/journey/` (background
  2400 x 1350, card photos 800 x 1000 portrait). Code:
  `homeJourney()` in js/site-components.js, styles under "For Every Step" in css/cms.css.
  Below 981px the cards stack and the pins become a row of labels.
- "What We Build" (after the journey section) is `home.buildSection`: `background`,
  `eyebrow`, `title`, `text`, `path` (start / end points, colours, width, flag) and eight
  `cards` (number, title, text, image, `box`, `imageBox`, `marker`, optional `textWidth`;
  all px on the 1671 x 941 canvas). The orange line is drawn as a smooth curve through
  every marker. Images: `assets/images/build/`. Code: `homeBuild()` in
  js/site-components.js, styles under "What We Build" in css/cms.css. Below 981px it
  becomes a vertical timeline (line + numbered circles on the left).
- "Why Choose CRETECH" (after "What We Build") is `home.whySection`: `background`,
  `eyebrow`, `title`, `text`, `visual` (centre picture + its `box`), `line` (colour, width,
  dot colour) and six `boxes` (title, text, `box`, `node`, `line` = SVG path to the
  picture, optional `titleSize` / `textSize` / `lineHeight`; all px on the 1670 x 941
  canvas). In box texts `\n` is a line break on desktop only. The checklist words are
  part of the picture. Images: `assets/images/why/`. Code: `homeWhy()` in
  js/site-components.js, styles under "Why Choose CRETECH" in css/cms.css. Below 981px:
  heading, picture, then the boxes (2 columns, 1 on phones).
- "What Makes CRETECH Different?" (after "Why Choose CRETECH") is `home.differentSection`:
  `background`, `title`, `glass` (opacity 0-1 + blur px for every card) and four `cards` in
  display order (title, text, image, `tint` = 3 glass colours, `edge` colour, `box`,
  `imageBox`, optional `titleSize` / `textSize` / `lineHeight`; px on the 1774 x 887 canvas).
  Images: `assets/images/different/`. Code: `homeDifferent()` in js/site-components.js,
  styles under "What Makes CRETECH Different?" in css/cms.css. Below 981px: 2 columns, 1 on phones.
- "Our Working Process" (after "What Makes CRETECH Different?") is `home.processFlow`: `background`,
  `eyebrow`, `title`, `text`, `glass` (opacity + blur), `line` (colour + width) and four `cards` in
  display order (number, title, text, `tint`, `edge`, optional `titleColor` / `titleSize` / `textSize` /
  `lineHeight`, `box`, `node` + `line` = connector to the next card; px on the 1752 x 897 canvas).
  Background: `assets/images/process/`. Code: `homeFlow()` in js/site-components.js, styles under
  "Our Working Process" in css/cms.css. Below 981px: vertical list with a line and dots.
- "Frequently Asked Questions" (after the new Working Process) is `home.faqSection`: `background`,
  `title`, `text`, `glass`, `button` (plus colour + background) and eight `items` in order (number, q,
  a, `tint`, `edge`, `glassImage` = row glass picture drawn as a 9-slice so rows can grow). Code:
  `homeFaq()` in js/site-components.js, the open/close in js/script.js (one answer at a time),
  styles under "Frequently Asked Questions" in css/cms.css. Images: `assets/images/faq/`.
- Logos: `assets/images/logo.svg` (light backgrounds) and `logo-white.svg` (dark).
- A new service needs only a new item in `"services"` with a unique `slug`;
  its page, footer link, sitemap entry and contact-form option appear automatically.

In phase 2 the admin panel saves edits to `storage/private/cms.json`, which is merged
on top of these defaults.

## Enquiries

The contact form posts to `admin/public.php?action=enquiry`. Each enquiry is checked
(`app/contact-guard.php`: hidden field, signed time token, 5 per hour per visitor,
link limit), saved to `storage/private/enquiries.json` and emailed (`app/contact-mail.php`).
Saving first means no enquiry is lost if email is not configured.

## Run on your laptop

```
cd CRETECH_New
php -S localhost:8000 router.php
```

Open http://localhost:8000. Enquiries are saved locally, but email will not send
unless PHP mail is configured.

With XAMPP, copy the folder into `htdocs` and open `http://localhost/CRETECH_New/`
(the subfolder is detected automatically; mod_rewrite must be on).

## Before going live

- Copy `.env.example` to `.env` and set `SITE_URL` (e.g. `https://cretech.in`) and `MAIL_TO`.
- Update the domain in `robots.txt`.
- Replace the demo phone number, social links and starter legal text in `content/site-config.js`.
- Make sure `storage/` is writable by PHP.

## Phase 2 (admin panel)

Planned, following the same structure: `admin/index.php` (login + screens),
`admin/bootstrap.php`, `admin/api.php`, `admin/setup.php`, `admin/logout.php`,
`admin/assets/*` editors, plus `app/collections.php`, `app/services-page.php`,
`app/home.php`, `app/design.php` and `app/public-cache.php`.
