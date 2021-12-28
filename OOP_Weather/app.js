//Weather object

const weather = new Weather('Tartu');
//console.log(weather.getWeather());

function getWeather(){
    weather.getWeather()
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error))
}

getWeather();