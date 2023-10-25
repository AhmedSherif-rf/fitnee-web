import React, { memo } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const ProgressHistoryWrapper = (props) => {
  const { TDate, Weight, SMM, BFM, Proteins } = props;

  return (
    <Card>
      <CardHeader>
        <span className="fw-bold small">Date:</span>
        <span>{TDate}</span>
      </CardHeader>
      <CardBody>
        <div className="m-2 d-flex align-items-center">
          <div className="me-3">
            <p className="mb-0">Weight:</p>
            <p className="mb-0">SMM:</p>
            <p className="mb-0">BFM:</p>
            <p className="mb-0">Proteins:</p>
          </div>
          <div>
            <p className="mb-0">{Weight}Kg</p>
            <p className="mb-0">{SMM}Kg</p>
            <p className="mb-0">{BFM}Kg</p>
            <p className="mb-0">{Proteins}kg</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default memo(ProgressHistoryWrapper);
