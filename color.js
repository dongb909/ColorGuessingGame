let squareNums = 6;
let squares = document.querySelectorAll(".square");
let displayMessage = document.getElementById('displayMessage');
let resetButton = document.querySelector('#setup');
let h1 = document.querySelector('h1');
let modes = document.querySelectorAll('.mode');

init();

function init() {
  modeListeners(); //add mode event listeners
  newGameListeners(); //add resetBtn event listener
  squareListeners(); //add square event listeners
  reset();
}

function modeListeners(){
  modes.forEach(modeBtn => {
    modeBtn.addEventListener("click", e => { 
      modes[0].classList.toggle("selected");
      modes[1].classList.toggle("selected");
      e.target.textContent === "Hard" ? squareNums = 6 : squareNums = 3;
      reset();
    })
  })
}

function newGameListeners() {
  resetButton.addEventListener("click", e => {
    reset();
    e.target.textContent = "New Colors";
  })
}

function squareListeners(){
  squares.forEach(square => {square.addEventListener("click", (e) => {
      if (e.target.style.backgroundColor === pickedColor){
        displayMessage.textContent = "Correcto!!";
        applyWinningColor(pickedColor);
        h1.style.backgroundColor = pickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        e.target.style.backgroundColor = "#232323";
        displayMessage.textContent = "Alomost! Try Again";
      }
    })
  })
}

function getRandomeColors(num) {
  let rgbs = [];
  let random = function() {
    return Math.floor(Math.random() * 256)
  }
  for (let i = 0; i < num; i++) {
    rgbs.push(`rgb(${random()}, ${random()}, ${random()})`)
  }
  return rgbs
}

function applyColorsToSquares(colors) {
  pickedColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("targetColor").textContent = pickedColor;
  for(let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    if (colors[i]) squares[i].style.backgroundColor = colors[i];
    else squares[i].style.backgroundColor = "#232323"
  }
}

function applyWinningColor(color) {
  squares.forEach(square => {
    square.style.backgroundColor = color;
  }) 
}

function reset(){
  colors = getRandomeColors(squareNums);
  applyColorsToSquares(colors);
  displayMessage.textContent = "";
  h1.style.backgroundColor = "steelblue";
}