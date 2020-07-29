// inputs and forms:
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
// error-red messages
const error = document.querySelector(".error");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
// success-green messages
const success = document.querySelector(".success");
const success2 = document.querySelector(".success2");
const success3 = document.querySelector(".success3");

// by clicking the button, we call the form:
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log("hola");

  // stored error or success messages
  let messageName = [];
  let messageEmail = [];
  let messagePassword = [];

  // conditions:
  if (name.value === "" || name.value == null) {
    messageName.push("Name is required");
    document.getElementById("name").style.border = "2px solid red";
  } else {
    document.getElementById("name").style.border = "2px solid green";
  }

  if (email.value === "" || email.value == null) {
    messageEmail.push("Please write your email adress");
    document.getElementById("email").style.border = "2px solid red";
  } else {
    document.getElementById("email").style.border = "2px solid green";
  }

  if (password.value <= 6) {
    messagePassword.push("Password must be longer than 6 characters");
    document.getElementById("password").style.border = "2px solid red";
  } else {
    document.getElementById("password").style.border = "2px solid green";
  }

  // place error text in html:
  if (messageName.length > 0) {
    error.innerText = messageName.join();
    error.style.color = "red";
  }

  if (messageEmail.length > 0) {
    error2.innerText = messageEmail.join();
    error2.style.color = "red";
  }

  if (messagePassword.length > 0) {
    error3.innerText = messagePassword.join();
    error3.style.color = "red";
  }

  // alert
  // if ((messageName, messageEmail, messagePassword !== "")) {
  //   alert("Your Form has been submitted");
  // }
});

// PROFESIONALES: REMOVE AUTO-SLIDE IN DESKTOP

/*or via HTML:
Via Html By adding data-interval="false" and removing data-ride="carousel"
<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
becomes:

<div id="carouselExampleCaptions" class="carousel slide" data-interval="false"> */

// FORM CONTACT US
