const calular = (a, b, operador) => {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Digite numeros válidos");
    return;
  }
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
};

calular(3, 2, "*");
