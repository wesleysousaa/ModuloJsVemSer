const form = document.getElementById("form");
const speedInput = document.getElementById("speed");
const peoples = document.getElementById("peoples");
let arrPeoples = [];

let totalSpeed = 0;

const randomSort = () =>
  arrPeoples[Math.floor(Math.random() * arrPeoples.length)];

const clearAll = () => {
  const peoplesOutput = document.getElementById("peoples-output");
  if (peoplesOutput.innerHTML !== "") {
    peoplesOutput.innerHTML = "";
  }
};

const calcTotalSpeed = () => {
  const totalSpeedOutput = document.getElementById("total-speed");
  totalSpeed = arrPeoples.length * speedInput.value;
  totalSpeedOutput.innerHTML = totalSpeed;
};

peoples.addEventListener("input", function (e) {
  const peoples = e.target.value;
  arrPeoples = peoples.split(",").filter((people) => people.trim().length > 0);
  calcTotalSpeed();
});

speedInput.addEventListener("input", function (e) {
  calcTotalSpeed();
});

const showPeoples = async () => {
  const waitSort = (duration) => {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  };

  if (arrPeoples.length > 0) {
    try {
      const peoplesOutput = document.getElementById("peoples-output");
      peoplesOutput.innerHTML = `<h3 style="animation:aparicaoNumber 100ms ease-in-out">O GRANDE SORTEADO DA VEZ É...</h3>`;
      await waitSort(totalSpeed / arrPeoples.length);
      peoplesOutput.innerHTML += `<li class="people-sorted" style="animation-name:aparicaoNumber">${randomSort()}</li>`;
    } catch (error) {
      peoplesOutput.innerHTML = error;
    }
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearAll();
  showPeoples();
});
