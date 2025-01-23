import StarRating from "../Rating";
import { Tooltip } from "reactstrap";
import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { TRAINEE_ROLE } from "../../utils/constants";
import { Card, CardBody, CardFooter } from "reactstrap";
import Images from "../../HelperMethods/Constants/ImgConstants";
const ProfileInformationCard = (props) => {
  const { t, i18n } = useTranslation("");
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

  const { className, providerProfile } = props;
  return (
    <Card className={`BorderRadius border-0 w-100 ${className} ${i18n.dir()}`}>
      <CardBody className="p-0">
        <div
          className="p-0 bgProperties ImgBorder"
          style={{
            backgroundImage:
              providerProfile?.profile_pic === null
                ? `url(${Images.USER_DUMMY_IMG})`
                : `url(${providerProfile?.profile_pic})`,
            height: "38vh",
          }}
        ></div>
      </CardBody>
      <CardFooter className="border-0 text-black-custom">
        <div className="h-100">
          {providerProfile?.full_name && (
            <span className="fs-5 text-secondary my-2">
              {providerProfile?.full_name}
            </span>
          )}
          <br />
          <span className="fs-5 text-secondary my-2">
            {providerProfile?.email}
          </span>
          <br />
          <span className="fw-700 fs-6 text-secondary mb-0">
            {providerProfile?.description}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default memo(ProfileInformationCard);
