import React, { useState } from 'react';

const WeatherPage = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city.trim()) return;

    // Replace this block later with real API call
    // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
    // const data = await response.json();

    const data = await getMockWeatherData(city);
    setWeather(data);
  };

  // 🔁 Mock data function
  const getMockWeatherData = async (cityName) => {
    return {
      name: cityName,
      main: { temp: 29, humidity: 55 },
      weather: [{ description: 'clear sky' }],
      wind: { speed: 3.7 }
    };
  };

  return (
    <div className="container my-5 p-4 border rounded shadow">
      <h4 className="mb-3">🌦️ Weather Report</h4>
      <div className="mb-3 d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchWeather}>
          Get Weather
        </button>
      </div>

      {weather && (
        <div className="mt-4">
          <h5>{weather.name}</h5>
          <p>🌡️ Temperature: {weather.main.temp} °C</p>
          <p>☁️ Condition: {weather.weather[0].description}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬️ Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
