const greyButton = document.getElementById("grey-button");
const blurButton = document.getElementById("blur-button");
const resetButton = document.getElementById("reset-img-filter");
const img = document.getElementById("img-4");

greyButton.addEventListener("click", () => {
  img.className = "grey-scale";
});

blurButton.addEventListener("click", () => {
  img.className = "blur";
});

resetButton.addEventListener("click", () => {
  img.className = "";
});
