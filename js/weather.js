const API_KEY = "d1a0559872f5528e678b3733a8caa50b";

function success(pos) {
  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector(".weather");
      const city = document.querySelector(".city");
      const temp = document.querySelector(".temp");

      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
      temp.innerText = `${Math.floor(data.main.temp)}℃`;
    });
}

function fail() {
  alert("사용자의 위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(success, fail);
