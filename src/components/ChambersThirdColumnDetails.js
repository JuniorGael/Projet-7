import React from "react";
import "../styles/components/ChambersThirdColumnDetails.css";

const ChambersThirdColumnDetails = ({ tags }) => {
  return (
    <>
      <div className="third-column-container">
        <div className="tags">
          <p className="tagName">{tags}</p>
        </div>
      </div>
    </>
  );
};

export default ChambersThirdColumnDetails;
