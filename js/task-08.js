const form = document.querySelector("form")
form.addEventListener("submit", handleSubmit)
function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (email.value === "" || password.value === "") {
       // const message = alert("You need to enter all fields")
        return alert("You need to enter all fields")
    } else {
        //const addEmail = email.value
        //const addPassword = password.value
        //console.log(addEmail, addPassword)
        //const result = { email: email.value, password: password.value }
        //сonsole.log(result)
        console.log({
            email: email.value,
            password: password.value
        })
       
    }
     event.currentTarget.reset()
}