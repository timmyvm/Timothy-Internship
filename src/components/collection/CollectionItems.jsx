import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CollectionItems({ items, data }) {
  const [sortOption, setSortOption] = useState("");
  const [sortedItems, setSortedItems] = useState(items);
  const [visibleCount, setVisibleCount] = useState(12);

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sortedArray = [...items];

    if (option === "priceHighToLow") {
      sortedArray.sort((a, b) => b.price - a.price);
    } else if (option === "priceLowToHigh") {
      sortedArray.sort((a, b) => a.price - b.price);
    }

    setSortedItems(sortedArray);
  };

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 6);
  };

  return (
    <section id="collection-items">
      <div className="row collection-items__row">
        <div className="collection-items__header">
          <div className="collection-items__header__left">
            <span className="collection-items__header__live">
              <div className="green-pulse"></div>
              Live
            </span>
            <span className="collection-items__header__results">
              {sortedItems.length} results
            </span>
          </div>
          <select
            className="collection-items__header__sort"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="">Default</option>
            <option value="priceHighToLow">Price high to low</option>
            <option value="priceLowToHigh">Price low to high</option>
          </select>
        </div>
        <div className="collection-items__body">
          {sortedItems.slice(0, visibleCount).map((item, index) => (
            <div className="item-column" key={index}>
              <Link to={`/item/${item.itemId}`} className="item">
                <figure className="item__img__wrapper">
                  <img src={item.imageLink} alt="" className="item__img" />
                </figure>
                <div className="item__details">
                  <span className="item__details__name">{item.title}</span>
                  <span className="item__details__price">{item.price} ETH</span>
                  <span className="item__details__last-sale">
                    Last sale: {item.lastSale} ETH
                  </span>
                </div>
                <div className="item__see-more">
                  <button className="item__see-more__button">See More</button>
                  <div className="item__see-more__icon">
                    <FontAwesomeIcon icon={faShoppingBag} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {visibleCount < items.length && (
        <button className="collection-page__button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </section>
  );
}
