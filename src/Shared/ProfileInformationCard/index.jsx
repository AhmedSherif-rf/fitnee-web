import React, { memo } from "react";
import StarRating from "../Rating";
import { Card, CardBody, CardFooter } from "reactstrap";

const ProfileInformationCard = (props) => {
  const {
    index,
    infoTitle,
    infoImg,
    infoDes,
    infoRating,
    infoLogo,
    CardHeight,
    className,
    TraineeEmail,
  } = props;

  return (
    <Card className={`BorderRadius border-0 ${className}`} key={index}>
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
      <CardFooter className="border-0 text-black-custom">
        <div className="d-flex h-100 text-white align-items-end justify-content-between">
          <div className="d-flex align-items-center">
            <img className="img-fluid" src={infoLogo} alt="info logo" />
            <p className="ms-2 fw-bold mb-0 no-Wrap text-secondary">
              {infoDes}
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <StarRating />
            <p className="mb-0 pt-1">{infoRating}</p>
          </div>
        </div>
        <div className="my-2 text-center fs-5">{TraineeEmail}</div>
      </CardFooter>
    </Card>
  );
};

export default memo(ProfileInformationCard);
