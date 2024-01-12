const arrOne = [1.23, 48.11, 90.11, 8.5, 9.99, 1, 1.1, 67];

const messageTree = document.getElementById("message3");
messageTree.innerHTML = `Lista de valores 1 -> ${arrOne.join(", ")}`;
messageTree.style.backgroundColor = "red";

const messageTreeOut = document.getElementById("message3Output");
messageTreeOut.style.backgroundColor = "green";

arrOne[0] = 3.48;
arrOne[2] = 6;
arrOne[5] = 8;

messageTreeOut.innerHTML = `Lista de valores 2 -> ${arrOne.join(", ")}`;
