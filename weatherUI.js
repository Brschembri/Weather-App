class Data {
    constructor() {
        this.city = document.getElementById("search-bar-input");
        this.temp = document.getElementsByClassName("weather-temp");
        this.pic = document.getElementsByClassName("weather-pic");
        this.day = document.getElementsByClassName("weather-day");
    }

    paint(weather) {
        this.city.textContent = weather.location.name;
    }
}