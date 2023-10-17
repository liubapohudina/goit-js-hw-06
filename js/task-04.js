const addButton = document.querySelector("button[data-action=increment]");
const deleteButton = document.querySelector("button[data-action=decrement]");
let counter = document.querySelector('span')

let counterValue = 0;
const handClick = () => {
    counterValue += 1;
    counter.innerHTML = counterValue
  console.log(counter);
};

const handDelete = () => {
    if (counterValue <= 0) {
        const message = confirm("Error.Click can not as a negative number")
        console.log(message)
    } else {
        counterValue -= 1;
        counter.innerHTML = counterValue
        console.log(counter);
    }
};

addButton.addEventListener("click", handClick);
deleteButton.addEventListener("click", handDelete);


