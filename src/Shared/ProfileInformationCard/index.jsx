import StarRating from "../Rating";
import { Tooltip } from "reactstrap";
import React, { memo, useState } from "react";
import { Card, CardBody, CardFooter } from "reactstrap";
import Images from "../../HelperMethods/Constants/ImgConstants";

const ProfileInformationCard = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

  const {
    index,
    className,
    providerProfile,
  } = props;
  return (
    <Card className={`BorderRadius border-0 ${className}`} key={index}>
      <CardBody className="p-0">
        <div
          className="p-0 bgProperties ImgBorder"
          style={{
            backgroundImage:
              (providerProfile?.profile_pic === "" ||
              providerProfile?.profile_pic === null)
                ? `url(${Images.USER_DUMMY_IMG})`
                : providerProfile.profile_pic,
            height: "38vh",
          }}
        ></div>
      </CardBody>
      <CardFooter className="border-0 text-black-custom">
        <div className="h-100">
          <span className="fw-700 fs-4 text-secondary mb-0">
            {providerProfile?.full_name}
          </span>

          {providerProfile?.email && (
            <span className="small text-secondary">({providerProfile?.email})</span>
          )}
        </div>

        <div className="d-flex h-100 text-white align-items-end justify-content-between">
          <div
            className="d-flex align-items-center"
            id="tooltipTarget"
            href="#"
            onClick={toggleTooltip}
          >
            <img
              className="img-fluid"
              src={Images.SHORTLOGO_IMG}
              alt="info logo"
            />
            <p className="ms-2 fw-bold mb-0 no-Wrap text-secondary">
              {providerProfile?.experience} Year
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
            <StarRating rating={providerProfile?.Avg_rating} />
            <p className="mb-0 pt-1">{providerProfile?.Avg_rating}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default memo(ProfileInformationCard);
