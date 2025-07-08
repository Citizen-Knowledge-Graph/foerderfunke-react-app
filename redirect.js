const full = window.location.pathname
           + window.location.search
           + window.location.hash;

window.location.replace(
  '/index.html?pathname=' + encodeURIComponent(full)
);