//Weather object

const weather = new Weather('Pärnu');
//console.log(weather.getWeather());

//UI object
const ui = new UI();

function getWeather(){
    weather.getWeather()
        .then(data => {
            console.log(data);
            ui.drawWeather(data);
        })
        .catch(error => console.log(error))
}

getWeather();