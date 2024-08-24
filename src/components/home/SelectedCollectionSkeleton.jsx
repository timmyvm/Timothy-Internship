import React from 'react';
import '../ui/Skeleton.css';

export default function SkeletonSelectedCollection() {
  return (
    <header>
      <div className="selected-collection">
        <div className="selected-collection__bg skeleton"></div> 
        <div className="selected-collection__description">
          <h1 className="selected-collection__title skeleton"></h1>
          <div className="selected-collection__details skeleton"></div> 
        </div>
      </div>
    </header>
  );
}