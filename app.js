// Variables
const cityName = document.getElementById("city-header");
const submitBtn = document.getElementById("search-bar-bttn");
const searchBarInput = document.getElementById("search-bar-input");
const weather = new Weather("Sydney", "New South Whales", "Australia");


// Event Listeners
submitBtn.addEventListener("click", submitIt);
document.addEventListener('LoadDOMContent', getWeather);

console.log(cityName);

function submitIt(e) {
  cityName.textContent = searchBarInput.value;
  // cityName.textContent = (submitBtn.textContent);
  e.preventDefault();
}

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
    })
    .catch((err) => console.log(err));
}
