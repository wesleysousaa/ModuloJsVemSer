// Aqui eu tô desestruturando um objeto e pegando os valores direto.
// Pra apresentação ficar mais bonitinha, espero que não se importe XD.
const calcularIdades = ({ idade1, nome1 }, { idade2, nome2 }) => {
  console.log(`A idade de ${nome1} é ${idade1}`);
  console.log(`A idade de ${nome2} é ${idade2}`);
  // Coloquei o ABS do math aqui pra não ficar negativo o resultado.
  console.log(
    `A diferença de idade entre ${nome1} e ${nome2} é ${Math.abs(
      idade1 - idade2
    )}`
  );
};

calcularIdades({ idade1: 20, nome1: "Carlos" }, { idade2: 25, nome2: "Ana" });
