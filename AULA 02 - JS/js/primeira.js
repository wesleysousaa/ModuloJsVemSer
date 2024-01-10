const button = document.getElementById("btn-change-color");
const buttonReset = document.getElementById("btn-reset");

button.addEventListener("click", () => {
  const text = document.getElementById("text");
  text.innerHTML = "Já sou DBC!";
});

buttonReset.addEventListener("click", () => {
  window.location.reload();
});
