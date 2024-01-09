const calcularGeracoes = (anoInicial) => {
  const mediaGeracao = 28;
  let anoAtual = new Date().getFullYear();
  let diferencaDeAnos = anoAtual - anoInicial;
  console.log(diferencaDeAnos / mediaGeracao);
};

calcularGeracoes(1500);
