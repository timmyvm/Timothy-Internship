import React, { useEffect, useState } from "react";
import axios from "axios";
import CollectionCard from "../components/item/CollectionCard";
import CollectionPageSkeleton from "../components/ui/CollectionPageSkeleton";

export default function CollectionsPage() {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://remote-internship-api-production.up.railway.app/collections"
      );
      setData(response.data.data);
    } catch (error) {
      alert("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 6);
  };

  if (data.length === 0) {
    return <CollectionPageSkeleton />;
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="collections-page__title">Collections</h1>
        <div className="collections__body">
          {data.slice(0, visibleCount).map((item, index) => (
            <div className="collection-column" key={item.id}>
              <CollectionCard item={item} />
            </div>
          ))}
        </div>

        {visibleCount < data.length && (
          <button className="collections-page__button" onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
