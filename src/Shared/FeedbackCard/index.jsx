import React from "react";
import StarRating from "../Rating";
import styles from "./style.module.scss";
import { Card, CardFooter } from "reactstrap";

const RatingCard = (props) => {
  const { header, image, des } = props;

  return (
    <Card
      className={`rounded-0 ${styles.customCard}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <CardFooter
        className={`text-center w-100 p-0 m-0 ${styles.customCardFooter}`}
      >
        <div
          className={`${styles.customCardFooterText} d-flex align-items-end justify-content-center`}
        >
          <div className="">
            <p className="fs-3 mb-0">{header}</p>
            <div className={`${styles.descriptionDiv} px-3 pt-1`}>
              <StarRating />
              <br /><br />
              <small>{des}</small>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RatingCard;
