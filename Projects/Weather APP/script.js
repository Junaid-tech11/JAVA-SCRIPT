const apiKey = '278679fd626e9671372a7b5e4dc07879';

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityDisplay = document.getElementById('city-name');
const tempDisplay = document.getElementById('temp');
const description = document.getElementById('description');


// We use querySelector  HTML has class="humidity" and class="wind"
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.getElementById("weather-icon");
// -----------------------

async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.main) {
        alert("Invalid City Name!");
        return;
    }

    // Update Basic Info
    cityDisplay.innerHTML = data.name;
    tempDisplay.innerHTML = Math.round(data.main.temp) + "°C";

    // Check if description element exists before trying to update it
    if (description) {
        description.innerHTML = data.weather[0].description;
    }

    // Update Details
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    // Update Icon
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

searchBtn.addEventListener('click', () => {
    checkWeather(cityInput.value);
});


cityInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        checkWeather(cityInput.value);
    }
});