import moment from "moment";
import GoBack from "../GoBack";
import { db } from "../../../../firebase";
import ListingTable from "../ListingTable";
import { BsChatText } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import BarChart from "../../../Chart/Barchart";
import { useTranslation } from "react-i18next";
import DocumentCard from "../../../DocumentCard";
import { useSelector, useDispatch } from "react-redux";
import { onValue, ref, orderByChild } from "firebase/database";
import AvailableHourListing from "../../../AvailableHourListing";
import LoadingScreen from "../../../../HelperMethods/LoadingScreen";
import ProfileInformationCard from "../../../ProfileInformationCard";
import Images from "../../../../HelperMethods/Constants/ImgConstants";
import React, { memo, useState, useEffect, useCallback } from "react";
import { Row, Container, Col, Card, CardBody } from "reactstrap";
import EditCoachModal from "../../../../Shared/Modal/EditCoach";
import {
  ADMIN_COACH_ALL_TRAINEES_URL,
  // ADMIN_SERVICE_PROVIDER_BLOCK_UNBLOCK_URL,
  ADMIN_COACH_PROFILE_URL,
  CURRENCY,
} from "../../../../utils/constants";
import { MdOutlinePersonOff, MdOutlinePersonOutline } from "react-icons/md";
import { userBlockUnblock } from "../../../../Redux/features/Admin/UserListing/userListingApi";
import { getCoachDetail } from "../../../../Redux/features/Admin/ReviewRequest/ReviewRequestApi";
import FillBtn from "../../../Buttons/FillBtn";
import { getCoachAllTraineesListing } from "../../../../Redux/features/Admin/UserListing/userListingApi";
import IndividualChatModal from "../../../Modal/IndividualChatModal";

const columns = [
  { label: "Trainee", dataKey: "logo" },
  { label: "Full name", dataKey: "name", align: "center" },
  {
    label: "Email",
    dataKey: "email",
    align: "center",
  },
  { label: "Mobile Number", dataKey: "phone_number", align: "center" },
  { label: "Training Goal", dataKey: "training_goal", align: "center" },
  { label: "Training Level", dataKey: "training_level", align: "center" },
  { label: "Status", dataKey: "status", align: "center" },
  { label: "Actions", dataKey: "action", align: "center" },
];

