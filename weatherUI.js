class Data {
  constructor() {
    this.city = document.getElementById("city-header");
    this.tempMaxC1 = document.getElementById("weather-temp-max1");
    this.tempMinC1 = document.getElementById("weather-temp-min1");
    this.tempMaxC2 = document.getElementById("weather-temp-max2");
    this.tempMinC2 = document.getElementById("weather-temp-min2");
    this.tempMaxC3 = document.getElementById("weather-temp-max3");
    this.tempMinC3 = document.getElementById("weather-temp-min3");
    // this.tempMaxC = document.getElementsByClassName("weather-temp");
    // this.tempMinC = document.getElementsByClassName("weather-temp-min");
    // this.pic = document.getElementsByClassName("weather-pic");
    this.pic1 = document.getElementById("pic1");
    this.pic2 = document.getElementById("pic2");
    this.pic3 = document.getElementById("pic3");

    this.icon = document.getElementById("w-icon");
    // this.day = document.getElementsByClassName("weather-day");
  }

  paint(weather) {
     this.city.textContent = weather.location.name;
    this.tempMinC1.textContent = weather.forecast.forecastday[0].day.mintemp_c;
    this.tempMaxC1.textContent = weather.forecast.forecastday[0].day.maxtemp_c;
    this.tempMinC2.textContent = weather.forecast.forecastday[1].day.mintemp_c;
    this.tempMaxC2.textContent = weather.forecast.forecastday[1].day.maxtemp_c;
    this.tempMinC3.textContent = weather.forecast.forecastday[2].day.mintemp_c;
    this.tempMaxC3.textContent = weather.forecast.forecastday[2].day.maxtemp_c;
    // this.pic1.setAttribute("src", weather_icon_url);
    // this.pic1 = weather.forecast.forecastday[0].day.condition.icon;
    this.pic2 = weather.forecast.forecastday[1].day.condition.icon;
    this.pic3 = weather.forecast.forecastday[2].day.condition.icon;
    //cdn.weatherapi.com/weather/64x64/day/119.png
    //   this.icon.setAttribute("src", weather_icon_url);

    // Testing
    //  console.log(weather.forecast.forecastday[0].day.condition.icon);
  }
}
