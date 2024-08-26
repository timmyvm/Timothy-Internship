import React from "react";
import '../ui/Skeleton.css'; 

export default function CollectionPageSkeleton() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="collections-page__title">Collections</h1>
        <div className="collections__body">
          {new Array(12).fill(0).map((_, index) => (
            <div className="collection-column" key={index}>
              <div className="collection">
                <img className="collection__img skeleton"  />
                <div className="collection__info">
                  <h3 className="collection__name skeleton-text-newCollection skeleton"></h3>
                  <div className="collection__stats skeleton-text-newCollection skeleton">
                    <div className="collection__stat skeleton-text-newCollection skeleton">
                      <span className="collection__stat__label skeleton-text-newCollection skeleton"></span>
                      <span className="collection__stat__data skeleton-text-newCollection skeleton"></span>
                    </div>
                    <div className="collection__stat">
                      <span className="collection__stat__label skeleton-text-newCollection skeleton"></span>
                      <span className="collection__stat__data skeleton-text-newCollection skeleton"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="collections-page__button">Load more</button>
      </div>
    </div>
  );
}
