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
}

for (let i = 0; i < 12; i++) {
  const box = createBox(numbers[i])
  container.appendChild(box)
}

function createBox(number) {
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
    }
  })

  return box
}

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
