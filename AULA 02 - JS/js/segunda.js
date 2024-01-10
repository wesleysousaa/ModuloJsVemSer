const inputColor = document.getElementById("change-color");

// Aqui eu coloquei pra mudar a cor quando faz change no input
// Acho que fica mais dinâmico assim, espero que não tire nota XD.
inputColor.addEventListener("input", function (e) {
  const text = document.getElementById("text-2");
  text.style.color = e.target.value;
});
