const button = document.getElementById("submitNota");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const n1 = document.getElementById("notaOne").value;
  const n2 = document.getElementById("notaTwo").value;
  const n3 = document.getElementById("notaTree").value;
  const resultNota = document.getElementById("resultNota");
  const message = document.getElementById("message");
  const media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;
  if (media >= 7) {
    resultNota.style.color = "green";
    message.style.color = "#fff";
    message.style.backgroundColor = "green";
    message.innerHTML = "Parabéns, você foi aprovado!";
  } else {
    resultNota.style.color = "red";
    message.style.color = "red";
    message.style.backgroundColor = "#f5d9dd";
    message.innerHTML = "Infelizmente você foi reprovado!";
  }
  resultNota.innerHTML = media.toFixed(2);
});
