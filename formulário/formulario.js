// Trazendo IDs para o Javascript

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // verificar, validar e alterar
  const userNameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  //Username
  if (userNameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório");
  } else {
    setSuccessFor(username);
  }
  //E-mail
  if (emailValue === "") {
    setErrorFor(email, "O e-mail é obrigatório");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "O e-mail precisa ser valido");
  } else {
    setSuccessFor(email);
  }
  //Password
  if (passwordValue === "") {
    setErrorFor(password, "Digite uma senha");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "Sua senha precisa ter mais do que 7 caracteres");
  } else {
    setSuccessFor(password);
  }

  //Password Confirmation
  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "Confirmação de senha obrigatória");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas precisam ser iguais");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  //Valid Form
  const formControl = form.querySelectorAll(".form-control");

  const formIsValid = [...formControl].every((formControl) => {
    return formControl.classname === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está validado.");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //Adicionar mensagem de erro
  small.innerText = message;

  //Adiciona classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
