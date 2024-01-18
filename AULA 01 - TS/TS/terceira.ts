interface Pessoa {
  nome: string;
  idade: number;
}

function calcularIdades(pessoa1: Pessoa, pessoa2: Pessoa): void {
  console.log(`A idade de ${pessoa2.nome} é ${pessoa2.idade}`);
  console.log(
    `A diferença de idade entre ${pessoa1.nome} e ${pessoa2.nome} é ${Math.abs(
      pessoa1.idade - pessoa2.idade
    )}`
  );
}

calcularIdades({ idade: 20, nome: "Carlos" }, { idade: 25, nome: "Ana" });
