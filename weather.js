//Api Req  - https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//Api Key  - f571d0c85081bad74ac554c1b8bf0571

let inputField = document.getElementById("inputField");
let searchButton = document.getElementById("searchButton");
let weatherIcon = document.querySelector(".weather-icon");

const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="f571d0c85081bad74ac554c1b8bf0571";

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    
    if(response.status === 404){
        document.querySelector(".weather").style.display="none";
        document.querySelector(".error").style.display="block";
    }else{
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
        let weatherData = await response.json();
        const { name,main,weather,wind } = weatherData;
        document.querySelector(".city").innerHTML=name;
        document.querySelector(".temparature").innerHTML=Math.round(main.temp) + "°C";
        document.querySelector(".humidity").innerHTML=main.humidity + "%";
        document.querySelector(".wind").innerHTML=wind.speed + " km/h";

        if(weather[0].main === "Clouds"){
            weatherIcon.src="images/clouds.png";
        }
        else if(weather[0].main === "Clear"){
            weatherIcon.src="images/clear.png";
        }
        else if(weather[0].main === "Rain"){
            weatherIcon.src="images/rain.png";
        }
        else if(weather[0].main === "Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }
        else if(weather[0].main === "Mist"){
            weatherIcon.src="images/mist.png";
        } 
    }   
};

searchButton.addEventListener("click", () => {
    checkWeather(inputField.value);
});