const buttonStart = document.getElementById("startClock");

buttonStart.addEventListener("click", () => {
  const outputClock = document.getElementById("outputClock");
  outputClock.innerHTML = "0";
  let count = 0;
  const interval = setInterval(() => {
    if (count === 60) {
      outputClock.style.color = "green";
      outputClock.innerHTML = count + " segundos." + " ACABOOO!!";
      clearInterval(interval);
      return;
    }
    count++;
    outputClock.innerHTML = count + " segundos";
  }, 1000);
});
