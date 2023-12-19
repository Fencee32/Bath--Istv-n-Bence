const container = document.getElementById("grid-container");
const numbers = Array.from({ length: 12 }, (_, index) => index + 1);
let clickedNumbers = [];
let startButtonClicked = false;
let ido=0;
let timer;

const startButton = document.createElement("button");
startButton.innerHTML = "Start";
startButton.addEventListener("click", function () {
  startButtonClicked = true;
  startButton.style.display = "none";
  showNumbers();
  startTimer();
});

container.appendChild(startButton);

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

function startTimer() {
  timer = setInterval(function() {
    ido++;
    szamlalo.innerText = ido;
  }, 100);
}

console.log(ido)

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
        alert("Congratulations! You completed the game!");
        location.reload();
      }
    } else if (startButtonClicked) {
      alert("Oops! Wrong number. Try again.");
      location.reload();
    }
  });

  return box;
}


