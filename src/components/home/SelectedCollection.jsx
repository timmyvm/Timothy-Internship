import React, { useEffect, useState } from "react";
import SelectedItemLogo from "../../assets/selected-collection-logo.avif";
import VerifiedIcon from "../../assets/verified.png";
import { Link } from "react-router-dom";
import axios from "axios";
import SkeletonSelectedCollection from "../ui/SelectedCollectionSkeleton";

export default function SelectedCollection() {
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://remote-internship-api-production.up.railway.app/selectedCollection"
      );
      setData(response.data.data);
    } catch (error) {
      alert("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <SkeletonSelectedCollection />;
  }

  return (
    <header>
      <div className="selected-collection">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={data?.thumbnail}
          src={data?.videoLink}
          className="selected-collection__bg"
        />
        <div className="selected-collection__description">
          <img
            src={SelectedItemLogo}
            alt=""
            className="selected-collection__logo"
          />
          <h1 className="selected-collection__title">
            {data?.title || "Loading..."}
          </h1>
          <Link to={"/user"} className="selected-collection__author">
            By {data?.creator || "Loading..."}
            <img
              src={VerifiedIcon}
              className="selected-collection__author__verified"
            />
          </Link>
          <div className="selected-collection__details">
            {data?.amountOfItems} Items · {data?.floorPrice} ETH
          </div>
          <Link to={"/collection"} className="selected-collection__button">
            <div className="green-pulse"></div>
            View Collection
          </Link>
        </div>
      </div>
    </header>
  );
}
