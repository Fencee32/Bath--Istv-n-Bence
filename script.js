const container = document.getElementById("grid-container");
const szamlalo = document.getElementById("szamlalo");
const bestTimeDisplay = document.getElementById("bestTime");
const startButton = document.getElementById("startButton");
const numbers = Array.from({ length: 12 }, (_, index) => index + 1);
let clickedNumbers = [];
let ido = 0;
let idozito;
let bestTime = Infinity;
let startButtonClicked = false;
let timer;

function startTimer() {
  ido = 0; 
  idozito = setInterval(function () {
    szamlalo.innerText = (ido / 10).toFixed(1); 
    ido++;
  }, 100);
}

function stopTimer() {
  clearInterval(idozito);
}

function updateBestTime() {
  if (ido < bestTime) {
    bestTime = ido;
    bestTimeDisplay.innerText = `Legjobb idő: ${(bestTime / 10).toFixed(1)}s`;
  }
}

function showNumbers() {
  shuffleNumbers();
  for (let i = 0; i < 12; i++) {
    const box = createBox(numbers[i]);
    container.appendChild(box);
  }
}

function shuffleNumbers() {
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
}

function startGame() {
  startButtonClicked = true;
  startButton.style.display = "none";
  showNumbers();
  startTimer();
}

function createBox(number) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.innerHTML = number;

  box.addEventListener("click", function () {
    if (startButtonClicked && parseInt(box.innerHTML) === clickedNumbers.length + 1) {
      clickedNumbers.push(parseInt(box.innerHTML));
      box.style.visibility = "hidden";

      if (clickedNumbers.length === numbers.length) {
        clearInterval(timer);
        stopTimer(); 
        updateBestTime(); 
        alert("Gratulálok! Nyertél!");
        location.reload();
      }
    } else if (startButtonClicked) {
      alert("Hoppá, rossz számra nyomtál!");
      location.reload();
      stopTimer(); 
    }
  });

  return box;
}
startButton.addEventListener("click", startGame);
container.appendChild(startButton);