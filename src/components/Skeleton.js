import React from 'react';

const Skeleton = () => {
  return (
    <div className="card p-3" style={{ height: '200px' }}>
      {/* Fake image box */}
      <div className="bg-secondary mb-2" style={{ height: '100px', opacity: 0.3 }}></div>

      {/* Fake title line */}
      <div className="bg-secondary mb-1" style={{ height: '20px', width: '80%', opacity: 0.3 }}></div>

      {/* Fake description line */}
      <div className="bg-secondary" style={{ height: '20px', width: '60%', opacity: 0.3 }}></div>
    </div>
  );
};

export default Skeleton;
