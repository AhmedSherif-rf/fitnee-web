import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import CommentCard from "../../../Shared/CommentCard";
import { useSelector, useDispatch } from "react-redux";
import DocumentCard from "../../../Shared/DocumentCard";
import ToggleSwitch from "../../../Shared/ToggleSwitch";
import React, { useEffect, useCallback, useState } from "react";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import InformationModal from "../../../Shared/Modal/InformationModal";
import { Row, Col, Container, Card, CardBody, Badge } from "reactstrap";
import AvailableHourListing from "../../../Shared/AvailableHourListing";
import { setShownAppModal } from "../../../Redux/features/User/userSlice";
import ProfileInformationCard from "../../../Shared/ProfileInformationCard";
import {
  getUserProfile,
  setAvailability,
  getServiceProviderFeedbacks,
} from "../../../Redux/features/User/userApi";
import {
  TRAINER_ROLE,
  USER_PROFILE_URL,
  SET_AVAILABILITY_URL,
  TRAINER_NUTRITIONIST_ROLE,
  GET_SERVICE_PROVIDER_COMMENTS_URL,
} from "../../../utils/constants";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation("");
  const [commentData, setCommentData] = useState([]);
  const [hasNextComment, setHasNextComment] = useState(true);
  const { user, shownAppModal } = useSelector((state) => state.user);
  const [showDownloadAppPopup, setShowDownloadAppPopup] = useState(false);
  const [isFullyBooked, setIsFullyBooked] = useState(user?.is_fully_booked);

  useEffect(() => {
    if (!shownAppModal) {
      setShowDownloadAppPopup(true);
      dispatch(setShownAppModal(true));
    }
  }, []);

  useEffect(() => {
    fetchUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFullyBooked]);

  useEffect(() => {
    fetchServiceProviderComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUserProfile = () => {
    const data = {
      apiEndpoint: USER_PROFILE_URL,
    };

    dispatch(getUserProfile(data));
  };

  const fetchServiceProviderComments = useCallback(() => {
    if (hasNextComment) {
      const data = {
        apiEndpoint: GET_SERVICE_PROVIDER_COMMENTS_URL.replace(
          "serviceProviderId",
          user?.id
        ),
      };

      dispatch(getServiceProviderFeedbacks(data)).then((res) => {
        if (res.type === "getServiceProviderFeedbacks/fulfilled") {
          setHasNextComment(res.payload.data.next);
          setCommentData([...commentData, ...res.payload.data.results]);
        }
      });
    }
  }, [commentData, dispatch, hasNextComment, user?.id]);

  const handleDownloadAppModalClose = useCallback(() => {
    setShowDownloadAppPopup(false);
  }, []);

  const setUserAvailability = (isFullyBooked) => {
    const data = {
      apiEndpoint: SET_AVAILABILITY_URL,
      requestData: { fully_booked: isFullyBooked },
    };

    dispatch(setAvailability(data)).then((res) => {
      if (res.type === "setAvailability/fulfilled") {
        setIsFullyBooked(isFullyBooked);
      }
    });
  };

  const handleCurrentSubscribersClick = useCallback(() => {
    navigate("/serviceProvider/subscriber");
  }, [navigate]);

  const handleSubscriptionsClick = useCallback(() => {
    navigate("/serviceProvider/subscription");
  }, [navigate]);

  const handlePaymentClick = useCallback(() => {
    navigate("/serviceProvider/paymentHistory");
  }, [navigate]);

  return (
    <Container fluid>
      <Row className={i18n.dir()}>
        <Col md="12">
          <Card className="contentCard bg-transparent overflow-x-hidden">
            <Row>
              <Col lg={3} md={4} className="bg-F6F6F6">
                <div className="mb-2">
                  <ProfileInformationCard providerProfile={user} />
                </div>

                <div className="CreditCard d-flex justify-content-between align-items-center mb-2 text-white">
                  <div className="me-2">
                    <p className="mb-0 fw-bold">
                      {t("trainer.fullyBookedText")}
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <ToggleSwitch
                      id="isFullyBooked"
                      isOn={isFullyBooked}
                      handleToggle={() => {
                        setUserAvailability(!isFullyBooked);
                      }}
                    />
                  </div>
                </div>

                <Row>
                  <Col md={12}>
                    <FillBtn
                      handleOnClick={handleCurrentSubscribersClick}
                      className="w-100 mb-2 py-2"
                      text={
                        user?.role === TRAINER_ROLE ||
                        user?.role === TRAINER_NUTRITIONIST_ROLE
                          ? t("trainer.myCurrentTraineeText")
                          : t("trainer.trainerSubscriberText")
                      }
                    />
                    <FillBtn
                      handleOnClick={handlePaymentClick}
                      className="w-100 mb-2 py-2"
                      text={t("trainer.walletText")}
                    />
                    <FillBtn
                      handleOnClick={handleSubscriptionsClick}
                      className="w-100 mb-2 py-2"
                      text={t("trainer.trainerPackageText")}
                    />
                  </Col>
                </Row>
                <div>
                  <h6 className="fw-bold text-white py-2">
                    {t("trainer.availableHoursText")}
                  </h6>
                  <AvailableHourListing data={user?.profile_availability} />
                </div>
              </Col>
              <Col lg={9} md={8} className={`${i18n.dir()}`}>
                <Card className="BorderRadius border-0 mb-3 text-black-custom">
                  <CardBody>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div>
                        <h5 className="fw-bold my-2">{t("trainer.bioText")}</h5>
                      </div>
                    </div>
                    <div
                      className="overflow-scroll onlyBorderRadius p-3 border border-light"
                      style={{ maxHeight: "100px" }}
                    >
                      <p className="small">{user?.bio}</p>
                    </div>

                    <Row>
                      <Col md={12}>
                        <h5 className="fw-bold my-2 py-2">
                          {t("trainer.trainerHeadingText")}
                        </h5>
                      </Col>
                      {user?.ServiceProvider_Certification &&
                        user?.ServiceProvider_Certification.map(
                          (certificate, index) => {
                            return (
                              <DocumentCard
                                index={index}
                                className="BorderRadius"
                                documentTitle={certificate.title}
                                documentImg={certificate.certificate_image}
                              />
                            );
                          }
                        )}
                    </Row>

                    {user?.specialities && user?.specialities.length > 0 && (
                      <Row>
                        <Col md={12}>
                          <h5 className="fw-bold my-2 py-2">
                            {t("guest.areaSpecialtyText")}
                          </h5>
                          {user?.specialities &&
                            user?.specialities?.map((specialty, index) => (
                              <Badge
                                key={index}
                                color="custom"
                                className="me-2 mb-2 text-black-custom fw-normal custom-badge px-3 small text-center"
                              >
                                {i18n.dir() === "ltr"
                                  ? specialty.name
                                  : specialty.arabic_name}
                              </Badge>
                            ))}
                        </Col>
                      </Row>
                    )}

                    <Row>
                      {commentData.length > 0 && (
                        <>
                          <Col md={12}>
                            <h5 className="fw-bold my-3">
                              {t("trainer.commentText")}
                            </h5>
                            {commentData.map((item, index) => {
                              return <CommentCard index={index} data={item} />;
                            })}
                          </Col>
                          <Col md={12}>
                            <div className="text-center">
                              <FillBtn
                                className=" py-2"
                                text={t("guest.seeMoreText")}
                                disabled={hasNextComment ? false : true}
                                handleOnClick={fetchServiceProviderComments}
                              />
                            </div>
                          </Col>
                        </>
                      )}
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <InformationModal
              size={"md"}
              TOneClassName={"s"}
              isOpen={showDownloadAppPopup}
              onClose={handleDownloadAppModalClose}
              ModalTextOne={
                <div className="w-100 text-center mt-1 mb-4">
                  <img
                    src={Images.QR_CODE_IMG_IMG}
                    className="w-50"
                    alt="qr-app-image"
                  />
                </div>
              }
              ModalTextTwo={
                <Row className=" justify-content-center align-content-center h-100 m-0">
                  <Col md={12} className="text-center"></Col>

                  <Col md={6} className="text-center">
                    <div className="w-100 mb-2">
                      <img
                        src={Images.APP_STORE_IMG}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col md={6} className="text-center mb-3">
                    <div className="w-100">
                      <img
                        src={Images.GOOGLE_PLAY_IMG}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </Col>
                  <div className="text-center w-100 mb-2">
                    <p>{t("traineeDashboard.DownloadApp")}</p>
                  </div>
                </Row>
              }
              ButtonThree={
                <FillBtn
                  className="w-100"
                  text={t("otpVerification.okayText")}
                  handleOnClick={handleDownloadAppModalClose}
                />
              }
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
