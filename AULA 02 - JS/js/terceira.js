const btnIncrement = document.getElementById("increment");
const btnReset = document.getElementById("reset");

let counter = 0;

btnIncrement.addEventListener("click", () => {
  autalizarValor(++counter);
});

btnReset.addEventListener("click", () => {
  autalizarValor(0);
});

const autalizarValor = (valor) => {
  counter = valor;
  const output = document.getElementById("output");
  output.innerHTML = counter;
};
