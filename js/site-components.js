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
    if (/^https?:/i.test(v) || v.indexOf("uploads/") === 0) return v;
    return "https://images.unsplash.com/" + v + "?auto=format&fit=crop&w=" + (width || 700) + "&q=80";
  }

  function button(btn, cls, arrow) {
    if (!btn || !btn.label) return "";
    var ext = isExternal(btn.href) ? ' target="_blank" rel="noopener"' : "";
    return '<a class="btn ' + (cls || "btn-orange") + '" href="' + link(btn.href) + '"' + ext + ">" +
      esc(btn.label) + (arrow === false ? "" : " <span aria-hidden=\"true\">→</span>") + "</a>";
  }

  function brand(site, extraClass) {
    var name = esc(site.name || "");
    // Highlight the "E" in CRETECH the same way as the original logo.
    var styled = name === "CRETECH" ? "CR<span>E</span>TECH" : name;
    return '<a class="brand ' + (extraClass || "") + '" href="./"><strong>' + styled + "</strong><small>" + esc(site.tagline) + "</small></a>";
  }

  function header(data, page) {
    var activePage = page === "service-detail" ? "services" : page;
    var nav = (data.nav || []).map(function (item) {
      var active = item.page === activePage;
      return '<a href="' + link(item.href) + '"' + (active ? ' class="active" aria-current="page"' : "") + ">" + esc(item.label) + "</a>";
    }).join("");
    var cta = data.headerCta || {};
    return '<header class="site-header">' + brand(data.site) +
      '<button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="main-nav">☰</button>' +
      '<nav class="main-nav" id="main-nav" aria-label="Main">' + nav + "</nav>" +
      '<a class="talk-btn" href="' + link(cta.href) + '">' + esc(cta.label) + ' <span aria-hidden="true">→</span></a>' +
      "</header>";
  }

  function footer(data) {
    var site = data.site || {};
    var links = data.footerLinks || {};
    var list = function (items) {
      return (items || []).map(function (l) { return '<a href="' + link(l.href) + '">' + esc(l.label) + "</a>"; }).join("");
    };
    var services = (data.services || []).slice(0, 6).map(function (s) {
      return '<a href="services/' + esc(s.slug) + '">' + esc(s.title) + "</a>";
    }).join("");
    var socials = (site.socials || []).map(function (s) {
      var ext = isExternal(s.url) ? ' target="_blank" rel="noopener"' : "";
      return '<a href="' + link(s.url) + '" aria-label="' + esc(s.label) + '"' + ext + ">" + esc(s.short) + "</a>";
    }).join("");
    return '<footer class="site-footer">' +
      '<div class="footer-brand">' + brand(site, "brand-footer") + "<p>" + esc(site.footerText) + "</p>" +
      "<small>Copyright © " + new Date().getFullYear() + " " + esc(site.name) + ". All Rights Reserved.</small></div>" +
      "<div><h3>Quick Links</h3>" + list(links.quick) + "</div>" +
      "<div><h3>Our Services</h3>" + services + "</div>" +
      "<div><h3>Contact Us</h3>" +
      '<p>✉ Email: <a class="inline-link" href="mailto:' + esc(site.email) + '">' + esc(site.email) + "</a></p>" +
      '<p>☎ Phone: <a class="inline-link" href="tel:' + esc(String(site.phone || "").replace(/[^0-9+]/g, "")) + '">' + esc(site.phone) + "</a></p>" +
      "<p>⌖ Location: " + esc(site.location) + "</p>" +
      '<h3 class="follow-title">Follow Us</h3><div class="socials">' + socials + "</div></div>" +
      '<div class="footer-bottom">' + list(links.legal) + "</div>" +
      "</footer>";
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

  function cta(data) {
    var c = data.cta || {};
    return '<section class="cta"><div class="cta-logo">' + esc(data.site.name) + "<small>" + esc(data.site.tagline) + "</small></div>" +
      "<div><h2>" + rich(c.title) + "</h2></div><p>" + esc(c.text) + "</p>" +
      button(c.primary, "btn-orange") + button(c.secondary, "btn-light", false) + "</section>";
  }

  function notice(message, isError) {
    return '<div class="notice' + (isError ? " error" : "") + '" role="' + (isError ? "alert" : "status") + '">' + esc(message) + "</div>";
  }

  window.SiteComponents = {
    esc: esc, rich: rich, link: link, image: image, button: button, brand: brand,
    header: header, footer: footer, subHero: subHero, sectionHeading: sectionHeading,
    serviceCard: serviceCard, plainCard: plainCard, faqItem: faqItem, processSteps: processSteps,
    cta: cta, notice: notice
  };
})();
