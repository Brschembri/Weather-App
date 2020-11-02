class Data {
    constructor() {
        this.city = document.getElementById("search-bar-input");
        this.tempMaxC = document.getElementsByClassName("weather-temp");
        this.tempMinC = document.getElementsByClassName("weather-temp-min");
        // this.pic = document.getElementsByClassName("weather-pic");
        this.pic1 = document.getElementById("day1");
        this.pic1 = document.getElementById("day2");
        this.pic1 = document.getElementById("day3");
        this.day = document.getElementsByClassName("weather-day");
    }

    paint(weather) {
        this.city.textContent = weather.location.name;
        this.tempMaxC = weather.forecast.forecastday.maxtemp_c;
        this.tempMinC = weather.forecast.forecastday.mintemp_c;
        this.pic1 = weather.forecast.condition.icon;
    }
}