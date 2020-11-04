// Variables
let cityName = document.getElementById("city-header");
// const submitBtn = document.getElementById("search-bar-bttn");
const searchBarInput = document.getElementById("search-bar-input");
const weather = new Weather(`Sydney`);


// Initialise weatherUI
const weatherUI = new Data();

// Event Listeners
// submitBtn.addEventListener("click", submitIt);
document.addEventListener("DOMContentLoaded", getWeather);

// change location event
document.getElementById("search-bar-bttn").addEventListener("click", (e) => {
  const newTxt = searchBarInput.value;
  const city = newTxt;
  weather.changeLocal(city);
  getWeather();

  e.preventDefault();
});


function errorDiag() {
   searchBarInput.style.cssText = "background-color:red;";
   searchBarInput.value = "Please Enter Valid City";
   setTimeout(() => {
     searchBarInput.style.cssText =
       "background-color:white; transition: all 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750);";
     searchBarInput.value = "";
   }, 1500);
}

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      weatherUI.paint(results);
    })

    .catch((err) => errorDiag());

    // Console logs the error
    // .catch((err) => console.log(err));
}
