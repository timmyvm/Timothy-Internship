import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ItemPageSkeleton() {
  return (
    <section id="item-info">
      <div className="container">
        <div className="row item-page__row">
          <div className="item-page__left">
            <figure className="item-page__img__wrapper">
              <div className="item-page__img__details">
                <FontAwesomeIcon
                  icon={faEthereum}
                  className="item-page__img__icon"
                />

                <div className="item-page__img__likes">
                  <span className="skeleton-text-collectionItems skeleton verysmall"></span>
                </div>
              </div>

              <div className="item-page__img skeleton"></div>
            </figure>
          </div>

          <div className="item-page__right">
            <h1 className="skeleton-text-collectionItems skeleton verybig"></h1>

            <span className="skeleton-text-collectionItems  item-page__owner"></span>

            <div className="item-page__details">
              <div className="item-page__detail">
                <span className="skeleton-text-collectionItems skeleton "></span>
              </div>
              <div className="item-page__detail">
                <span className="skeleton-text-collectionItems skeleton superbig"></span>
              </div>
              <div className="item-page__detail">
                <span className="skeleton-text-collectionItems skeleton big"></span>
              </div>
            </div>

            <div className="item-page__details">
              <div className="item-page__detail">
                <span className="skeleton-text-collectionItems skeleton superbig"></span>
              </div>
              <div className="item-page__detail">
                <span className="skeleton-text-collectionItems skeleton "></span>
              </div>
              <div className="item-page__detail">
                <span className="skeleton-text-collectionItems skeleton "></span>
              </div>
            </div>

            <div className="item-page__sale">
              <div className="item-page__sale__header">
                <span className="skeleton-text-collectionItems skeleton superbig"></span>
              </div>

              <div className="item-page__sale__body">
                <span className="skeleton-text-collectionItems skeleton big"></span>
                <div className="item-page__sale__price">
                  <span className="skeleton-text-collectionItems skeleton superbig"></span>
                  <span className="skeleton-text-collectionItems skeleton superbig"></span>
                </div>

                <div className="item-page__sale__buttons skeleton">
                  <div className="item-page__sale__buy skeleton"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
