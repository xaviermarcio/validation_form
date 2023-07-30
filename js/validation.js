const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const emailConfirmation = document.getElementById("email-confirmation");
const password = document.getElementById("password");
const passwordConfirmation=getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();

});

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const emailConfirmationValue = emailConfirmation.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;


}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    formControl.ClassName = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.ClassName = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
  