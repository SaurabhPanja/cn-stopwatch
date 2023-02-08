(function () {
  let milliSeconds = 0;
  let seconds = 0;
  let stopCounterToClearInterval = 1;

  document.querySelector("#start-btn").addEventListener("click", () => {
    stopCounterToClearInterval = setInterval(() => {
      document.querySelector("#display-milliseconds").innerHTML =
        milliSeconds % 100;
      seconds = Math.floor(milliSeconds / 100);
      document.querySelector("#display-seconds").innerHTML =
        seconds < 10 ? "0" + seconds : seconds;
      milliSeconds++;
    }, 10);
  });

  document.querySelector("#stop-btn").addEventListener("click", () => {
    clearInterval(stopCounterToClearInterval);
  });

  document.querySelector("#reset-btn").addEventListener("click", () => {
    clearInterval(stopCounterToClearInterval);
    milliSeconds = 0;
    seconds = 0;

    document.querySelector("#display-milliseconds").innerHTML = "00";
    document.querySelector("#display-seconds").innerHTML = "00";
  });
})();
