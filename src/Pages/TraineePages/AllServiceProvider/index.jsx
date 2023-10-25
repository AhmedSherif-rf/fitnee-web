import React from "react";
import { Col, Container, Row } from "reactstrap";
import ServiceProviderListWrapper from "../../../Shared/ServiceProviderListWrapper";

const AllServiceProvider = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <ServiceProviderListWrapper
            cardLink={"/trainee/serviceProviderProfile"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AllServiceProvider;
