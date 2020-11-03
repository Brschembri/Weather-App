// Variables
const cityName = document.getElementById("city-header");
const submitBtn = document.getElementById("search-bar-bttn");
const searchBarInput = document.getElementById("search-bar-input");
const weather = new Weather(`New York`, "New York", "United States");

// Initialise weatherUI
const weatherUI = new Data();

// Event Listeners
submitBtn.addEventListener("click", submitIt);
document.addEventListener('DOMContentLoaded', getWeather);


function submitIt(e) {
 let newCity = cityName.textContent = searchBarInput.value;
 
  // cityName.textContent = (submitBtn.textContent);
  e.preventDefault();
}


function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      weatherUI.paint(results);
    })
    .catch((err) => console.log(err));
}
