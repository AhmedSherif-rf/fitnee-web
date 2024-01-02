import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import TraineeServiceProviderListWrapper from "../../../Shared/TraineeServiceProviderListWrapper";

const AllServiceProvider = (props) => {
  const { roleType } = useParams();

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <TraineeServiceProviderListWrapper
            cardLink={"/trainee/serviceProviderProfile"}
            roleType={roleType}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AllServiceProvider;
