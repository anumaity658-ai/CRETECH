/*
 * Main site script: picks the page data, renders each page into its slots,
 * then wires up the mobile menu and the enquiry form.
 *
 * Data comes from window.SITE_DATA (inlined by page.php, includes admin edits)
 * or falls back to window.SITE_CONFIG (content/site-config.js) when a template
 * is opened without PHP.
 */
(function () {
  "use strict";

  var C = window.SiteComponents;
  var esc = C.esc, rich = C.rich, link = C.link, image = C.image;

  var data = window.SITE_DATA || window.SITE_CONFIG;
  var pageData = window.PAGE_DATA || {};
  var page = pageData.page || document.body.getAttribute("data-page") || "home";
  var params = new URLSearchParams(window.location.search);

  if (!data) {
    console.error("CRETECH: no site data found.");
    return;
  }

  function findService(slug) {
    return (data.services || []).filter(function (s) { return s.slug === slug; })[0] || null;
  }

  /* ---------- Page renderers ---------- */

  var pages = {};

  pages.home = function () {
    var h = data.home;
    var hero = h.hero;
    var eyebrow = (hero.eyebrow || []).map(esc).join(' <span aria-hidden="true">•</span> ');

    var heroHtml = '<section class="hero"><div class="hero-copy">' +
      '<p class="eyebrow">' + eyebrow + "</p><h1>" + rich(hero.title) + "</h1>" +
      '<p class="hero-intro">' + esc(hero.intro) + "</p>" +
      '<div class="hero-actions">' + C.button(hero.primary, "btn-orange") + C.button(hero.secondary, "btn-outline", false) + "</div>" +
      '<div class="hero-note"><span class="people-icon" aria-hidden="true">♧</span><span>' + rich(hero.note) + "</span></div></div>" +
      '<div class="hero-visual" aria-hidden="true"><div class="visual-glow"></div>' +
      '<img class="hero-person" src="' + esc(image(hero.image, 900)) + '" alt="' + esc(hero.imageAlt) + '" fetchpriority="high">' +
      '<div class="device laptop"><div class="device-top">' + esc(data.site.name) + " <small>" + esc(hero.laptopTitle) + "</small></div>" +
      '<div class="device-screen"><span>' + esc(hero.laptopLine1) + "</span><b>" + esc(hero.laptopLine2) + "</b><i></i></div></div>" +
      '<div class="device phone"><div class="phone-screen"><b>' + esc(data.site.name) + "</b><span>" + esc(hero.phoneLine) + "</span><i></i><i></i><i></i></div></div>" +
      '<div class="float-chip chip-code">〈/〉</div><div class="float-chip chip-chart">▥</div></div></section>';

    var services = '<section class="section services-section">' +
      C.sectionHeading(h.servicesSection.title, h.servicesSection.text, h.servicesSection.button) +
      '<div class="service-grid">' + (data.services || []).map(function (s) { return C.serviceCard(s); }).join("") + "</div></section>";

    var solutions = '<section class="section solutions"><div class="solution-copy"><h2>' + rich(h.solutions.title) + "</h2><p>" + esc(h.solutions.text) + "</p>" +
      '<div class="solution-art" aria-hidden="true"><div class="mini-laptop"><div class="mini-screen">Explore<br><strong>Your World</strong><span></span></div></div><div class="mini-phone"></div></div></div>' +
      '<div class="category-grid">' + h.solutions.items.map(function (c) {
        return '<a href="services" class="category"><span aria-hidden="true">' + esc(c.icon) + "</span>" + esc(c.label) + "</a>";
      }).join("") + "</div></section>";

    var reach = '<section class="section reach"><div class="reach-copy"><h2>' + rich(h.reach.title) + "</h2><p>" + esc(h.reach.text) + "</p></div>" +
      '<div class="audience-grid">' + h.reach.items.map(function (a) {
        return '<a class="audience-card" href="contact" style="background-image:linear-gradient(0deg,rgba(0,48,34,.92),transparent 65%),url(\'' +
          esc(image(a.image, 500)) + '\')"><b>For ' + esc(a.label) + '</b><span aria-hidden="true">↗</span></a>';
      }).join("") + "</div></section>";

    var why = '<section class="section why"><div><h2>' + rich(h.why.title) + "</h2><p>" + esc(h.why.text) + "</p></div>" +
      '<div class="why-grid">' + h.why.items.map(function (w) {
        return '<div class="why-card"><span aria-hidden="true">' + esc(w.icon) + "</span><b>" + esc(w.label) + "</b></div>";
      }).join("") + "</div></section>";

    var processFaq = '<section class="section process-faq">' +
      '<div class="process"><h2>' + rich(h.processSection.title) + "</h2><p>" + esc(h.processSection.text) + "</p>" +
      C.processSteps(data.process.steps) + "</div>" +
      '<div class="faq"><h2>' + rich(h.faq.title) + "</h2><p>" + esc(h.faq.text) + "</p>" + h.faq.items.map(C.faqItem).join("") + "</div></section>";

    var direct = '<section class="section direct"><div class="direct-copy"><h2>' + rich(h.direct.title) + "</h2><p>" + esc(h.direct.text) + "</p></div>" +
      '<div class="direct-visual"><img src="' + esc(image(h.direct.image, 900)) + '" alt="' + esc(h.direct.imageAlt) + '" loading="lazy">' +
      "<ul>" + h.direct.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></div></section>";

    return heroHtml + services + solutions + reach + why + processFaq + direct + C.cta(data);
  };

  pages.services = function () {
    return C.subHero(data.servicesPage.hero) +
      '<section class="section services-section"><div class="service-grid wide">' +
      (data.services || []).map(function (s) { return C.serviceCard(s, true); }).join("") +
      "</div></section>" + C.cta(data);
  };

  pages["service-detail"] = function () {
    var service = findService(pageData.slug || params.get("slug"));
    if (!service) return pages["not-found"]();
    var d = data.serviceDetail;
    var others = (data.services || []).filter(function (s) { return s.slug !== service.slug; }).slice(0, 5);

    return '<section class="sub-hero detail-hero"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="./">Home</a> / <a href="services">Services</a> / <span>' +
      esc(service.title) + "</span></nav><h1>" + esc(service.title) + "</h1><p>" + esc(service.summary) + "</p>" +
      '<div class="hero-actions">' + C.button({ label: d.button, href: "contact?service=" + encodeURIComponent(service.title) }, "btn-orange") + "</div></section>" +
      '<section class="section detail-layout"><div class="detail-copy"><p class="detail-intro">' + esc(service.intro) + "</p>" +
      "<h2>" + rich(d.includedTitle) + '</h2><ul class="check-list">' +
      (service.features || []).map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul></div>" +
      '<img class="detail-image" src="' + esc(image(service.image, 900)) + '" alt="' + esc(service.title) + '" loading="lazy"></section>' +
      '<section class="section detail-process"><h2>' + rich(d.processTitle) + "</h2>" + C.processSteps(data.process.steps) + "</section>" +
      '<section class="section services-section">' + C.sectionHeading(d.otherTitle, "", data.home.servicesSection.button) +
      '<div class="service-grid">' + others.map(function (s) { return C.serviceCard(s); }).join("") + "</div></section>" +
      C.cta(data);
  };

  pages.about = function () {
    var a = data.about;
    return C.subHero(a.hero) +
      '<section class="content-page"><h2>' + rich(a.title) + "</h2><p>" + esc(a.text) + "</p>" +
      '<div class="plain-grid">' + a.cards.map(function (c) { return C.plainCard(c.title, c.text); }).join("") + "</div></section>" +
      C.cta(data);
  };

  pages.process = function () {
    var p = data.process;
    return C.subHero(p.hero) +
      '<section class="content-page"><div class="plain-grid">' + p.steps.map(function (s, i) {
        return '<article class="plain-card step-card"><span class="step-number">' + String(i + 1).padStart(2, "0") + "</span>" +
          "<h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></article>";
      }).join("") + "</div></section>" + C.cta(data);
  };

  pages.contact = function () {
    var c = data.contact;
    var site = data.site;
    var options = (data.services || []).map(function (s) { return s.title; }).concat(["Other"]);
    var chosen = params.get("service") || "";

    var status = "";
    if (params.has("sent")) status = C.notice(c.success);
    else if (params.has("error")) status = C.notice(c.error, true);

    return C.subHero(c.hero) +
      '<section class="content-page contact-layout"><div><h2>' + rich(c.title) + "</h2><p>" + esc(c.text) + "</p>" +
      '<p><b>Email:</b> <a class="inline-link" href="mailto:' + esc(site.email) + '">' + esc(site.email) + "</a></p>" +
      "<p><b>Phone:</b> " + esc(site.phone) + "</p><p><b>Location:</b> " + esc(site.location) + "</p></div>" +
      '<div><div class="form-status" aria-live="polite">' + status + "</div>" +
      '<form class="contact-form" action="admin/public.php?action=enquiry" method="post">' +
      '<label>Your Name<input name="name" required maxlength="100" autocomplete="name" placeholder="Enter your name"></label>' +
      '<label>Email Address<input type="email" name="email" required maxlength="150" autocomplete="email" placeholder="name@example.com"></label>' +
      '<label>Phone Number<input type="tel" name="phone" maxlength="30" autocomplete="tel" placeholder="Optional"></label>' +
      '<label>Service Required<select name="service"><option value="">Select a service</option>' +
      options.map(function (o) { return "<option" + (o === chosen ? " selected" : "") + ">" + esc(o) + "</option>"; }).join("") +
      "</select></label>" +
      '<label>Tell Us About Your Project<textarea name="message" required maxlength="4000" placeholder="Write a short description of your requirement..."></textarea></label>' +
      '<div class="hp" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>' +
      '<input type="hidden" name="token" value="' + esc(pageData.formToken || "") + '">' +
      '<button class="btn btn-orange" type="submit">Send Enquiry <span aria-hidden="true">→</span></button>' +
      "</form></div></section>";
  };

  function legalPage(key) {
    return function () {
      var l = data.legal[key];
      return C.subHero({ title: l.title, text: l.intro }) +
        '<section class="content-page"><h2>' + esc(l.title) + "</h2>" +
        (l.body || []).map(function (p) { return "<p>" + rich(p) + "</p>"; }).join("") +
        '<p>For questions, contact <a class="inline-link" href="mailto:' + esc(data.site.email) + '">' + esc(data.site.email) + "</a>.</p></section>";
    };
  }
  pages["privacy-policy"] = legalPage("privacy-policy");
  pages["terms-and-conditions"] = legalPage("terms-and-conditions");
  pages.disclaimer = legalPage("disclaimer");

  pages["not-found"] = function () {
    var n = data.notFound;
    return '<section class="sub-hero not-found"><h1>' + rich(n.title) + "</h1><p>" + esc(n.text) + "</p>" +
      '<div class="hero-actions">' + C.button(n.button, "btn-orange") + C.button({ label: "View Services", href: "services" }, "btn-outline", false) + "</div></section>";
  };

  /* ---------- Fill the slots ---------- */

  function fill(slot, html) {
    var el = document.querySelector('[data-slot="' + slot + '"]');
    if (el) el.outerHTML = html;
  }

  var main = document.querySelector('[data-slot="page"]');
  fill("header", C.header(data, page));
  if (main) main.innerHTML = (pages[page] || pages["not-found"])();
  fill("footer", C.footer(data));

  /* ---------- Mobile menu ---------- */

  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    toggle.addEventListener("click", function () { setOpen(!nav.classList.contains("open")); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
  }

  /* ---------- Enquiry form ---------- */

  var form = document.querySelector(".contact-form");
  if (form && window.fetch && window.FormData) {
    var statusBox = document.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      statusBox.innerHTML = "";

      fetch(form.getAttribute("action"), {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      })
        .then(function (res) { return res.json(); })
        .then(function (reply) {
          statusBox.innerHTML = C.notice(reply.message || (reply.ok ? data.contact.success : data.contact.error), !reply.ok);
          if (reply.ok) form.reset();
        })
        .catch(function () {
          statusBox.innerHTML = C.notice(data.contact.error, true);
        })
        .then(function () {
          btn.disabled = false;
          statusBox.scrollIntoView({ behavior: "smooth", block: "center" });
        });
    });
  }
})();
