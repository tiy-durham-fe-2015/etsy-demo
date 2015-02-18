(function () {
  function processHash() {
    var hash = location.hash || '#';

    // hash === '#users/132'
    // hash.slice(1) === 'users/132'
    if (!app.router.run(hash.slice(1))) {
      app.notFound();
    }
  }

  window.addEventListener('hashchange', processHash);
  processHash();
})();
