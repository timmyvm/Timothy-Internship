import React, { useEffect, useState } from "react";
import CollectionHeader from "../components/collection/CollectionHeader";
import CollectionInfo from "../components/collection/CollectionInfo";
import CollectionItems from "../components/ui/CollectionItems";
import { useParams } from "react-router-dom";
import axios from "axios";
import CollectionHeaderSkeleton from "../components/collection/CollectionHeaderSkeleton";
import CollectionInfoSkeleton from "../components/ui/CollectionInfoSkeleton";
import CollectionItemsSkeleton from "../components/ui/CollectionItemsSkeleton";

export default function CollectionPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://remote-internship-api-production.up.railway.app/collection/${id}`
      );
      setData(response.data.data);
    } catch (error) {
      alert("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {data ? (
        <>
          <CollectionHeader data={data} />
          <CollectionInfo data={data} />
          <CollectionItems items={data.items} data={data} />
        </>
      ) : (
        <>
          <CollectionHeaderSkeleton />
          <CollectionInfoSkeleton />
          <CollectionItemsSkeleton/>
        </>
      )}
    </>
  );
}
