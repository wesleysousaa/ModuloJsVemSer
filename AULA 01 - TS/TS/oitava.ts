const readline = require("readline");

interface Nota {
  nota: GLfloat;
  peso: GLfloat;
}

const calularMediaPonderada = (nota1: Nota, nota2: Nota, nota3: Nota): void => {
  const pesoTotal: GLfloat = nota1.peso + nota2.peso + nota3.peso;
  const notaComPeso: GLfloat =
    nota1.nota * nota1.peso + nota2.nota * nota2.peso + nota3.nota * nota3.peso;

  const media: GLfloat = notaComPeso / pesoTotal;

  console.log(`A média ponderada do aluno é: ${media.toFixed(2)}`);
};

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const notas: Nota[] = [];

const perguntarNotaEPeso = (count: number): void => {
  input.question(`Digite a nota ${count}: `, (nota: string) => {
    input.question(`Digite o peso ${count}: `, (peso: string) => {
      notas.push({ nota: parseFloat(nota), peso: parseFloat(peso) });
      if (count === 3) {
        calularMediaPonderada(notas[0], notas[1], notas[2]);
        input.close();
      } else {
        perguntarNotaEPeso(count + 1);
      }
    });
  });
};

perguntarNotaEPeso(1);
