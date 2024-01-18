var readline = require("readline");
var calularMediaPonderada = function (nota1, nota2, nota3) {
    var pesoTotal = nota1.peso + nota2.peso + nota3.peso;
    var notaComPeso = nota1.nota * nota1.peso + nota2.nota * nota2.peso + nota3.nota * nota3.peso;
    var media = notaComPeso / pesoTotal;
    console.log("A m\u00E9dia ponderada do aluno \u00E9: ".concat(media.toFixed(2)));
};
var input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var notas = [];
var perguntarNotaEPeso = function (count) {
    input.question("Digite a nota ".concat(count, ": "), function (nota) {
        input.question("Digite o peso ".concat(count, ": "), function (peso) {
            notas.push({ nota: parseFloat(nota), peso: parseFloat(peso) });
            if (count === 3) {
                calularMediaPonderada(notas[0], notas[1], notas[2]);
                input.close();
            }
            else {
                perguntarNotaEPeso(count + 1);
            }
        });
    });
};
perguntarNotaEPeso(1);
