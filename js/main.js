'use strict';
// Shared website behaviors: dynamic footer year and external-link safety.
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
});
