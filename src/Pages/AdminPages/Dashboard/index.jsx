import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaRegUser, FaUsers } from "react-icons/fa";
import LoadingScreen from "../../../HelperMethods/LoadingScreen";
import { USER_NOTIFICATIONS_URL } from "../../../utils/constants";
import { ADMIN_DASHBOARD_COUNTERS } from "../../../utils/constants";
import { getUserNotifications } from "../../../Redux/features/User/userApi";
import DashboardCard from "../../../Shared/AdminShared/Components/DashboardCard";
import { getUserCounters } from "../../../Redux/features/Admin/Dashboard/UserCounterApi";

const Dashboard = (props) => {
  const [counterData, setCounterData] = useState("");
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

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        apiEndpoint: ADMIN_DASHBOARD_COUNTERS,
      };

      const res = await dispatch(getUserCounters(data));

      if (res.type === "getUserCounters/fulfilled") {
        setCounterData(res.payload.data);
      }
    };

    fetchData();
  }, [dispatch]);
  console.log(counterData, "alksdjfjakjsdlfkaljdskflasdjlkfk");
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
            textOne={counterData.active_users_count}
            textTwo="Active User"
          />
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <DashboardCard
            AdminClass="AdminCard"
            CardBodyClass="AdminCardBody"
            cardIconClass="cardIcon"
            cardIcon={<FaRegUser size={60} />}
            textOne={counterData.inactive_users_count}
            textTwo="Inactive Users"
          />
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <DashboardCard
            AdminClass="AdminCard"
            CardBodyClass="AdminCardBody"
            cardIconClass="cardIcon"
            cardIcon={<FaUsers size={65} />}
            textOne={counterData.trainees_count}
            textTwo="Subscribers"
          />
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <DashboardCard
            AdminClass="AdminCard"
            CardBodyClass="AdminCardBody"
            cardIconClass="cardIcon"
            cardIcon={<AiOutlineUserSwitch size={65} />}
            textOne={counterData.resubscribers_count}
            textTwo="Re-Subscribers"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
