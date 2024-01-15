import React from "react";
import Styles from "./style.module.scss";
import { Card, CardBody, Row, Col } from "reactstrap";

const DashboardCard = (props) => {
  const { textOne, textTwo, cardIcon } = props;
  return (
    <Card className={`onlyBorderRadius h-100   ${Styles.AdminCard}`}>
      <CardBody className={`${Styles.CardBody}`}>
        <div className="d-flex align-items-center justify-content-between">
          <div className="w-100">
            <div className="w-100 text-start px-2 ">
              <h4 className={`fw-bold mb-0`}>{textOne}</h4>
            </div>
            <div className="w-100 text-start px-2">
              {" "}
              <p className="small mb-0 mt-2">{textTwo}</p>
            </div>
          </div>
          <div
            className={`d-flex align-items-center justify-content-center textYellow ${Styles.cardIcon}`}
          >
            {cardIcon}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default DashboardCard;
