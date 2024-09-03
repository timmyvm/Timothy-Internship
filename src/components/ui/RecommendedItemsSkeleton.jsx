import { faTableCells } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Navigation, Pagination } from "swiper/modules"; 
2
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RecommendedItemsSkeleton() {
  return (
    <section id="recommended-items">
      <div className="container">
        <div className="row recommended-items__row">
          <div className="recommended-items__wrapper">
            <div className="recommended-items__header">
              <FontAwesomeIcon icon={faTableCells} />
              <h3 className="recommended-items__header__title skeleton-text-collectionItems skeleton small">
                
              </h3>
            </div>

            <div className="recommended-items__body">
           
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                loop
                breakpoints={{
                  380: { slidesPerView: 2 },
                  480: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 5 },
                  1240: { slidesPerView: 6 },
                }}
              >
                {Array.from({ length: 10 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <div className="item item-skeleton">
                      <figure className="item__img__wrapper">
                        <div className="item__img skeleton"></div>
                      </figure>
                      <div className="item__details">
                        <span className="item__details__name skeleton-text-collectionItems skeleton small"></span>
                        <span className="item__details__price skeleton-text-collectionItems skeleton verysmall"></span>
                        <span className="item__details__last-sale skeleton-text-collectionItems skeleton small"></span>
                      </div>
                      <div className="item__see-more">
                        <button className="item__see-more__button skeleton"></button>
                        <div className="item__see-more__icon skeleton">
                          <FontAwesomeIcon icon={faTableCells} />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            
            <div className="recommended-items__footer">
              <div className="recommended-items__footer__button skeleton-text-collectionItems skeleton small">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
