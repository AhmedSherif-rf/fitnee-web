import React, { memo, useState } from "react";
import StarRating from "../Rating";
import { Tooltip } from "reactstrap";
import { Card, CardBody, CardFooter } from "reactstrap";

const ProfileInformationCard = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

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
        ></div>
      </CardBody>
      <CardFooter className="border-0 text-black-custom">
        <div className="h-100">
          <span className="fw-700 fs-4 text-secondary mb-0"> {infoTitle} </span>
          <span className="small text-secondary">({TraineeEmail})</span>
        </div>
  
        <div className="d-flex h-100 text-white align-items-end justify-content-between">
          <div
            className="d-flex align-items-center"
            id="tooltipTarget"
            href="#"
            onClick={toggleTooltip}
          >
            <img className="img-fluid" src={infoLogo} alt="info logo" />
            <p className="ms-2 fw-bold mb-0 no-Wrap text-secondary">
              {infoDes}
            </p>

            <Tooltip
              placement="top"
              isOpen={tooltipOpen}
              target="tooltipTarget"
              toggle={toggleTooltip}
            >
              Experience
            </Tooltip>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <StarRating />
            <p className="mb-0 pt-1">{infoRating}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default memo(ProfileInformationCard);
