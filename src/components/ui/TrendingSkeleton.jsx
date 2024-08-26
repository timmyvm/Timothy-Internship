import React from "react";
import { Link } from "react-router-dom";
import "../ui/Skeleton.css";

export default function SkeletonSelectedCollection() {
  return (
    <section id="trending">
      <div className="container">
        <div className="row trending__row">
          <div className="trending__header">
            <h2 className="trending__header__title">Trending NFTs</h2>
            <Link className="trending__header__button" to={"/collections"}>
              View All
            </Link>
          </div>
          <div className="trending__body">
            <div className="trending-column">
              <div className="trending-column__header">
                <div className="trending-column__header__rank">#</div>
                <div className="trending-column__header__collection">
                  Collection
                </div>
                <div className="trending-column__header__price">
                  Floor Price
                </div>
                <div className="trending-column__header__price">Volume</div>
              </div>
              <div className="trending-column__body">
                {new Array(5).fill(0).map((_, index) => (
                  <div key={index} className="trending-collection">
                    <div className="trending-collection__rank">{index + 1}</div>
                    <div className="trending-collection__collection">
                      <figure className="trending-collection__img__wrapper skeleton">
                        &nbsp;
                      </figure>
                      <div className="trending-collection__name skeleton-text-trending skeleton"></div>
                      <div className="trending-collection__verified "></div>
                    </div>
                    <div className="trending-collection__price">
                      <span className="skeleton-text-trending skeleton"></span>
                    </div>
                    <div className="trending-collection__volume">
                      <span className="skeleton-text-trending skeleton"></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="trending-column">
              <div className="trending-column__header trending-column__header2">
                <div className="trending-column__header__rank">#</div>
                <div className="trending-column__header__collection">
                  Collection
                </div>
                <div className="trending-column__header__price">
                  Floor Price
                </div>
                <div className="trending-column__header__price">Volume</div>
              </div>
              <div className="trending-column__body">
                {new Array(5).fill(0).map((_, index) => (
                  <div key={index} className="trending-collection">
                    <div className="trending-collection__rank">{index + 6}</div>
                    <div className="trending-collection__collection">
                      <figure className="trending-collection__img__wrapper skeleton">
                        &nbsp;
                      </figure>
                      <div className="trending-collection__name skeleton-text-trending skeleton"></div>
                      <div className="trending-collection__verified  "></div>
                    </div>
                    <div className="trending-collection__price">
                      <span className="skeleton-text-trending skeleton"></span>
                    </div>
                    <div className="trending-collection__volume">
                      <span className="skeleton skeleton-text-trending"></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
