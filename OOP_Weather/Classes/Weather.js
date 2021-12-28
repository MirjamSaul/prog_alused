class Weather{
    constructor(city) {
        this.city = city;
        this.key = 'be362d70a298f4dccb97270a77803eee'
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responseData = await response.json()
        return responseData;
    }
}