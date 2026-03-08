# WeatherApp (Simple)

A minimal weather web app to see how it works quickly.

## ✅ What it shows

After you search a city, it displays:

- **Location name**
- **Current temperature (°C)**
- **Wind speed (km/h)**

## 🛠️ How to Run

### Option 1: Open directly in your browser

1. Open `d:\WeatherApp\index.html` in your web browser.
2. Enter a city name and press **Search**.

> ⚠️ Some browsers (like Chrome) may block `fetch()` when opening local files. If you see errors in the console, use Option 2.

### Option 2: Run a local web server (recommended)

From a terminal in `d:\WeatherApp`, run:

```sh
python -m http.server 8000
```

Then open: http://localhost:8000

## 🔧 How it works (simple)

- `app.js` calls **OpenWeatherMap** (single API call) to get current weather for a city.
- You will need a free API key (sign up at https://openweathermap.org/api).

### How to add your API key

1. Open `d:\WeatherApp\app.js`.
2. Replace `YOUR_API_KEY_HERE` with your OpenWeatherMap API key.
