import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ChambersSecondColumnDetails from "../components/ChambersSecondColumnDetails";
import ChambersThirdColumnDetails from "../components/ChambersThirdColumnDetails";
import "../styles/pages/Chambers.css";

const Chambers = () => {
  const [lodgingData, setlodgindData] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      await fetch("../logements.json")
        .then((res) => res.json())
        .then((res2) => {
          const logementFound = res2.find((e) => e.id === id);
          setlodgindData([logementFound]);
        })
        .catch((error) => console.error(error));
    }
    fetchData();
  }, [id]);
  console.log(lodgingData);
  return (
    <div className="chambers-container">
      {lodgingData.map(({ index, title, host, location, tags }) => (
        <div className="chambersDetails-container">
          <ChambersSecondColumnDetails
            key={index}
            title={title}
            hostName={host.name}
            hostPicture={host.picture}
            location={location}
          />
          <ChambersThirdColumnDetails tags={tags} />
        </div>
      ))}
    </div>
  );
};

export default Chambers;
