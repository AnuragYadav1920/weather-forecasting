
const API_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const API_Key = "PYP5N3YQF32FA4TGQRRP6ESC4";

const searching = document.querySelector(".search-text");
const searchtab = document.querySelector(".search-button");
let Day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
async function forecastWeather(city) {
  const response = await fetch(
    API_URL + city + "?unitGroup=metric&key=" + API_Key + "&contentType=json"
  );
  var data = await response.json();
  // console.log(data);
  document.querySelector(".weather").style.display="block";
  document.querySelector(".city").innerHTML = data.address;
  document.querySelector(".current-weather").innerHTML =
    data.currentConditions.conditions;
  document.querySelector(".current-temp").innerHTML =
    Math.round(data.currentConditions.temp) + "°c";
  document.querySelector(".wind").innerHTML =
    "Wind: " + data.currentConditions.windspeed + " km/h";
  document.querySelector(".pressure").innerHTML =
    "Pressure: " + data.currentConditions.pressure + " mb";
  document.querySelector(".humidity").innerHTML =
    "Humidity: " + data.currentConditions.humidity + " %";
  var current_image = "images/" + data.currentConditions.icon + ".png";
  document
    .querySelector(".current-weather-image")
    .setAttribute("src", current_image);

  /***********day1 forecast**************************/
  const day1_date = new Date(data.days[1].datetime);
  const d1 = day1_date.getDay();
  document.querySelector(".day1").innerHTML = Day[d1];
  var day1_im = "images/" + data.days[1].icon + ".png";
  document.querySelector(".day1-image").setAttribute("src", day1_im);
  document.querySelector(".day1-temp").innerHTML =
    Math.round(data.days[1].temp) + "°c";

  /****************day2 forecst**********************/
  const day2_date = new Date(data.days[2].datetime);
  const d2 = day2_date.getDay();
  document.querySelector(".day2").innerHTML = Day[d2];
  var day2_im = "images/" + data.days[2].icon + ".png";
  document.querySelector(".day2-image").setAttribute("src", day2_im);
  document.querySelector(".day2-temp").innerHTML =
    Math.round(data.days[2].temp) + "°c";

  /*****************day3 forecast*********************/
  const day3_date = new Date(data.days[3].datetime);
  const d3 = day3_date.getDay();
  document.querySelector(".day3").innerHTML = Day[d3];
  var day3_im = "images/" + data.days[3].icon + ".png";
  document.querySelector(".day3-image").setAttribute("src", day3_im);
  document.querySelector(".day3-temp").innerHTML =
    Math.round(data.days[3].temp) + "°c";

  /********************day4 forecast*******************/
  const day4_date = new Date(data.days[4].datetime);
  const d4 = day4_date.getDay();
  document.querySelector(".day4").innerHTML = Day[d4];
  var day4_im = "images/" + data.days[4].icon + ".png";
  document.querySelector(".day4-image").setAttribute("src", day4_im);
  document.querySelector(".day4-temp").innerHTML =
    Math.round(data.days[4].temp) + "°c";

  /***********************day5 forecast********************/
  const day5_date = new Date(data.days[5].datetime);
  const d5 = day5_date.getDay();
  document.querySelector(".day5").innerHTML = Day[d5];
  var day5_im = "images/" + data.days[5].icon + ".png";
  document.querySelector(".day5-image").setAttribute("src", day5_im);
  document.querySelector(".day5-temp").innerHTML =
    Math.round(data.days[5].temp) + "°c";
}
searchtab.addEventListener("click", () => {
  forecastWeather(searching.value);
  searching.value="";
});
