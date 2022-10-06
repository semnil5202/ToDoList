const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-input");
const helloString = document.querySelector(".hello");
const getUserName = localStorage.getItem("USERNAME");

function setLocalStorage(userName) {
  const userNameRegexp = /^[a-zA-B0-9].{2,8}$/;
  if (userNameRegexp.test(userName)) {
    localStorage.setItem("USERNAME", userName);
    return true;
  } else {
    return false;
  }
}

function renderUser(userName) {
  helloString.innerText = `Hello. ${userName}`;
  helloString.classList.remove("hidden");
}

function loginFormSubmit(e) {
  e.preventDefault();

  if (setLocalStorage(loginInput.value)) {
    loginForm.classList.add("hidden");
    renderUser(loginInput.value);
  } else {
    alert("영문 숫자 조합 닉네임으로 입력해주세요.");
  }
}

if (getUserName === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", loginFormSubmit);
} else {
  renderUser(getUserName);
}
