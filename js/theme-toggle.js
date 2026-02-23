document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  // ---- APPLY SAVED THEME ON LOAD ----
  const savedTheme = localStorage.getItem("theme"); // "dark" | "light" | null
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    btn.innerHTML = `<i data-lucide="moon"></i>`;
  } else {
    btn.innerHTML = `<i data-lucide="sun"></i>`;
  }

  // Initial icon render
  if (window.lucide) lucide.createIcons();

  // ---- TOGGLE THEME ON CLICK ----
  btn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");

    // Save preference
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Update icon
    btn.innerHTML = `<i data-lucide="${isDark ? "moon" : "sun"}"></i>`;

    // Re-render icon
    if (window.lucide) lucide.createIcons();
  });
});
