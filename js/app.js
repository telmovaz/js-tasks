// Do your task here:

const forecast = {
    icon: 'clouds.svg',
    type: 'Cloudy Skies',
    location: 6,
    temperature: '',
    getForecast: function() {
        getWeatherFromApi();
    } 
}


// Do not modify code below

const icon = document.querySelector('.weather-icon');
const type = document.querySelector('.weather-type');
const weatherLocation = document.querySelector('.location');
const temperature = document.querySelector('.temperature span');

if (forecast) {
    icon.src = 'images/' + forecast.icon;
    type.textContent = forecast.type;
    weatherLocation.textContent = forecast.location;
    temperature.textContent = forecast.temperature;
}