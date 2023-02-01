import React from "react";
import "../styles/components/ChambersSecondColumnDetails.css";

const ChambersSecondColumnDetails = ({
  key,
  title,
  hostName,
  hostPicture,
  location,
  tags,
}) => {
  return (
    <>
      <div className="second-column-container">
        <div className="txt-container">
          <p className="title">{title}</p>
          <p className="location">{location}</p>
        </div>
        <div className="host-container">
          <p className="hostName">{hostName}</p>
          <img src={hostPicture} alt="regard feminin" className="hostImage" />
        </div>
      </div>
    </>
  );
};

export default ChambersSecondColumnDetails;
