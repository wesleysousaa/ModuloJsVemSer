function isParOrImpar(num: number): string {
  return num % 2 !== 0 ? "Ímpar" : "Par";
}
const num: number = 13;
console.log(isParOrImpar(num));
