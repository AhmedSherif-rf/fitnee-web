import React from "react";
import { Container, Row, Col } from "reactstrap";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { FaUser, FaRegUser, FaUsers } from "react-icons/fa";
import DashboardCard from "../../../Shared/AdminShared/Components/DashboardCard";

const Dashboard = (props) => {
  return (
    <Container>
      <Row className="py-3">
        <Col xl={3} lg={4} md={6} className="mb-3">
          <DashboardCard
            cardIcon={<FaUser size={60} />}
            textOne="45"
            textTwo="Active User"
          />
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <DashboardCard
            cardIcon={<FaRegUser size={60} />}
            textOne="05"
            textTwo="Non-Active Users"
          />
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <DashboardCard
            cardIcon={<FaUsers size={65} />}
            textOne="04"
            textTwo="Subscribers"
          />
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <DashboardCard
            cardIcon={<AiOutlineUserSwitch size={65} />}
            textOne="02"
            textTwo="Re-Subscribers"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
