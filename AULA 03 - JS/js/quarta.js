const buttonCheckIn = document.getElementById("checkInButton");

buttonCheckIn.addEventListener("click", () => {
  const message = document.getElementById("messageCheckin");
  message.style.backgroundColor = "green";

  const responseOne = prompt(
    "Bem Vindo! \n 1) Fazer Checkin\n 2) Fazer Checkout\n 3) Estender hospedagem\n 4) Sair\n\n Digite a opção desejada:"
  );

  switch (responseOne) {
    case "1":
      message.innerText = "Checkin feito com sucesso, seja bem-vindo.";
      break;
    case "2":
      const response = confirm("Tem certeza?");
      if (response) message.innerHTML = "Checkout feito com sucesso, até mais.";
      break;
    case "3":
      const days = parseInt(
        prompt("Por quantos dias gostaria de estender a hospedagem?")
      );
      if (days > 0)
        message.innerHTML = `Hospedagem estendida por ${days} dia${
          days > 1 ? "s" : ""
        } :D`;
      else message.innerHTML = "Número de dias inválido.";
      break;
    case "4":
      message.innerHTML = "Ok.";
      break;
    case "5":
      message.innerHTML = "Saindo do menu.";
      break;
    default:
      message.style.backgroundColor = "red";
      message.innerHTML = "Opção inválida.";
      break;
  }
});
