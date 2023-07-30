const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const emailConfirmation = document.getElementById("email-confirmation");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const emailConfirmationValue = emailConfirmation.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(usernameValue === ""){
        setErrorFor(username, "O nome de usuário é obrigatório!");
    }else if(usernameValue.length < 3){      
        setErrorFor(username, "O nome precisa ter no mínimo 3 caracteres! ")
    }else{
        setSuccessFor(username);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;//mensagem de erro
    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = "form-control success";//mensagem de sucesso
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
  