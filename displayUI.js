const cityAddress = document.querySelector(".city-name");
const weatherDesc = document.querySelector(".weather-desc");
const tempUI = document.querySelector(".temp");
const tempMin = document.querySelector(".temp-min");
const tempMax = document.querySelector(".temp-max");
const dayDate = document.querySelector(".day-date");
const weekendOverall = document.querySelector(".overall-conditions");

const path = "./icons/";

const icons = {
  "clear-day": path + "sunny.svg",
  "partly-cloudy-day": path + "partly-cloudy-day.svg",
  "clear-night": path + "clear-night.svg",
  fog: path + "cloudy.svg",
  cloudy: path + "cloudy.svg",
  rain: path + "rainy.svg",
  "partly-cloudy-night": path + "partly-cloudy-night.svg",
  snow: path + "snow.svg",
  wind: path + "wind.svg"
};

function createWeekButtons(wd) {
  weekBox.innerHTML = "";
  for (let i = 0; i < wd.length; i++) {
    let btn = document.createElement("div");
    btn.className = "weekday " + data.days[i].icon;
    let date = document.createElement("div");
    date.className = "day-date";
    let icon = document.createElement("img");
    icon.src = icons[data.days[i].icon];
    icon.alt = data.days[i].icon;

    btn.appendChild(date);
    btn.appendChild(icon);
    date.textContent = wd[i];
    btn.addEventListener("click", () => {
      displayWeatherData(data.days[i]);
      displayHourlyForecast(data.days[i].hours);
    });
    weekBox.appendChild(btn);
  }
}

function displayWeatherData(day) {
  cityAddress.textContent = address;
  weatherDesc.textContent = day.description;
  tempUI.textContent = Math.round(f2c(day.temp)) + "°c";
  tempMin.textContent = Math.round(f2c(day.tempmin)) + "°c";
  tempMax.textContent = Math.round(f2c(day.tempmax)) + "°c";
  dayDate.textContent = day.datetime;
  weekendOverall.textContent = overallCondition;
  reultsDiv.style.display = "block";
}

const hourlyForecast = document.querySelector(".hourly-forecast");

function displayHourlyForecast(hours) {
  hourlyForecast.innerHTML = "";
  for (let i = 0; i < hours.length; i++) {
    let hour = document.createElement("div");
    hour.className = "hour " + hours[i].icon;
    hour.textContent = hours24to12(hours[i].datetime.split(":")[0]);

    let iconBox = document.createElement("div");
    iconBox.className = "icon-box";

    let iconImg = document.createElement("img");
    iconImg.className = "hour-icon";
    iconImg.src = icons[hours[i].icon];

    iconBox.appendChild(iconImg);
    hour.appendChild(iconBox);

    hourlyForecast.appendChild(hour);
  }
}
