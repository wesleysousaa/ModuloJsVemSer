const calcCarbonos = document.getElementById("calcCarbonos");
calcCarbonos.addEventListener("click", () => {
  const messageCarbono = document.getElementById("messageCarbono");
  const carbOne = parseInt(
    prompt("Digite a quantidade de carbono da primeira substância:")
  );
  const carbTwo = parseInt(
    prompt("Digite a quantidade de carbono da segunda substância:")
  );

  if (carbOne === carbTwo + 2) {
    messageCarbono.style.backgroundColor = "green";
    messageCarbono.innerHTML = "São Iguais!";
    return;
  }
  messageCarbono.style.backgroundColor = "red";
  messageCarbono.innerHTML = "São Diferentes!";
});
