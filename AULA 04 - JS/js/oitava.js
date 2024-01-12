const cunjuntoA = [2, 4, 6, 7, 8, 22, 45, 34, 89, 75, 62, 54];
const conjuntoB = [22, 23, 57, 45, 77, 62, 56, 54, 97, 88, 33, 5];

const conjuntoUnion = new Set([...cunjuntoA, ...conjuntoB].sort());
const conjuntoInter = new Set(
  [...cunjuntoA].filter((x) => conjuntoB.includes(x)).sort()
);
const conjuntoDif = new Set(
  [...conjuntoB].filter((x) => !cunjuntoA.includes(x)).sort()
);

const container8 = document.getElementById("container8");

const conjuntoAMessage = document.createElement("p");
conjuntoAMessage.className = "message";
conjuntoAMessage.style.color = "white";
conjuntoAMessage.style.backgroundColor = "#4369e2";
conjuntoAMessage.innerHTML = `O conjunto A é: { ${[...cunjuntoA]} }`;

const conjuntoBMessage = document.createElement("p");
conjuntoBMessage.className = "message";
conjuntoBMessage.style.color = "white";
conjuntoBMessage.style.backgroundColor = "#4369e2";
conjuntoBMessage.innerHTML = `O conjunto B é: { ${[...conjuntoB]} }`;

const unionMessage = document.createElement("p");
unionMessage.className = "message";
unionMessage.style.color = "white";
unionMessage.style.backgroundColor = "green";
unionMessage.innerHTML = `A <strong>união</strong> entre os conjuntos tem como resultado: ${[
  ...conjuntoUnion,
]}`;

const interMessage = document.createElement("p");
interMessage.className = "message";
interMessage.style.color = "white";
interMessage.style.backgroundColor = "green";
interMessage.innerHTML = `A <strong>intersecção</strong> entre os conjuntos tem como resultado: ${[
  ...conjuntoInter,
]}`;

const difMessage = document.createElement("p");
difMessage.className = "message";
difMessage.style.color = "white";
difMessage.style.backgroundColor = "green";
difMessage.innerHTML = `A <strong>diferença</strong> entre os conjuntos tem como resultado: ${[
  ...conjuntoDif,
]}`;
container8.appendChild(conjuntoAMessage);
container8.appendChild(conjuntoBMessage);

container8.appendChild(unionMessage);
container8.appendChild(interMessage);
container8.appendChild(difMessage);
