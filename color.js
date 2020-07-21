let getRandomeColors = (num) => {
  let rgbs = [];
  let random = function() {
    return Math.floor(Math.random() * 256)
  }
  for (let i = 0; i < num; i++) {
    rgbs.push(`rgb(${random()}, ${random()}, ${random()})`)
  }
  return rgbs
}

let colors = getRandomeColors(6);
let squares = document.querySelectorAll(".square");
let displayMessage = document.getElementById('displayMessage');
let resetButton = document.querySelector('#setup')
let h1 = document.querySelector('h1')


let applyColorsToSquares = function (colors) {
  pickedColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("targetColor").textContent = pickedColor;
  for(let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add event listeners to squares to compare to targetColor
    squares[i].addEventListener("click", (e) => {
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
  }
}

applyColorsToSquares(colors);
function applyWinningColor(color) {
  squares.forEach(el => {
    el.style.backgroundColor = color;
  }) 
}

resetButton.addEventListener("click", e => {
  colors = getRandomeColors(6)
  applyColorsToSquares(colors);
  e.target.textContent = "New Colors";
  displayMessage.textContent = "Alright! Let's continue!";
  h1.style.backgroundColor = "steelblue"
})