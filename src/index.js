function refreshWeather(response) {
  // Add feels like weather option too!
  let cityElement = document.querySelector("weather-city");
  let currentTemp = document.querySelector("#current-temp");
  let iconWeather = document.querySelector("#icon");
  let weatherCondition = document.querySelector("#weather-cond");
  let weatherHumidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#speed");
  let temperature = response.data.temperature.current;
  console.log(response.data);

  currentTemp.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;
  weatherCondition.innerHTML = response.data.condition.description;
  weatherHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  iconWeather.innerHTML = `<img src="${response.data.condition.icon_url}" alt="Weather Icon" class = "weather-icon" />`;
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
