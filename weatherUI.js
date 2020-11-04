class Data {
  constructor() {
    this.city = document.getElementById("city-header");
    this.tempMaxC1 = document.getElementById("weather-temp-max1");
    this.tempMinC1 = document.getElementById("weather-temp-min1");
    this.tempMaxC2 = document.getElementById("weather-temp-max2");
    this.tempMinC2 = document.getElementById("weather-temp-min2");
    this.tempMaxC3 = document.getElementById("weather-temp-max3");
    this.tempMinC3 = document.getElementById("weather-temp-min3");
    this.pic1 = document.getElementById("pic1");
    this.pic2 = document.getElementById("pic2");
    this.pic3 = document.getElementById("pic3");
    this.day0 = document.getElementById("day0");
    this.day1 = document.getElementById("day1");
    this.day2 = document.getElementById("day2");
    // this.day = document.getElementsByClassName("weather-day");
  }

  paint(weather) {
    // Formatting date to days of the week
    let day0bformat = weather.forecast.forecastday[0].date;
    let day0aformat = dayjs(day0bformat).format("dddd");
    let day1bformat = weather.forecast.forecastday[1].date;
    let day1aformat = dayjs(day1bformat).format("dddd");
    let day2bformat = weather.forecast.forecastday[2].date;
    let day2aformat = dayjs(day2bformat).format("dddd");

    this.city.textContent = weather.location.name;
    this.tempMinC1.textContent =
      weather.forecast.forecastday[0].day.mintemp_c + `°`;
    this.tempMaxC1.textContent =
      weather.forecast.forecastday[0].day.maxtemp_c + `°`;
    this.tempMinC2.textContent =
      weather.forecast.forecastday[1].day.mintemp_c + `°`;
    this.tempMaxC2.textContent =
      weather.forecast.forecastday[1].day.maxtemp_c + `°`;
    this.tempMinC3.textContent =
      weather.forecast.forecastday[2].day.mintemp_c + `°`;
    this.tempMaxC3.textContent =
      weather.forecast.forecastday[2].day.maxtemp_c + `°`;
    this.pic1.setAttribute(
      "src",
      weather.forecast.forecastday[0].day.condition.icon
    );
    this.pic2.setAttribute(
      "src",
      weather.forecast.forecastday[1].day.condition.icon
    );
    this.pic3.setAttribute(
      "src",
      weather.forecast.forecastday[2].day.condition.icon
    );

    this.day0.textContent = day0aformat;
    this.day1.textContent = day1aformat;
    this.day2.textContent = day2aformat;

    // testing
    // console.log(weather.forecast.forecastday[0].date);
  }
}
