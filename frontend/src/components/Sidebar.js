// Sidebar.js - Right-side widgets for the homepage
// -----------------------------------------------
// Contains the WeatherWidget and TrendingTopics components, stacked vertically.
// Uses modern, elevated, glassy styles for a clean look.

import React from 'react';
import WeatherWidget from './WeatherWidget';
import TrendingTopics from './TrendingTopics';
import './Sidebar.css';

const Sidebar = () => {
  return (
    // Main container for the sidebar
    <aside className="sidebar">
      {/* Weather widget (top) */}
      <WeatherWidget />
      {/* Trending topics widget (below weather) */}
      <TrendingTopics />
    </aside>
  );
};

export default Sidebar; 