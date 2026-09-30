document.addEventListener('DOMContentLoaded', () => {

    const cityInput = document.getElementById("city-input");
    const getWeatherbtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info")
    const cityNameDisplay = document.getElementById("cityName")
    const temperatureDisplay = document.getElementById("temperature")
    const descriptionDisplay = document.getElementById("description")
    const errorMessage = document.getElementById("error-message")

    const API_KEY = "602bfe4c8f2686733a39e0f5a84b923c"; //env variables

    getWeatherbtn.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if (!city) return;

        /*
        things to keep in mind when you are making a request to server 
        1. the server may throw you an error, it is not guaranteed that respone 
        will come back.
        2. Database is always in another continent
        */

        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }

    })

    async function fetchWeatherData(city) {
        // gets the data for the given city

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = fetch(url);
        console.log(typeof response);
        console.log(response);

    }

    function displayWeatherData(weatherData) {
        // display weather data
    }

    function showError() {
        weatherInfo.classList.add('hidden')
        errorMessage.classList.remove('hidden')
    }

});