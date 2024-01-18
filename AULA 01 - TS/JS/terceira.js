function calcularIdades(pessoa1, pessoa2) {
    console.log("A idade de ".concat(pessoa2.nome, " \u00E9 ").concat(pessoa2.idade));
    console.log("A diferen\u00E7a de idade entre ".concat(pessoa1.nome, " e ").concat(pessoa2.nome, " \u00E9 ").concat(Math.abs(pessoa1.idade - pessoa2.idade)));
}
calcularIdades({ idade: 20, nome: "Carlos" }, { idade: 25, nome: "Ana" });
