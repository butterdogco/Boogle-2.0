/*
  Handler for the search page that the index.html page redirects to with a query parameter.
  Also supports making a new search from the same page.
*/

import { findResultsByQuery, findSpecialResultByQuery } from './results.js';

const SEARCH_PARAM = 'query';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const specialResultContainer = document.getElementById('specialResultContainer');
const resultCount = document.getElementById('resultCount');
const resultsList = document.getElementById('resultsList');

function limitText(text, maxLength = 100) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }

  return text;
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function handleSearchInput() {
  const query = getQueryParam(SEARCH_PARAM);
  if (!query) {
    resultCount.textContent = 'No search query provided.';
    return;
  }

  const results = findResultsByQuery(query);
  const specialResult = findSpecialResultByQuery(query);

  if (specialResult) {
    specialResultContainer.innerHTML = specialResult;
    specialResultContainer.removeAttribute('hidden');
  } else {
    specialResultContainer.setAttribute('hidden', '');
  }
  
  resultCount.textContent = `${results.length}${specialResult ? ' other' : ''} result${results.length !== 1 ? 's' : ''} found`;
  
  results.forEach(result => {
    const resultElement = document.createElement('li');
    resultElement.classList.add('result');
    resultElement.innerHTML = `
      <a href="${result.url}">
        <div class="details">
          <img src="${result.icon}" alt="${limitText(result.name, 32)} icon" class="icon">
          <span>${limitText(result.name, 32)}</span>
          <span class="url"> - ${limitText(result.url, 48)}</span>
        </div>
        <div class="info">
          <p class="description">${limitText(result.description, 512)}</p>
        </div>
      </a>
    `;
    resultsList.appendChild(resultElement);
  });
}

function onLoad() {
  handleSearchInput();

  searchInput.value = getQueryParam(SEARCH_PARAM) || '';
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    window.location.href = `search.html?query=${encodeURIComponent(query)}`;
  }
});

document.addEventListener('DOMContentLoaded', onLoad);