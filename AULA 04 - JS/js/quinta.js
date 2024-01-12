let arr5 = ["Mussarela", "Minas", "Parmesão", "Prato", "Gorgonzola"];
const container5 = document.getElementById("container5");

const messageQueijos = document.createElement("p");
messageQueijos.className = "message";
messageQueijos.innerHTML = `Cardápio de Queijos: ${arr5.join(", ")}`;
messageQueijos.style.backgroundColor = "green";
messageQueijos.style.color = "white";

container5.appendChild(messageQueijos);

arr5.push(["Mascarpone", "Ricota", "Provolone"]);
const updateList = document.createElement("p");
updateList.className = "message";
updateList.innerHTML = `Lista Atualizada: ${arr5.join(", ")}`;
updateList.style.backgroundColor = "green";
updateList.style.color = "white";

container5.appendChild(updateList);

arr5.sort();
const updateList2 = document.createElement("p");
updateList2.className = "message";
updateList2.style.backgroundColor = "green";
updateList2.style.color = "white";

let count = 0;
arr5 = arr5.map((item) => {
  if (item >= "Cottage" && count === 0) {
    count++;
    return ["Cottage", item];
  }
  return item;
});

updateList2.innerHTML = `Lista Atualizada em ordem alfabética: ${arr5.join(
  ", "
)}`;
container5.appendChild(updateList2);
