document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherbtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "602bfe4c8f2686733a39e0f5a84b923c";

    getWeatherbtn.addEventListener('click', async () => {
        const city = cityInput.value.trim()

        if (!city) return;

        /*
        things to keep in mind when you are making a webrequest
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
        // you cannot call a sync function insdide a async function

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

        // fetching api
        const respone = await fetch(url);

        // console.log(typeof respone);
        // console.log("Response", respone);

        if (!respone.ok) {
            throw new Error("City not found");
        }
        const data = await respone.json()
        return data;
    }

    function displayWeatherData(data) {
        // display weather data
        console.log(data);

        // destructuring
        const { name, main, weather } = data

        cityNameDisplay.textContent = name;
        // console.log(cityNameDisplay);

        temperatureDisplay.textContent = `Temperature : ${((main.temp) - 273.15).toFixed(2)}°C`
        descriptionDisplay.textContent = `Weather : ${weather[0].description}`

        // unlocking the display
        weatherInfo.classList.remove("hidden")
        errorMessage.classList.add("hidden")
    }

    function showError() {
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden');
    }

})