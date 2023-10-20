const range = document.querySelector("#font-size-control")
const text = document.querySelector("#text")
range.addEventListener("input", changeFontSize)
function changeFontSize (event) {
    text.style.fontSize = event.currentTarget.value + "px";
}
