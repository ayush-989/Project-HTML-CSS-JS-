const apiKey = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("location").innerText = data.name;
            document.getElementById("temperature").innerText = 
                `🌡 Temperature: ${data.main.temp} °C`;
            document.getElementById("condition").innerText = 
                `🌥 Condition: ${data.weather[0].description}`;
            document.getElementById("humidity").innerText = 
                `💧 Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText = 
                `💨 Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(() => {
            alert("City not found!");
        });
}
