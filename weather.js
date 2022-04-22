const imgElement = document.querySelector(".img");
const tempElement = document.querySelector(".temp");
const descElement = document.querySelector(".desc");
const locationElement = document.querySelector(".location");
const messageElement = document.querySelector(".message");

const weather = {};

weather.temp = {
  unit: "celsius",
};

const KELVIN = 273;
const KEY = "02cc5917d069e37d9fca1c32332d8521";

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  messageElement.style.display = "block";
  messageElement.innerHTML = "<p>Browser doesn't support geolocation</p>";
}

function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}

function showError(error) {
  messageElement.style.display = "block";
  messageElement.innerHTML = `<p>${error.message}</p>`;
}

function getWeather(latitude, longitude) {
  let API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`;
  console.log(API);

  fetch(API)
    .then(function (res) {
      let data = res.json();
      return data;
    })
    .then(function (data) {
      weather.temp.value = Math.floor(data.main.temp - KELVIN);
      weather.desc =
        data.weather[0].description.charAt(0).toUpperCase() +
        data.weather[0].description.slice(1);
      weather.imgId = data.weather[0].icon;
      weather.city = data.name;
      weather.country = data.sys.country;
    })
    .then(function () {
      displayWeather();
    });
}

function displayWeather() {
  imgElement.innerHTML = `<img src="img/${weather.imgId}.png"/>`;
  tempElement.innerHTML = `<p>${weather.temp.value} °<span>C</span></p>`;
  descElement.innerHTML = weather.desc;
  locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
