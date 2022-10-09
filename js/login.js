const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-input");
const helloString = document.querySelector(".hello");
const getUserName = localStorage.getItem("USERNAME");

function checkTime() {
  if (new Date().getHours() < 6) {
    return "Good morning,";
  } else if (new Date().getHours() < 18) {
    return "Good afternoon,";
  } else return "Good evening,";
}

function setLocalStorage(userName) {
  const userNameRegexp = /^[a-zA-Z].{2,8}$/;
  if (userNameRegexp.test(userName)) {
    localStorage.setItem("USERNAME", userName);
    return true;
  } else {
    return false;
  }
}

function renderUser(userName) {
  helloString.innerText = `${checkTime()} ${userName}`;
  helloString.classList.remove("hidden");
}

function loginFormSubmit(e) {
  e.preventDefault();

  if (setLocalStorage(loginInput.value)) {
    loginForm.classList.add("hidden");
    renderUser(loginInput.value);
  } else {
    alert("2~8자리 영문 아이디로 입력해주세요.");
  }
}

if (getUserName === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", loginFormSubmit);
} else {
  renderUser(getUserName);
}
