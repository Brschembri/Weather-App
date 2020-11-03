class Weather {
  constructor(city, state, country) {
    this.apiKey = "a249a1f9e80547e48e040809202910";
    this.city = city;
    this.state = state;
    this.country = country;
  }

  // GET Weather
  async getWeather() {
    const response = await fetch(
      // `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}.json`
      `http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${this.city}&days=3`
    );
    

    const responseData = await response.json();

    return responseData;
  }

  changeLocal(city, state, country) {
    this.city = city;
    this.state = region;
    this.country = country;
  }
}
