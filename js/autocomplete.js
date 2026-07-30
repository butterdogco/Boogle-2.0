import { getAutocompleteSuggestions } from "./results.js";

const autocompleteList = document.getElementById("autocomplete-list");
const searchInput = document.getElementById("searchInput");

let currentFocus;

function closeAutocomplete() {
  autocompleteList.innerHTML = "";
  currentFocus = -1;
}

function acceptAutocomplete(text) {
  searchInput.value = text;
  closeAutocomplete();
}

// Assuming input is already sanitized
function autocomplete(input) {
  const autocompletions = getAutocompleteSuggestions(input);

  autocompletions.forEach((item) => {
    const itemElement = document.createElement("button");
    itemElement.textContent = item;
    itemElement.addEventListener("click", () => acceptAutocomplete(item));
    itemElement.setAttribute("type", "button");
    autocompleteList.appendChild(itemElement);
  });
}

function removeActive(items) {
  for (const item of items) {
    item.classList.remove("focused");
  }
}

function setActive(items) {
  removeActive(items);
  items[currentFocus].classList.add("focused");
}

function onSearchInput() {
  const value = searchInput.value.toLowerCase();
  autocompleteList.innerHTML = "";
  currentFocus = -1;

  if (!value) return;

  autocomplete(value);
}

searchInput.addEventListener("input", onSearchInput);
searchInput.addEventListener("keydown", (e) => {
  if (autocompleteList.children.length === 0) return;

  const items = autocompleteList.getElementsByTagName("button");

  if (e.key === "ArrowDown") {
    e.preventDefault();
    currentFocus = (currentFocus + 1) % items.length;
    setActive(items);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    currentFocus = (currentFocus - 1 + items.length) % items.length;
    setActive(items);
  } else if (e.key === "Enter") {
    if (currentFocus > -1 && items[currentFocus]) {
      e.preventDefault();
      items[currentFocus].click();
    }
  }
});
document.addEventListener("click", (e) => {
  if (e.target !== searchInput) {
    closeAutocomplete();
  }
});