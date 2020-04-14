(function() {
  function output(text) {
    const div = document.getElementById('journey-frontend-lib-panel');
    div.innerHTML = text;
  }
  return {
    output: output
  };
})();
