
const apiKey = "a33f719bffa45b6d7a9b77447fb5925d"; //Put your API KEY here
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=a33f719bffa45b6d7a9b77447fb5925d";

// console.log("Test");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// console.log(searchBox);


// const city = "Siliguri";
async function checkWeather(city) {
    // console.log("CheckWeather called");
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
        const condition=data.weather[0].main;
        console.log(condition)
        if (data.weather[0].main == `${condition}`) {
            weatherIcon.src = `images/${condition}.png`

        }
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"

    }
}

searchBtn.addEventListener("click", () => {
    if (searchBox.value != "") {
        checkWeather(searchBox.value.trim();
        searchBox.value = "";
    }

})

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") { // Checks if the pressed key is "Enter"
        checkWeather(searchBox.value.trim(); // Calls the checkWeather function with the input value
        searchBox.value = ""; // Clears the input box
    }
});
// checkWeather(city);
