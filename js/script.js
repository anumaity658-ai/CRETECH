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
    var heroHtml = C.heroSlider(h.heroSlides, h.heroStats);

    var services = C.homeServices(h.servicesSection, data.services);

    var journey = C.homeJourney(h.journeySection);
    var build = C.homeBuild(h.buildSection);
    var why = C.homeWhy(h.whySection);
    var different = C.homeDifferent(h.differentSection);
    var process = C.homeFlow(h.processFlow, "flow-process");
    var faqSection = C.homeFaq(h.faqSection);

    return heroHtml + services + journey + build + why + different + process + faqSection + C.cta(data);
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
    var a = data.about || {};
    return C.aboutPage(a) + (a.faq ? C.homeFaq(Object.assign({ background: { color: "#FFF7F0" } }, a.faq)) : "") + C.cta(data, a.cta);
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

  /* ---------- Hero slider ----------
     Motion (styles in css/cms.css):
     - every 5 s the next slide cross-fades in (1.2 s); the old slide gets "is-leaving"
       so its photo keeps zooming and darkens while its text lifts away
     - each heading is split into words here, so the words can rise one by one
     - photos 2+ load, and the rotation starts, 1.5 s after the page has loaded (or after 8 s) */

  var slider = document.querySelector(".hero-slider");
  if (slider) {
    var SLIDE_TIME = 5000;
    var LEAVE_TIME = 1250;
    var slides = Array.prototype.slice.call(slider.querySelectorAll(".hero-slide"));
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var SVG_NS = "http://www.w3.org/2000/svg";

    // <span class="rv-word"><span style="--i:N">word</span></span>; N sets each word's delay.
    var wrapWords = function (element, counter) {
      Array.prototype.slice.call(element.childNodes).forEach(function (node) {
        if (node.nodeType === 3) {
          var fragment = document.createDocumentFragment();
          node.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { fragment.appendChild(document.createTextNode(part)); return; }
            var outer = document.createElement("span");
            var inner = document.createElement("span");
            outer.className = "rv-word";
            inner.textContent = part;
            inner.style.setProperty("--i", String(counter.value++));
            outer.appendChild(inner);
            fragment.appendChild(outer);
          });
          node.parentNode.replaceChild(fragment, node);
        } else if (node.nodeType === 1 && node.namespaceURI !== SVG_NS) {
          wrapWords(node, counter); // includes the highlighted (script) words
        }
      });
    };
    slider.querySelectorAll(".hero-title").forEach(function (title) { wrapWords(title, { value: 0 }); });

    var active = 0;
    var interval = null;
    var show = function (next) {
      var previous = active;
      active = (next + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === active);
        slide.classList.remove("is-leaving");
        slide.setAttribute("aria-hidden", i === active ? "false" : "true");
      });
      if (previous !== active) {
        var leaving = slides[previous];
        leaving.classList.add("is-leaving");
        setTimeout(function () { leaving.classList.remove("is-leaving"); }, LEAVE_TIME);
      }
    };
    var rotate = function () {
      clearInterval(interval);
      if (!reduceMotion && slides.length > 1) interval = setInterval(function () { show(active + 1); }, SLIDE_TIME);
    };

    var started = false;
    var start = function () {
      if (started) return;
      started = true;
      slider.querySelectorAll("[data-srcset]").forEach(function (el) { el.srcset = el.getAttribute("data-srcset"); el.removeAttribute("data-srcset"); });
      slider.querySelectorAll("img[data-src]").forEach(function (img) { img.src = img.getAttribute("data-src"); img.removeAttribute("data-src"); });
      rotate();
    };
    if (document.readyState === "complete") setTimeout(start, 1500);
    else window.addEventListener("load", function () { setTimeout(start, 1500); }, { once: true });
    setTimeout(start, 8000);

    // Let the first photo's slow zoom play from the start (the class is added after the first paint).
    requestAnimationFrame(function () { requestAnimationFrame(function () { slider.classList.add("is-ready"); }); });

    // Swipe on phones/tablets: jump to the next/previous slide, then keep rotating from there.
    var go = function (index) { start(); show(index); rotate(); };
    var touchX = null;
    slider.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener("touchend", function (e) {
      if (touchX !== null) {
        var dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
      }
      touchX = null;
    }, { passive: true });
  }

  /* ---------- Homepage FAQ accordion (one answer open at a time) ---------- */

  document.querySelectorAll(".fx-list").forEach(function (list) {
    function setOpen(btn, open) {
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.closest(".fx-item").classList.toggle("open", open);
    }
    list.addEventListener("click", function (e) {
      var btn = e.target.closest(".fx-q");
      if (!btn) return;
      var open = btn.getAttribute("aria-expanded") !== "true";
      list.querySelectorAll('.fx-q[aria-expanded="true"]').forEach(function (b) { if (b !== btn) setOpen(b, false); });
      setOpen(btn, open);
    });
  });

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
