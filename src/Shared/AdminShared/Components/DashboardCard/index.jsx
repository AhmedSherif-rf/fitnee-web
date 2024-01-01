import React from "react";
import Styles from "./style.module.scss";
import { Card, CardBody, Row, Col } from "reactstrap";

const DashboardCard = (props) => {
  const { textOne, textTwo, cardIcon } = props;
  return (
    <Card className={`onlyBorderRadius h-100 ${Styles.AdminCard}`}>
      <CardBody className={`${Styles.CardBody}`}>
        <Row className="d-flex align-items-center justify-content-between">
          <Col md={8} className="text-start">
            <h4 className={`fw-bold mb-0`}>{textOne}</h4>
            <p className="small mb-0">{textTwo}</p>
          </Col>
          <Col md={4}>
            <div
              className={`d-flex align-items-center justify-content-center textYellow ${Styles.cardIcon}`}
            >
              {cardIcon}
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default DashboardCard;
