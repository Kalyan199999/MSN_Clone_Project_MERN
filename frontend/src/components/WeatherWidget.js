// WeatherWidget.js - Weather widget for the sidebar
// ------------------------------------------------
// Displays current temperature, weather icon, city name, and a brief forecast.
// Uses modern, elevated, glassy styles for a clean look.

import React from 'react';
import { FaCloudSun } from 'react-icons/fa';
import './WeatherWidget.css';

const WeatherWidget = () => {
  return (
    // Main container for the weather widget
    <div className="weather-widget">
      {/* Weather icon */}
      <div className="weather-widget__icon"><FaCloudSun /></div>
      {/* Weather info: temperature, city, description */}
      <div className="weather-widget__info">
        <div className="weather-widget__temp">27°C</div>
        <div className="weather-widget__city">New Delhi</div>
        <div className="weather-widget__desc">Partly Cloudy</div>
      </div>
    </div>
  );
};

export default WeatherWidget; 