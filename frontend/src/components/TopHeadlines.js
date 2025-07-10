// TopHeadlines.js - Top news headlines section for the homepage
// ------------------------------------------------------------
// Displays a grid of headline news cards using the HeadlineCard component.
// Uses modern, elevated, glassy styles for a clean look.

import React from 'react';
import HeadlineCard from './HeadlineCard';
import './TopHeadlines.css';

// Placeholder data for top headlines
const headlines = [
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Global Markets Rally as Tech Stocks Surge',
    summary: 'Tech giants lead a global market rally, with investors optimistic about the future of AI and cloud computing.'
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    title: 'Breakthrough in Renewable Energy Announced',
    summary: 'Scientists unveil a new method for storing solar energy, promising a cleaner and more sustainable future.'
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'Major City Launches Smart Transportation System',
    summary: 'A new smart transportation system aims to reduce congestion and improve urban mobility.'
  },
  {
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    title: 'Health Experts Advise on Seasonal Wellness',
    summary: 'Doctors share tips on staying healthy during the changing seasons and avoiding common illnesses.'
  }
];

const TopHeadlines = () => {
  return (
    // Main container for the top headlines section
    <section className="top-headlines">
      {/* Section title */}
      <h2 className="top-headlines__title">Top Headlines</h2>
      {/* Responsive grid of headline cards */}
      <div className="top-headlines__grid">
        {headlines.map((item, idx) => (
          <HeadlineCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default TopHeadlines; 