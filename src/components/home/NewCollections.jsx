import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import "swiper/css/bundle"
import NewCollectionsSkeleton from "../ui/NewCollectionsSkeleton";
import CollectionCard from "../collection/CollectionCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

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
    <section id="new-collections" >
      <div className="container" data-aos="fade-up">
        <div className="row">
          <h2 className="new-collections__title">New Collections</h2>
          <Swiper
            modules={[Navigation]}
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
            {data.slice(0, 9).map((item, index) => (
              <SwiperSlide key={index}>
                <CollectionCard item={item}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
