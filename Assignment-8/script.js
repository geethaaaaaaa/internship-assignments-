/ Using your SAME key (will fail, but handled properly)
const apiKey = "a2411a837b64e6971add7f61a245076f";

async function getWeather() {
  const city = document.getElementById("city").value.trim();

  const weatherBox = document.getElementById("weather");
  const error = document.getElementById("error");
  const loading = document.getElementById("loading");

  weatherBox.style.display = "none";
  error.innerText = "";

  if (city === "") {
    error.innerText = "Please enter a city";
    return;
  }

  loading.style.display = "block