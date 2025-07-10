// HeadlineCard.js - Single news headline card
// -------------------------------------------
// Displays a thumbnail image, headline, and optional summary for a news article.
// Used in TopHeadlines, CategoryTabs, and CategoryBlock grids.

import React from 'react';
import './HeadlineCard.css';

const HeadlineCard = ({ image, title, summary }) => {
  return (
    // Main container for a single headline card
    <div className="headline-card">
      {/* Thumbnail image (background) */}
      <div className="headline-card__image" style={{ backgroundImage: `url(${image})` }} />
      {/* Content: headline and summary */}
      <div className="headline-card__content">
        <h3 className="headline-card__title">{title}</h3>
        {summary && <p className="headline-card__summary">{summary}</p>}
      </div>
    </div>
  );
};

export default HeadlineCard; 