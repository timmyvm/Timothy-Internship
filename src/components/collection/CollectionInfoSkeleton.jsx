import React from "react";
import "../ui/Skeleton.css";

export default function CollectionInfoSkeleton() {
  return (
    <section id="collection-info">
      <div className="row">
        <div className="collection-info__wrapper">
          <p className="collection-info__description "></p>
          <div className="collection-info__details">
            <span className="collection-info__detail ">
            <div class="skeleton skeleton-text-collectionInfo" ></div>
            </span>
            <span className="collection-info__detail">
            <div class="skeleton skeleton-text-collectionInfo" ></div>
            </span>
            <span className="collection-info__detail">
            <div class="skeleton skeleton-text-trending" ></div>
            </span>
            <span className="collection-info__detail">
            <div class="skeleton skeleton-text-trending" ></div>
            </span>
            <span className="collection-info__detail">
            <div class="skeleton skeleton-text-trending" ></div>
            </span>
            <span className="collection-info__detail">
            <div class="skeleton skeleton-text-trending" ></div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
