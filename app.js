const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-input");

loginForm.addEventListener("submit", (e) => {
  const loginValue = loginInput.value;
  e.preventDefault();
  loginForm.classList.add("hidden");
  console.log(e, loginValue);
});
