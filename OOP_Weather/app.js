//LS object
const ls = new LS();

//init city data
const initCity = ls.getCity();

//Weather object
const weather = new Weather(initCity);
//console.log(weather.getWeather());

//UI object
const ui = new UI();

//event
const form = document.querySelector('#change-city');
form.addEventListener('submit', changeWeather);

//change city weather
function changeWeather(event){
    const city = document.querySelector('#city-name').value;
    weather.changeCity(city);
    ls.setCity(city);
    getWeather();
    document.querySelector('#city-name').value = '';
    event.preventDefault();
}


//get weather from API
function getWeather(){
    weather.getWeather()
        .then(data => {
            console.log(data);
            ui.drawWeather(data);
        })
        .catch(error => console.log(error))
}

getWeather();