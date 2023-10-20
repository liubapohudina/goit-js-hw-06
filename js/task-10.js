function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const count = document.querySelector("input")
const createElements = document.querySelector("button[data-create]")
const destroyElements = document.querySelector("button[data-destroy]")
const newBoxes = document.querySelector("#boxes")
createElements.style.backgroundColor = "blue";
destroyElements.style.backgroundColor = "red";
createElements.addEventListener("click", createBoxes)

function createBoxes(amount) {
  amount = parseInt(count.value);
  createElements.style.backgroundColor = "blue"
  newBoxes.innerHTML = '';
  for (let i = 0; i < amount; i+=1) {
    const newElem = document.createElement("div");
    newElem.classList.add("box");
    newBoxes.appendChild(newElem);
    newElem.style.width = 30 + 10 * i + "px"
    newElem.style.height = 30 + 10 * i + "px"
    newElem.style.backgroundColor = getRandomHexColor()
  }
  console.log(newBoxes)
}
destroyElements.addEventListener("click", destroyBoxes)
function destroyBoxes() {
  count.value = ""
  newBoxes.innerHTML = ""
  console.log(newBoxes)
}