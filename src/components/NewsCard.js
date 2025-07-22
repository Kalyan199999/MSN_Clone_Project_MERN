import React from 'react';

function NewsCard({ title, description, imageUrl }) {
  return (
    <div className="card h-100 shadow border-0" style={{ backgroundColor: '#f8f9fa' }}>
      <img
        src={imageUrl}
        className="card-img-top"
        alt={title}
        style={{ height: '180px', objectFit: 'cover', borderRadius: '0.5rem' }}
      />
      <div className="card-body">
        <h5 className="card-title text-primary">{title}</h5>
        <p className="card-text text-secondary">{description}</p>
      </div>
    </div>
  );
}

export default NewsCard;
