import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const StarRating = (props) => {
  const [rating, setRating] = useState(props.rating);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <Rating size={20} onClick={handleRating} initialValue={rating} readonly />
  );
};

export default StarRating;
