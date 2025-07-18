// src/pages/HomePage.js
import React from 'react';
import './HomePage.css';
import NewsCard from '../components/NewsCard';

const mockNews = [
  {
    title: 'India wins historic test match!',
    content: 'India beats Australia in a thrilling five-day match at The Oval.',
    category: 'Cricket',
  },
  {
    title: 'World War 3 fears rise',
    content: 'Tensions escalate in Eastern Europe. Experts warn of a global crisis.',
    category: 'War',
  },
  {
    title: 'Miss World 2025 Crowned',
    content: 'India’s Anjali Sharma wins the Miss World title held in Paris.',
    category: 'Miss World',
  },
  {
    title: 'CBSE Results Out',
    content: 'Class 12 results declared. Over 91% students pass nationwide.',
    category: 'Education',
  },
];

function HomePage() {
  return (
    <div className="homepage-container">
      <header className="hero">
        <h1>Welcome to MSN News Pro</h1>
        <p>All trending news at one place - Fast, Fresh and Reliable.</p>
      </header>

      <section className="category-section">
        <h2>Top Categories</h2>
        <div className="categories-grid">
          <div className="category-card">Current News</div>
          <div className="category-card">Cricket</div>
          <div className="category-card">War</div>
          <div className="category-card">Miss World</div>
          <div className="category-card">Education</div>
          <div className="category-card">Science</div>
        </div>
      </section>

      <section className="latest-news-section">
        <h2>Latest News</h2>
        <div className="news-grid">
          {mockNews.map((news, index) => (
            <NewsCard
              key={index}
              title={news.title}
              content={news.content}
              category={news.category}
            />
          ))}
        </div>
      </section>

      <section className="cta">
        <a href="/admin" className="btn-admin">Go to Admin Panel</a>
      </section>

      <footer className="footer">
        <p>&copy; 2025 MSN News Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
