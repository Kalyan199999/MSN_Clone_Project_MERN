// FeaturedNews.js - Hero section for the homepage
// -----------------------------------------------
// Displays a large, visually striking featured news story with image, headline, summary, and a 'Read More' button.
// Uses modern, elevated, glassy styles for a clean look.

import React from 'react';
import './FeaturedNews.css';

const FeaturedNews = () => {
  return (
    // Main container for the featured news card
    <section className="featured-news">
      {/* Image area (left or background) */}
      <div className="featured-news__image" />
      {/* Content area: headline, summary, button */}
      <div className="featured-news__content">
        <h1 className="featured-news__headline">Stunning Space Discovery: New Exoplanet Found!</h1>
        <p className="featured-news__summary">
          Astronomers have discovered a new exoplanet in a nearby solar system, sparking excitement in the scientific community. The planet, which orbits a sun-like star, could offer new insights into the search for extraterrestrial life.
        </p>
        <a href="#" className="featured-news__button">Read More</a>
      </div>
    </section>
  );
};

export default FeaturedNews; 