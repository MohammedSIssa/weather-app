let currently, today, tomorrow, address, overallCondition;
let data;
let weekDayDates;

const reultsDiv = document.querySelector(".results");
const weekBox = document.querySelector(".weekdays-box");
const searchForm = document.querySelector("form button");

const errorMsg = document.querySelector(".error-message");
const loading = document.querySelector(".loading");

async function getData(location) {
  try {
    const fetchedData = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        location +
        "?key=KK9BN5VSWWUCM48RQXWMGPWE7",
      {
        mode: "cors",
      }
    );

    if (!fetchedData.ok) {
      throw new Error(`HTTP error! status: ${fetchedData.status}`);
    }

    const data = await fetchedData.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function fetchedData(query) {
  try {
    reultsDiv.style.display = "none";
    weekBox.style.display = "none";
    errorMsg.style.display = "none";
    loading.style.display = "block";
    data = await getData(query);
    if (!data) throw new Error("Failed to fetch weather data");
  } catch (error) {
    console.error(error);
    errorMsg.style.display = "block";
    loading.style.display = "none";
  } finally {
    loading.style.display = "none";
    weekDayDates = data.days
      .map((day) => day.datetime.split("-")[2])
      .splice(0, 7);

    weekBox.style.display = "block";

    address = data.resolvedAddress;
    overallCondition = data.description;

    createWeekButtons(weekDayDates);
    displayWeatherData(data.days[0]);
    displayHourlyForecast(data.days[0].hours);
  }
}

searchForm.addEventListener("click", (e) => {
  let query = document.querySelector("form input").value;
  e.preventDefault();
  if (query) {
    fetchedData(query);
  }
});
