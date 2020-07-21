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
let pickedColor = colors[Math.floor(Math.random() * colors.length)];
document.getElementById("targetColor").textContent = pickedColor;



let applyColorsToSquares = function (colors) {
  for(let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add event listeners to squares
    squares[i].addEventListener("click", (e) => {
      //get color and compare with target color
      if (e.target.style.backgroundColor !== pickedColor){
        alert('wrong')
      } else {
        alert('correct')
      }
    })

  }
}

applyColorsToSquares(colors);