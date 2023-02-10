import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ChambersDetails from "../components/ChambersDetails";
import "../styles/pages/Chambers.css";

const Chambers = () => {
  const [lodgingData, setlodgindData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      await fetch("../logements.json")
        .then((res) => res.json())
        .then((res2) => {
          const logementFound = res2.find((e) => e.id === id);
          setlodgindData(logementFound);
        })
        .catch((error) => console.error(error));
    }
    fetchData();
  }, [id]);
  
  const {title, host, location, tags, rating, pictures, description, equipments } = lodgingData;
  console.log(lodgingData.pictures);

  return (
    <div className="chambers-container">
      {/* <div className="chambersDetails-container"> */}
        <ChambersDetails
          title={title}
          hostName={host && host.name}
          hostPicture={host && host.picture}
          location={location}
          tagsFeatures={tags}
          ratingStars={rating}
          slides={pictures}
          description={description}
          equipments={equipments}
        />
      {/* </div> */}
    </div>
  );
};

export default Chambers;
