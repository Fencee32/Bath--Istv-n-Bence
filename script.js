<<<<<<< HEAD
const container = document.getElementById('grid-container')
const szamlalo = document.getElementById('szamlalo')
const bestTimeDisplay = document.getElementById('bestTime')
const startButton = document.getElementById('startButton')
const numbers = Array.from({ length: 12 }, (_, index) => index + 1)
let clickedNumbers = []
let ido
let idozito
let bestTime = Infinity

function startTimer() {
  ido = 0 // Reset the timer
  idozito = setInterval(function () {
    szamlalo.innerText = (ido / 10).toFixed(1) // Fix to display in seconds with one decimal place
    ido++
  }, 100)
}

function stopTimer() {
  clearInterval(idozito)
}

function updateBestTime() {
  if (ido < bestTime) {
    bestTime = ido
    bestTimeDisplay.innerText = `Best Time: ${(bestTime / 10).toFixed(1)}s`
  }
}

// Kártyák keverése és megjelenítése
for (let i = 0; i < 12; i++) {
  let pos1 = Math.floor(Math.random() * 12)
  let pos2 = Math.floor(Math.random() * 12)
  let temp = numbers[pos1]
  numbers[pos1] = numbers[pos2]
  numbers[pos2] = temp
=======
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
>>>>>>> 58290e58676baa5d533f5c46f232c9aaa17c744a
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
<<<<<<< HEAD
  const box = document.createElement('div')
  box.classList.add('box')
  box.innerHTML = number

  box.addEventListener('click', function () {
    if (parseInt(box.innerHTML) === clickedNumbers.length + 1) {
      clickedNumbers.push(parseInt(box.innerHTML))
      box.style.visibility = 'hidden'

      if (clickedNumbers.length === numbers.length) {
        stopTimer()
        updateBestTime() // Update the best time
        alert('G to the G! Nulla killes fortnajt viktori rojal!')
        location.reload()
      }

      if (clickedNumbers.length === 1) {
        startTimer() // Az időzítőt csak az első kattintásra indítjuk el
      }
    } else {
      alert('Nem jott ossze papito, menj pihenj a beke szigeten')
      location.reload()
=======
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
>>>>>>> 58290e58676baa5d533f5c46f232c9aaa17c744a
    }
  });

  return box;
}

<<<<<<< HEAD
// Start button click event
startButton.addEventListener('click', function () {
  // Display the numbers
  container.style.visibility = 'visible'

  // Start the timer
  startTimer()

  // Disable the start button after it's clicked
  startButton.disabled = true
})

// Hide the grid initially
container.style.visibility = 'hidden'
=======

>>>>>>> 58290e58676baa5d533f5c46f232c9aaa17c744a
