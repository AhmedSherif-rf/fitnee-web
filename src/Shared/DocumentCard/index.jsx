import React, { memo } from "react";
import { Col, Card, CardBody, CardFooter } from "reactstrap";

const DocumentCard = (props) => {
  const { documentImg, documentTitle, className } = props;

  return (
    <Col lg={3} md={6} sm={6}>
      <Card
        className={`bgProperties ${className}`}
        style={{
          backgroundImage: `url(${documentImg})`,
          color: "white",
          height: "20vh",
          margin: "4px",
        }}
      >
        <CardBody className="p-0"></CardBody>

        <CardFooter className="text-center bgBlur border-0">
          {documentTitle}
        </CardFooter>
      </Card>
    </Col>
  );
};

export default memo(DocumentCard);