const CoachProfileWrapper = (props) => {
  const { uuid } = useParams();
  const { loading } = useSelector((state) => state.reviewRequest);
  const { loading: userListingLoading } = useSelector(
    (state) => state.userListing
  );
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [recipient, setRecipient] = useState(null);
  const [showChatModal, setShowChatModal] = useState(false);
  const [coachProfile, setCoachProfile] = useState(null);
  const [coachPerformanceData, setCoachPerformanceData] = useState({
    labels: [],
    datasets: [],
  });
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const coachPerformanceGraphOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Performance",
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
    maintainAspectRatio: false,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    fetchCoachProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, uuid]);

  const fetchCoachProfile = () => {
    const data = {
      apiEndpoint: ADMIN_COACH_PROFILE_URL.replace("userId", uuid),
    };

    dispatch(getCoachDetail(data)).then((res) => {
      if (res.type === "getCoachDetail/fulfilled") {
        setCoachProfile(res?.payload?.data);
        // populateCoachPerformanceGraphData(res?.payload?.data);
      }
    });
  };

  // const populateCoachPerformanceGraphData = (data) => {
  //   const labels = data?.monthly_data?.map((item) => item.month);
  //   const traineeData = data?.monthly_data?.map((item) => item.trainee);
  //   const resubscriberData = data?.monthly_data?.map(
  //     (item) => item.resubscribe
  //   );
  //   setCoachPerformanceData({
  //     labels,
  //     datasets: [
  //       {
  //         label: "Trainees",
  //         data: traineeData,
  //         backgroundColor: "#E3BD99",
  //         borderWidth: 2,
  //       },
  //       {
  //         label: "Resubscriber",
  //         data: resubscriberData,
  //         backgroundColor: "#97694F",
  //         borderWidth: 2,
  //       },
  //     ],
  //   });
  // };

  const handleChatModalClose = useCallback(() => {
    setShowChatModal(false);
  }, []);

  const fetchChat = (traineeId, trainerId, recipient) => {
    const query = ref(
      db,
      `Messages/${trainerId}/${traineeId}`,
      orderByChild("messageTime")
    );

    onValue(query, (snapshot) => {
      const data = snapshot.val();
      setMessages(data ? Object.values(data) : []);
    });

    setRecipient(recipient);
    setShowChatModal(true);
  };

  useEffect(() => {
    const data = {
      apiEndpoint: ADMIN_COACH_ALL_TRAINEES_URL.replace("userId", uuid),
    };
    dispatch(getCoachAllTraineesListing(data)).then((res) => {
      if (res.type === "getCoachAllTraineesListing/fulfilled") {
        setTableData(
          res?.payload?.data?.results?.map((item) => {
            return {
              logo: (
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    navigate(`/admin/coach/${uuid}/trainee/${item?.id}`)
                  }
                  className="d-flex align-items-center cursor-pointer"
                >
                  <div
                    className="bgProperties rounded-circle me-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundImage:
                        item?.profile_pic === null
                          ? `url(${Images.USER_DUMMY_IMG})`
                          : `url(${item?.profile_pic})`,
                    }}
                  ></div>
                </div>
              ),
              name: (
                <h6
                  onClick={() =>
                    navigate(`/admin/coach/${uuid}/trainee/${item?.id}`)
                  }
                  style={{
                    cursor: "pointer",
                  }}
                  className="text-secondary fw-bold mb-0 cursor-pointer"
                >
                  {item?.first_name} {item?.last_name}
                </h6>
              ),
              last_name: item?.last_name,
              email: item?.email,
              phone_number: item?.phone_number,
              training_goal: item?.training_goal,
              training_level: item?.training_level,
              status: item?.active_package?.[0]?.active ? "Active" : "Inactive",
              action: (
                <p
                  className="mb-0 text-decoration-underline cursorPointer"
                  onClick={() => {
                    fetchChat(item?.id, item?.trainer_id, item);
                  }}
                >
                  <BsChatText size={25} />
                </p>
              ),
            };
          })
        );
      }
    });
  }, []);

  // const handleActionClick = (id) => {
  //   const data = {
  //     apiEndpoint: ADMIN_SERVICE_PROVIDER_BLOCK_UNBLOCK_URL.replace(
  //       "userId",
  //       id
  //     ),
  //   };
  //   dispatch(userBlockUnblock(data)).then((res) => {
  //     if (res.type === "userBlockUnblock/fulfilled") {
  //       fetchCoachProfile();
  //     }
  //   });
  // };

  return (
    <Container fluid className="p-2">
      <GoBack />
      <Row className="tableBodyWrapperPagination py-2">
        {(loading === "pending" || userListingLoading === "pending") && (
          <LoadingScreen />
        )}
        {coachProfile && (
          <Col md={12} className="text-start">
            <Row>
              <Col
                className="d-flex align-items-start justify-content-between p-4"
                lg={3}
                md={4}
              >
                <ProfileInformationCard providerProfile={coachProfile} />
              </Col>
              <Col lg={9} md={8}>
                <Card className="BorderRadius border-0 text-black-custom">
                  <CardBody>
                    <div className="d-flex flex-row justify-content-end">
                      <FillBtn
                        className="w-25"
                        text="Edit Coach"
                        handleOnClick={handleOpen}
                      />
                    </div>

                    <Row className="mt-2">
                      <Col md={12}>
                        <h5 className="fw-bold my-2">Subscriptions</h5>
                      </Col>
                      <Col md={12}>
                        <ListingTable
                          data={!tableData?.length ? [] : tableData}
                          columns={columns}
                        />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        )}
      </Row>

      <EditCoachModal
        isOpen={isOpen}
        onClose={handleClose}
        coachData={coachProfile}
        handleRefetchHistory={fetchCoachProfile}
      />

      <IndividualChatModal
        size={"lg"}
        TOneClassName={"mb-4 fs-5 text-center"}
        className={"p-4"}
        isOpen={showChatModal}
        onClose={handleChatModalClose}
        messages={messages}
        recipient={recipient}
      />
    </Container>
  );
};

export default memo(CoachProfileWrapper);
