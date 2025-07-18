import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city.trim()) return;

    // //  Change this line ONLY when using real API
    // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
    // const data = await response.json();

    const data = await getMockWeatherData(city);

    setWeather(data);
  };

  // 🔁 Mock data for now
  const getMockWeatherData = async (cityName) => {
    return {
      name: cityName,
      main: { temp: 29, humidity: 55 },
      weather: [{ description: 'clear sky' }],
      wind: { speed: 3.7 }
    };
  };

  return (
    <div className="my-5 p-4 border rounded shadow">
      <h4>🌦️ Weather Report</h4>
      <input
        type="text"
        className="form-control my-2"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn btn-primary" onClick={fetchWeather}>
        Get Weather
      </button>

      {weather && (
        <div className="mt-3">
          <h5>{weather.name}</h5>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
