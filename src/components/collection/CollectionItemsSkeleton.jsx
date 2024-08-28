import React from "react";
import "../ui/Skeleton.css";

export default function CollectionItemsSkeleton() {
  return (
    <section id="collection-items">
      <div className="row collection-items__row">
        <div className="collection-items__header">
          <div className="collection-items__header__left">
            <span className="collection-items__header__live"></span>
            <span className="skeleton-text-collectionItems skeleton big"></span>
            <span className="skeleton-text-collectionItems skeleton big"></span>
          </div>
          <select className="collection-items__header__sort skeleton">
            <option value=""></option>
            <option value="priceHighToLow"></option>
            <option value="priceLowToHigh"></option>
          </select>
        </div>
        <div className="collection-items__body">
          {new Array(12).fill(0).map((_, index) => (
            <div className="item-column">
                <div className="item">
              <figure className="item__img__wrapper skeleton">
              </figure>
              <div className="item__details">
                <span className="skeleton-text-collectionItems skeleton big"></span>
                <span className="skeleton-text-collectionItems skeleton small"></span>
                <span className="skeleton-text-collectionItems skeleton big"></span>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="collection-page__button skeleton">Load more</button>
    </section>
  );
}
