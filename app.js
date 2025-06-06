const cityInput = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');
const notFoundSection = document.querySelector('.not-found');
const weatherInfoSection = document.querySelector('.weather-info');
const searchCitySection = document.querySelector('.search-city');
const countryTxt = document.querySelector('.country-txt');
const tempTxt = document.querySelector('.temp-txt');
const conditionTxt = document.querySelector('.condition-txt');
const humidityValueTxt = document.querySelector('.humidity-value-txt');
const windValueTxt = document.querySelector('.wind-value-txt');
const weatherSummaryimg = document.querySelector('.weather-summary-img');
const currentDataTxt = document.querySelector('.current-date');

const forecastItemsContainer = document.querySelector('.forecast-items-container')
const apiKey = '4b9bdbd56ef0e278a021e63fc44a05f7'

searchBtn.addEventListener('click', () => {
  if (cityInput.value.trim() != '') {
    updateWeatherInfo(cityInput.value)
    cityInput.value = '';
    cityInput.blur()
  }
  console.log(cityInput.value)
})


cityInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' &&
    cityInput.value.trim() != ''
  ) {
    updateWeatherInfo(cityInput.value)
    cityInput.value = '';
    cityInput.blur()
  }
});

async function getFetchData(endPoint, city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiUrl)
  return response.json()

}

function getWeatherIcon(id) {
  if (id <= 232) return 'thunderstorm.svg';
  if (id <= 321) return 'drizzle.svg';
  if (id <= 521) return 'rain.svg';
  if (id <= 622) return 'snow.svg';
  if (id <= 781) return 'atmosphere.svg';
  if (id <= 800) return 'clear.svg';
  else return 'clouds.svg';
}

function getCurrentDate() {
  const currentDate = new Date();
  const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'short'
  }
  return currentDate.toLocaleDateString('en-GB', options)
}


async function updateWeatherInfo(city) {
  const weatherData = await getFetchData('weather', city);

  if (weatherData.cod != 200) {
    showDisplaySection(notFoundSection)
    return;
  }

  console.log(weatherData)

  const {
    name: country,
    main: { temp, humidity },
    weather: [{ id, main }],
    wind: { speed }
  } = weatherData;


  countryTxt.textContent = country;
  tempTxt.textContent = Math.round(temp) + '°C'
  conditionTxt.textContent = main;

  humidityValueTxt.textContent = humidity + '%';
  windValueTxt.textContent = speed + 'M/s';


  currentDataTxt.textContent = getCurrentDate();
  weatherSummaryimg.src = `assets/weather/${getWeatherIcon(id)}`;

  await updateWeatherInfoSection(city);
  showDisplaySection(weatherInfoSection)
}

async function updateWeatherInfoSection(city) {
  const forecastsData = await getFetchData('forecast', city);
  const timeTaken = '12:00:00';
  const todayDate = new Date().toISOString().split('T')[0];

  forecastItemsContainer.innerHTML = ''
  forecastsData.list.forEach(forecastWeather => {
    if (forecastWeather.dt_txt.includes(timeTaken) &&
      !forecastWeather.dt_txt.includes(todayDate)) {
      updateForecastItems(forecastWeather);
    }
  })
}

function updateForecastItems(weatherData) {
  const {
    dt_txt: date,
    weather: [{ id }],
    main: { temp }
  } = weatherData;

  const dateTaken = new Date(date);
  const dateOption = {
    day: '2-digit',
    month: 'short'
  }
  const dateResult = dateTaken.toLocaleDateString('en-US', dateOption);

  const forecastItem = `
    <div class="forecast-item">
      <h5 class="forecast-item-date regular-txt">${dateResult}</h5>
      <img
        src="assets/weather/${getWeatherIcon(id)}"
        class="forecast-item-img"
      />
      <h5 class="forecast-item-temp">${Math.round(temp)}°C</h5>
    </div>
  `;

  forecastItemsContainer.insertAdjacentHTML('beforeend', forecastItem)
}


function showDisplaySection(section) {
  [weatherInfoSection, searchCitySection, notFoundSection]
    .forEach(section => section.style.display = 'none');

  section.style.display = 'flex';
}