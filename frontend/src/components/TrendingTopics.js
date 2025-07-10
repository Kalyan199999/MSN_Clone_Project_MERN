// TrendingTopics.js - Trending topics widget for the sidebar
// ---------------------------------------------------------
// Displays a list of trending topic tags as clickable pills.
// Uses modern, elevated, glassy styles for a clean look.

import React from 'react';
import './TrendingTopics.css';

// List of trending topics (placeholder data)
const topics = [
  'AI', 'Elections', 'Climate', 'Tech Stocks', 'Space', 'Health', 'Travel', 'Sports'
];

const TrendingTopics = () => {
  return (
    // Main container for the trending topics widget
    <div className="trending-topics">
      {/* Widget title */}
      <div className="trending-topics__title">Trending Topics</div>
      {/* List of trending topic tags */}
      <div className="trending-topics__list">
        {topics.map((topic, idx) => (
          <span className="trending-topics__tag" key={idx}>{topic}</span>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics; 