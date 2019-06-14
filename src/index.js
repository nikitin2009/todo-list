
const App = (function() {
  const entryPoint = document.getElementById('app');

  function init() {
    entryPoint.innerHTML = '<h1>Hello world</h1>';
  }

  return {
    init,
  }
})();

App.init();