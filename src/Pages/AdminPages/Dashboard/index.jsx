import moment from "moment";
import { Link } from "react-router-dom";
import Styles from "./style.module.scss";
import Rating from "../../../Shared/Rating";
import { RiReservedFill } from "react-icons/ri";
import { PiHandCoinsFill } from "react-icons/pi";
import { Container, Row, Col } from "reactstrap";
import { GiWeightLiftingUp } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import { AiOutlineUserSwitch } from "react-icons/ai";
import BarChart from "../../../Shared/Chart/Barchart";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaRegUser, FaUsers } from "react-icons/fa";
import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";
import DoughnutChart from "../../../Shared/Chart/DoughnutChart";
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
  const [userTrendsGraphData, setUserTrendsGraphData] = useState({
    labels: [],
    datasets: [],
  });
  const [userTotalitiesGraphData, setUserTotalitiesGraphData] = useState({
    labels: [],
    datasets: [],
  });

  const [reviewRequestsTableData, setReviewRequestsTableData] = useState([]);
  const [platformFeedbackTableData, setPlatformFeedbackTableData] = useState(
    []
  );
  const [expanded, setExpanded] = useState(false);

  const toggleSeeMore = () => {
    setExpanded(!expanded);
  };

  const userTrendGraphOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "User Trends",
      },
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

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
          populateUserTrendGraphData(res.payload.data);
          populateUserTotalitiesGraphData(res.payload.data);
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
          message: (
            <div
              className={`${Styles.LineThree} ${
                expanded ? "see-more" : "see-more"
              }`}
            >
              {feedback?.platform_review}
              {!expanded && <span onClick={toggleSeeMore}></span>}
            </div>
          ),
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
            <Link
              className=" w-100"
              to={`/admin/reviewRequestDetail/${request?.uuid}`}
            >
              <div className="d-md-flex align-items-center">
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
          ticket_id: (
            <div className="fw-bold text-secondary">
              {request?.request_id && <>{request.request_id}</>}
              {!request?.request_id && "0000"}
            </div>
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
            <div className="d-md-flex align-items-center">
              <div
                className="bgProperties rounded-circle me-2 "
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
            <h6 className="text-secondary fw-bold mb-0">
              {feedback?.service_provider?.full_name}
            </h6>
          ),
          message: (
            <div className="" style={{ maxWidth: "180px" }}>
              <div className={` ${Styles.LineThree} mb-0`}>
                {feedback?.sp_review}
              </div>
              <Rating rating={feedback?.sp_rating} />
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

  const populateUserTrendGraphData = (data) => {
    const labels = data?.trainees_monthly_counts?.map((item) => item.month);

    const traineesData = data?.trainees_monthly_counts?.map(
      (item) => item.count
    );
    const trainersData = data?.trainers_monthly_counts?.map(
      (item) => item.count
    );
    const refundsData = data?.refund_monthly_counts?.map((item) => item.count);
    const nutritionistsData = data?.nutritionists_monthly_counts?.map(
      (item) => item.count
    );
    const exercise_subscriptions_monthly_counts =
      data?.exercise_subscriptions_monthly_counts?.map((item) => item.count);

    setUserTrendsGraphData({
      labels,
      datasets: [
        {
          label: "Trainees",
          data: traineesData,
          backgroundColor: "#E3BD99",
          borderWidth: 2,
        },
        {
          label: "Trainers",
          data: trainersData,
          backgroundColor: "#BB99E3",
          borderWidth: 2,
        },
        {
          label: "Nutritionists",
          data: nutritionistsData,
          backgroundColor: "rgba(18, 55, 45, 0.8)",
          borderWidth: 2,
        },
        {
          label: "Refunds",
          data: refundsData,
          backgroundColor: "#9BE3BD",
          borderWidth: 2,
        },
        {
          label: "Exercise Subscriptions",
          data: exercise_subscriptions_monthly_counts,
          backgroundColor: "#97694F",
          borderWidth: 2,
        },
      ],
    });
  };

  const populateUserTotalitiesGraphData = (data) => {
    setUserTotalitiesGraphData({
      labels: ["Trainer", "Nutritionist", "Trainee", "Both"],
      datasets: [
        {
          data: [
            data?.trainers_count,
            data?.nutritionists_count,
            data?.trainees_count,
            // data.both_count,
            10,
          ],
          backgroundColor: [
            "rgba(157, 227, 154, 0.6)",
            "rgba(18, 55, 45, 0.8)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
          ],
          borderWidth: 2,
        },
      ],
    });
  };

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
      label: "Feedback",
      dataKey: "message",
      align: "left",
    },
  ];

  return (
    <Container className="adminDashBoardScrolling">
      {loading === "pending" && <LoadingScreen />}
      <Row className="py-3">
        <Col xl={3} lg={4} md={6} className="mb-3">
          <Link
            to={`/admin/user/userListing/${counterData?.active_users?.slug}`}
          >
            <DashboardCard
              AdminClass="AdminCard"
              CardBodyClass="AdminCardBody"
              cardIconClass="cardIcon"
              cardIcon={<FaUser size={60} />}
              textOne={counterData?.active_users_count}
              textTwo="Active User"
            />
          </Link>
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <Link
            to={`/admin/user/userListing/${counterData?.inactive_users?.slug}`}
          >
            <DashboardCard
              AdminClass="AdminCard"
              CardBodyClass="AdminCardBody"
              cardIconClass="cardIcon"
              cardIcon={<FaRegUser size={60} />}
              textOne={counterData?.inactive_users_count}
              textTwo="Inactive Users"
            />
          </Link>
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <Link to={`/admin/user/userListing/${counterData?.trainees?.slug}`}>
            <DashboardCard
              AdminClass="AdminCard"
              CardBodyClass="AdminCardBody"
              cardIconClass="cardIcon"
              cardIcon={<FaUsers size={65} />}
              textOne={counterData?.trainees_count}
              textTwo="Subscribers"
            />
          </Link>
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <Link
            to={`/admin/user/userListing/${counterData["re-subscribers"]?.slug}`}
          >
            <DashboardCard
              AdminClass="AdminCard"
              CardBodyClass="AdminCardBody"
              cardIconClass="cardIcon"
              cardIcon={<AiOutlineUserSwitch size={65} />}
              textOne={counterData?.resubscribers_count}
              textTwo="Re-Subscribers"
            />
          </Link>
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <Link to={"/admin/user/fullyBooked"}>
            <DashboardCard
              AdminClass="AdminCard"
              CardBodyClass="AdminCardBody"
              cardIconClass="cardIcon"
              cardIcon={<RiReservedFill size={65} />}
              textOne={counterData?.resubscribers_count}
              textTwo="Fully Booked"
            />
          </Link>
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <Link to={"/admin/user/fullyBooked"}>
            <DashboardCard
              AdminClass="AdminCard"
              CardBodyClass="AdminCardBody"
              cardIconClass="cardIcon"
              cardIcon={<GiWeightLiftingUp size={65} />}
              textOne={counterData?.exercise_subscriptions_count}
              textTwo="Exercise Subscriptions"
            />
          </Link>
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <Link to={"/admin/user/fullyBooked"}>
            <DashboardCard
              AdminClass="AdminCard"
              CardBodyClass="AdminCardBody"
              cardIconClass="cardIcon"
              cardIcon={<FaPersonWalkingArrowLoopLeft size={65} />}
              textOne={counterData?.exercises_resubscriber_count}
              textTwo="Exercises Resubscription"
            />
          </Link>
        </Col>
        <Col xl={3} lg={4} md={6} className="mb-3">
          <Link to={"/admin/user/fullyBooked"}>
            <DashboardCard
              AdminClass="AdminCard"
              CardBodyClass="AdminCardBody"
              cardIconClass="cardIcon"
              cardIcon={<PiHandCoinsFill size={65} />}
              textOne={counterData?.refund_count}
              textTwo="Refunds"
            />
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={12} className="mb-3">
          <BarChart
            data={userTrendsGraphData}
            options={userTrendGraphOptions}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={6} md={12} sm={12} className="mb-3">
          <DoughnutChart data={userTotalitiesGraphData} />
        </Col>
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
        <Col lg={6} className="mb-3 p-0">
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
