let n = 100;

const primosGemeos = (n) => {
  const arr = [];
  const isPrimo = (n) => {
    let count = 0;
    for (let i = 1; i <= n && count <= 2; i++) {
      if (n % i === 0) {
        count++;
      }
    }
    return count === 2;
  };
  for (let i = 1; i <= n; i++) {
    if (isPrimo(i)) {
      arr.push(i);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 2 === arr[i + 1]) {
      console.log(`${arr[i]} é primo gêmeo de ${arr[i + 1]}`);
    }
  }
};

primosGemeos(n);
