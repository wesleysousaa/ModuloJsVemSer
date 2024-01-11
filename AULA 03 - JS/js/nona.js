const calcFib = document.getElementById("calcFib");

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

calcFib.addEventListener("click", () => {
  const container = document.getElementById("numsContainerFib");
  container.innerHTML = "";
  for (let i = 1; i < 20; i++) {
    const p = document.createElement("p");
    p.className = "numItem";
    p.innerHTML = fib(i);
    p.style.animationDuration = `${i / 100}s`;
    container.appendChild(p);
  }
});
