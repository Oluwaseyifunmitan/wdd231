const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherForecast = document.querySelector("#forecast");

const myKey = "1b3de4792b1fdd0bf98aa7ab6d48d1bf";
const myCity = "Lagos";

const url = `https://api.openweathermap.org/data/2.5/forecast?q=${myCity}&units=imperial&appid=${myKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
function displayResults(data) {
  

  currentTemp.innerHTML = ` 
    <p>${data.list[0].main.temp} &deg;F</p>
     <p>${data.list[0].weather[0].description}</p>
       <p>High: ${data.list[0].main.temp_max} &deg;F</p>
        <p>Low: ${data.list[0].main.temp_min} &deg;F</p>
          <p>Humidity: ${data.list[0].main.humidity} &deg;F</p>
       <p> Sunrise: ${data.city.sunrise}</p>
       <p> Sunset: ${data.city.sunset}</p>

    `;
  const iconSrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
  weatherIcon.setAttribute("SRC", iconSrc);
  weatherIcon.setAttribute("alt", data.list[0].weather[0].description);



const dailyForecasts = {};

data.list.forEach((item) => {
  const date = new Date(item.dt_txt).toDateString();
  if (!dailyForecasts[date] && item.dt_txt.includes("12:00:00")) {
    dailyForecasts[date] = item;
  }
});

let forecastHTML = ""; // Initialize an empty string to accumulate forecasts

Object.keys(dailyForecasts)
  .slice(0, 3) // Get only 3 days
  .forEach((date, index) => {
    const forecast = dailyForecasts[date];
    const temp = forecast.main.temp;

    // Assign labels dynamically based on index
    const dayLabels = ["Today", "Wednesday", "Thursday"];
    forecastHTML += `<p>${dayLabels[index]}: <strong>${temp}&deg;F</strong></p>`;
  });

weatherForecast.innerHTML = forecastHTML; // Set all forecasts at once

}
apiFetch();

