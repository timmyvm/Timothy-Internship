import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/bundle"
import NewCollectionsSkeleton from "./NewCollectionsSkeleton";


export default function NewCollections() {
  const [data, setData] = useState([]);


  async function fetchData() {
    try {
      const response = await axios.get(
        "https://remote-internship-api-production.up.railway.app/newCollections"
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);


  if(data.length === 0){
    return <NewCollectionsSkeleton/>
  }


  return (
    <section id="new-collections">
      <div className="container">
        <div className="row">
          <h2 className="new-collections__title">New Collections</h2>
          <Swiper
            modules={[Navigation, Pagination ]}
            spaceBetween={15}
            slidesPerView={6}
            navigation
            controller
            loop
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {data.slice(0, 9).map((item, index) => (
              <SwiperSlide key={index}>
                <Link
                  to={`/collection/${item.collectionId}`}
                  className="collection"
                >
                  <img
                    src={item.imageLink}
                    alt={item.title}
                    className="collection__img"
                  />
                  <div className="collection__info">
                    <h3 className="collection__name">{item.title}</h3>
                    <div className="collection__stats">
                      <div className="collection__stat">
                        <span className="collection__stat__label">Floor</span>
                        <span className="collection__stat__data">
                        {item.floor ? Math.round(item.floor * 100) / 100 : "0.00"} ETH
                        </span>
                      </div>
                      <div className="collection__stat">
                        <span className="collection__stat__label">
                          Total Volume
                        </span>
                        <span className="collection__stat__data">
                          {item.totalVolume} ETH
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
