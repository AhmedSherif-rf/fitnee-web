import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import ServiceProviderListWrapper from "../../../Shared/ServiceProviderListWrapper";

const ServiceProviderList = (props) => {
  const { roleType } = useParams();

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <ServiceProviderListWrapper
            cardLink={"/guest/serviceProviderProfile"}
            roleType={roleType}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceProviderList;
