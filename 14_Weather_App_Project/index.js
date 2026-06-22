// const weatherForm=document.querySelector(".weatherForm");
// const cityInput=document.querySelector(".cityInput");
// const card=document.querySelector(".card");
// const apiKey="68ad910d1bf88946b3b2821b2329089d";

// weatherForm.addEventListener("submit",async event=>{

//     event.preventDefault();
//     const city=cityInput.value;
//     if(city){
//         try{
//             const weatherData=await getWeatherData(city);
//             displayWeatherInfo(weatherData);
//         }catch(error){
//             console.log(error);
//             displayError(error);
//         }
//     }else{
//         displayError("please enter a city");
//     }
// });

// async function getWeatherData(city){
// const apiUrl=`https://history.openweathermap.org/data/2.5/aggregated/year?q=${city},GB&appid=${apiKey}`;
// const response=await fetch(apiUrl);
// console.log(response);

// }

// function displayWeatherInfo(data){

// }
// function getWeatherEmoji(weatherId){

// }
// function displayError(message){
//     const errorDisplay=document.createElement("p");
//     errorDisplay.textContent=message;
//     errorDisplay.classList.add("errorDisplay"); //here errorDisplay is from css code class selector
//     card.textContent="";
//     card.style.display="flex";
//     card.appendChild(errorDisplay);
// }


const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "68ad910d1bf88946b3b2821b2329089d";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value.trim();

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error.message);
        }
    } else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city) {
    // Use the FREE current weather API, not the paid history API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data) {
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    cityDisplay.textContent = data.name;
    tempDisplay.textContent = `${Math.round(data.main.temp)}°C`;
    humidityDisplay.textContent = `Humidity: ${data.main.humidity}%`;
    descDisplay.textContent = data.weather[0].description;
    weatherEmoji.textContent = getWeatherEmoji(data.weather[0].id);

    card.textContent = "";
    card.style.display = "flex";

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
    if (weatherId >= 200 && weatherId < 300) return "⛈️";   // Thunderstorm
    if (weatherId >= 300 && weatherId < 400) return "🌧️";   // Drizzle
    if (weatherId >= 500 && weatherId < 600) return "🌧️";   // Rain
    if (weatherId >= 600 && weatherId < 700) return "❄️";   // Snow
    if (weatherId >= 700 && weatherId < 800) return "🌫️";  // Atmosphere
    if (weatherId === 800) return "☀️";                      // Clear
    if (weatherId > 800) return "☁️";                       // Clouds
    return "❓";
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}