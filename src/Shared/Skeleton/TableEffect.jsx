import React, { memo } from "react";
import { Col, Container, Row } from "reactstrap";
import { ShimmerCategoryList } from "react-shimmer-effects";

const TableEffect = () => {
  return (
    <Container fluid>
      <Row className="justify-content-between align-items-center">
      
        <Col md={12} sm={12} xs={12}>
          {window.innerWidth < 576 ? (
         <ShimmerCategoryList title items={3}  categoryStyle="STYLE_SEVEN" />
          ) : (
            <ShimmerCategoryList title items={3} categoryStyle="STYLE_SEVEN" />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default memo(TableEffect);
