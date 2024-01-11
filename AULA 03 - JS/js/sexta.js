const calcPares = document.getElementById("calcPares");

calcPares.addEventListener("click", () => {
  const container = document.getElementById("numsContainer");
  container.innerHTML = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      const p = document.createElement("p");
      p.className = "numItem";
      p.innerHTML = i;
      p.style.animationDuration = `${i / 100}s`;
      container.appendChild(p);
    }
  }
});
