window.onload = function () {
  var min = 0;
  var sec = 0;
  var tens = 0;
  var addMin = document.getElementById("min");
  var addSec = document.getElementById("sec");
  var addTens = document.getElementById("tens");
  var butStart = document.getElementById("start");
  var butStop = document.getElementById("stop");
  var butReset = document.getElementById("reset");
  var interval;

  butStart.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };
  butStop.onclick = () => {
    clearInterval(interval);
  };
  butReset.onclick = () => {
    clearInterval(interval);
    min = "00";
    sec = "00";
    tens = "00";
    addMin.innerHTML = min;
    addSec.innerHTML = sec;
    addTens.innerHTML = tens;
  };

  function startTimer() {
    tens++;
    if (tens <= 9) {
      addTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      addTens.innerHTML = tens;
    }
    if (tens > 99) {
      sec++;
      addSec.innerHTML = "0" + sec;
      tens = 0;
      addTens.innerHTML = "0" + 0;
    }
    if (sec > 9) {
      addSec.innerHTML = sec;
    }
    if (sec > 59) {
      min++;
      addMin.innerHTML = "0" + min;
      sec = 0;
      addSec.innerHTML = "0" + 0;
    }
    if (min > 9) {
      addMin.innerHTML = min;
    }
  }
};
