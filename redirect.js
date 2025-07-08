let pathname = encodeURIComponent(window.location.pathname);
let search   = encodeURIComponent(window.location.search);   
let hash     = encodeURIComponent(window.location.hash);

window.location.replace(
  '/index.html?pathname=' + pathname +
  '&search='   + search +
  '&hash='     + hash
);