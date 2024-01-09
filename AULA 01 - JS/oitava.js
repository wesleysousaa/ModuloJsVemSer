const readline = require("readline");

const calularMediaPonderada = ({ n1, w1, n2, w2, n3, w3 }) => {
  console.log(w1 + w2 + w3);
  console.log(n1 * w1 + n2 * w2 + n3 * w3);
  const media =
    (n1 * w1 + n2 * w2 + n3 * w3) /
    (parseFloat(w1) + parseFloat(w2) + parseFloat(w3));
  console.log(`A média ponderada do aluno é: ${media.toFixed(2)}`);
};

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question(`Digite a nota de P1: `, (p1) => {
  input.question(`Digite o peso de P1: `, (w1) => {
    input.question(`Digite a nota de P2: `, (p2) => {
      input.question(`Digite o peso de P2: `, (w2) => {
        input.question(`Digite a nota de P3: `, (p3) => {
          input.question(`Digite o peso de P3: `, (w3) => {
            calularMediaPonderada({ n1: p1, w1, n2: p2, w2, n3: p3, w3 });
            input.close();
          });
        });
      });
    });
  });
});
