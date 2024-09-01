import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faTableCells } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function RecommendedItems({ dataId }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://remote-internship-api-production.up.railway.app/collection/${dataId}`
        );
        setItems(response.data.data.items || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dataId]);

  return (
    <section id="recommended-items">
      <div className="container">
        <div className="row recommended-items__row">
          <div className="recommended-items__wrapper">
            <div className="recommended-items__header">
              <FontAwesomeIcon icon={faTableCells} />
              <h3 className="recommended-items__header__title">
                More from this collection
              </h3>
            </div>

            <div className="recommended-items__body">
              {items.length > 0 ? (
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
                  {items.slice(0, 10).map((item) => (
                    <SwiperSlide key={item.itemId}>
                      <Link to={`/item/${item.itemId}`} className="item">
                        <figure className="item__img__wrapper">
                          <img
                            src={item.imageLink}
                            alt={item.title}
                            className="item__img"
                          />
                        </figure>
                        <div className="item__details">
                          <span className="item__details__name">
                            {item.title}
                          </span>
                          <span className="item__details__price">0.98 ETH</span>
                          <span className="item__details__last-sale">
                            Last sale: 7.45 ETH
                          </span>
                        </div>
                        <div className="item__see-more">
                          <button className="item__see-more__button">
                            See More
                          </button>
                          <div className="item__see-more__icon">
                            <FontAwesomeIcon icon={faShoppingBag} />
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <p>Loading recommended items...</p>
              )}
            </div>

            {/* Footer Section */}
            <div className="recommended-items__footer">
              <Link
                to={`/collection/${dataId}`}
                className="recommended-items__footer__button"
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
