const showPares = document.getElementById("showPares");
const arrSecond = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

showPares.addEventListener("click", () => {
  const container = document.getElementById("container2");
  container.innerHTML = "";
  arrSecond.map((n, i) => {
    if (n % 2 === 0) {
      const messageSecond = document.createElement("p");
      messageSecond.className = "message";
      messageSecond.id = "message2";
      messageSecond.style.backgroundColor = "green";
      messageSecond.style.color = "white";
      messageSecond.style.animationDuration = `${i / 10}s`;
      messageSecond.innerHTML = `O numero ${n} é par e está no indice ${i} `;

      container.appendChild(messageSecond);
    }
  });
});
