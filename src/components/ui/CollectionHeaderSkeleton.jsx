import React from "react";
import '../ui/Skeleton.css'; 


export default function CollectionHeaderSkeleton() {
  return (
    <header id="collection-header">
      <div className="row collection-header__row skeleton">
        <div className="collection-header__content">
          <div className="collection-header__left">
            <div className="collection-header__img" />
            <div className="collection-header__name"></div>
          </div>
          <div className="collection-header__right">
            <div className="collection-header__columns">
              <div className="collection-header__column">
                <span className="collection-header__column__data">
                  <span className="semibold"></span>
                </span>
                <span className="collection-header__column__label"></span>
              </div>
              <div className="collection-header__column">
                <span className="collection-header__column__data">
                  <span className="semibold"></span>
                </span>
                <span className="collection-header__column__label"></span>
              </div>
              <div className="collection-header__column">
                <span className="collection-header__column__data">
                  <span className="semibold"></span>
                </span>
                <span className="collection-header__column__label"></span>
              </div>
              <div className="collection-header__column">
                <span className="collection-header__column__data">
                  <span className="semibold"></span>
                </span>
                <span className="collection-header__column__label"></span>
              </div>
              <div className="collection-header__column">
                <span className="collection-header__column__data">
                  <span className="semibold"> </span>
                </span>
                <span className="collection-header__column__label"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
