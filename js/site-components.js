/*
 * Shared HTML building blocks: header, footer, page heroes, cards, buttons, FAQ, steps, CTA.
 * Every piece of text goes through esc() or rich(), so content can never inject HTML.
 */
(function () {
  "use strict";

  var ENTITIES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) { return ENTITIES[c]; });
  }

  /* Text markup from content: *word* -> orange italic, \n -> line break */
  function rich(value) {
    return esc(value).replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/\n/g, "<br>");
  }

  /* Links are relative to <base href> so they work on a domain and in a subfolder. */
  function link(href) {
    var h = String(href == null ? "" : href).trim();
    if (/^(https?:|mailto:|tel:)/i.test(h)) return esc(h);
    if (/^[a-z][a-z0-9+.-]*:/i.test(h)) return "#"; // javascript:, data: ...
    h = h.replace(/^\/+/, "");
    return h === "" ? "./" : esc(h);
  }

  function isExternal(href) {
    return /^https?:/i.test(String(href || ""));
  }

  function image(idOrUrl, width) {
    var v = String(idOrUrl || "");
    if (/^https?:/i.test(v) || v.indexOf("/") !== -1) return v; // full URL or a local file path

    return "https://images.unsplash.com/" + v + "?auto=format&fit=crop&w=" + (width || 700) + "&q=80";
  }

  function button(btn, cls, arrow) {
    if (!btn || !btn.label) return "";
    var ext = isExternal(btn.href) ? ' target="_blank" rel="noopener"' : "";
    return '<a class="btn ' + (cls || "btn-orange") + '" href="' + link(btn.href) + '"' + ext + ">" +
      esc(btn.label) + (arrow === false ? "" : " <span aria-hidden=\"true\">→</span>") + "</a>";
  }

  /* Small inline icons (crisp at any size, coloured by CSS) */
  var ICONS = {
    arrowUpRight: '<svg class="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    chevronDown: '<svg class="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  function brand(site, light, extraClass) {
    var src = light ? (site.logoLight || site.logo) : site.logo;
    return '<a class="brand ' + (extraClass || "") + '" href="./" aria-label="' + esc(site.name) + ' home">' +
      '<img src="' + esc(src) + '" alt="' + esc(site.name + " " + (site.tagline || "")) + '" width="1020" height="262"></a>';
  }

  function header(data, page) {
    var activePage = page === "service-detail" ? "services" : page;
    var nav = (data.nav || []).map(function (item) {
      var active = item.page === activePage;
      var attrs = active ? ' class="active" aria-current="page"' : "";
      if (item.dropdown === "services" && (data.services || []).length) {
        var items = data.services.map(function (s) {
          return '<a href="services/' + esc(s.slug) + '">' + esc(s.title) + "</a>";
        }).join("");
        return '<div class="nav-item has-dropdown"><a href="' + link(item.href) + '"' + attrs + ">" + esc(item.label) + " " + ICONS.chevronDown + "</a>" +
          '<div class="nav-dropdown">' + items + "</div></div>";
      }
      return '<a href="' + link(item.href) + '"' + attrs + ">" + esc(item.label) + "</a>";
    }).join("");
    var cta = data.headerCta || {};
    return '<header class="site-header">' + brand(data.site) + '<span class="header-divider" aria-hidden="true"></span>' +
      '<nav class="main-nav" id="main-nav" aria-label="Main">' + nav + "</nav>" +
      '<a class="talk-btn" href="' + link(cta.href) + '">' + esc(cta.label) + " " + ICONS.arrowUpRight + "</a>" +
      '<button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="main-nav"><span></span><span></span><span></span></button>' +
      "</header>";
  }

  /*
   * Homepage hero. Every slide is one item in home.heroSlides; the header is
   * rendered separately, so adding slides never touches the logo or navigation.
   */
  var SCRIPT_SPARK = '<svg class="script-spark" viewBox="0 0 60 60" aria-hidden="true"><path d="M30 8 42 26M8 30l24 6M14 52l20-6" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>';
  var SCRIPT_SWASH = '<svg class="script-swash" viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true"><path d="M4 32C120 18 260 10 396 6" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg>';

  var POSITION = /^((left|right|center|top|bottom|[0-9.]+%) ?){1,2}$/;
  function heroImgStyle(slide) {
    var parts = [];
    if (POSITION.test(slide.focus || "")) parts.push("--focus: " + slide.focus);
    if (POSITION.test(slide.zoomFrom || "")) parts.push("--zoom-from: " + slide.zoomFrom);
    return parts.length ? ' style="' + esc(parts.join("; ")) + '"' : "";
  }

  function heroSlide(slide, index, total, sharedStats) {
    var first = index === 0;
    var heading = first ? "h1" : "h2"; // one h1 per page
    var lines = (slide.titleLines || []).map(function (l) { return '<span class="hero-line">' + esc(l) + "</span>"; }).join("");
    // The script word is the highlighted part of the heading (accent colour + gold sweep).
    var script = slide.script ? '<span class="hero-script">' + SCRIPT_SPARK + "<span>" + esc(slide.script) + "</span>" + SCRIPT_SWASH + "</span>" : "";
    var stats = (slide.stats || sharedStats || []).map(function (s) {
      return "<li><strong>" + esc(s.value) + "</strong><span>" + esc(s.label) + "</span></li>";
    }).join("");
    var buttons = (slide.primary ? '<a class="hero-btn hero-btn-primary" href="' + link(slide.primary.href) + '">' + esc(slide.primary.label) + " " + ICONS.arrowUpRight + "</a>" : "") +
      (slide.secondary ? '<a class="hero-btn hero-btn-outline" href="' + link(slide.secondary.href) + '">' + esc(slide.secondary.label) + "</a>" : "");
    // Only the first photo loads straight away; the others wait in data-src / data-srcset
    // and are loaded by js/script.js shortly after the page has finished loading.
    var src = first ? ' src="' : ' data-src="';
    var srcset = first ? ' srcset="' : ' data-srcset="';
    var img = '<picture class="hero-media">' +
      (slide.imageSmall ? '<source media="(max-width: 760px)"' + srcset + esc(slide.imageSmall) + '">' : "") +
      "<img" + src + esc(slide.image) + '" alt="' + esc(slide.imageAlt) + '" width="2400" height="1080"' +
      // focus = which part of the photo stays in view on phones, e.g. "84% center"
      // zoomFrom = the point the slow zoom grows from, e.g. "right center" keeps the right edge uncut
      heroImgStyle(slide) +
      (first ? ' fetchpriority="high"' : ' decoding="async"') + "></picture>";

    return '<article class="hero-slide' + (first ? " is-active" : "") + (slide.textTone === "light" ? " text-light" : "") + '" aria-roledescription="slide" aria-label="' + (index + 1) + " of " + total + '"' +
      ' aria-hidden="' + (first ? "false" : "true") + '">' + img +
      '<div class="hero-content">' +
      (slide.label ? '<p class="hero-label">' + esc(slide.label) + "</p>" : "") +
      "<" + heading + ' class="hero-title">' + lines + script + "</" + heading + ">" +
      (slide.intro ? '<p class="hero-intro">' + esc(slide.intro) + "</p>" : "") +
      (buttons ? '<div class="hero-buttons">' + buttons + "</div>" : "") +
      (stats ? '<ul class="hero-stats">' + stats + "</ul>" : "") +
      "</div></article>";
  }

  /* stats = shown on every slide unless a slide has its own "stats" */
  function heroSlider(slides, stats) {
    slides = slides || [];
    if (!slides.length) return "";
    return '<section class="hero-slider" aria-roledescription="carousel" aria-label="Highlights">' +
      slides.map(function (s, i) { return heroSlide(s, i, slides.length, stats); }).join("") + "</section>";
  }

  /* Footer: cream/peach band, 4 columns with thin dividers, orange chevrons, outlined social squares.
     Text and links come from site.footerTagline / site.footerText / footerLinks / site.socials. */
  var SOCIAL_ICONS = {
    linkedin: '<path d="M6.5 10v8.5M6.5 6.3v.01M11 18.5v-5.3a2.8 2.8 0 0 1 5.6 0v5.3M11 10v8.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>',
    facebook: '<path d="M13.6 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21z" fill="currentColor"/>',
    instagram: '<rect x="3.6" y="3.6" width="16.8" height="16.8" rx="5" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="3.9" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/>',
    x: '<path d="M4.2 4h4.6l11 16h-4.6z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M19.6 4l-6.3 7.2M10.7 12.8 4.4 20" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>'
  };
  var CHEVRON = '<svg class="ft-chev" viewBox="0 0 16 16" aria-hidden="true"><path d="m6 3.5 4.5 4.5L6 12.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function footer(data) {
    var site = data.site || {};
    var links = data.footerLinks || {};
    var list = function (items) {
      return "<ul>" + (items || []).map(function (l) { return '<li><a href="' + link(l.href) + '">' + CHEVRON + "<span>" + esc(l.label) + "</span></a></li>"; }).join("") + "</ul>";
    };
    var services = links.services || (data.services || []).map(function (s) { return { label: s.title, href: "services/" + s.slug }; });
    // a social with no real address is shown as an icon only (no made-up link)
    var socials = (site.socials || []).map(function (s) {
      var key = String(s.icon || s.label || "").toLowerCase().replace(/[^a-z]/g, "");
      var svg = '<svg viewBox="0 0 24 24" aria-hidden="true">' + (SOCIAL_ICONS[key] || "") + "</svg>";
      var real = s.url && s.url !== "#";
      return real ? '<a class="ft-social" href="' + link(s.url) + '" aria-label="' + esc(s.label) + '"' + (isExternal(s.url) ? ' target="_blank" rel="noopener"' : "") + ">" + svg + "</a>"
        : '<span class="ft-social" role="img" aria-label="' + esc(s.label) + '">' + svg + "</span>";
    }).join("");
    var legal = (links.legal || []).map(function (l) { return '<a href="' + link(l.href) + '">' + esc(l.label) + "</a>"; }).join('<span class="ft-sep" aria-hidden="true"></span>');
    return '<footer class="site-footer"><div class="ft-in">' +
      '<div class="ft-cols">' +
      '<div class="ft-col ft-brand"><a class="ft-logo" href="./" aria-label="' + esc(site.name) + ' home"><img src="' + esc(site.logo) + '" alt="' + esc(site.name) + '" width="1020" height="262" loading="lazy"></a>' +
      (site.footerTagline ? '<p class="ft-tag">' + esc(site.footerTagline) + "</p>" : "") +
      "<p class=\"ft-text\">" + esc(site.footerText) + '</p><span class="ft-dash" aria-hidden="true"></span></div>' +
      '<div class="ft-col ft-quick"><h3>Quick Links</h3>' + list(links.quick) + "</div>" +
      '<div class="ft-col ft-services"><h3>Our Services</h3>' + list(services) + "</div>" +
      '<div class="ft-col ft-follow"><h3>Follow Us</h3><div class="ft-socials">' + socials + "</div></div>" +
      "</div>" +
      '<div class="ft-bottom"><p class="ft-copy">Copyright © ' + new Date().getFullYear() + " " + esc(site.name) + ". All Rights Reserved.</p>" +
      '<nav class="ft-legal" aria-label="Legal">' + legal + "</nav></div>" +
      "</div></footer>";
  }

  function subHero(hero) {
    hero = hero || {};
    return '<section class="sub-hero"><h1>' + rich(hero.title) + "</h1>" + (hero.text ? "<p>" + rich(hero.text) + "</p>" : "") + "</section>";
  }

  function sectionHeading(title, text, btn) {
    return '<div class="section-heading"><div><h2>' + rich(title) + "</h2>" + (text ? "<p>" + rich(text) + "</p>" : "") + "</div>" +
      (btn ? button(btn, "btn-outline small") : "") + "</div>";
  }

  function serviceCard(service, useSummary) {
    return '<a class="service-card" href="services/' + esc(service.slug) + '">' +
      '<div class="service-photo" style="background-image:url(\'' + esc(image(service.image, 700)) + '\')"></div>' +
      '<div class="service-info"><span class="service-icon" aria-hidden="true">' + esc(service.icon) + "</span>" +
      "<div><h3>" + esc(service.title) + "</h3><p>" + esc(useSummary ? service.summary : service.short) + "</p></div>" +
      '<span class="circle-arrow" aria-hidden="true">↗</span></div></a>';
  }

  /* ---------- Homepage "What We Can Do for You" section ---------- */

  // Orange outline icons for the homepage service cards (24x24 grid, coloured by CSS)
  var SERVICE_ICONS = {
    code: '<path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16"/>',
    phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M11 18.5h2"/>',
    layers: '<path d="m12 3 9 4.8-9 4.8-9-4.8L12 3Z"/><path d="m3 12.2 9 4.8 9-4.8"/><path d="m3 16.4 9 4.8 9-4.8"/>',
    search: '<circle cx="10" cy="10" r="6.5"/><path d="m15 15 6 6"/>',
    megaphone: '<path d="M3 10v4a1 1 0 0 0 1 1h3l9 5V4L7 9H4a1 1 0 0 0-1 1Z"/><path d="m7 15 1.5 5h2.5L10 15.5M19 9.5a3 3 0 0 1 0 5"/>',
    share: '<circle cx="12" cy="5" r="2.3"/><circle cx="5" cy="18" r="2.3"/><circle cx="19" cy="18" r="2.3"/><path d="m10.9 7.1-4.8 8.8M13.1 7.1l4.8 8.8M7.3 18h9.4"/>',
    document: '<path d="M6 2.5h8l4.5 4.5v14.5H6z"/><path d="M14 2.5V7h4.5M9 11h6.5M9 14.5h6.5M9 18h4.5"/>',
    image: '<rect x="2.5" y="4" width="19" height="16" rx="2"/><circle cx="16" cy="9" r="1.7"/><path d="m2.5 17 6-6 5 5 2.5-2.5 5 5"/>'
  };
  var CARD_ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h11M12.5 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function homeServiceCard(card, service) {
    var icon = SERVICE_ICONS[card.icon] || SERVICE_ICONS.code;
    var photo = image(card.image || service.image, 704);
    return '<a class="svc-card" href="services/' + esc(service.slug) + '">' +
      '<div class="svc-media"><img src="' + esc(photo) + '" alt="' + esc(service.title) + '" width="704" height="320" loading="lazy" decoding="async"></div>' +
      // the same photo, blurred, shows through the frosted text panel (css: .svc-body::before)
      // (full URL, because a relative path inside a CSS variable is read from the css/ folder)
      '<div class="svc-body" style="--card-photo: url(&quot;' + esc(new URL(photo, document.baseURI).href) + '&quot;)">' +
      '<svg class="svc-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + icon + "</svg>" +
      '<div class="svc-text"><h3>' + rich(card.title || service.title) + "</h3><p>" + esc(card.text || service.short).replace(/-/g, "&#8209;") /* keep "high-performance" on one line */ + "</p></div>" +
      '<span class="svc-arrow">' + CARD_ARROW + "</span>" +
      "</div></a>";
  }

  function homeServices(section, services) {
    var bySlug = {};
    (services || []).forEach(function (s) { bySlug[s.slug] = s; });
    var cards = (section.cards || []).filter(function (c) { return bySlug[c.slug]; }).map(function (c) {
      return homeServiceCard(c, bySlug[c.slug]);
    }).join("");
    var btn = section.button;
    return '<section class="home-services">' +
      '<div class="svc-head"><div class="svc-head-copy"><span class="svc-kicker" aria-hidden="true"></span>' +
      "<h2>" + rich(section.title) + "</h2>" + (section.text ? "<p>" + esc(section.text) + "</p>" : "") + "</div>" +
      (btn ? '<a class="svc-all" href="' + link(btn.href) + '">' + esc(btn.label) + " " + ICONS.arrowUpRight + "</a>" : "") + "</div>" +
      '<div class="svc-grid">' + cards + "</div>" +
      '<svg class="svc-wave" viewBox="0 0 1600 120" preserveAspectRatio="none" aria-hidden="true">' +
      '<defs><linearGradient id="svcWave" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#f9c79c" stop-opacity=".25"/><stop offset=".55" stop-color="#f7a25d" stop-opacity=".55"/><stop offset="1" stop-color="#f47721"/></linearGradient></defs>' +
      '<path d="M0 92C260 64 520 58 800 74s560 22 800-38V120H0Z" fill="#fde9d8"/>' +
      '<path d="M0 108C320 86 640 84 940 96s460 4 660-52v76H0Z" fill="url(#svcWave)"/></svg>' +
      "</section>";
  }

  /* ---------- Homepage "For Every Step of Your Journey" section ----------
     Desktop: a 1672 x 941 canvas (the background photo); cards and milestone pins are
     placed on it with the px positions from content (box / x / y). Smaller screens: normal flow. */

  // Solid orange card glyphs, 24x24 grid (holes use evenodd)
  var JOURNEY_ICONS = {
    graduation: '<path d="M12 3.6 1.2 8.8 12 14l8.3-4v5.3h1.7V9.2L12 3.6Z"/><path d="M5.3 11.9v3.9c0 1.7 3 3.4 6.7 3.4s6.7-1.7 6.7-3.4v-3.9L12 15.2l-6.7-3.3Z"/><path d="M20.3 15.3h1.7l.6 3.3h-2.9l.6-3.3Z"/>',
    user: '<circle cx="12" cy="7.4" r="4.3"/><path d="M3.4 21c0-4.7 3.9-7.6 8.6-7.6s8.6 2.9 8.6 7.6H3.4Z"/>',
    rocket: '<path d="M21 3c-4.9-.3-8.8 1.6-11.5 5.6l-3.6.2L2.8 12l4 1 4.2 4.2 1 4 3.2-3.1.2-3.6C19.4 11.8 21.3 7.9 21 3Zm-5.4 7.3a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/><path d="M6.6 15.4c-1.8.3-2.9 2-3.2 5.2 3.2-.3 4.9-1.4 5.2-3.2l-2-2Z"/>',
    store: '<path d="M3.4 3.5h17.2l1.6 5.3a3.2 3.2 0 0 1-5.6 2.4 3.3 3.3 0 0 1-4.6.3 3.3 3.3 0 0 1-4.6-.3A3.2 3.2 0 0 1 1.8 8.8l1.6-5.3Z"/><path d="M3.5 13.4V21h6.2v-5.4h4.6V21h6.2v-7.6a4.9 4.9 0 0 1-3.6-.7 5 5 0 0 1-4.9.3 5 5 0 0 1-4.9-.3 4.9 4.9 0 0 1-3.6.7Z"/>',
    building: '<path d="M2.5 21.5V8.5h5v-6h9v6h5v13H14v-4h-4v4H2.5ZM4.6 10.6v2h2v-2h-2Zm0 4v2h2v-2h-2Zm5-10v2h1.8v-2H9.6Zm3 0v2h1.8v-2h-1.8Zm-3 4v2h1.8v-2H9.6Zm3 0v2h1.8v-2h-1.8Zm-3 4v2h1.8v-2H9.6Zm3 0v2h1.8v-2h-1.8Zm4.8-2v2h2v-2h-2Zm0 4v2h2v-2h-2Z"/>'
  };
  var CANVAS_W = 1672, CANVAS_H = 941;

  function journeyIcon(name, cls) {
    return '<span class="' + cls + '" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd">' +
      (JOURNEY_ICONS[name] || JOURNEY_ICONS.rocket) + "</svg></span>";
  }

  // CSS url() needs an absolute address (a relative one is read from the css/ folder)
  function cssUrl(path) {
    return path ? "url(&quot;" + esc(new URL(image(path, 1800), document.baseURI).href) + "&quot;)" : "none";
  }

  function journeyCard(card) {
    var b = card.box || {};
    var cta = card.cta && card.cta.label ? '<a class="jr-card-cta" href="' + link(card.cta.href) + '">' + esc(card.cta.label) + " " + ICONS.arrowUpRight + "</a>" : "";
    return '<article class="jr-card" style="--x:' + (+b.x || 0) + ";--y:" + (+b.y || 0) + ";--w:" + (+b.w || 400) + ";--h:" + (+b.h || 260) +
      ";--photo-at:" + (+card.photoAt || 55) + '%">' +
      '<div class="jr-card-in">' +
      (card.image ? '<img class="jr-photo" src="' + esc(image(card.image, 600)) + '" alt="' + esc(card.imageAlt || "") + '" loading="lazy" decoding="async">' : "") +
      '<div class="jr-copy">' + journeyIcon(card.icon, "jr-icon") +
      "<h3>" + rich(card.title) + "</h3><p>" + esc(card.text) + "</p></div>" + cta +
      "</div></article>";
  }

  function journeyPin(m, i) {
    return '<li class="jr-pin" data-side="' + (/^(left|below)$/.test(m.side) ? m.side : "right") + '" style="--x:' + (+m.x || 0) + ";--y:" + (+m.y || 0) + '">' +
      '<svg class="jr-pin-mark" viewBox="0 0 40 56" aria-hidden="true"><defs><linearGradient id="jrPin' + i + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff9a3c"/><stop offset="1" stop-color="#f25c05"/></linearGradient></defs>' +
      '<ellipse class="jr-pin-glow" cx="20" cy="53" rx="13" ry="3.2"/>' +
      '<path d="M20 2C10.6 2 3.5 9.2 3.5 18.3 3.5 30 20 52 20 52s16.5-22 16.5-33.7C36.5 9.2 29.4 2 20 2Z" fill="url(#jrPin' + i + ')" stroke="#fff" stroke-opacity=".55" stroke-width="1.4"/>' +
      '<circle cx="20" cy="18" r="6.6" fill="#fff"/></svg>' +
      '<span class="jr-pin-label"><b>' + String(i + 1).padStart(2, "0") + "</b>" + esc(m.label) + "</span></li>";
  }

  function homeJourney(section) {
    if (!section) return "";
    var bg = section.background || {};
    var style = "--jr-bg:" + cssUrl(bg.image) + ";--jr-bg-sm:" + cssUrl(bg.imageSmall || bg.image) +
      (bg.color ? ";--jr-color:" + esc(bg.color) : "") +
      (bg.gradientTop ? ";--jr-top:" + esc(bg.gradientTop) : "");

    var intro = '<div class="jr-intro">' +
      (section.eyebrow ? '<p class="jr-eyebrow"><span aria-hidden="true"></span>' + esc(section.eyebrow) + "</p>" : "") +
      "<h2>" + rich(section.title) + "</h2>" +
      (section.paragraphs || []).map(function (p) { return '<p class="jr-text">' + esc(p) + "</p>"; }).join("") + "</div>";

    var pins = (section.milestones || []).length ?
      '<ol class="jr-milestones" aria-label="Your journey">' + section.milestones.map(journeyPin).join("") + "</ol>" : "";

    var cards = '<div class="jr-cards">' + (section.cards || []).map(journeyCard).join("") + "</div>";

    return '<section class="journey" style="' + style + '">' +
      '<div class="jr-stage" style="--cw:' + CANVAS_W + ";--ch:" + CANVAS_H + '">' + intro + pins + cards + "</div></section>";
  }

  /* ---------- Homepage "What We Build" section ----------
     Desktop: a 1671 x 941 canvas (the background image). Cards, their pictures and the
     numbered markers sit at canvas px from content; the orange path is a smooth curve
     drawn through path.start, every marker and path.end. Smaller screens: a vertical timeline. */

  var BUILD_W = 1671, BUILD_H = 941;

  // Catmull-Rom curve through the points, as SVG cubic Bezier segments
  function smoothPath(pts) {
    if (pts.length < 2) return "";
    var d = "M" + pts[0][0] + " " + pts[0][1];
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      d += "C" + (p1[0] + (p2[0] - p0[0]) / 6).toFixed(1) + " " + (p1[1] + (p2[1] - p0[1]) / 6).toFixed(1) + " " +
        (p2[0] - (p3[0] - p1[0]) / 6).toFixed(1) + " " + (p2[1] - (p3[1] - p1[1]) / 6).toFixed(1) + " " + p2[0] + " " + p2[1];
    }
    return d;
  }

  function pct(v, total) { return (+v / total * 100).toFixed(3) + "%"; }

  function buildPathSvg(path, cards) {
    path = path || {};
    var pts = [];
    if (path.start) pts.push(path.start.map(Number));
    cards.forEach(function (c) { if (c.marker) pts.push([+c.marker.x, +c.marker.y]); });
    if (path.end) pts.push(path.end.map(Number));
    var colors = path.colors && path.colors.length ? path.colors : ["#FFC93C", "#FF7A00"];
    var stops = '<stop offset="0" stop-color="' + esc(colors[0]) + '" stop-opacity="0"/>' +
      colors.map(function (c, i) {
        return '<stop offset="' + (0.04 + 0.92 * i / Math.max(1, colors.length - 1)).toFixed(3) + '" stop-color="' + esc(c) + '"/>';
      }).join("") + '<stop offset="1" stop-color="' + esc(colors[colors.length - 1]) + '" stop-opacity="0"/>';
    var d = smoothPath(pts), w = +path.width || 5;
    var f = path.flag;
    var flag = f ? '<g class="wb-flag" transform="translate(' + (+f.x) + " " + (+f.y) + ')">' +
      '<path d="M0 0V-66" stroke="#2a2522" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M1.5 -66C14 -60 24 -70 50 -58C36 -52 30 -44 34 -38C18 -46 12 -34 1.5 -40Z" fill="' + esc(f.color || "#FF7A00") + '"/></g>' : "";
    return '<svg class="wb-path" viewBox="0 0 ' + BUILD_W + " " + BUILD_H + '" preserveAspectRatio="none" aria-hidden="true">' +
      '<defs><linearGradient id="wbLine" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="' + BUILD_W + '" y2="0">' + stops + "</linearGradient>" +
      '<filter id="wbGlow" x="-5%" y="-50%" width="110%" height="200%"><feGaussianBlur stdDeviation="6"/></filter></defs>' +
      '<path d="' + d + '" fill="none" stroke="url(#wbLine)" stroke-width="' + (w * 3.2) + '" opacity=".35" filter="url(#wbGlow)"/>' +
      '<path d="' + d + '" fill="none" stroke="url(#wbLine)" stroke-width="' + w + '" stroke-linecap="round"/>' + flag + "</svg>";
  }

  function buildCard(card) {
    var b = card.box || {}, ib = card.imageBox || {};
    var w = +b.w || 270, h = +b.h || 270;
    var imgStyle = "left:" + pct((+ib.x || 0) - (+b.x || 0), w) + ";top:" + pct((+ib.y || 0) - (+b.y || 0), h) +
      ";width:" + pct(+ib.w || w * 0.6, w) + ";height:" + pct(+ib.h || h * 0.35, h);
    return '<article class="wb-card" style="--x:' + (+b.x || 0) + ";--y:" + (+b.y || 0) + ";--w:" + w + ";--h:" + h + (card.textWidth ? ";--tw:" + (+card.textWidth) : "") + '">' +
      (card.image ? '<img class="wb-img" style="' + imgStyle + '" src="' + esc(image(card.image, 400)) + '" alt="' + esc(card.imageAlt || "") + '" loading="lazy" decoding="async">' : "") +
      '<span class="wb-num" aria-hidden="true">' + esc(card.number) + "</span>" +
      "<h3>" + rich(card.title) + '</h3><span class="wb-bar" aria-hidden="true"></span><p>' + esc(card.text) + "</p></article>";
  }

  function homeBuild(section) {
    if (!section) return "";
    var bg = section.background || {};
    var cards = section.cards || [];
    var style = "--wb-bg:" + cssUrl(bg.image) + ";--wb-bg-sm:" + cssUrl(bg.imageSmall || bg.image) +
      (bg.color ? ";--wb-color:" + esc(bg.color) : "") +
      (bg.gradientTop ? ";--wb-top:" + esc(bg.gradientTop) : "") +
      (bg.gradientBottom ? ";--wb-bottom:" + esc(bg.gradientBottom) : "");
    var markers = cards.filter(function (c) { return c.marker; }).map(function (c) {
      return '<span class="wb-marker" style="left:' + pct(c.marker.x, BUILD_W) + ";top:" + pct(c.marker.y, BUILD_H) + '" aria-hidden="true">' + esc(c.number) + "</span>";
    }).join("");
    return '<section class="build" style="' + style + '"><div class="wb-stage" style="--cw:' + BUILD_W + ";--ch:" + BUILD_H + '">' +
      '<div class="wb-intro">' + (section.eyebrow ? '<p class="wb-eyebrow"><span aria-hidden="true"></span>' + esc(section.eyebrow) + "</p>" : "") +
      "<h2>" + rich(section.title) + "</h2>" + (section.text ? '<p class="wb-text">' + esc(section.text) + "</p>" : "") + "</div>" +
      buildPathSvg(section.path, cards) + '<div class="wb-markers">' + markers + "</div>" +
      '<div class="wb-cards">' + cards.map(buildCard).join("") + "</div></div></section>";
  }

  /* ---------- Homepage "Why Choose CRETECH" section ----------
     Desktop: a 1670 x 941 canvas (the background image). Six glass boxes, the centre picture
     and the connector lines / dots sit at canvas px from content. Smaller screens: stacked. */

  var WHY_W = 1670, WHY_H = 941;

  // line breaks that phones can hide without gluing words together
  function softRich(v) { return rich(v).replace(/<br>/g, "<br> "); }

  function svgPathData(d) { return /^[MmLlCcSsQqTtHhVvZz0-9.,\s-]+$/.test(String(d || "")) ? String(d) : ""; }

  function whyBox(b) {
    var r = b.box || {};
    var vars = "--x:" + (+r.x || 0) + ";--y:" + (+r.y || 0) + ";--w:" + (+r.w || 440) + ";--h:" + (+r.h || 195) +
      (b.titleSize ? ";--hs:" + (+b.titleSize) : "") + (b.textSize ? ";--ts:" + (+b.textSize) : "") +
      (b.textWidth ? ";--tw:" + (+b.textWidth) : "") + (b.lineHeight ? ";--lh:" + (+b.lineHeight) : "");
    return '<article class="wy-box" style="' + vars + '"><h3>' + softRich(b.title) + '</h3><span class="wy-bar" aria-hidden="true"></span><p>' + softRich(b.text) + "</p></article>";
  }

  function homeWhy(section) {
    if (!section) return "";
    var bg = section.background || {}, vis = section.visual || {}, ln = section.line || {};
    var boxes = section.boxes || [];
    var style = "--wy-bg:" + cssUrl(bg.image) + ";--wy-bg-sm:" + cssUrl(bg.imageSmall || bg.image) +
      (bg.color ? ";--wy-color:" + esc(bg.color) : "") +
      (bg.gradientTop ? ";--wy-top:" + esc(bg.gradientTop) : "") +
      (bg.gradientBottom ? ";--wy-bottom:" + esc(bg.gradientBottom) : "");
    var color = esc(ln.color || "#FF7A00"), node = esc(ln.node || ln.color || "#FF8A1E"), lw = +ln.width || 2.4;
    var lines = boxes.map(function (b) {
      var d = svgPathData(b.line), n = b.node;
      return (d ? '<path d="' + d + '" fill="none" stroke="' + color + '" stroke-width="' + lw * 3 + '" opacity=".14" stroke-linecap="round"/>' +
        '<path d="' + d + '" fill="none" stroke="' + color + '" stroke-width="' + lw + '" stroke-linecap="round"/>' : "") +
        (n ? '<circle cx="' + (+n.x) + '" cy="' + (+n.y) + '" r="11" fill="' + node + '" opacity=".22"/><circle cx="' + (+n.x) + '" cy="' + (+n.y) + '" r="6.5" fill="url(#wyNode)"/>' : "");
    }).join("");
    var vb = vis.box || {};
    var visual = vis.image ? '<img class="wy-visual" src="' + esc(image(vis.image, 1400)) + '" alt="' + esc(vis.imageAlt || "") + '" loading="lazy" decoding="async" style="--x:' +
      (+vb.x || 0) + ";--y:" + (+vb.y || 0) + ";--w:" + (+vb.w || 660) + ";--h:" + (+vb.h || 580) + '">' : "";
    return '<section class="why-cre" style="' + style + '"><div class="wy-stage" style="--cw:' + WHY_W + ";--ch:" + WHY_H + '">' +
      '<div class="wy-intro">' + (section.eyebrow ? '<p class="wy-eyebrow"><span aria-hidden="true"></span>' + esc(section.eyebrow) + '<span aria-hidden="true"></span></p>' : "") +
      "<h2>" + rich(section.title) + "</h2>" + (section.text ? '<p class="wy-text">' + softRich(section.text) + "</p>" : "") + "</div>" +
      visual +
      '<svg class="wy-lines" viewBox="0 0 ' + WHY_W + " " + WHY_H + '" preserveAspectRatio="none" aria-hidden="true"><defs>' +
      '<radialGradient id="wyNode" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#ffc06a"/><stop offset="1" stop-color="' + node + '"/></radialGradient></defs>' + lines + "</svg>" +
      '<div class="wy-boxes">' + boxes.map(whyBox).join("") + "</div></div></section>";
  }

  /* ---------- Homepage "What Makes CRETECH Different?" section ----------
     Desktop: a 1774 x 887 canvas (the background image) with four tinted glass cards at
     canvas px from content. Smaller screens: 2 columns, then 1. */

  var DIFF_W = 1774, DIFF_H = 887;
  function cssColor(v) { return /^#[0-9a-f]{3,8}$/i.test(String(v || "")) ? v : ""; }

  function differentCard(card) {
    var b = card.box || {}, ib = card.imageBox || {}, w = +b.w || 390, h = +b.h || 560;
    var t = card.tint || [], vars = "--x:" + (+b.x || 0) + ";--y:" + (+b.y || 0) + ";--w:" + w + ";--h:" + h;
    ["--t1", "--t2", "--t3"].forEach(function (name, i) { if (cssColor(t[i])) vars += ";" + name + ":" + t[i]; });
    if (cssColor(card.edge)) vars += ";--edge:" + card.edge;
    if (card.titleSize) vars += ";--hs:" + (+card.titleSize);
    if (card.textSize) vars += ";--ts:" + (+card.textSize);
    if (card.lineHeight) vars += ";--lh:" + (+card.lineHeight);
    var imgStyle = "left:" + pct((+ib.x || 0) - (+b.x || 0), w) + ";top:" + pct((+ib.y || 0) - (+b.y || 0), h) +
      ";width:" + pct(+ib.w || w, w) + ";height:" + pct(+ib.h || h * 0.45, h);
    return '<article class="df-card" style="' + vars + '">' +
      (card.image ? '<img class="df-img" style="' + imgStyle + '" src="' + esc(image(card.image, 800)) + '" alt="' + esc(card.imageAlt || "") + '" loading="lazy" decoding="async">' : "") +
      '<div class="df-copy"><h3>' + softRich(card.title) + '</h3><span class="df-bar" aria-hidden="true"></span><p>' + softRich(card.text) + "</p></div></article>";
  }

  function homeDifferent(section) {
    if (!section) return "";
    var bg = section.background || {}, glass = section.glass || {};
    var style = "--df-bg:" + cssUrl(bg.image) + ";--df-bg-sm:" + cssUrl(bg.imageSmall || bg.image) +
      (cssColor(bg.color) ? ";--df-color:" + bg.color : "") +
      (cssColor(bg.gradientTop) ? ";--df-top:" + bg.gradientTop : "") +
      (cssColor(bg.gradientBottom) ? ";--df-bottom:" + bg.gradientBottom : "") +
      (glass.opacity != null ? ";--df-alpha:" + Math.round(Math.min(1, Math.max(0, +glass.opacity)) * 100) + "%" : "") +
      (glass.blur != null ? ";--df-blur:" + (+glass.blur || 0) + "px" : "");
    var ch = +section.canvasHeight || DIFF_H; // shorter canvas = less empty space under the cards, same card sizes
    return '<section class="different" style="' + style + '"><div class="df-stage" style="--cw:' + DIFF_W + ";--ch:" + ch + '">' +
      '<h2 class="df-title"><span class="df-dash" aria-hidden="true"></span><span class="df-title-text">' + rich(section.title) + '</span><span class="df-dash" aria-hidden="true"></span></h2>' +
      '<div class="df-cards">' + (section.cards || []).map(differentCard).join("") + "</div></div></section>";
  }

  /* ---------- Homepage "Our Working Process" (zigzag glass flow, reusable) ----------
     A 1752 x 897 canvas (the background image), four tinted glass cards
     up-down-up-down at canvas px from content, orange connectors drawn from each node.
     Smaller screens: a vertical list with a line on the left. */

  var FLOW_W = 1752, FLOW_H = 897;

  function flowCard(card) {
    var b = card.box || {};
    var t = card.tint || [], vars = "--x:" + (+b.x || 0) + ";--y:" + (+b.y || 0) + ";--w:" + (+b.w || 350) + ";--h:" + (+b.h || 400);
    ["--t1", "--t2", "--t3"].forEach(function (name, i) { if (cssColor(t[i])) vars += ";" + name + ":" + t[i]; });
    if (cssColor(card.edge)) vars += ";--edge:" + card.edge;
    if (cssColor(card.titleColor)) vars += ";--title-c:" + card.titleColor;
    if (card.titleSize) vars += ";--hs:" + (+card.titleSize);
    if (card.textSize) vars += ";--ts:" + (+card.textSize);
    if (card.lineHeight) vars += ";--lh:" + (+card.lineHeight);
    var gb = card.glassBox || {}, glass = "";
    if (card.glassImage) {
      var bx = +b.x || 0, by = +b.y || 0, bw = +b.w || 350, bh = +b.h || 400;
      glass = '<img class="fl-glass" src="' + esc(image(card.glassImage, 800)) + '" alt="" aria-hidden="true" decoding="async" style="left:' +
        pct((+gb.x || bx) - bx, bw) + ";top:" + pct((+gb.y || by) - by, bh) + ";width:" + pct(+gb.w || bw, bw) + ";height:" + pct(+gb.h || bh, bh) + '">';
    }
    return '<li class="fl-card' + (glass ? " has-glass" : "") + '" style="' + vars + '">' + glass +
      (card.number ? '<span class="fl-num">' + esc(card.number) + "</span>" : "") +
      "<h3>" + softRich(card.title) + '</h3><span class="fl-bar" aria-hidden="true"></span><p>' + softRich(card.text) + "</p></li>";
  }

  function homeFlow(section, cls) {
    if (!section) return "";
    var bg = section.background || {}, glass = section.glass || {}, ln = section.line || {};
    var cards = section.cards || [];
    var style = "--fl-bg:" + cssUrl(bg.image) + ";--fl-bg-sm:" + cssUrl(bg.imageSmall || bg.image) +
      (cssColor(bg.color) ? ";--fl-color:" + bg.color : "") +
      (cssColor(bg.gradientTop) ? ";--fl-top:" + bg.gradientTop : "") +
      (cssColor(bg.gradientBottom) ? ";--fl-bottom:" + bg.gradientBottom : "") +
      (glass.opacity != null ? ";--fl-alpha:" + Math.round(Math.min(1, Math.max(0, +glass.opacity)) * 100) + "%" : "") +
      (glass.blur != null ? ";--fl-blur:" + (+glass.blur || 0) + "px" : "");
    var color = cssColor(ln.color) || "#FF7A00", lw = +ln.width || 3, gid = String(cls || "flow").replace(/[^a-z0-9-]/gi, "");
    var lines = cards.map(function (c) {
      var d = svgPathData(c.line), n = c.node;
      return (d ? '<path d="' + d + '" fill="none" stroke="' + color + '" stroke-width="' + lw * 3 + '" opacity=".12" stroke-linecap="round"/>' +
        '<path d="' + d + '" fill="none" stroke="' + color + '" stroke-width="' + lw + '" stroke-linecap="round"/>' : "") +
        (n ? '<circle cx="' + (+n.x) + '" cy="' + (+n.y) + '" r="15" fill="' + color + '" opacity=".16"/><circle cx="' + (+n.x) + '" cy="' + (+n.y) + '" r="8.5" fill="url(#flNode-' + gid + ')"/>' : "");
    }).join("");
    var ch = +section.canvasHeight || FLOW_H; // shorter canvas = less empty space under the cards, same card sizes
    return '<section class="flow ' + esc(cls || "") + '" style="' + style + '"><div class="fl-stage" style="--cw:' + FLOW_W + ";--ch:" + ch + '">' +
      '<div class="fl-intro">' + (section.eyebrow ? '<p class="fl-eyebrow"><span aria-hidden="true"></span>' + esc(section.eyebrow) + '<span aria-hidden="true"></span></p>' : "") +
      "<h2>" + rich(section.title) + "</h2>" + (section.text ? '<p class="fl-text">' + softRich(section.text) + "</p>" : "") + "</div>" +
      '<svg class="fl-lines" viewBox="0 0 ' + FLOW_W + " " + ch + '" preserveAspectRatio="none" aria-hidden="true"><defs>' +
      '<radialGradient id="flNode-' + gid + '" cx=".38" cy=".32" r=".75"><stop offset="0" stop-color="#ffd08a"/><stop offset=".45" stop-color="#ff9a2e"/><stop offset="1" stop-color="' + color + '"/></radialGradient></defs>' + lines + "</svg>" +
      '<ol class="fl-cards">' + cards.map(flowCard).join("") + "</ol></div></section>";
  }

  /* ---------- Homepage "Frequently Asked Questions" (glass accordion) ----------
     Desktop: a 1755 x 896 canvas; intro on the left, eight glass rows on the right. Each row's
     glass is a picture (glassImage) drawn as a 9-slice border image, so it keeps its corners and
     edges while the row grows to show the answer. Without a picture the glass is CSS (tint / edge). */

  function faqRow(item, i) {
    var t = item.tint || [], vars = "";
    if (item.glassImage) vars += "--img:" + cssUrl(item.glassImage);
    if (cssColor(t[0])) vars += ";--t1:" + t[0];
    if (cssColor(t[1])) vars += ";--t2:" + t[1];
    if (cssColor(item.edge)) vars += ";--edge:" + item.edge;
    var id = "fx-" + (i + 1);
    return '<div class="fx-item' + (item.glassImage ? " has-img" : "") + '" style="' + vars + '">' +
      '<h3 class="fx-h"><button type="button" class="fx-q" id="' + id + '-q" aria-expanded="false" aria-controls="' + id + '-a">' +
      '<span class="fx-num">' + esc(item.number || String(i + 1).padStart(2, "0") + ".") + "</span>" +
      '<span class="fx-div" aria-hidden="true"></span><span class="fx-text">' + esc(item.q) + "</span>" +
      '<span class="fx-btn" aria-hidden="true"></span></button></h3>' +
      '<div class="fx-a" id="' + id + '-a" role="region" aria-labelledby="' + id + '-q"><div><p>' + esc(item.a) + "</p></div></div></div>";
  }

  function homeFaq(section) {
    if (!section) return "";
    var bg = section.background || {}, glass = section.glass || {}, btn = section.button || {};
    var style = "--fx-bg:" + cssUrl(bg.image) + ";--fx-bg-sm:" + cssUrl(bg.imageSmall || bg.image) +
      (cssColor(bg.color) ? ";--fx-color:" + bg.color : "") +
      (cssColor(bg.gradientTop) ? ";--fx-top:" + bg.gradientTop : "") +
      (cssColor(bg.gradientBottom) ? ";--fx-bottom:" + bg.gradientBottom : "") +
      (glass.opacity != null ? ";--fx-alpha:" + Math.round(Math.min(1, Math.max(0, +glass.opacity)) * 100) + "%" : "") +
      (glass.blur != null ? ";--fx-blur:" + (+glass.blur || 0) + "px" : "") +
      (cssColor(btn.color) ? ";--fx-plus:" + btn.color : "") +
      (cssColor(btn.background) ? ";--fx-btn-bg:" + btn.background : "");
    return '<section class="faqx" style="' + style + '"><div class="fx-stage">' +
      '<div class="fx-intro"><span class="fx-dash" aria-hidden="true"></span><h2>' + rich(section.title) + "</h2>" +
      (section.text ? '<p class="fx-text-intro">' + softRich(section.text) + "</p>" : "") + "</div>" +
      '<div class="fx-list">' + (section.items || []).map(faqRow).join("") + "</div></div></section>";
  }

  /* ---------- About page (recreated from a 1024 px wide reference; sizes n * --u in css/cms.css) ---------- */

  // orange line icons, 24 x 24
  var ABOUT_ICONS = {
    team: '<circle cx="12" cy="7.5" r="3"/><circle cx="5.5" cy="9" r="2.3"/><circle cx="18.5" cy="9" r="2.3"/><path d="M6.5 19.5v-1.3a5.5 5.5 0 0 1 11 0v1.3M1.8 18v-.8a3.7 3.7 0 0 1 5-3.4M22.2 18v-.8a3.7 3.7 0 0 0-5-3.4"/>',
    sprout: '<path d="M12 21v-9"/><path d="M12 12c0-4 2.6-7 7-7 0 4.3-2.8 7-7 7Z"/><path d="M12 14.5C12 11 9.7 8.5 5.5 8.5c0 3.8 2.4 6 6.5 6Z"/>',
    chart: '<path d="M4 20h17"/><path d="M6 20v-4M10.5 20v-7M15 20v-10M19.5 20V6"/><path d="M5 11 10 7l3.5 2.5L20 4"/><path d="M16.5 4H20v3.5"/>',
    bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3Z"/><path d="M12 0v1M4 3l.8.8M20 3l-.8.8M1 10h1M22 10h1"/>',
    target: '<circle cx="11" cy="13" r="8"/><circle cx="11" cy="13" r="4.5"/><circle cx="11" cy="13" r="1.2"/><path d="m11 13 8-8M16 5h3v3"/>',
    laptop: '<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19.5h20l-1.5-3.5h-17Z"/>',
    handplant: '<path d="M12 12V7"/><path d="M12 8c0-2.5 1.7-4.5 4.5-4.5 0 2.7-1.8 4.5-4.5 4.5ZM12 9.5C12 7.3 10.5 5.5 8 5.5c0 2.3 1.6 4 4 4Z"/><path d="M2 15.5h3.5l3 2h4a1.5 1.5 0 0 0 0-3h-3"/><path d="M8.5 17.5h6.2l5.6-3.1a1.6 1.6 0 0 1 1.7 2.7L15 21.5H8L5.5 20H2"/>',
    trust: '<path d="M12 2.5 4.5 5.5v6c0 4.6 3.2 8.6 7.5 10 4.3-1.4 7.5-5.4 7.5-10v-6Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    responsibility: '<rect x="5" y="4" width="14" height="17.5" rx="2"/><path d="M9 4V2.5h6V4"/><path d="m8.5 11.5 1.8 1.8 3.2-3.3M8.5 17h7"/>',
    creativity: '<path d="M12 3c-5 0-9 3.6-9 8.2 0 3.3 2.6 5.3 5.4 5.3 1.5 0 2.1 1 2.1 2.3 0 1.4 1 2.2 2.4 2.2 4.6 0 7.1-4.5 7.1-9.5S16.8 3 12 3Z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="11" cy="7.5" r="1.2"/><circle cx="15.5" cy="8.5" r="1.2"/>',
    quality: '<circle cx="12" cy="9" r="6"/><path d="m12 6 1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2L8.8 8.3 11 8Z"/><path d="M8.5 14 7 21.5l5-2.5 5 2.5-1.5-7.5"/>',
    signature: '<path d="M3 17c3-1 5.5-5 6.5-9.5.5-2.2-1.6-2.7-2.2-.4-1 4 .2 9.5 2.7 9.5 1.8 0 2.4-3.7 3.6-3.7 1.3 0 .4 3.4 2 3.4 1.2 0 2-1.5 3-2.6"/><path d="M2 21h20"/>'
  };
  function aboutIcon(name, cls) {
    return '<span class="' + (cls || "ab-ic") + '" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
      (ABOUT_ICONS[name] || "") + "</svg></span>";
  }
  function aboutDash() { return '<span class="ab-dash" aria-hidden="true"></span>'; }
  function paras(list, cls) { return (list || []).map(function (p) { return '<p class="' + (cls || "") + '">' + rich(p) + "</p>"; }).join(""); }

  function aboutPage(a) {
    a = a || {};
    var b = a.banner || {}, intro = a.intro || {}, why = a.why || {}, be = a.belief || {}, rq = a.requirements || {},
      th = a.think || {}, pe = a.people || {}, pa = a.partner || {};

    var banner = '<section class="ab-banner" style="--ab-banner:' + cssUrl(b.image) + '"><div class="ab-wrap ab-banner-in">' +
      '<p class="ab-eyebrow">' + esc(b.eyebrow) + "</p><h1>" + softRich(b.title) + '<svg class="ab-swash" viewBox="0 0 200 24" preserveAspectRatio="none" aria-hidden="true"><path d="M3 19C55 6 120 3 197 9M40 22C80 15 130 13 170 15" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/></svg></h1>' +
      (b.text ? '<p class="ab-banner-text">' + esc(b.text) + "</p>" : "") + "</div></section>";

    var introHtml = '<section class="ab-intro"><div class="ab-wrap ab-intro-in"><h2>' + softRich(intro.title) + '</h2><span class="ab-vline" aria-hidden="true"></span><p>' + esc(intro.text) + "</p></div></section>";

    var whyHtml = '<section class="ab-why"><div class="ab-wrap ab-why-in">' +
      '<img class="ab-why-img" src="' + esc(image(why.image, 1000)) + '" alt="' + esc(why.imageAlt || "") + '" loading="lazy" decoding="async">' +
      '<div class="ab-why-copy">' + aboutDash() + "<h2>" + rich(why.title) + '</h2><p class="ab-lead">' + esc(why.lead) + "</p><p>" + esc(why.text) + "</p>" +
      '<ul class="ab-points">' + (why.points || []).map(function (p) { return "<li>" + aboutIcon(p.icon, "ab-box") + "<b>" + softRich(p.title) + "</b></li>"; }).join("") + "</ul></div></div></section>";

    var beliefHtml = '<section class="ab-belief"><div class="ab-wrap">' + aboutDash() + '<p class="ab-kicker">' + esc(be.eyebrow) + "</p>" +
      '<blockquote class="ab-quote"><span class="ab-qmark" aria-hidden="true">“</span>' + rich(be.quote) + "</blockquote>" +
      '<div class="ab-belief-cols">' + paras(be.paragraphs) + "</div></div></section>";

    var reqHtml = '<section class="ab-req"><div class="ab-wrap ab-req-in"><div class="ab-req-copy">' + aboutDash() + "<h2>" + rich(rq.title) + "</h2><p>" + esc(rq.text) + "</p></div>" +
      '<ol class="ab-req-list">' + (rq.items || []).map(function (it, i) {
        return '<li><span class="ab-req-num">' + String(i + 1).padStart(2, "0") + "</span><div><h3>" + esc(it.title) + "</h3><p>" + esc(it.text) + "</p></div></li>";
      }).join("") + "</ol></div></section>";

    // dashed connectors between the circles: curve up, down, up (like the reference)
    var thinkHtml = '<section class="ab-think" style="--ab-think:' + cssUrl(th.background) + '"><div class="ab-wrap">' + aboutDash() + "<h2>" + rich(th.title) + "</h2><p class=\"ab-sub\">" + esc(th.text) + "</p>" +
      '<ol class="ab-steps">' + (th.steps || []).map(function (s, i) {
        var arrow = i ? '<svg class="ab-arrow ' + (i % 2 ? "up" : "down") + '" viewBox="0 0 120 30" aria-hidden="true"><path d="M4 ' + (i % 2 ? "22C40 4 80 4 112 18" : "8C40 26 80 26 112 12") + '" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6" stroke-linecap="round"/><path d="' + (i % 2 ? "M104 12l9 6-10 3" : "M103 6l10 6-9 6") + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' : "";
        return "<li>" + arrow + aboutIcon(s.icon, "ab-circle") + "<h3>" + softRich(s.title) + "</h3><p>" + esc(s.text) + "</p></li>";
      }).join("") + "</ol></div></section>";

    var peopleHtml = '<section class="ab-people"><div class="ab-wrap ab-people-in">' +
      '<img class="ab-people-img" src="' + esc(image(pe.image, 1000)) + '" alt="' + esc(pe.imageAlt || "") + '" loading="lazy" decoding="async">' +
      '<div class="ab-people-copy">' + aboutDash() + "<h2>" + rich(pe.title) + "</h2>" + paras(pe.paragraphs) + "</div></div>" +
      '<div class="ab-wrap"><div class="ab-partner">' + aboutIcon("signature", "ab-sign") + '<div class="ab-partner-copy"><h3>' + rich(pa.title) + "</h3><p>" + esc(pa.text) + '</p></div><span class="ab-vline" aria-hidden="true"></span>' +
      (pa.button ? '<a class="ab-partner-btn" href="' + link(pa.button.href) + '">' + esc(pa.button.label) + " " + ICONS.arrowUpRight + "</a>" : "") + "</div></div></section>";

    return '<div class="about-page">' + banner + introHtml + whyHtml + beliefHtml + reqHtml + thinkHtml + peopleHtml + "</div>";
  }

  function plainCard(title, text, extra) {
    return '<article class="plain-card"><h3>' + rich(title) + "</h3><p>" + rich(text) + "</p>" + (extra || "") + "</article>";
  }

  function faqItem(item) {
    return "<details><summary>" + esc(item.q) + "</summary><p>" + esc(item.a) + "</p></details>";
  }

  function processSteps(steps) {
    return '<div class="process-steps">' + (steps || []).map(function (step, i) {
      return '<div class="step"><span aria-hidden="true">' + esc(step.icon) + "</span><b>" + String(i + 1).padStart(2, "0") +
        "</b><p>" + rich(step.short || step.title) + "</p></div>" +
        (i < steps.length - 1 ? '<i class="step-arrow" aria-hidden="true">→</i>' : "");
    }).join("") + "</div>";
  }

  function cta(data, override) {
    // "Have an Idea? Let's Make It Happen." — cream band, script word like the hero, charcoal button like the header
    // override: a page can pass its own CTA content (same design), e.g. the About page with two buttons
    var c = override || data.cta || {}, btn = c.button || c.primary;
    var buttons = c.buttons || (btn ? [btn] : []);
    var script = c.script ? ' <span class="cta-script">' + SCRIPT_SPARK + "<span>" + esc(c.script) + "</span>" + SCRIPT_SWASH + "</span>" : "";
    return '<section class="cta"><div class="cta-in"><div class="cta-copy"><h2>' + rich(c.title) + script + "</h2>" +
      (c.text ? "<p>" + esc(c.text) + "</p>" : "") + "</div>" +
      (buttons.length ? '<div class="cta-btns">' + buttons.map(function (b, i) {
        return '<a class="' + (i ? "cta-outline" : "cta-talk") + '" href="' + link(b.href) + '">' + esc(b.label) + (i ? "" : " " + ICONS.arrowUpRight) + "</a>";
      }).join("") + "</div>" : "") +
      "</div></section>";
  }

  /* ---------- Services page (from the 1024 px reference) ---------- */
  var SVC_ICONS = {
    code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
    phone: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.2"/><path d="M10.5 18.5h3"/>',
    layers: '<path d="m12 3 9 4.5-9 4.5-9-4.5Z"/><path d="m3 12 9 4.5 9-4.5M3 16.5 12 21l9-4.5"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',
    ads: '<path d="M9.5 4.5 3.6 15a3 3 0 0 0 5.2 3l5.9-10.4"/><path d="m14.5 4.5 5.9 10.5a3 3 0 0 1-5.2 3L9.3 7.6a2.2 2.2 0 0 1 5.2-3.1Z"/>',
    megaphone: '<path d="M3.5 10v4a1 1 0 0 0 1 1H7l7 4.5v-15L7 9H4.5a1 1 0 0 0-1 1Z"/><path d="M7.5 15.2 9 21h2.5M17.5 9.5a3.5 3.5 0 0 1 0 5M19.5 7a7 7 0 0 1 0 10"/>',
    document: '<path d="M6 2.5h8.5L19 7v14.5H6Z"/><path d="M14 2.5V7.5h5M9 11.5h7M9 14.5h7M9 17.5h5"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.8"/><path d="m3.5 18 5.5-5.5 4 4 3-3 4.5 4.5"/>',
    gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v2.6M12 18.9v2.6M21.5 12h-2.6M5.1 12H2.5M18.7 5.3l-1.9 1.9M7.2 16.8l-1.9 1.9M18.7 18.7l-1.9-1.9M7.2 7.2 5.3 5.3"/><circle cx="12" cy="12" r="6.6"/>',
    server: '<rect x="3.5" y="3.5" width="17" height="5" rx="2.5"/><rect x="3.5" y="9.5" width="17" height="5" rx="2.5"/><rect x="3.5" y="15.5" width="17" height="5" rx="2.5"/>',
    gauge: '<path d="M3.5 17a8.5 8.5 0 1 1 17 0"/><path d="m12 15 4-5.5M6 15h1.5M16.5 15H18M7.5 9.5l1 1M12 6.5V8"/><circle cx="12" cy="15.5" r="1.4"/>',
    shield: '<path d="M12 2.5 4.5 5.5v6c0 4.6 3.2 8.6 7.5 10 4.3-1.4 7.5-5.4 7.5-10v-6Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    window: '<rect x="3" y="3.5" width="18" height="17" rx="2"/><path d="M3 8.5h18M7.5 12.5h4M7.5 16h9"/>',
    nodes: '<circle cx="5.5" cy="5.5" r="2.5"/><circle cx="18.5" cy="5.5" r="2.5"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/><path d="M7.5 7.5l3.2 3.2M16.5 7.5l-3.2 3.2M7.5 16.5l3.2-3.2M16.5 16.5l-3.2-3.2"/>'
  };
  var SVC_ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13M13 6.5 18.5 12 13 17.5"/></svg>';

  function svcIcon(name) {
    return '<span class="svp-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (SVC_ICONS[name] || "") + "</svg></span>";
  }

  function servicesPage(sp) {
    sp = sp || {};
    var b = sp.banner || {}, c = sp.cta || {}, cards = sp.cards || [];
    var tones = ["orange", "purple", "blue", "green", "amber", "pink", "teal"];
    var lastRow = cards.length % 3 === 0 ? 0 : cards.length % 3; // the short last row gets wider cards, centred

    var title = rich(b.title).replace(/<em>(.*?)<\/em>/, '<em><span>$1</span><svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true"><path d="M3 9C60 3 140 2 197 6" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/></svg></em>');
    var banner = '<section class="svp-banner">' +
      (b.image ? '<img class="svp-banner-img" src="' + esc(image(b.image, 2000)) + '" alt="' + esc(b.imageAlt || "") + '" decoding="async" fetchpriority="high">' : "") +
      '<div class="svp-wrap svp-banner-in">' +
      '<p class="svp-eyebrow">' + esc(b.eyebrow) + "</p><h1>" + title + "</h1>" +
      (b.text ? '<p class="svp-banner-text">' + esc(b.text) + "</p>" : "") +
      '<div class="svp-btns">' +
      (b.primary && b.primary.label ? '<a class="svp-btn-o" href="' + link(b.primary.href) + '">' + esc(b.primary.label) + " " + SVC_ARROW + "</a>" : "") +
      (b.secondary && b.secondary.label ? '<a class="svp-btn-w" href="' + link(b.secondary.href) + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="1.5"/><path d="M3.5 9.5h17M8 3v4M16 3v4M7.5 13h2M11 13h2M14.5 13h2M7.5 16.5h2M11 16.5h2"/></svg>' + esc(b.secondary.label) + "</a>" : "") +
      "</div></div></section>";

    var grid = '<section class="svp-grid-sec" id="all-services"><div class="svp-wrap"><div class="svp-grid' + (lastRow ? " last-" + lastRow : "") + '">' + cards.map(function (s, i) {
      var tone = tones.indexOf(s.tone) !== -1 ? s.tone : "orange";
      var tag = s.href ? "a" : "div";
      return "<" + tag + ' class="svp-card t-' + tone + '"' + (s.href ? ' href="' + link(s.href) + '"' : "") + ">" +
        (s.image ? '<img class="svp-img" src="' + esc(image(s.image, 900)) + '" alt="' + esc(s.imageAlt || String(s.title || "").replace(/\n/g, " ")) + '" loading="lazy" decoding="async">' : "") +
        '<div class="svp-body">' + svcIcon(s.icon) +
        '<span class="svp-num">' + String(i + 1).padStart(2, "0") + "</span>" +
        "<h2>" + rich(s.title) + "</h2><p>" + esc(s.text) + "</p></div>" +
        '<span class="svp-go" aria-hidden="true">' + SVC_ARROW + "</span></" + tag + ">";
    }).join("") + "</div></div></section>";

    var ctaHtml = '<section class="svp-cta-sec"><div class="svp-wrap"><div class="svp-cta">' +
      '<span class="svp-rocket" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M28.5 8.5C35 5 41 5.5 42.5 5.5c0 1.5.5 7.5-3 14L27 32l-11-11Z"/><circle cx="32" cy="16" r="3.2"/><path d="M16 21h-6.5L5 26l8 1.5M27 32v6.5L22 43l-1.5-8M14 34c-2.5 0-5 2-6 7 5-1 7-3.5 7-6"/></svg></span>' +
      '<div class="svp-cta-head"><h2>' + esc(c.title) + "</h2><p>" + esc(c.highlight) + "</p></div>" +
      '<span class="svp-cta-line" aria-hidden="true"></span>' +
      '<p class="svp-cta-text">' + esc(c.text) + "</p>" +
      '<div class="svp-btns">' +
      (c.primary && c.primary.label ? '<a class="svp-btn-o" href="' + link(c.primary.href) + '">' + esc(c.primary.label) + " " + SVC_ARROW + "</a>" : "") +
      (c.secondary && c.secondary.label ? '<a class="svp-btn-w" href="' + link(c.secondary.href) + '">' + esc(c.secondary.label) + "</a>" : "") +
      "</div></div></div></section>";

    return '<div class="services-page">' + banner + grid + ctaHtml + "</div>";
  }

  function notice(message, isError) {
    return '<div class="notice' + (isError ? " error" : "") + '" role="' + (isError ? "alert" : "status") + '">' + esc(message) + "</div>";
  }

  window.SiteComponents = {
    esc: esc, rich: rich, link: link, image: image, button: button, brand: brand,
    header: header, footer: footer, heroSlider: heroSlider, subHero: subHero, sectionHeading: sectionHeading,
    serviceCard: serviceCard, homeServices: homeServices, homeJourney: homeJourney, homeBuild: homeBuild, homeWhy: homeWhy, homeDifferent: homeDifferent, homeFlow: homeFlow, homeFaq: homeFaq, aboutPage: aboutPage, servicesPage: servicesPage, plainCard: plainCard, faqItem: faqItem, processSteps: processSteps,
    cta: cta, notice: notice
  };
})();
