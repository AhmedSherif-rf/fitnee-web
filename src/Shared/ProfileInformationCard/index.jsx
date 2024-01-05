import StarRating from "../Rating";
import { Tooltip } from "reactstrap";
import React, { memo, useState } from "react";
import { TRAINEE_ROLE } from "../../utils/constants";
import { Card, CardBody, CardFooter } from "reactstrap";
import Images from "../../HelperMethods/Constants/ImgConstants";

const ProfileInformationCard = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

  const { className, providerProfile } = props;
  return (
    <Card className={`BorderRadius border-0 ${className}`}>
      <CardBody className="p-0">
        <div
          className="p-0 bgProperties ImgBorder"
          style={{
            backgroundImage:
              providerProfile?.profile_pic === null
                ? `url(${Images.USER_DUMMY_IMG})`
                : `url(${providerProfile?.profile_pic.replace("/api", "")})`,
            height: "38vh",
          }}
        ></div>
      </CardBody>
      <CardFooter className="border-0 text-black-custom">
        <div className="h-100">
          <span className="fw-700 fs-4 text-secondary mb-0">
            {providerProfile?.role === TRAINEE_ROLE
              ? providerProfile?.first_name + " " + providerProfile?.last_name
              : providerProfile?.full_name}
          </span>
          <br />

          {providerProfile?.email && (
            <span className="small text-secondary">
              ({providerProfile?.email})
            </span>
          )}
        </div>

        {providerProfile?.role !== TRAINEE_ROLE && (
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
        )}
      </CardFooter>
    </Card>
  );
};

export default memo(ProfileInformationCard);
