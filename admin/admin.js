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

/* Show / hide password */
document.addEventListener("click", function (e) {
  var b = e.target.closest("[data-peek]");
  if (!b) return;
  var input = b.parentNode.querySelector("input");
  var show = input.type === "password";
  input.type = show ? "text" : "password";
  b.classList.toggle("on", show);
  b.setAttribute("aria-label", show ? "Hide password" : "Show password");
});

/* ---------- Edit forms: lists, photos and saving ---------- */
(function () {
  "use strict";
  var dirty = false;

  function nodesOf(container) {
    return Array.prototype.filter.call(container.querySelectorAll("[data-node]"), function (n) {
      return n.parentElement.closest("[data-node=root],[data-node=item]") === container && n.getAttribute("data-node") !== "item";
    });
  }
  function setAt(obj, path, value) {
    if (!path.length) return value;
    if (obj === null || typeof obj !== "object" || Array.isArray(obj)) obj = {};
    var cur = obj;
    for (var i = 0; i < path.length - 1; i++) {
      if (cur[path[i]] === null || typeof cur[path[i]] !== "object") cur[path[i]] = {};
      cur = cur[path[i]];
    }
    cur[path[path.length - 1]] = value;
    return obj;
  }
  function serialize(container) {
    var out = null;
    nodesOf(container).forEach(function (n) {
      var type = n.getAttribute("data-node"), path = JSON.parse(n.getAttribute("data-p") || "[]"), value;
      if (type === "leaf") value = n.value;
      else if (type === "lines") value = Array.prototype.map.call(n.querySelectorAll(".line input"), function (i) { return i.value; });
      else if (type === "list") value = Array.prototype.filter.call(n.children, function (c) { return c.getAttribute("data-node") === "item"; })
        .map(function (item) { var v = serialize(item) || {}; v.__src = +item.getAttribute("data-src"); return v; });
      else return;
      out = setAt(out, path, value);
    });
    return out;
  }

  // Items start folded except the first one of each list.
  document.querySelectorAll("[data-node=list]").forEach(function (list) {
    Array.prototype.forEach.call(list.children, function (it, i) { if (i > 0) it.classList.add("closed"); });
  });

  function uid() { return Math.random().toString(36).slice(2, 12); }

  document.addEventListener("click", function (e) {
    var t = e.target, item = t.closest(".item");
    if (t.closest("[data-up]") && item && item.previousElementSibling) {
      item.parentNode.insertBefore(item, item.previousElementSibling); item.classList.add("flash"); dirty = true; return;
    }
    if (t.closest("[data-down]") && item && item.nextElementSibling) {
      item.parentNode.insertBefore(item.nextElementSibling, item); item.classList.add("flash"); dirty = true; return;
    }
    if (t.closest("[data-del-item]") && item) {
      if (confirm("Delete “" + item.querySelector(".item-head b").textContent + "”? (It is removed when you save this section.)")) { item.remove(); dirty = true; }
      return;
    }
    if (t.closest(".item-head") && item && !t.closest("button")) { item.classList.toggle("closed"); return; }

    var addItem = t.closest("[data-add-item]");
    if (addItem) {
      var list = addItem.parentNode.querySelector("[data-node=list]"), last = list.lastElementChild;
      if (!last) return;
      var copy = last.cloneNode(true);
      copy.classList.remove("closed");
      copy.querySelectorAll("input[data-node=leaf]:not([type=hidden]), textarea").forEach(function (f) { f.value = ""; });
      copy.querySelectorAll(".line input").forEach(function (f) { f.value = ""; });
      copy.querySelectorAll("input[type=hidden][data-node=leaf]").forEach(function (h) { if (/^upload:/.test(h.value)) h.value = h.getAttribute("data-orig") || h.defaultValue; });
      copy.querySelectorAll("input[type=file]").forEach(function (f) { var id = uid(); f.name = "up_" + id; f.setAttribute("data-uid", id); f.value = ""; });
      copy.querySelectorAll(".ib-check").forEach(function (s) { s.textContent = "Same photo as the item above — upload a new one."; s.className = "ib-check"; });
      copy.querySelector(".item-head b").textContent = "New item";
      list.appendChild(copy); copy.classList.add("flash"); dirty = true;
      var first = copy.querySelector(".cols-f input, .cols-f textarea"); if (first) first.focus();
      return;
    }
    if (t.closest("[data-add-line]")) {
      var lines = t.closest("[data-node=lines]").querySelector(".line-list"), row = lines.lastElementChild.cloneNode(true);
      row.querySelector("input").value = ""; lines.appendChild(row); row.querySelector("input").focus(); dirty = true;
      return;
    }
    if (t.closest("[data-del-line]")) {
      var ll = t.closest(".line-list");
      if (ll.children.length > 1) t.closest(".line").remove(); else t.closest(".line").querySelector("input").value = "";
      dirty = true;
    }
  });

  document.addEventListener("input", function (e) {
    if (!e.target.closest("[data-cms-form]")) return;
    dirty = true;
    var item = e.target.closest(".item");
    if (item && e.target === item.querySelector(".cols-f input, .cols-f textarea")) {
      item.querySelector(".item-head b").textContent = e.target.value.replace(/\*/g, "") || "New item";
    }
  });

  // Picking a photo: preview it, check the size, and mark the field for upload.
  document.addEventListener("change", function (e) {
    var input = e.target;
    if (input.type !== "file" || !input.closest(".ib") || !input.files[0]) return;
    var box = input.closest(".ib"), file = input.files[0], hidden = box.querySelector("input[type=hidden][data-node=leaf]");
    if (!hidden.getAttribute("data-orig")) hidden.setAttribute("data-orig", hidden.value);
    hidden.value = "upload:" + input.getAttribute("data-uid");
    dirty = true;
    var needW = +box.getAttribute("data-w"), needH = +box.getAttribute("data-h");
    var url = URL.createObjectURL(file), img = new Image();
    img.onload = function () {
      box.querySelector(".ib-thumb img").src = url;
      box.querySelector(".ib-file").textContent = file.name + " (saved when you click Save)";
      var check = box.querySelector(".ib-check"), w = img.naturalWidth, h = img.naturalHeight;
      if (file.size > 8 * 1024 * 1024) { check.className = "ib-check bad"; check.textContent = "⚠ This photo is larger than 8 MB and will not upload. Please make it smaller."; return; }
      if (!needW) { check.className = "ib-check ok"; check.textContent = "✓ " + w + " × " + h + " px"; return; }
      var sameShape = Math.abs(w / h - needW / needH) < 0.02, bigEnough = w >= needW && h >= needH;
      if (sameShape && bigEnough) { check.className = "ib-check ok"; check.textContent = "✓ " + w + " × " + h + " px — perfect size"; }
      else if (sameShape) { check.className = "ib-check bad"; check.textContent = "⚠ " + w + " × " + h + " px — right shape but too small, may look blurry"; }
      else { check.className = "ib-check bad"; check.textContent = "⚠ " + w + " × " + h + " px — different shape, it will be cropped. Needed " + needW + " × " + needH + " px"; }
    };
    img.src = url;
  });

  document.addEventListener("submit", function (e) {
    var form = e.target;
    var ask = form.getAttribute("data-confirm");
    if (ask && !confirm(ask)) { e.preventDefault(); return; }
    if (!form.hasAttribute("data-cms-form")) return;
    form.querySelector("input[name=payload]").value = JSON.stringify(serialize(form.querySelector("[data-node=root]")));
    form.querySelectorAll("input[type=file]").forEach(function (f) { if (!f.files.length) f.disabled = true; });
    var btn = form.querySelector(".save"); if (btn) { btn.disabled = true; btn.textContent = "Saving…"; }
    dirty = false;
  });

  window.addEventListener("beforeunload", function (e) { if (dirty) { e.preventDefault(); e.returnValue = ""; } });
})();
