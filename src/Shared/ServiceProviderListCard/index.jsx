import React, { memo } from "react";
import MyRatingComponent from "../Rating";
import { Card, CardBody, CardFooter } from "reactstrap";

const TrainerListCard = (props) => {
  const {
    infoImg,
    infoDes,
    infoLogo,
    className,
    infoTitle,
    infoRating,
    CardHeight,
    handleOnClick,
  } = props;

  return (
    <Card
      className={`BorderRadius ${className}`}
      onClick={handleOnClick}
    >
      <CardBody className="p-0">
        <div
          className="p-0 bgProperties ImgBorder"
          style={{
            backgroundImage: `url(${infoImg})`,
            height: `${CardHeight}vh`,
          }}
        >
          <div className="d-flex align-items-end ps-3 h-100 justify-content-between">
            <h5 className="fw-700 fs-4  text-white"> {infoTitle} </h5>
          </div>
        </div>
      </CardBody>
      <CardFooter className="border-0">
        <div className="d-flex h-100 text-white align-items-end justify-content-between">
          <div className="d-flex align-items-center">
            <img className="img-fluid" src={infoLogo} alt="info logo" />
            <p className="ms-2 fw-bold mb-0 no-Wrap text-secondary">
              {infoDes}
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <MyRatingComponent />
            <p className="mb-0 pt-1">{infoRating}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default memo(TrainerListCard);
