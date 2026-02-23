document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav-links");
  const underline = document.querySelector(".nav-underline");
  const links = document.querySelectorAll(".nav-link");

  if (!nav || !underline || !links.length) return;

  function moveUnderline(el) {
    const rect = el.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    underline.style.left = `${rect.left - navRect.left}px`;
    underline.style.width = `${rect.width}px`;
  }

  // 👉 initial position
  const initialActive = document.querySelector(".nav-link.active");
  if (initialActive) moveUnderline(initialActive);

  // 👉 click support (desktop)
  links.forEach(link => {
    link.addEventListener("click", () => {
      moveUnderline(link);
    });
  });

  // 👉 OBSERVE active class change (scroll sync)
  const observer = new MutationObserver(() => {
    const active = document.querySelector(".nav-link.active");
    if (active) moveUnderline(active);
  });

  observer.observe(nav, {
    subtree: true,
    attributes: true,
    attributeFilter: ["class"]
  });

  // 👉 window resize fix
  window.addEventListener("resize", () => {
    const active = document.querySelector(".nav-link.active");
    if (active) moveUnderline(active);
  });
});
