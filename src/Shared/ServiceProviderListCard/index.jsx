import React, { memo } from "react";
import styles from "./style.module.scss";
import MyRatingComponent from "../Rating";
import { Card, CardBody, CardFooter } from "reactstrap";

const TrainerListCard = (props) => {
  const {
    infoImg,
    infoDes,
    infoLogo,
    className,
    infoTitle,
    CardHeight,
    handleOnClick,
  } = props;

  return (
    <Card
      className={`BorderRadius bgProperties ${className} ${styles.Card}`}
      onClick={() => handleOnClick()}
      style={{
        backgroundImage: `url(${infoImg})`,
        height: `${CardHeight}vh`,
      }}
    >
      <CardBody className="p-0">
        <div className="p-0  ImgBorder"></div>
      </CardBody>
      <CardFooter
        className={`bgBlur ${styles.infoContainer}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h6 className="fw-700 fs-4 mb-0 px-2  text-white"> {infoTitle} </h6>
        <div
          className={`d-flex text-white align-items-end justify-content-between`}
        >
          <div className="d-flex align-items-center px-2">
            <img className="img-fluid" src={infoLogo} alt="info logo" />
            <p className="ms-2 fw-bold mb-0 no-Wrap text-white">{infoDes}</p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <MyRatingComponent />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default memo(TrainerListCard);
