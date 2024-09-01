import React from "react";
import { Link } from "react-router-dom";

export default function CollectionCard({item }) {


  return (
    <Link to={`/collection/${item.id}`} className="collection">
      <img src={item.imageLink} alt={item.title} className="collection__img" />
      <div className="collection__info">
        <h3 className="collection__name">{item.title}</h3>
        <div className="collection__stats">
          <div className="collection__stat">
            <span className="collection__stat__label">Floor</span>
            <span className="collection__stat__data">
              {item.floor ? Math.round(item.floor * 100) / 100 : "0.00"} ETH{" "}
            </span>
          </div>
          <div className="collection__stat">
            <span className="collection__stat__label">Total Volume</span>
            <span className="collection__stat__data">
              {item.totalVolume} ETH
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
