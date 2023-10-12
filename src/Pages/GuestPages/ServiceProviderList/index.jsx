import React from "react";
import { Col, Container, Row } from "reactstrap";
import ServiceProviderListWrapper from "../../../Shared/ServiceProviderListWrapper";

const ServiceProviderList = (props) => {

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <ServiceProviderListWrapper />
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceProviderList;
