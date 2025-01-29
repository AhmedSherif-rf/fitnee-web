import { useTranslation } from "react-i18next";
import FillBtn from "../../Shared/Buttons/FillBtn";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import LoadingScreen from "../../HelperMethods/LoadingScreen";
import ProfileInformationCard from "../ProfileInformationCard";
import Images from "../../HelperMethods/Constants/ImgConstants";
import React, { useCallback, memo, useState, useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  Badge,
  CardFooter,
} from "reactstrap";
import { PACKAGES_URL } from "../../utils/constants";
import { getPackageDetails } from "../../Redux/features/Admin/Packages/packagesApi";
import { getSubscriped } from "../../Redux/features/Subscription/subscriptionApi";
import { setSubscriptionPlan } from "../../Redux/features/Subscription/subscriptionSlice";

const ServiceProviderProfileWrapper = (props) => {
  // const { uuid, id, role, userRole } = useParams();
  // const { subscriptionLink } = props;
  const { loading } = useSelector((state) => state.guest);
  const { loading: userLoading } = useSelector((state) => state.user);
  const [isFitneeCoachActive, setIsFitneeCoachActive] = useState(false);

  // const [page, setPage] = useState(1);
  // const [commentData, setCommentData] = useState([]);
  // const [hasNextComment, setHasNextComment] = useState(true);
  const [serviceProviderProfile, setServiceProviderProfile] = useState(null);
  const [messagingProfile, setMessagingProfile] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("");
  const user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    const data = {
      apiEndpoint: `${PACKAGES_URL}1/`,
    };

    dispatch(getPackageDetails(data)).then((res) => {
      if (res.type === "getPackageDetails/fulfilled") {
        setServiceProviderProfile(res.payload.data);
        // fetchServiceProviderComments();
      }
    });

    dispatch(getPackageDetails({ apiEndpoint: "/packages/2/" })).then((res) => {
      if (res.type === "getPackageDetails/fulfilled") {
        setMessagingProfile(res.payload.data);
        // fetchServiceProviderComments();
      }
    });

    const fitneeCoachData = {
      apiEndpoint: `/package-users/1/get_specific_user_package?user_id=${user?.traineeId}`,
    };

    dispatch(getPackageDetails(fitneeCoachData)).then((res) => {
      if (res.type === "getPackageDetails/fulfilled") {
        setIsFitneeCoachActive(res?.payload?.data?.[0]?.active);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const subscripeInMessagingPackage = async () => {
    let packageDetails;

    const data = {
      apiEndpoint: `${PACKAGES_URL}2/`,
    };

    await dispatch(getPackageDetails(data)).then((res) => {
      if (res.type === "getPackageDetails/fulfilled") {
        packageDetails = res.payload.data?.package;

        dispatch(
          setSubscriptionPlan({
            id: packageDetails?.id,
            duration: packageDetails?.duration,
            full_name: packageDetails?.name,
            price: packageDetails?.price,
            type: packageDetails?.type,
            package_id: packageDetails?.id,
          })
        );
      }
    });

    navigate("/trainee/subscription/creditCardDetail");
  };

  // const fetchServiceProviderComments = useCallback(() => {
  //   if (hasNextComment) {
  //     const data = {
  //       apiEndpoint:
  //         `${GET_SERVICE_PROVIDER_COMMENTS_URL}?page_size=4&page=${page}`.replace(
  //           "serviceProviderId",
  //           id
  //         ),
  //     };

  //     dispatch(getServiceProviderFeedbacks(data)).then((res) => {
  //       if (res.type === "getServiceProviderFeedbacks/fulfilled") {
  //         setPage(page + 1);
  //         setHasNextComment(res.payload.data.next);
  //         setCommentData([...commentData, ...res.payload.data.results]);
  //       }
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [commentData, dispatch, hasNextComment, id]);

  // const handleSubscribeClick = useCallback(() => {
  //   dispatch(setServiceProvider({ ...serviceProviderProfile, role }));
  //   navigate(`${subscriptionLink}/${uuid}`);
  // }, [
  //   dispatch,
  //   navigate,
  //   role,
  //   serviceProviderProfile,
  //   subscriptionLink,
  //   uuid,
  // ]);

  // const fitneeCoach = {
  //   id: 144,
  //   uuid: "aa3df71d-6e8b-47e4-bec1-6b8ab9bba2dd",
  //   full_name: "Fitnee coach",
  //   profile_pic:
  //     "https://fitme-dev-bucket.s3.amazonaws.com/media/2024/12/images.png",
  //   Avg_rating: null,
  //   experience: 5,
  //   email: "marwa.trainer@gmail.com",
  //   is_fully_booked: false,
  //   serviceprovider_available: true,
  //   role: "Fitnee Coach",
  // };

  return (
    <Container fluid className={i18n.dir()}>
      {(loading === "pending" || userLoading === "pending") && (
        <LoadingScreen />
      )}
      {serviceProviderProfile ? (
        <Row>
          <Col md={12}>
            <Card className="contentCard bg-transparent overflow-x-hidden">
              <Row>
                <Card className="BorderRadius contentCard p-4">
                  <div className="mb-2">
                    <CardBody className="p-0">
                      <div
                        className="p-0 bgProperties ImgBorder rounded-circle"
                        style={{
                          backgroundImage: `url(${serviceProviderProfile?.package?.pic})`,
                          height: "150px",
                          width: "150px",
                          margin: "auto",
                        }}
                      ></div>
                    </CardBody>
                    <CardFooter className="border-0 text-black-custom">
                      <div className="h-100 text-center">
                        {serviceProviderProfile?.package?.full_name && (
                          <span className="fs-5 text-secondary my-2">
                            {serviceProviderProfile?.package?.full_name}
                          </span>
                        )}
                        <br />
                        <span className="fs-5 text-secondary my-2">
                          {i18n.language === "en"
                            ? serviceProviderProfile?.package?.name
                            : serviceProviderProfile?.package?.ar_name}
                        </span>
                        <br />
                        <span className="fw-700 fs-6 text-secondary mb-0">
                          {!isFitneeCoachActive
                            ? i18n.language === "ar"
                              ? serviceProviderProfile?.package?.ar_description
                              : serviceProviderProfile?.package?.description
                            : `${t("general.messagingPackage")}: ` +
                                i18n.language ===
                              "en"
                            ? messagingProfile?.package?.description
                            : messagingProfile?.package?.ar_description}
                        </span>
                      </div>
                    </CardFooter>
                  </div>
                  <div className="mb-3 mt-3 mx-auto">
                    {isFitneeCoachActive ? (
                      <FillBtn
                        className="w-100 py-2"
                        text={t("guest.messagePackageText")}
                        handleOnClick={subscripeInMessagingPackage}
                      />
                    ) : (
                      <FillBtn
                        className="w-100 py-2"
                        text={t("guest.subscribeText")}
                        handleOnClick={() => {
                          if (user) {
                            navigate(`/trainee/subscription/form/1`);
                          } else navigate(`/signIn`);
                        }}
                      />
                    )}
                  </div>
                </Card>
              </Row>
            </Card>
          </Col>
        </Row>
      ) : (
        <div className="d-flex vh-100 justify-content-center align-items-center">
          {loading !== "pending" && (
            <img
              className="img-fluid"
              src={Images.NO_DATA_FOUND_IMG}
              alt="no-data-found"
            />
          )}
        </div>
      )}
    </Container>
  );
};

export default memo(ServiceProviderProfileWrapper);
