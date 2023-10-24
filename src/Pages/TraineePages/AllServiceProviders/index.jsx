import React, { memo } from "react";
import { Col, Container, Row } from "reactstrap";
import ServiceProviderListWrapper from "../../../Shared/ServiceProviderListWrapper";

const ServiceProvider = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <ServiceProviderListWrapper
            CardLink={"/trainee/serviceProviderProfile"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default memo(ServiceProvider);
