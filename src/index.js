// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './ErrorBoundary';

// ── SPA deep-link fix ───────────────────────────────────────────────────────
// If your server served index.html?pathname=<orig>&hash=<h>, shove that back
// into the URL bar so BrowserRouter can pick it up.
(() => {
  const params   = new URLSearchParams(window.location.search);
  const intended = params.get('pathname');
  if (intended) {
    const hash   = window.location.hash || '';
    const target = decodeURIComponent(intended) + hash;
    window.history.replaceState(null, '', target);
  }
})();
// ───────────────────────────────────────────────────────────────────────────

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

reportWebVitals();