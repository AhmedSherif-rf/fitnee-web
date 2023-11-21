import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import ServiceProviderListWrapper from "../../../Shared/ServiceProviderListWrapper";

const AllServiceProvider = (props) => {
  const { roleType } = useParams();

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <ServiceProviderListWrapper
            cardLink={"/trainee/serviceProviderProfile"}
            roleType={roleType}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AllServiceProvider;
