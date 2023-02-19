let login = document.getElementById("login");
let emailToLogin = document.getElementById("emailToLogin");
let sigin = document.getElementById("sigin");
let loginWithEmail = document.getElementById("loginWithEmail");

const ourItemDiv = document.getElementsByClassName("item");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");

let loginSection = document.getElementsByClassName("login")[0];
let signupSection = document.getElementsByClassName("signup")[0];
let signinSection = document.getElementsByClassName("signin")[0];
               
const loginForm = document.getElementById("login__form")

login.addEventListener("click", () => {
  loginSection.style.display = "none";
  signupSection.style.display = "grid";
});

// });
sigin.addEventListener("click", () => {
  loginSection.style.display = "grid";
  signupSection.style.display = "none";
});


// Compare password START
let signupPassword = document.getElementById("signup-password");
let signupConfirmpassword = document.getElementById("signup-confirmPassword");

function validatePassword() {
  if (signupPassword.value != signupConfirmpassword.value) {
    signupConfirmpassword.setCustomValidity("Passwords Don't Match");
  } else {
    signupConfirmpassword.setCustomValidity("");
  }
}

signupPassword.onchange = validatePassword;
signupConfirmpassword.onchange = validatePassword;
// Compare password END

// show password START
const [passwordIconOne, passwordIconTwo] =
  document.getElementsByClassName("showPassword");

passwordIconOne.addEventListener("click", () => {

  let icon = document.getElementsByClassName("showPassword--close")[0];
  if (icon.style.display === "block" && signupPassword.type=="text") {
    icon.style.display = "none";
    signupPassword.type = "password";
  } else {
    icon.style.display = "block";
    signupPassword.type = "text";
  }
});

passwordIconTwo.addEventListener("click", () => {

  let icon = document.getElementsByClassName("showPassword--close")[1];
  if (icon.style.display === "block" && signupConfirmpassword.type=="text") {
    icon.style.display = "none";
    signupConfirmpassword.type = "password";
  } else {
    icon.style.display = "block";
    signupConfirmpassword.type = "text";
  }
});


// show password END

// Login START

loginForm.addEventListener('submit',(e)=>{
e.preventDefault();
const dataForm = new FormData(loginForm);
const res=Object.fromEntries(dataForm)
console.log(JSON.stringify(res))
})
// Login END 

// signup Form START
const  signupForm = document.getElementById("signup__form")

console.log(signupForm)
signupForm.addEventListener('submit',(e)=>{
  console.log("AA")
  e.preventDefault();
  const dataForm = new FormData(signupForm);
  const res=Object.fromEntries(dataForm)
  console.log(JSON.stringify(res))
  })
// signup Form END
