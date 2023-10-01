

let url = "https://api.openweathermap.org/data/2.5/weather?"
let apiKey = "24eab264baf60a32cf814cc135f48278"

const body = document.querySelector("body");
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", function(){
    let searchText = searchInput.value;
    console.log(searchText)
    sendRequest(searchText)
    searchInput.value = "";
})

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // Enter tuşuna basıldığında
      let searchText = searchInput.value;
      console.log(searchText);
      sendRequest(searchText)
      searchInput.value = ""; // Input alanını temizle
    }
  });


  function sendRequest(newCity){
    let query = `${url}q=${newCity}&appid=${apiKey}&units=metric&lang=tr`
  

  fetch(query)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
   console.log(data);

    const city = document.querySelector("#city")
    city.innerHTML = `${data.name}`

    const temp = document.querySelector("#temp");
    temp.innerHTML = `${(data.main.temp).toFixed(0)}°C`

    const desc = document.querySelector("#desc");
    desc.innerHTML = `${data.weather[0].description}`

    const minmax = document.querySelector("#minmax")
    minmax.innerHTML = `${(data.main.temp_min).toFixed(0)}°C / ${(data.main.temp_max).toFixed(0)}°C`

    const icon = document.querySelector("#icon")
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    icon.innerHTML = `<img class="iconImg" src="${iconUrl}"alt="weather Icon" />`;

   })
}

  