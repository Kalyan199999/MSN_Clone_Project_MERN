import React from 'react';

const SRS = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">📄 Software Requirements Specification (SRS)</h2>

      <h4>1. Introduction</h4>
      <p>
        The MSN-style News Website is a user-facing application that allows users to view the latest news,
        filter by categories, search news items, and view weather reports. An admin panel is also provided for basic news management (static for now).
      </p>

      <h4>2. Functional Requirements</h4>
      <ul>
        <li>Display latest news articles in card layout</li>
        <li>Search functionality for news</li>
        <li>Category filter for easy browsing</li>
        <li>Weather report with city input</li>
        <li>404 error page for unknown routes</li>
        <li>Admin Panel UI for managing news</li>
      </ul>

      <h4>3. Non-Functional Requirements</h4>
      <ul>
        <li>Responsive UI (Bootstrap)</li>
        <li>Fast loading with skeleton loaders</li>
        <li>Clean and modern interface</li>
        <li>Scalable structure (component & routing based)</li>
      </ul>

      <h4>4. Tools & Tech Stack</h4>
      <ul>
        <li>Frontend: React.js</li>
        <li>Routing: react-router-dom</li>
        <li>Styling: Bootstrap</li>
      </ul>
    </div>
  );
};

export default SRS;
