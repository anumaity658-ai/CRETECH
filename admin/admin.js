/* CRETECH Admin: dropdowns, mobile sidebar, auto-saving selects. */
(function () {
  "use strict";

  function closeAll(except) {
    document.querySelectorAll("[data-pop]").forEach(function (btn) {
      if (btn === except) return;
      btn.setAttribute("aria-expanded", "false");
      btn.nextElementSibling.hidden = true;
    });
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-pop]");
    if (btn) {
      var box = btn.nextElementSibling;
      closeAll(btn);
      box.hidden = !box.hidden;
      btn.setAttribute("aria-expanded", String(!box.hidden));
      return;
    }
    if (!e.target.closest(".pop-box")) closeAll(null);

    if (e.target.closest("[data-open-side]")) {
      document.getElementById("side").classList.add("open");
      document.body.classList.add("side-open");
    }
    if (e.target.closest("[data-close-side]")) {
      document.getElementById("side").classList.remove("open");
      document.body.classList.remove("side-open");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAll(null);
      var side = document.getElementById("side");
      if (side) side.classList.remove("open");
      document.body.classList.remove("side-open");
    }
  });

  document.addEventListener("change", function (e) {
    if (e.target.matches("[data-autosubmit]")) e.target.form.submit();
  });
})();
