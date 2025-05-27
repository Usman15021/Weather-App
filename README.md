# Weather App

A modern, responsive weather application built with vanilla JavaScript, HTML, and CSS. This app fetches real-time weather data and 5-day forecasts from the OpenWeatherMap API, displaying current conditions, temperature, humidity, wind speed, and weather icons in a clean, user-friendly interface.

## Features

- **Current Weather:** Instantly view the current weather for any city, including temperature, humidity, wind speed, and condition.
- **5-Day Forecast:** See a daily forecast with weather icons and temperature for the next five days.
- **Search Functionality:** Enter a city name to get up-to-date weather information.
- **Responsive Design:** Looks great on desktop and mobile devices.
- **Modern UI:** Professional design with gradients, glassmorphism, and smooth transitions.
- **Error Handling:** User-friendly messages for invalid city names or network issues.

## Screenshots

![App Screenshot](assets/bg.jpg)

## Getting Started

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. **Navigate to the project directory:**
   ```
   cd your-repo-name
   ```
3. **Open `index.html` in your browser.**

## API Key
This app uses the [OpenWeatherMap API](https://openweathermap.org/api). The API key is already included for demonstration purposes. For production use, please obtain your own API key and update the `apiKey` variable in `app.js`.

## Project Structure
```
weatherApp/
├── app.js
├── index.html
├── style.css
├── assets/
│   ├── bg.jpg
│   ├── message/
│   │   ├── not-found.png
│   │   └── search-city.png
│   └── weather/
│       ├── atmosphere.svg
│       ├── clear.svg
│       ├── clouds.svg
│       ├── drizzle.svg
│       ├── rain.svg
│       ├── snow.svg
│       └── thunderstorm.svg
```

## Customization
- **UI:** Easily adjust colors, gradients, and layout in `style.css`.
- **Weather Icons:** Replace or add SVG icons in `assets/weather/`.

## License
This project is licensed under the MIT License.

---

**Made with ❤️ by [Your Name]**
