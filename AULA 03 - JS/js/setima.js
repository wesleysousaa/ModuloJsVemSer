const verIdadeButton = document.getElementById("seeAge");

verIdadeButton.addEventListener("click", () => {
  const age = prompt("Qual a sua idade?");
  const message = document.getElementById("outputAge");
  message.style.backgroundColor = "green";
  message.innerHTML = `Você tem ${age} anos de idade!`;
});
