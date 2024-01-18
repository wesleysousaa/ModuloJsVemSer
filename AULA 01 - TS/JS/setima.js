// Aqui é interessante um comentário que é:
// Tinha uma verficação pra saber se a e b eram do tipo number
// Agora não precisa mais, pois o typescript já faz isso heheh, ele nem compila se não for number.
function calular(a, b, operador) {
    switch (operador) {
        case "+":
            console.log(a + b);
            break;
        case "-":
            console.log(a - b);
            break;
        case "*":
            console.log(a * b);
            break;
        case "/":
            console.log(a / b);
            break;
        default:
            console.log("Operador inválida");
    }
}
calular(3.5, 2, "*");
