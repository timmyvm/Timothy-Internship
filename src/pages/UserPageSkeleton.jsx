import React from "react";
import '../components/ui/Skeleton.css';

export default function UserPageSkeleton() {
  return (
    <>
      <header id="user-header" >
      <div className="skeleton" style={{ width: '100%', height: '100%' }}></div>

      </header>

      <section id="user-info">
        <div className="row">
          <div className="user-info__wrapper">
            <figure className="user-info__img__wrapper">
              <div className="user-info__img skeleton skeleton-img"></div>
            </figure>
            <h1 className="user-info__name skeleton-text">
            <div className="skeleton" style={{ width: '240px', height: '16px', borderRadius: '4px' }}></div>

            </h1>
            <div className="user-info__details">
            <div className="skeleton" style={{ width: '300px', height: '16px', borderRadius: '4px' }}></div>
              <span className="user-info__year">
              <div className="skeleton" style={{ width: '120px', height: '16px', borderRadius: '4px' }}></div>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="user-items">
        <div className="row user-items__row">
          <div className="user-items__header">
            <div className="user-items__header__left">
              <span className="skeleton" style={{ hieght: '20px', width: '150px' }} ></span>
            </div>
            <select className="collection-items__header__sort skeleton">
              <option value=""></option>
              <option value="priceHighToLow"></option>
              <option value="priceLowToHigh"></option>
            </select>
          </div>
          <div className="user-items__body">
            {Array.from({ length: 12 }).map((_, index) => (
              <div className="item-column" key={index}>
                <div className="item skeleton-item">
                  <figure className="item__img__wrapper skeleton skeleton-img"></figure>
                  <div className="item__details">
                    <span className="skeleton-text-collectionItems skeleton small"></span>
                    <span className="skeleton-text-collectionItems skeleton big"></span>
                    <span className="skeleton-text-collectionItems skeleton small"></span>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="collection-page__button skeleton skeleton-button">
          Load more
        </button>
      </section>
    </>
  );
}
