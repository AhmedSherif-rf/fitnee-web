import React from "react";
import { Container, Row, Col } from "reactstrap";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { FaUser, FaRegUser, FaUsers } from "react-icons/fa";
import DashboardCard from "../../../Shared/AdminShared/Components/DashboardCard";

const Dashboard = (props) => {
  return (
    <Container>
      <Row className="py-3">
        <Col md={3}>
          <DashboardCard
            cardIcon={<FaUser className="display-3" />}
            textOne="45k+"
            textTwo="Active User"
          />
        </Col>
        <Col md={3}>
          <DashboardCard
            cardIcon={<FaRegUser className="display-3" />}
            textOne="05k+"
            textTwo="Non-Active Users"
          />
        </Col>
        <Col md={3}>
          <DashboardCard
            cardIcon={<FaUsers className="display-3" />}
            textOne="04k+"
            textTwo="Subscribers"
          />
        </Col>
        <Col md={3}>
          <DashboardCard
            cardIcon={<AiOutlineUserSwitch className="display-3" />}
            textOne="02k+"
            textTwo="Re-Subscribers"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
