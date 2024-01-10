const btnCalc = document.getElementById("calc-one");
const clearBtn = document.getElementById("clear-calc-one");

btnCalc.addEventListener("click", (e) => {
  e.preventDefault();
  const num1 = document.getElementById("valueOne").value;
  const num2 = document.getElementById("valueTwo").value;
  const operation = document.getElementById("operation").value;
  const result = document.getElementById("output-5");
  switch (operation) {
    case "+":
      result.innerHTML = Number(num1) + Number(num2);
      break;
    case "-":
      result.innerHTML = Number(num1) - Number(num2);
      break;

    case "*":
      result.innerHTML = Number(num1) * Number(num2);
      break;
    case "/":
      result.innerHTML = Number(num1) / Number(num2);
      break;
  }
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const num1 = document.getElementById("valueOne");
  const num2 = document.getElementById("valueTwo");
  const operation = document.getElementById("operation");
  const result = document.getElementById("output-5");
  num1.value = "";
  num2.value = "";
  operation.value = "+";
  result.innerHTML = "0";
});
