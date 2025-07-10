// App.js - Main entry point for the React frontend
// -----------------------------------------------
// This file sets up the homepage layout, imports all major components,
// and arranges them in the desired order for the MSN clone homepage.

import React from 'react';
import Header from './components/Header';
import FeaturedNews from './components/FeaturedNews';
import TopHeadlines from './components/TopHeadlines';
import Sidebar from './components/Sidebar';
import CategoryTabs from './components/CategoryTabs';
import Footer from './components/Footer';
import './App.css';

function App() {
  // The homepage layout is structured as:
  // Header
  // Main content (FeaturedNews, TopHeadlines, CategoryTabs) + Sidebar
  // Footer
  return (
    <>
      {/* Header: Logo, centered search, sign in */}
      <Header />
      {/* Main content layout: left = main content, right = sidebar */}
      <div className="main-content-layout">
        <div className="main-content">
          {/* Hero/Featured news section */}
          <FeaturedNews />
          {/* Top headlines grid */}
          <TopHeadlines />
          {/* Category tabs for news by category */}
          <CategoryTabs />
        </div>
        {/* Sidebar: weather, trending topics, etc. */}
        <Sidebar />
      </div>
      {/* Footer: links and copyright */}
      <Footer />
    </>
  );
}

export default App;
