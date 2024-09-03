import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserPageSkeleton from "../components/ui/UserPageSkeleton";

export default function UserPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const [sortOption, setSortOption] = useState("");
  const [sortedItems, setSortedItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://remote-internship-api-production.up.railway.app/user/${id}`
      );
      setData(response.data.data);
      setSortedItems(response.data.data.items);  
    } catch (error) {
      alert("Error fetching data:", error );
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, [id]);

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 6);
  };

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sortedArray = [...data.items];  

    if (option === "priceHighToLow") {
      sortedArray.sort((a, b) => b.price - a.price);
    } else if (option === "priceLowToHigh") {
      sortedArray.sort((a, b) => a.price - b.price);
    }

    setSortedItems(sortedArray);
  };

  return data ? (
    <>
      <header
        style={{
          backgroundImage: `url('${data.imageLink}')`,
        }}
        id="user-header"
      ></header>

      <section id="user-info">
        <div className="row">
          <div className="user-info__wrapper">
            <figure className="user-info__img__wrapper">
              <img
                src={data.profilePicture}
                alt=""
                className="user-info__img"
              />
            </figure>
            <h1 className="user-info__name">{data.name}</h1>
            <div className="user-info__details">
              <span className="user-info__wallet">
                <FontAwesomeIcon
                  icon={faEthereum}
                  className="user-info__wallet__icon"
                />
                <span className="user-info__wallet__data">
                  {data.walletCode}
                </span>
              </span>
              <span className="user-info__year">
                <span className="user-info__year__data">
                  Joined {data.creationDate}
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="user-items">
        <div className="row user-items__row">
          <div className="user-items__header">
            <div className="user-items__header__left">
              <span className="user-items__header__text">
                {sortedItems.length} items
              </span>
            </div>
            <select
              className="user-items__header__sort"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="">Recently purchased</option>
              <option value="priceHighToLow">Price high to low</option>
              <option value="priceLowToHigh">Price low to high</option>
            </select>
          </div>
          <div className="user-items__body">
            {sortedItems.slice(0, visibleCount).map((item, index) => (
              <div className="item-column" key={index}>
                <Link to={`/item/${item.itemId}`} className="item">
                  <figure className="item__img__wrapper">
                    <img
                      src={item.imageLink}
                      alt={item.title}
                      className="item__img"
                    />
                  </figure>
                  <div className="item__details">
                    <span className="item__details__name">{item.title}</span>
                    <span className="item__details__price">
                      {item.price} ETH
                    </span>
                    <span className="item__details__last-sale">
                      Last sale: {item.lastSale} ETH
                    </span>
                  </div>
                  <a className="item__see-more" href="#">
                    <button className="item__see-more__button">See More</button>
                    <div className="item__see-more__icon">
                      <FontAwesomeIcon icon={faShoppingBag} />
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {visibleCount < sortedItems.length && (
          <button className="collection-page__button" onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </section>
    </>
  ) : <UserPageSkeleton/>;
}  
