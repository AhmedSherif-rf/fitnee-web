// import moment from "moment";
import GoBack from "../GoBack";
// import { db } from "../../../../firebase";
// import ListingTable from "../ListingTable";
// import { BsChatText } from "react-icons/bs";
import { useParams } from "react-router-dom";
// import BarChart from "../../../Chart/Barchart";
import { useTranslation } from "react-i18next";
// import DocumentCard from "../../../DocumentCard";
import { useSelector, useDispatch } from "react-redux";
// import { onValue, ref, orderByChild } from "firebase/database";
// import AvailableHourListing from "../../../AvailableHourListing";
import LoadingScreen from "../../../../HelperMethods/LoadingScreen";
// import IndividualChatModal from "../../../Modal/IndividualChatModal";
import ProfileInformationCard from "../../../ProfileInformationCard";
// import Images from "../../../../HelperMethods/Constants/ImgConstants";
import React, { memo, useState, useEffect } from "react";
import { Row, Container, Col, Card, CardBody } from "reactstrap";
import EditCoachModal from "../../../../Shared/Modal/EditCoach";
import {
  ADMIN_COACH_ALL_TRAINEES_URL,
  // ADMIN_SERVICE_PROVIDER_BLOCK_UNBLOCK_URL,
  ADMIN_COACH_PROFILE_URL,
  // CURRENCY,
} from "../../../../utils/constants";
// import { MdOutlinePersonOff, MdOutlinePersonOutline } from "react-icons/md";
// import { userBlockUnblock } from "../../../../Redux/features/Admin/UserListing/userListingApi";
import { getCoachDetail } from "../../../../Redux/features/Admin/ReviewRequest/ReviewRequestApi";
import FillBtn from "../../../Buttons/FillBtn";
import ListingTable from "../ListingTable";
import { getCoachAllTraineesListing } from "../../../../Redux/features/Admin/UserListing/userListingApi";

const columns = [
  { label: "Trainee", dataKey: "sp" },
  {
    label: "Price",
    dataKey: "price",
    align: "center",
  },
  { label: "Duration", dataKey: "duration", align: "center" },
  { label: "Status", dataKey: "Status", align: "center" },
  { label: "Action", dataKey: "action", align: "center" },
];

const CoachProfileWrapper = (props) => {
  const { uuid } = useParams();
  const { loading } = useSelector((state) => state.reviewRequest);
  const { loading: userListingLoading } = useSelector(
    (state) => state.userListing
  );
  const [isOpen, setIsOpen] = useState(false);

  // const [messages, setMessages] = useState([]);
  const [tableData, setTableData] = useState([]);
  // const [recipient, setRecipient] = useState(null);
  // const [showChatModal, setShowChatModal] = useState(false);
  const [coachProfile, setCoachProfile] = useState(null);
  // const [coachPerformanceData, setCoachPerformanceData] = useState({
  //   labels: [],
  //   datasets: [],
  // });

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  // const coachPerformanceGraphOptions = {
  //   responsive: true,
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: "Performance",
  //     },
  //     legend: {
  //       position: "bottom",
  //     },
  //   },
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  //   maintainAspectRatio: false,
  // };

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation("");

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
  // const labels = data?.monthly_data?.map((item) => item.month);
  // const traineeData = data?.monthly_data?.map((item) => item.trainee);
  // const resubscriberData = data?.monthly_data?.map(
  //   (item) => item.resubscribe
  // );
  // setCoachPerformanceData({
  //   labels,
  //   datasets: [
  //     {
  //       label: "Trainees",
  //       data: traineeData,
  //       backgroundColor: "#E3BD99",
  //       borderWidth: 2,
  //     },
  //     {
  //       label: "Resubscriber",
  //       data: resubscriberData,
  //       backgroundColor: "#97694F",
  //       borderWidth: 2,
  //     },
  //   ],
  // });
  // };

  // const handleChatModalClose = useCallback(() => {
  //   setShowChatModal(false);
  // }, []);

  // const fetchChat = (traineeId, trainerId, recipient) => {
  //   const query = ref(
  //     db,
  //     `Messages/${trainerId}/${traineeId}`,
  //     orderByChild("messageTime")
  //   );

  //   onValue(query, (snapshot) => {
  //     const data = snapshot.val();
  //     setMessages(data ? Object.values(data) : []);
  //   });

  //   setRecipient(recipient);
  //   setShowChatModal(true);
  // };

  // useEffect(() => {
  //   if (coachProfile && coachProfile?.active_subscriptions?.length > 0) {
  //     let subscriptionArray = [];

  //     coachProfile.active_subscriptions.forEach((membership) => {
  //       subscriptionArray.push({
  //         sp: (
  //           <div className="d-flex align-items-center">
  //             <div
  //               className="bgProperties rounded-circle me-2"
  //               style={{
  //                 width: "40px",
  //                 height: "40px",
  //                 backgroundImage:
  //                   membership?.trainee?.profile_pic === null
  //                     ? `url(${Images.USER_DUMMY_IMG})`
  //                     : `url(${membership?.trainee?.profile_pic})`,
  //               }}
  //             ></div>
  //             <h6 className="text-secondary fw-bold mb-0">
  //               {membership?.trainee?.first_name}{" "}
  //               {membership?.trainee?.last_name}
  //             </h6>
  //           </div>
  //         ),
  //         price: (
  //           <p className="fw-bold mb-0">
  //             {CURRENCY} {membership?.transition?.current_price}
  //           </p>
  //         ),
  //         duration: (
  //           <p className="mb-0">{`${membership?.subscription?.duration} Months`}</p>
  //         ),
  //         Status: (
  //           <>
  //             {!membership?.is_expired && !membership?.is_refund && (
  //               <div className="mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3">
  //                 <span>{`Start Date : ${moment(membership?.created_at).format(
  //                   "DD/MM/YYYY"
  //                 )}`}</span>
  //                 <br />
  //                 <span>{`End Date : ${moment(membership?.expire_date).format(
  //                   "DD/MM/YYYY"
  //                 )}`}</span>
  //               </div>
  //             )}
  //             {membership?.is_expired && !membership?.is_refund && (
  //               <div className="mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3">
  //                 {`Expired On : ${moment(membership?.expire_date).format(
  //                   "DD/MM/YYYY"
  //                 )}`}
  //               </div>
  //             )}
  //             {membership?.is_refund && (
  //               <div className="mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3">
  //                 Refunded
  //               </div>
  //             )}
  //           </>
  //         ),
  //         action: (
  //           <p
  //             className="mb-0 text-decoration-underline cursorPointer"
  //             onClick={() =>
  //               fetchChat(
  //                 membership?.trainee?.id,
  //                 coachProfile?.id,
  //                 membership?.trainee
  //               )
  //             }
  //           >
  //             <BsChatText size={25} />
  //           </p>
  //         ),
  //       });
  //     });

  //     setTableData(subscriptionArray);
  //   } else {
  //     setTableData([]);
  //   }
  // }, [coachProfile]);

  useEffect(() => {
    const data = {
      apiEndpoint: ADMIN_COACH_ALL_TRAINEES_URL.replace("userId", uuid),
    };
    dispatch(getCoachAllTraineesListing(data)).then((res) => {
      if (res.type === "getCoachAllTraineesListing/fulfilled") {
        setTableData(res?.payload?.data);
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
    </Container>
  );
};

export default memo(CoachProfileWrapper);
