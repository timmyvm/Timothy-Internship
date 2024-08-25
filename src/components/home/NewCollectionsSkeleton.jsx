import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import '../ui/Skeleton.css'; // Import your skeleton CSS

export default function NewCollectionsSkeleton() {
  return (
    <section id="new-collections">
      <div className="container">
        <div className="row">
          <h2 className="new-collections__title skeleton"></h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={6}
            navigationz
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {new Array(6).fill(0).map((_, index) => (
              <SwiperSlide key={index}>
                <div className="collection">
                  <div className="collection__img skeleton"></div>
                  <div className="collection__info ">
                    <h3 className=" skeleton-text-newCollection "></h3>
                    <div className="collection__stats ">
                      <div className="collection__stat ">
                        <span className="collection__stat__label skeleton-text-newCollection skeleton "></span>
                        <span className="collection__stat__data "></span>
                      </div>
                      <div className="collection__stat">
                        <span className="collection__stat__label skeleton-text-newCollection skeleton"></span>
                        <span className="collection__stat__data "></span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
