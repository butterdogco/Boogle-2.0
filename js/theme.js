const dataThemeElement = document.documentElement;
const dataThemeAttribute = "data-theme";

/**
 * Updates the theme of the website based on the provided boolean value.
 * @param {boolean} light - If true, sets the theme to light mode; if false, sets it to dark mode.
 */
function updateTheme(light) {
  const theme = light ? "light" : "dark";
  dataThemeElement.setAttribute(dataThemeAttribute, theme);
  localStorage.setItem(dataThemeAttribute, theme);
}

function loadTheme() {
  const savedTheme = localStorage.getItem(dataThemeAttribute);
  if (savedTheme) {
    dataThemeElement.setAttribute(dataThemeAttribute, savedTheme);
  } else {
    // Use the system preference if no theme is saved in localStorage
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    updateTheme(prefersLight);
  }
}

function invertTheme() {
  const currentTheme = dataThemeElement.getAttribute(dataThemeAttribute);
  const newTheme = currentTheme === "light" ? "dark" : "light";
  updateTheme(newTheme === "light");
}

loadTheme();

window.invertTheme = invertTheme; // Expose the invertTheme function to the global scope for use in HTML onclick events