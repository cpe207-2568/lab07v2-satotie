// create reference for input fields.

// Step 1 เลือก input
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInout = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const passwordconfirmInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-btn");

// simple email validation

function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// Step 2 เพิ่ม event
// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInout.onkeyup = () => {
  emailInout.classList.remove("is-valid");
  emailInout.classList.remove("is-invalid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

passwordconfirmInput.onkeyup = () => {
  passwordconfirmInput.classList.remove("is-valid");
  passwordconfirmInput.classList.remove("is-invalid");
};

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;

  // validate first name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // Step 3
  // validate last name
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  // validate email
  
  if (validateEmail(emailInout.value) === false) {
    emailInout.classList.add("is-invalid");
  } else {
    emailInout.classList.add("is-valid");
    isEmailOk = true;
  }

  // validate password
  if (passwordInput.value === "" || passwordInput.value.length<6) {
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  }
  // validate confirm password
  if (passwordconfirmInput.value === "" || passwordconfirmInput.value.length<6 || passwordconfirmInput.value!==passwordInput.value) {
    passwordconfirmInput.classList.add("is-invalid");
  } else {
    passwordconfirmInput.classList.add("is-valid");
    isPasswordConfirmOk = true;
  }
  // step 4
  if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && isPasswordConfirmOk) alert("Registered successfully");

};

// add callback function for Reset button.
clearBtn.onclick = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
  firstNameInput.value = "";

  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
  lastNameInput.value = "";

  emailInout.classList.remove("is-valid");
  emailInout.classList.remove("is-invalid");
  emailInout.value = "";

  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
  passwordInput.value = "";

  passwordconfirmInput.classList.remove("is-valid");
  passwordconfirmInput.classList.remove("is-invalid");
  passwordconfirmInput.value = "";
};