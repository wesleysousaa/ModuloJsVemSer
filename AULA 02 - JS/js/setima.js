const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const tree = document.getElementById("tree");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const dot = document.getElementById("dot");

const more = document.getElementById("more");
const sub = document.getElementById("sub");
const mult = document.getElementById("mult");
const div = document.getElementById("div");
const equal = document.getElementById("equal");

const output = document.getElementById("output-calc-two");

const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear-calc-two");

backspace.addEventListener("click", () => {
  if (output.innerHTML.length === 1) {
    output.innerHTML = "0";
  } else {
    output.innerHTML = output.innerHTML.slice(0, -1);
  }
});

clear.addEventListener("click", () => {
  output.innerHTML = "0";
});

const createEventListener = (node) => {
  node.addEventListener("click", (e) => {
    if (output.innerHTML === "0") {
      output.innerHTML = "";
    }
    if (output.style.color === "red") {
      output.style.color = "black";
      output.innerHTML = "";
    }
    output.innerHTML += e.target.innerHTML;
  });
};

equal.addEventListener("click", () => {
  try {
    output.innerHTML = eval(output.innerHTML);
  } catch (error) {
    output.innerHTML = "Digite um formato válido";
    output.style.color = "red";
  }
});

// Por favor, lembra de colocar no feedback
// se é uma boa conduta fazer dessa forma que eu fiz.
createEventListener(zero);
createEventListener(one);
createEventListener(two);
createEventListener(tree);
createEventListener(four);
createEventListener(five);
createEventListener(six);
createEventListener(seven);
createEventListener(eight);
createEventListener(nine);
createEventListener(dot);
createEventListener(more);
createEventListener(sub);
createEventListener(mult);
createEventListener(div);
