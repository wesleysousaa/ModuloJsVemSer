const ageDarknessObj = {
  Ouro: 45,
  Prata: 56,
  Madeira: 236,
  Pedra: 458,
};
const ageCastlesObj = {
  Ouro: 345,
  Prata: 568,
  Madeira: 789,
  Pedra: 897,
};

const ageDarknessOutput = document.getElementById("ageDarkness");
const ageCastlesOutput = document.getElementById("ageCastles");
const ageDarknessTotal = document.getElementById("ageDarknessTotal");
const ageCastlesTotal = document.getElementById("ageCastlesTotal");

const totalDarkness = Object.values(ageDarknessObj).reduce((acc, v) => acc + v);
const totalCastles = Object.values(ageCastlesObj).reduce((acc, v) => acc + v);

ageDarknessOutput.innerHTML = `<strong>Objetos do meu inventário - Idade das Trevas:</strong> <br />
Ouro --> ${ageDarknessObj.Ouro} sacas <br />
Prata --> ${ageDarknessObj.Prata} sacas <br />
Madeira --> ${ageDarknessObj.Madeira} sacas <br />
Pedra --> ${ageDarknessObj.Pedra} sacas <br />
`;

ageCastlesOutput.innerHTML = `<strong>Objetos do meu inventário - Idade dos Castelos:</strong> <br />
Ouro --> ${ageCastlesObj.Ouro} sacas <br />
Prata --> ${ageCastlesObj.Prata} sacas <br />
Madeira --> ${ageCastlesObj.Madeira} sacas <br />
Pedra --> ${ageCastlesObj.Pedra} sacas <br />
`;

ageDarknessTotal.innerHTML = `Na "Idade das Trevas" o status do meu inventário é:
Total de: 4 tipos de itens com: ${totalDarkness} sacas`;

ageCastlesTotal.innerHTML = `Na "Idade dos Castelos" o status do meu inventário é:
Total de: 4 tipos de itens com: ${totalCastles} sacas`;

ageCastlesTotal.style.backgroundColor = "green";
ageDarknessTotal.style.backgroundColor = "green";
ageDarknessOutput.style.backgroundColor = "green";
ageCastlesOutput.style.backgroundColor = "green";
