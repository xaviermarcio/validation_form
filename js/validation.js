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

    if(emailValue === ""){
        setErrorFor(email,"O email é obrigatório");
    }else if(!checkEmail(emailValue)){
        setErrorFor(email,"Por favor, digite um email válido!");
    }else{
        setSuccessFor(email)
    }

    if(emailConfirmationValue === ""){
        setErrorFor(emailConfirmation,"A confirmação de e-mail é obrigatória!");
    }else if(emailValue !== emailConfirmationValue){
        setErrorFor(emailConfirmation, "Email não confere")
    }else{
        setSuccessFor(emailConfirmation);
    }

    if(passwordValue === ""){
        setErrorFor(password,"A senha é obrigatória!");
    }else if(passwordValue.length < 8){
        setErrorFor(password,"A senha tem que ter no mínimo 8 caracteres!")
    }else{
        setSuccessFor(password);
    }

    if(passwordConfirmationValue === ""){
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória!");
    }else if(passwordValue !== passwordConfirmationValue){
        setErrorFor(passwordConfirmation,"As senhas digitadas não conferem!");
    }else{
        setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });

    if (formIsValid) {
    console.log("O formulário está 100% válido!");
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
  