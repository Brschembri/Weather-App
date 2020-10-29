// Variables
const cityName = document.getElementById('city-header');
const submitBtn = document.getElementById("search-bar-bttn");

submitBtn.addEventListener('click', submitIt);


 function submitIt(e) {
   cityName.textContent = ("Sydsney, Au");
    // cityName.textContent = (submitBtn.textContent);



   e.preventDefault();
 }

