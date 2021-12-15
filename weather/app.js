document.addEventListener('DOMContentLoaded', cityWeather);

function wDataFetch(city) {
    let key = 'be362d70a298f4dccb97270a77803eee';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data);
            drawWeather(data);
        })
        .catch(function() {
        })
}

function cityWeather() {
    wDataFetch('Tartu');

}

function drawWeather(data) {
    let celsius = Math.round(parseFloat(data.main.temp)-273.15);
    let feelsLikeCelsius = Math.round(parseFloat(data.main.feels_like)-273.15);
    let description = data.weather[0].description;


    document.querySelector('#description').innerHTML = description;
    document.querySelector('#temp').innerHTML = celsius + '&deg';
    document.querySelector('#location').innerHTML = data.name;
    document.querySelector('#feelsLike').innerHTML = feelsLikeCelsius;
}



