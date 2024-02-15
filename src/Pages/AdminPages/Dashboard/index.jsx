import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaRegUser, FaUsers } from "react-icons/fa";
import LoadingScreen from "../../../HelperMethods/LoadingScreen";
import { USER_NOTIFICATIONS_URL } from "../../../utils/constants";
import { getUserNotifications } from "../../../Redux/features/User/userApi";
import DashboardCard from "../../../Shared/AdminShared/Components/DashboardCard";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  useEffect(() => {
    fetchUserNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUserNotifications = () => {
    const data = {
      apiEndpoint: USER_NOTIFICATIONS_URL,
    };

    dispatch(getUserNotifications(data));
  };

  return (
    <Container>
      {loading === "pending" && <LoadingScreen />}
      <Row className="py-3">
        <Col xl={3} lg={4} md={6} className="mb-3">
          <DashboardCard
            AdminClass="AdminCard"
            CardBodyClass="AdminCardBody"
            cardIconClass="cardIcon"
            cardIcon={<FaUser size={60} />}
            textOne="45"
            textTwo="Active User"
          />
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <DashboardCard
            AdminClass="AdminCard"
            CardBodyClass="AdminCardBody"
            cardIconClass="cardIcon"
            cardIcon={<FaRegUser size={60} />}
            textOne="05"
            textTwo="Non-Active Users"
          />
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <DashboardCard
            AdminClass="AdminCard"
            CardBodyClass="AdminCardBody"
            cardIconClass="cardIcon"
            cardIcon={<FaUsers size={65} />}
            textOne="04"
            textTwo="Subscribers"
          />
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <DashboardCard
            AdminClass="AdminCard"
            CardBodyClass="AdminCardBody"
            cardIconClass="cardIcon"
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
