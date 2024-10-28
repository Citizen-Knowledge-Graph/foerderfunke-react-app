let pathname = encodeURIComponent(window.location.pathname);
let hash = encodeURIComponent(window.location.hash);

window.location.replace('/index.html?pathname=' + pathname + '&hash=' + hash);
