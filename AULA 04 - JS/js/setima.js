const medalhas = ["Ouro", "Prata", "Bronze"];
const lugares = ["1º", "2º", "3º", "4º", "5º"];
const container7 = document.getElementById("container7");

lugares.forEach((lugar, index) => {
  const messageNew = document.createElement("p");
  messageNew.className = "message";
  messageNew.style.color = "white";
  if (medalhas[index]) {
    messageNew.style.backgroundColor = "green";
    messageNew.innerHTML = `Posição no campeonato ${lugar} Lugar --> Medalha de: ${medalhas[index]}`;
  } else {
    messageNew.style.backgroundColor = "red";
    messageNew.innerHTML = `Posição no campeonato ${lugar} Lugar --> Medalha de: Sem Medalha`;
  }
  container7.appendChild(messageNew);
});
