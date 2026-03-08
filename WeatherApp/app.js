
OPENWEATHER_API_KEY = '2786079fd626e9671372a7234lk21b5e4dc07879';



const form = document.getElementById('search');
const result = document.getElementById('result');
const loc = document.getElementById('loc');
const temp = document.getElementById('temp');
const wind = document.getElementById('wind');


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value.trim();
    if (!city) return;


    result.classList.add('hidden');

    try {
        const weather = await fetchWeather(city);

        loc.textContent = `${weather.name}, ${weather.sys.country}`;
        temp.textContent = Math.round(weather.main.temp) + "°C";
        wind.textContent = Math.round(weather.wind.speed) + "km/h";

        result.classList.remove('hidden')

    } catch (error) {
        alert(error.message);
        console.log(err);

    }

});

async function fetchWeather(city) {


    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.main) {
        throw new Error("City not found! Please try again.");

    }



    return data;
}




