(function () {
  function processHash() {
    var hash = location.hash || '#';

    if (!app.router.run(hash.slice(1))) {
      app.notFound();
    }
  }

  window.addEventListener('hashchange', processHash);
  processHash();
})();
