(function () {
  const toggle = document.querySelector(".nav-toggle");
  const list = document.querySelector(".nav-list");
  if (!toggle || !list) return;

  toggle.addEventListener("click", function () {
    const open = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  list.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      list.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && list.classList.contains("open")) {
      list.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
})();
