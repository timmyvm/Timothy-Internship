import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/bundle"
import '../ui/Skeleton.css'; 

export default function NewCollectionsSkeleton() {
  return (
    <section id="new-collections">
      <div className="container">
        <div className="row">
          <h2 className="new-collections__title skeleton"></h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={6} 
            navigation
            loop
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1, 
              },
              480: {
                slidesPerView: 2, 
              },
              768: {
                slidesPerView: 3, 
              },
              1024: {
                slidesPerView: 4, 
              },
              1200: {
                slidesPerView: 5, 
              },
              1440: {
                slidesPerView: 6, 
              },
            }}
          >
            {new Array(9).fill(0).map((_, index) => (
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
