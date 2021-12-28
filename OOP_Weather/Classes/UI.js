class UI {
    constructor() {
        this.description = document.querySelector('#description');
        this.temp = document.querySelector('#temp');
        this.city = document.querySelector('#location');
        this.feelsLike = document.querySelector('#feelsLike');
    }

    drawWeather(data) {
        let celsius = Math.round(parseFloat(data.main.temp)-273.15);
        let feelsLikeCelsius = Math.round(parseFloat(data.main.feels_like)-273.15);
        let description = data.weather[0].description;


        this.description.innerHTML = description;
        this.temp.innerHTML = celsius + '&deg';
        this.city.innerHTML = data.name;
        this.feelsLike.innerHTML = feelsLikeCelsius;
    }
}