const loginForm = document.getElementById("login-form");
const loginDialog = document.getElementById("login-dialog");
const loginButton = document.getElementById("login-button");

loginButton.onclick = function () {
  loginDialog.classList.add("login-dialog-open");
};

loginForm.onsubmit = (event) => {
  event.preventDefault();
};

loginDialog.onclick = function () {
  loginDialog.classList.remove("login-dialog-open");
};

loginForm.onclick = (event) => {
  event.stopPropagation();
};
