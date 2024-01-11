function wageRaisePercentage() {
  const startingYear = 2013;
  const startingWage = 1000.0;
  let previousWage = 1000.0;
  let currentWage = 1000.0;
  const salaries = document.getElementById("salaries");
  salaries.innerHTML = "";
  for (let currentYear = startingYear; currentYear <= 2022; currentYear++) {
    const raise = ((currentWage - previousWage) / currentWage) * 100;
    const message = document.createElement("p");
    message.className = "message";
    message.style.backgroundColor = "green";
    message.innerHTML += `${currentYear} - R$${currentWage.toFixed(
      1
    )} - Aumento de ${raise.toFixed(1)}%`;
    salaries.appendChild(message);
    previousWage = currentWage;

    if (currentYear < 2017) currentWage = currentWage * 1.015;
    else currentWage = currentWage * 1.03;

    currentWage = currentWage;
  }

  const totalRaise = ((currentWage - startingWage) / currentWage) * 100;
  const message = document.createElement("p");

  message.className = "message";
  message.style.backgroundColor = "#4369e2";
  message.style.fontWeight = "bold";
  message.innerHTML += `Aumento relativo ao salário inicial: ${totalRaise.toFixed(
    1
  )}%`;
  salaries.appendChild(message);
}

const calcSalary = document.getElementById("calcSalary");

calcSalary.addEventListener("click", () => {
  wageRaisePercentage();
});
