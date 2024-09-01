import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faShapes,
  faTag,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import RecommendedItems from "../components/item/RecommendedItems";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ItemPageSkeleton from "./ItemPageSkeleton";
import RecommendedItemsSkeleton from "../components/item/RecommendedItemsSkeleton";

export default function ItemPage() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://remote-internship-api-production.up.railway.app/item/${id}`
      );
      const fetchedData = response.data.data;
      setData(fetchedData);

      const expiryDateTimestamp = new Date(fetchedData.expiryDate).getTime();
      updateCountdown(expiryDateTimestamp);
    } catch (error) {
      alert("Error fetching data:", error);
    }
  };

  const updateCountdown = (expiryDateTimestamp) => {
    const now = new Date().getTime();
    const timeLeft = expiryDateTimestamp - now;

    if (timeLeft <= 0) {
      setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const hours = Math.floor((timeLeft % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((timeLeft % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    setTimeLeft({ hours, minutes, seconds });
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (data && data.expiryDate) {
        const expiryDateTimestamp = new Date(data.expiryDate).getTime();
        updateCountdown(expiryDateTimestamp);
      }
    }, 1000); 

    return () => clearInterval(countdownInterval);
  }, [data]);

  return (
    <>
      {data ? (
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
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="item-page__img__icon"
                      />
                      <span className="item-page__img__likes__text">
                        {data.favorites}
                      </span>
                    </div>
                  </div>
                  <img src={data.imageLink} alt="" className="item-page__img" />
                </figure>
              </div>
              <div className="item-page__right">
                <Link
                  to={`/collection/${data.collectionId}`}
                  className="item-page__collection light-blue"
                >
                  {data.collection}
                </Link>
                <h1 className="item-page__name">{data.title}</h1>
                <span className="item-page__owner">
                  Owned by
                  <Link
                    to={`/user/${data.ownerId}`}
                    className="light-blue item-page__owner__link"
                  >
                    {" "}
                    {data.owner}
                  </Link>
                </span>
                <div className="item-page__details">
                  <div className="item-page__detail">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="item-page__detail__icon"
                    />
                    <span className="item-page__detail__text">
                      {data.views} views
                    </span>
                  </div>
                  <div className="item-page__detail">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="item-page__detail__icon"
                    />
                    <span className="item-page__detail__text">
                      {data.favorites} favorites
                    </span>
                  </div>
                  <div className="item-page__detail">
                    <FontAwesomeIcon
                      icon={faShapes}
                      className="item-page__detail__icon"
                    />
                    <span className="item-page__detail__text">
                      {data.category}
                    </span>
                  </div>
                </div>
                <div className="item-page__sale">
                  <div className="item-page__sale__header">
                    <div className="green-pulse"></div>
                    <span>
                      Sale ends in{" "}
                      {timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0
                        ? `${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`
                        : "Ended"}
                    </span>
                  </div>
                  <div className="item-page__sale__body">
                    <span className="item-page__sale__label">
                      Current price
                    </span>
                    <div className="item-page__sale__price">
                      <span className="item-page__sale__price__eth">
                        {data.ethPrice} ETH
                      </span>
                      <span className="item-page__sale__price__dollars">
                        {data.usdPrice}
                      </span>
                    </div>
                    <div className="item-page__sale__buttons">
                      <div className="item-page__sale__buy">
                        <button className="item-page__sale__buy__button disabled">
                          Buy now
                        </button>
                        <button className="item-page__sale__buy__icon disabled">
                          <FontAwesomeIcon icon={faShoppingBag} />
                        </button>
                      </div>
                      <button className="item-page__sale__offer disabled">
                        <FontAwesomeIcon icon={faTag} />
                        Make offer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <ItemPageSkeleton/>
      )}

      {data && data.collectionId ? (
        <RecommendedItems dataId={data.collectionId} />
      ) : <RecommendedItemsSkeleton/>}
    </>
  );
}
