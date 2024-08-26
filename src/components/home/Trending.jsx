import React, { useEffect, useState } from "react";
import VerifiedIcon from "../../assets/verified.png";
import { Link } from "react-router-dom";
import axios from "axios";
import TrendingSkeleton from "../ui/TrendingSkeleton"

export default function Trending() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://remote-internship-api-production.up.railway.app/trendingNFTs"
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length === 0) {
    return <TrendingSkeleton />;
  }
  

  return (
    <section id="trending">
      <div className="container">
        <div className="row trending__row">
          <div className="trending__header">
            <h2 className="trending__header__title">Trending NFTs</h2>
            <Link className="trending__header__button" to={"/collections"}>
              View All
            </Link>
          </div>
          <div className="trending__body">
            <div className="trending-column">
              <div className="trending-column__header">
                <div className="trending-column__header__rank">#</div>
                <div className="trending-column__header__collection">
                  Collection
                </div>
                <div className="trending-column__header__price">
                  Floor Price
                </div>
                <div className="trending-column__header__price">Volume</div>
              </div>
              <div className="trending-column__body">
                {data.slice(0, 5).map((item, index) => (
                  <Link
                    to={`/collection/${item.collectionId}`} 
                    key={item.rank}
                    className="trending-collection"
                  >
                    <div className="trending-collection__rank">{index + 1}</div>
                    <div className="trending-collection__collection">
                      <figure className="trending-collection__img__wrapper">
                        <img
                          src={item.imageLink || 'default-thumbnail.png'}
                          alt={item.title}
                          className="trending-collection__img"
                        />
                      </figure>
                      <div className="trending-collection__name">
                        {item.title}
                      </div>
                      <img
                        src={VerifiedIcon}
                        className="trending-collection__verified"
                        alt="Verified"
                      />
                    </div>
                    <div className="trending-collection__price">
                      <span className="trending-collection__price__span">
                      {item.floor ? Math.round(item.floor * 100) / 100 : "0.00"} ETH
                      </span>
                    </div>
                    <div className="trending-collection__volume">
                      <span className="trending-collection__volume__span">
                        {item.totalVolume} ETH
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

           
            <div className="trending-column">
              <div className="trending-column__header trending-column__header2">
                <div className="trending-column__header__rank">#</div>
                <div className="trending-column__header__collection">
                  Collection
                </div>
                <div className="trending-column__header__price">
                  Floor Price
                </div>
                <div className="trending-column__header__price">Volume</div>
              </div>
              <div className="trending-column__body">
                {data.slice(5, 10).map((item, index) => (
                  <Link
                    to={`/collection/${item.collectionId}}`} 
                    key={item.rank}
                    className="trending-collection"
                  >
                    <div className="trending-collection__rank">{index + 6}</div>
                    <div className="trending-collection__collection">
                      <figure className="trending-collection__img__wrapper">
                        <img
                          src={item.imageLink || 'default-thumbnail.png'}
                          alt={item.title}
                          className="trending-collection__img"
                        />
                      </figure>
                      <div className="trending-collection__name">
                        {item.title}
                      </div>
                      <img
                        src={VerifiedIcon}
                        className="trending-collection__verified"
                        alt="Verified"
                      />
                    </div>
                    <div className="trending-collection__price">
                      <span className="trending-collection__price__span">
                      {item.floor ? Math.round(item.floor * 100) / 100 : "0.00"} ETH
                      </span>
                    </div>
                    <div className="trending-collection__volume">
                      <span className="trending-collection__volume__span">
                        {item.totalVolume} ETH
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
