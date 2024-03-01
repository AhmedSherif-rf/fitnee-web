import moment from "moment";
import { Link } from "react-router-dom";
import Rating from "../../../Shared/Rating";
import { RiReservedFill } from "react-icons/ri";
import { Container, Row, Col } from "reactstrap";
import React, { useEffect, useState } from "react";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaRegUser, FaUsers } from "react-icons/fa";
import LoadingScreen from "../../../HelperMethods/LoadingScreen";
import { USER_NOTIFICATIONS_URL } from "../../../utils/constants";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import { ADMIN_DASHBOARD_COUNTERS } from "../../../utils/constants";
import { getUserNotifications } from "../../../Redux/features/User/userApi";
import DashboardCard from "../../../Shared/AdminShared/Components/DashboardCard";
import { getUserStat } from "../../../Redux/features/Admin/Dashboard/dashboardApi";
import DashboardTable from "../../../Shared/AdminShared/Components/DashboardTable";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const [spFeedbacks, setSpFeedbacks] = useState([]);
  const [counterData, setCounterData] = useState("");
  const [reviewRequests, setReviewRequests] = useState([]);
  const { loading } = useSelector((state) => state.dashboard);
  const [platformFeedbacks, setPlatformFeedbacks] = useState([]);
  const [spFeedbackTableData, setSpFeedbackTableData] = useState([]);
  const [reviewRequestsTableData, setReviewRequestsTableData] = useState([]);
  const [platformFeedbackTableData, setPlatformFeedbackTableData] = useState(
    []
  );

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

      dispatch(getUserStat(data)).then((res) => {
        if (res.type === "getUserStat/fulfilled") {
          setCounterData(res.payload.data);
          setReviewRequests(res.payload.data.service_provider);
          setPlatformFeedbacks(res.payload.data.platform_review);
          setSpFeedbacks(res.payload.data.profile_review);
        }
      });
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (platformFeedbacks.length > 0) {
      let platformFeedbacksArray = [];
      platformFeedbacks.forEach((feedback) =>
        platformFeedbacksArray.push({
          reviewer: (
            <div className="d-flex align-items-center">
              <div
                className="bgProperties rounded-circle me-2"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundImage:
                    feedback?.reviewer?.profile_pic === null
                      ? `url(${Images.USER_DUMMY_IMG})`
                      : `url(${feedback?.reviewer.profile_pic})`,
                }}
              ></div>
              <div className="d-flex flex-column">
                <h6 className="text-secondary fw-bold mb-0">
                  {feedback?.reviewer.first_name +
                    " " +
                    feedback?.reviewer.last_name}
                </h6>
                <Rating rating={feedback?.platform_rating} />
              </div>
            </div>
          ),
          message: feedback?.platform_review,
          date: (
            <div className="fw-bold text-secondary">
              {moment(feedback?.created_on).format("DD/MM/YYYY")}
            </div>
          ),
        })
      );
      setPlatformFeedbackTableData(platformFeedbacksArray);
    } else {
      setPlatformFeedbackTableData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [platformFeedbacks]);

  useEffect(() => {
    if (reviewRequests.length > 0) {
      let reviewRequestsArray = [];
      reviewRequests.forEach((request) =>
        reviewRequestsArray.push({
          full_name: (
            <Link to={`/admin/reviewRequestDetail/${request?.uuid}`}>
              <div className="d-flex align-items-center">
                <div
                  className="bgProperties rounded-circle me-2"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundImage:
                      request?.profile_pic === null
                        ? `url(${Images.USER_DUMMY_IMG})`
                        : `url(${request?.profile_pic})`,
                  }}
                ></div>
                <h6 className="text-secondary fw-bold mb-0">
                  {request?.full_name}
                </h6>
              </div>
            </Link>
          ),
          role: request?.role,
          request_id: (
            <div className="fw-bold text-secondary">{request?.request_id}</div>
          ),
        })
      );
      setReviewRequestsTableData(reviewRequestsArray);
    } else {
      setReviewRequestsTableData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviewRequests]);

  useEffect(() => {
    if (spFeedbacks.length > 0) {
      let feedbackArray = [];
      spFeedbacks.forEach((feedback) =>
        feedbackArray.push({
          reviewer: (
            <div className="d-flex align-items-center">
              <div
                className="bgProperties rounded-circle me-2"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundImage:
                    feedback?.reviewer?.profile_pic === null
                      ? `url(${Images.USER_DUMMY_IMG})`
                      : `url(${feedback?.reviewer?.profile_pic})`,
                }}
              ></div>
              <h6 className="text-secondary fw-bold mb-0">
                {feedback?.reviewer?.first_name} {feedback?.reviewer?.last_name}
              </h6>
            </div>
          ),
          serviceProvider: (
            <div className="d-md-flex d-none align-items-center">
              <div
                className="bgProperties rounded-circle me-2"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundImage:
                    feedback?.service_provider?.profile_pic === null
                      ? `url(${Images.USER_DUMMY_IMG})`
                      : `url(${feedback?.service_provider?.profile_pic})`,
                }}
              ></div>
              <h6 className="text-secondary fw-bold mb-0">
                {feedback?.service_provider?.full_name}
              </h6>
            </div>
          ),
          message: (
            <div
              className="d-flex align-items-center "
              style={{ maxWidth: "300px" }}
            >
              <Rating rating={feedback?.sp_rating} />
              <div className="d-flex align-items-center mb-0">
                {feedback?.sp_review}
              </div>
            </div>
          ),
        })
      );
      setSpFeedbackTableData(feedbackArray);
    } else {
      setSpFeedbackTableData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spFeedbacks]);

  const reviewRequestColumns = [
    { label: "Full Name", dataKey: "full_name" },
    { label: "Role", dataKey: "role" },
    { label: "Ticket ID", dataKey: "ticket_id" },
  ];

  const platformFeedbackColumns = [
    { label: "Reviewer", dataKey: "reviewer" },
    { label: "Message", dataKey: "message" },
    { label: "Date", dataKey: "date" },
  ];

  const serviceProviderFeedbackColumns = [
    { label: "Reviewer", dataKey: "reviewer" },
    { label: "Service Provider", dataKey: "serviceProvider" },
    {
      label: "Feedback Message",
      dataKey: "message",
      align: "left",
    },
  ];

  return (
    <Container className="adminDashBoardScrolling">
      {loading === "pending" && <LoadingScreen />}
      <Row className="py-3">
        <Col xl={3} lg={4} md={6} className="mb-3">
          <DashboardCard
            AdminClass="AdminCard"
            CardBodyClass="AdminCardBody"
            cardIconClass="cardIcon"
            cardIcon={<FaUser size={60} />}
            textOne={counterData?.active_users_count}
            textTwo="Active User"
          />
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <DashboardCard
            AdminClass="AdminCard"
            CardBodyClass="AdminCardBody"
            cardIconClass="cardIcon"
            cardIcon={<FaRegUser size={60} />}
            textOne={counterData?.inactive_users_count}
            textTwo="Inactive Users"
          />
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <DashboardCard
            AdminClass="AdminCard"
            CardBodyClass="AdminCardBody"
            cardIconClass="cardIcon"
            cardIcon={<FaUsers size={65} />}
            textOne={counterData?.trainees_count}
            textTwo="Subscribers"
          />
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <DashboardCard
            AdminClass="AdminCard"
            CardBodyClass="AdminCardBody"
            cardIconClass="cardIcon"
            cardIcon={<AiOutlineUserSwitch size={65} />}
            textOne={counterData?.resubscribers_count}
            textTwo="Re-Subscribers"
          />
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <DashboardCard
            AdminClass="AdminCard"
            CardBodyClass="AdminCardBody"
            cardIconClass="cardIcon"
            cardIcon={<RiReservedFill size={65} />}
            textOne={counterData?.resubscribers_count}
            textTwo="Fully Booked"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={6} className="mb-3">
          <DashboardTable
            data={reviewRequestsTableData}
            columns={reviewRequestColumns}
            headingText={"Latest Review Request"}
            link={"/admin/reviewRequest"}
          />
        </Col>
        <Col lg={6} className="mb-3">
          <DashboardTable
            data={platformFeedbackTableData}
            columns={platformFeedbackColumns}
            headingText={"Latest Platform Feedbacks"}
            link={"/admin/platformFeedback"}
          />
        </Col>
        <Col lg={6} className="mb-3">
          <DashboardTable
            data={spFeedbackTableData}
            columns={serviceProviderFeedbackColumns}
            headingText={"Latest Service Provider Feedbacks"}
            link={"/admin/serviceProviderFeedback"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
