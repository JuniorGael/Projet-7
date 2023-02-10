import React, { useEffect, useState } from "react";
import "../styles/components/Gallery.css";
import Card from "./Card";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../logements.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="gallery">
      {/* <div className="galerry-list"> */}
        {data.map((housingData, index, title) => (
          <Card key={index} housingData={housingData} title={title} />
        ))}
      {/* </div> */}
    </section>
  );
};

export default Gallery;
