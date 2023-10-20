function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const currentColor = document.querySelector(".color")
const changeColor = document.querySelector(".change-color")
console.log(currentColor, changeColor)
changeColor.addEventListener("click", generationColor)
function generationColor() {
  const color = getRandomHexColor()
  currentColor.textContent = color
  document.body.style.backgroundColor = color
  changeColor.style.backgroundColor = color
 }