import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const StarRating = () => {
  const [rating, setRating] = useState(3);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <Rating size={20} onClick={handleRating} initialValue={rating} readonly />
  );
};

export default StarRating;
