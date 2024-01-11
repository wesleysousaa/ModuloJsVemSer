const calcSum = document.getElementById("calcSum");

calcSum.addEventListener("click", () => {
  const sumNumbers = document.getElementById("sumNumbers");
  let total = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      total += i;
    }
  }
  sumNumbers.style.color = "#fff";
  sumNumbers.style.backgroundColor = "green";
  sumNumbers.innerHTML = `A Soma é ${total}`;
});
