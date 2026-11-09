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
