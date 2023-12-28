import StarRating from "../Rating";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { Card, CardFooter } from "reactstrap";
import { LuArrowUp } from "react-icons/lu";

const RatingCard = (props) => {
  const { header, image, des } = props;
  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => {
    setIsHovered((prevIsHovered) => !prevIsHovered);
  };

  return (
    <Card
      className={`rounded-0 ${styles.customCard}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <CardFooter
        className={`text-center w-100 p-0 m-0 ${styles.customCardFooter} ${
          isHovered ? styles.hovered : ""
        }`}
      >
        <div
          className={`${styles.customCardFooterText} d-flex align-items-end justify-content-center`}
        >
          <div className="">
            <p className="fs-3 mb-0">{header}</p>

            <div className={`${styles.descriptionDiv} px-3 pt-1`}>
              <div className={`${styles.divider} px-3 my-2 `}></div>
              <small>{des}</small>
              <br />
              <br />
              <StarRating />
            </div>
          </div>
        </div>
      </CardFooter>
      <div
        className={`position-absolute rounded-circle d-md-none d-flex align-items-center justify-content-center textParrotGreen ${styles.arrowCircle}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleHover}
      >
        <LuArrowUp />
      </div>
    </Card>
  );
};

export default RatingCard;
