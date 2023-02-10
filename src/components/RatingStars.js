import React from "react";
import imgColored from "../assets/images/star_rate-colored.png";
import imgGrey from "../assets/images/star_rate-grey.png";
import "../styles/components/RatingStars.css";

const RatingStars = ({ ratingStars }) => {
  const ratings = Array.from({ length: 5 }).map((rating, index) => {
    const numberOfStars = index + 1;

    return (
      <span key={index}>
        {ratingStars >= numberOfStars ? (
          <img src={imgColored} alt="star colored" rating={rating} />
        ) : (
          <img src={imgGrey} alt="grey star" rating={rating} />
        )}
      </span>
    );
  });
  return (
    <>
      <div className="rating">{ratings}</div>
    </>
  );
};

export default RatingStars;
