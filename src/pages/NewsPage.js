// src/pages/NewsPage.js
// import React, { useState, useEffect } from 'react';
// import dummyNews from '../data/dummyNews';
// import NewsCard from '../components/NewsCard';
// import Skeleton from '../components/Skeleton';

// function NewsPage() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [loading, setLoading] = useState(true);

//   const categories = ['All', ...new Set(dummyNews.map(news => news.category))];

//   const filteredNews = dummyNews.filter(news =>
//     (selectedCategory === 'All' || news.category === selectedCategory) &&
//     (news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       news.description.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="container my-5">
//       <h2 className="text-center mb-4">📰 Trending News</h2>

//       {/* Category Filters */}
//       <div className="text-center mb-3">
//         {categories.map(category => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`btn btn-sm mx-1 ${selectedCategory === category ? 'btn-dark' : 'btn-outline-secondary'}`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Search Input */}
//       <div className="search-input mb-4">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search news..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* News Cards */}
//       <div className="row">
//         {loading ? (
//           Array.from({ length: 6 }).map((_, index) => (
//             <div className="col-md-4 mb-4" key={index}>
//               <Skeleton />
//             </div>
//           ))
//         ) : filteredNews.length > 0 ? (
//           filteredNews.map((news, index) => (
//             <div className="col-md-4 mb-4" key={index}>
//               <NewsCard {...news} />
//             </div>
//           ))
//         ) : (
//           <p>No news found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NewsPage;

// /src/pages/NewsPage.js
import React, { useState, useEffect } from 'react';
import dummyNews from '../data/dummyNews';
import NewsCard from '../components/NewsCard';
import Skeleton from '../components/Skeleton';
import './NewsPage.css'; // Add this line for custom styles (you’ll create this file next)

function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', ...new Set(dummyNews.map(news => news.category))];

  const filteredNews = dummyNews.filter(news =>
    (selectedCategory === 'All' || news.category === selectedCategory) &&
    (news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-white bg-primary p-3 rounded shadow">
        📰 Trending News
      </h2>

      {/* Category Filters */}
      <div className="text-center mb-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`btn btn-sm mx-1 px-3 py-2 mb-2 rounded-pill category-btn ${selectedCategory === category ? 'btn-warning text-dark' : 'btn-outline-info text-dark'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="search-input mb-5">
        <input
          type="text"
          className="form-control border-info shadow-sm rounded-pill px-4 py-2"
          placeholder="🔍 Search news by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* News Cards */}
      <div className="row">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Skeleton />
            </div>
          ))
        ) : filteredNews.length > 0 ? (
          filteredNews.map((news, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <NewsCard {...news} />
            </div>
          ))
        ) : (
          <div className="text-center text-danger fs-5">❌ No news found for your search.</div>
        )}
      </div>
    </div>
  );
}

export default NewsPage;
