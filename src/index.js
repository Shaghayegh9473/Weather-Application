function refreshWeather(response) {
  // Add feels like weather option too!
  let cityElement = document.querySelector("#weather-city");
  let currentTemp = document.querySelector("#current-temp");
  let iconWeather = document.querySelector("#icon");
  let weatherCondition = document.querySelector("#weather-cond");
  let weatherHumidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#speed");
  let timeElement = document.querySelector("#time");
  let temperature = response.data.temperature.current;
  let date = new Date(response.data.time * 1000);

  currentTemp.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  weatherCondition.innerHTML = response.data.condition.description;
  weatherHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  iconWeather.innerHTML = `<img src="${response.data.condition.icon_url}" alt="Weather Icon" class = "weather-icon" />`;
}

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hour = date.getHours();
  let minute = date.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return `${day} ${hour}:${minute}`;
}

function searchCity(city) {
  apiKey = "59b3fc01054638ecba59foc51366fa4t";
  apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchCityInput = document.querySelector("#search-city");
  searchCity(searchCityInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Tehran");
