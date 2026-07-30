import { getRandomSearchQuery } from "./results.js";

function randomSearch() {
  const randomSearchQuery = getRandomSearchQuery();

  window.location.href = `./search?query=${encodeURIComponent(randomSearchQuery)}`;
}

window.randomSearch = randomSearch; // Expose the function to the global scope