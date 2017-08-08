  var s = 0;
  var tima;
  var tm = 0;
  //count method
  function count() {
      document.getElementById('txt').value = s;
      s = s + 1;
      tima = setTimeout(function () {
          count()
      }, 1000);
  }
  //start the timer.
  function start() {
      if (!tm) {
          tm = 1;
          count();
      }
  }
  //stop the timer.
  function stop() {
      clearTimeout(tima);
      tm = 0;
  }
