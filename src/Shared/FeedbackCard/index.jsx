import StarRating from "../Rating";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { Card, CardFooter } from "reactstrap";
import { LuArrowUp } from "react-icons/lu";

const FeedbackCard = (props) => {
  const { header, image, des } = props;
  return (
    <Card
      className={`rounded-0 w-100 ${styles.customCard}`}
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
        className={`position-absolute rounded-circle d-md-none d-flex align-items-center justify-content-center textParrotGreen ${styles.arrowCircle}`}>
        <LuArrowUp />
      </div>
    </Card>
  );
};

export default FeedbackCard;
