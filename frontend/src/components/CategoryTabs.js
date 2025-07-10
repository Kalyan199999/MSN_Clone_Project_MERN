// CategoryTabs.js - Tabbed category news section for the homepage
// --------------------------------------------------------------
// Displays a horizontal row of category tabs. Clicking a tab shows news for that category below.
// Uses modern, elevated, glassy styles for a clean look.

import React, { useState } from 'react';
import HeadlineCard from './HeadlineCard';
import './CategoryTabs.css';

// List of categories and their articles (placeholder data)
const categories = [
  {
    name: 'World',
    articles: [
      {
        image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
        title: 'Global Leaders Meet for Summit',
        summary: 'World leaders gather to discuss pressing international issues.'
      },
      {
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
        title: 'Historic Peace Agreement Signed',
        summary: 'A new peace agreement brings hope to a troubled region.'
      }
    ]
  },
  {
    name: 'Business',
    articles: [
      {
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        title: 'Markets Rally as Tech Stocks Surge',
        summary: 'Tech giants lead a global market rally.'
      },
      {
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
        title: 'Breakthrough in Renewable Energy Announced',
        summary: 'Scientists unveil a new method for storing solar energy.'
      }
    ]
  },
  {
    name: 'Sports',
    articles: [
      {
        image: 'https://images.unsplash.com/photo-1505843279827-4b2b0c44a0a0?auto=format&fit=crop&w=400&q=80',
        title: 'Championship Finals: A Night to Remember',
        summary: 'The finals delivered an unforgettable night of sportsmanship and drama.'
      },
      {
        image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
        title: 'Rising Star Breaks National Record',
        summary: 'A young athlete sets a new national record, inspiring fans everywhere.'
      }
    ]
  },
  {
    name: 'Entertainment',
    articles: [
      {
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        title: 'Blockbuster Movie Tops Charts',
        summary: 'The latest blockbuster has taken the box office by storm.'
      },
      {
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
        title: 'Music Festival Draws Huge Crowds',
        summary: 'Fans gather for a weekend of music, food, and fun.'
      }
    ]
  },
  {
    name: 'Technology',
    articles: [
      {
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
        title: 'New Smartphone Sets Industry Standard',
        summary: 'The latest smartphone release features cutting-edge technology.'
      },
      {
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        title: 'Breakthrough in AI Research',
        summary: 'Researchers announce a major breakthrough in artificial intelligence.'
      }
    ]
  },
  {
    name: 'Science',
    articles: [
      {
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80',
        title: 'New Exoplanet Discovered',
        summary: 'Astronomers have discovered a new exoplanet in a nearby solar system.'
      },
      {
        image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
        title: 'Breakthrough in Quantum Computing',
        summary: 'Scientists achieve a new milestone in quantum computing.'
      }
    ]
  },
  {
    name: 'Health',
    articles: [
      {
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        title: 'Health Experts Advise on Seasonal Wellness',
        summary: 'Doctors share tips on staying healthy during the changing seasons.'
      },
      {
        image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
        title: 'New Vaccine Shows Promise',
        summary: 'A new vaccine shows promise in early trials.'
      }
    ]
  },
  {
    name: 'Travel',
    articles: [
      {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        title: 'Top Destinations for 2024',
        summary: 'Travel experts reveal the top destinations for the coming year.'
      },
      {
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80',
        title: 'Travel Tips for a Smooth Journey',
        summary: 'How to make your next trip stress-free and enjoyable.'
      }
    ]
  }
];

const CategoryTabs = () => {
  // State to track the selected category tab
  const [selected, setSelected] = useState(0);
  const current = categories[selected];

  return (
    // Main container for the tabbed category section
    <section className="category-tabs">
      {/* Horizontal row of category tabs */}
      <div className="category-tabs__row">
        {categories.map((cat, idx) => (
          <button
            key={cat.name}
            className={`category-tabs__tab${selected === idx ? ' active' : ''}`}
            onClick={() => setSelected(idx)}
          >
            {cat.name}
          </button>
        ))}
      </div>
      {/* News grid for the selected category */}
      <div className="category-tabs__grid">
        {current.articles.map((item, idx) => (
          <HeadlineCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CategoryTabs; 