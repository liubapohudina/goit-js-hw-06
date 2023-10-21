const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output")
//console.log(textInput);
//console.log(output)
const handInput = (event) => {
    if (textInput.value.trim() === "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = event.currentTarget.value;
        console.log(textInput)
    }
};
textInput.addEventListener("input", handInput)

