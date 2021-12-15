function wDataFetch(city) {
    let key = 'be362d70a298f4dccb97270a77803eee';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function() {

        })
}

function cityWeather() {
    wDataFetch('Tartu');

}
cityWeather();
