function calcularGeracoes(anoInicial) {
    var mediaGeracao = 28;
    var anoAtual = new Date().getFullYear();
    var diferencaDeAnos = anoAtual - anoInicial;
    console.log(diferencaDeAnos / mediaGeracao);
}
calcularGeracoes(1500);
