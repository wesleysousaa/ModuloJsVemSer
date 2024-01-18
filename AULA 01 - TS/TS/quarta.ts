function calcularGeracoes(anoInicial: number): void {
  const mediaGeracao: number = 28;
  let anoAtual: number = new Date().getFullYear();
  let diferencaDeAnos: number = anoAtual - anoInicial;
  console.log(diferencaDeAnos / mediaGeracao);
}

calcularGeracoes(1500);
