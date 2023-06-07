const throttle = require('lodash.throttle')
const form = document.querySelector(".feedback-form")
const email = document.querySelector("form.feedback-form input[name='email']")
const message = document.querySelector("form.feedback-form textarea[name='message']")

const addToStorage = (event) =>{
    const feedbackFormState = {
        email : email.value,
        message : message.value,
    }
    localStorage.setItem("feedback-form-state" ,JSON.stringify(feedbackFormState))
}

email.addEventListener("input", throttle(addToStorage, 500));
message.addEventListener("input", throttle(addToStorage,500));

const formSend = (event) => {
    event.preventDefault()
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
email.value = "";
message.value = "";
    localStorage.removeItem("feedback-form-state");
}

form.addEventListener("submit",formSend)
const checkStorage = () => {
    if (localStorage.getItem("feedback-form-state") === ""){
        return 
    } else {
        email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email
        message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message
    }
}
checkStorage();