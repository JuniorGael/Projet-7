import React from "react";
import ExpendableColumn from "./ExpendableColumn";
import "../styles/components/ChambersDetails.css";
import RatingStars from "./RatingStars";
import ImageSlider from "./ImageSlider";

const ChambersDetails = ({
  title,
  hostName,
  hostPicture,
  location,
  tagsFeatures,
  ratingStars,
  slides,
  description,
  equipments,
}) => {
  return (
    <>
      <div className="imageSlides-container">
        {slides && <ImageSlider slides={slides} />}
      </div>
      
      <div className="displayTwoColumns">
        <div className="second-column-container">
          <div className="txt-container">
            <p className="title">{title}</p>
            <p className="location">{location}</p>
          </div>
          <div className="tags-container">
            {tagsFeatures &&
              tagsFeatures.map((tags, index) => (
                <div key={index} className="tags-items">
                  <p className="tagName">{tags}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="third-column-container">
          <div className="host-container">
            <p className="hostName">{hostName}</p>
            <img src={hostPicture} alt="regard feminin" className="hostImage" />
          </div>
          <RatingStars ratingStars={ratingStars} />
        </div>
      </div>

      <div className="accordion-container">
        <ExpendableColumn title="Description" text={description} />

        <ExpendableColumn title="Equipements">
          {equipments &&
            equipments.map((text, index) => <p key={index}>{text}</p>)}
        </ExpendableColumn>
      </div>
    </>
  );
};

export default ChambersDetails;
