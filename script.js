// ---------- 1. Current year in the footer ----------
document.getElementById("year").textContent = new Date().getFullYear();

// Small helpers to remember choices. try/catch because some browsers block storage.
function save(key, value) {
  try { localStorage.setItem(key, value); } catch (e) {}
}
function load(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

// ---------- 2. Light / dark mode ----------
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {
  const html = document.documentElement;
  const newTheme = html.dataset.theme === "dark" ? "light" : "dark";
  html.dataset.theme = newTheme; // the CSS reads this: [data-theme="dark"]
  save("theme", newTheme);
});

// ---------- 3. English / French ----------
const langButton = document.getElementById("lang-toggle");
const translatable = document.querySelectorAll("[data-i18n]");

// Remember the English text that is written in index.html
const ENGLISH = {};
translatable.forEach((el) => {
  ENGLISH[el.dataset.i18n] = el.textContent.trim().replace(/\s+/g, " ");
});

function setLanguage(lang) {
  const words = lang === "fr" ? FRENCH : ENGLISH; // FRENCH comes from translations.js
  translatable.forEach((el) => {
    const text = words[el.dataset.i18n];
    if (text) el.textContent = text;
  });
  document.documentElement.lang = lang;
  // The button shows the OTHER language, the one you can switch to
  langButton.textContent = lang === "fr" ? "EN" : "FR";
  langButton.setAttribute("aria-label", lang === "fr" ? "Switch language to English" : "Changer la langue en français");
  save("lang", lang);
}

langButton.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "fr" ? "en" : "fr");
});

// Start in the saved language, or French if the visitor's browser is in French
const startLang = load("lang") || (navigator.language.startsWith("fr") ? "fr" : "en");
if (startLang === "fr") setLanguage("fr");

// ---------- 4. Sections fade in when you scroll to them ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((section) => observer.observe(section));

// ---------- 5. Highlight the menu link of the section you are reading ----------
const navLinks = document.querySelectorAll(".navbar nav a");

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" }); // "reading" = the middle of the screen

document.querySelectorAll("section[id]").forEach((section) => navObserver.observe(section));
