const sortVectorFirstButton = document.getElementById("sortVectorFirst");
const message = document.getElementById("message1");
message.style.backgroundColor = "red";
const arr = [10, 22, 42, 36, 78, 12, 34, 94, 64, 38];

message.innerHTML = arr.join(", ");
sortVectorFirstButton.addEventListener("click", () => {
  message.style.backgroundColor = "green";
  message.innerHTML = arr.sort((a, b) => a - b).join(", ");
});
