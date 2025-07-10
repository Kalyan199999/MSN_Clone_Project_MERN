import React from 'react';
import HeadlineCard from './HeadlineCard';
import './CategoryBlock.css';

const CategoryBlock = ({ title, articles }) => {
  return (
    <section className="category-block">
      <h2 className="category-block__title">{title}</h2>
      <div className="category-block__grid">
        {articles.map((item, idx) => (
          <HeadlineCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CategoryBlock; 