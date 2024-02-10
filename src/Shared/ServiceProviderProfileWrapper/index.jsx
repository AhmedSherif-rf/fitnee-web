import CommentCard from "../CommentCard";
import DocumentCard from "../DocumentCard";
import OutlineBtn from "../Buttons/OutlineBtn";
import { useTranslation } from "react-i18next";
import FillBtn from "../../Shared/Buttons/FillBtn";
import { useSelector, useDispatch } from "react-redux";
import AvailableHourList from "../AvailableHourListing";
import { useNavigate, useParams } from "react-router-dom";
import LoadingScreen from "../../HelperMethods/LoadingScreen";
import ProfileInformationCard from "../ProfileInformationCard";
import Images from "../../HelperMethods/Constants/ImgConstants";
import React, { useCallback, memo, useState, useEffect } from "react";
import { Row, Col, Container, Card, CardBody, Badge } from "reactstrap";
import { GUEST_SERVICE_PROVIDER_PROFILE_URL } from "../../utils/constants";
import { getServiceProviderProfile } from "../../Redux/features/Guest/guestApi";
import { setServiceProvider } from "../../Redux/features/Subscription/subscriptionSlice";

const commentsData = [
  {
    imgSrc: Images.COMMENT_IMG,
    commentTitle: "Loki",
    commentContent:
      "Exemplary trainer! Skillfully tailored workouts, constant motivation, and expertise led to remarkable progress. Highly recommended for transformative fitness journeys.",
  },
  {
    imgSrc: Images.COMMENT_IMG,
    commentTitle: "Loki",
    commentContent:
      "Exemplary trainer! Skillfully tailored workouts, constant motivation, and expertise led to remarkable progress. Highly recommended for transformative fitness journeys.",
  },
  {
    imgSrc: Images.COMMENT_IMG,
    commentTitle: "Loki",
    commentContent:
      "Exemplary trainer! Skillfully tailored workouts, constant motivation, and expertise led to remarkable progress. Highly recommended for transformative fitness journeys.",
  },
  {
    imgSrc: Images.COMMENT_IMG,
    commentTitle: "Loki",
    commentContent:
      "Exemplary trainer! Skillfully tailored workouts, constant motivation, and expertise led to remarkable progress. Highly recommended for transformative fitness journeys.",
  },
];

const ServiceProviderProfileWrapper = (props) => {
  const { uuid } = useParams();
  const { subscriptionLink } = props;
  const { loading } = useSelector((state) => state.guest);

  const [serviceProviderProfile, setServiceProviderProfile] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("");

  useEffect(() => {
    const data = {
      apiEndpoint: `${GUEST_SERVICE_PROVIDER_PROFILE_URL}?uuid=${uuid}`,
    };

    dispatch(getServiceProviderProfile(data)).then((res) => {
      if (res.type === "getServiceProviderProfile/fulfilled") {
        setServiceProviderProfile(res.payload.data[0]);
      }
    });
  }, [dispatch, uuid]);

  const handleSubscribeClick = useCallback(() => {
    dispatch(setServiceProvider(serviceProviderProfile));
    navigate(`${subscriptionLink}/${uuid}`);
  }, [dispatch, navigate, serviceProviderProfile, subscriptionLink, uuid]);

  return (
    <Container fluid className={i18n.dir()}>
      {loading === "pending" && <LoadingScreen />}
      {serviceProviderProfile ? (
        <Row>
          <Col md={12}>
            <Card className="contentCard bg-transparent overflow-x-hidden">
              <Row>
                <Col lg={3} md={4}>
                  <div className="mb-2">
                    <ProfileInformationCard
                      providerProfile={serviceProviderProfile}
                    />
                  </div>
                  <div className="mb-3">
                    {serviceProviderProfile?.is_fully_booked ? (
                      <OutlineBtn
                        className="w-100 py-2"
                        text={t("trainer.fullyBookedText")}
                      />
                    ) : (
                      <FillBtn
                        className="w-100 py-2"
                        text={t("guest.subscribeText")}
                        handleOnClick={handleSubscribeClick}
                      />
                    )}
                  </div>
                  <div>
                    <h6 className="fw-bold text-white">
                      {t("guest.availableHoursText")}
                    </h6>
                    <AvailableHourList
                      data={serviceProviderProfile?.profile_availability}
                    />
                  </div>
                </Col>
                <Col lg={9} md={8}>
                  <Card className="BorderRadius border-0 text-black-custom">
                    <CardBody>
                      <h3 className="fw-bold my-2">
                        {serviceProviderProfile?.full_name}
                      </h3>
                      <div
                        className="overflow-scroll onlyBorderRadius p-3 border border-light"
                        style={{ maxHeight: "100px" }}
                      >
                        <p className="small">{serviceProviderProfile?.bio}</p>
                      </div>

                      <Row>
                        <Col md={12}>
                          <h5 className="fw-bold my-2">
                            {t("guest.qualificationExperienceText")}
                          </h5>
                        </Col>
                        {serviceProviderProfile?.ServiceProvider_Certification &&
                          serviceProviderProfile?.ServiceProvider_Certification?.map(
                            (certificate, index) => (
                              <DocumentCard
                                index={index}
                                className="BorderYellow"
                                documentTitle={certificate?.title}
                                documentImg={certificate?.certificate_image}
                              />
                            )
                          )}
                      </Row>
                      {serviceProviderProfile?.specialities &&
                        serviceProviderProfile?.specialities.length > 0 && (
                          <Row>
                            <Col md={12}>
                              <h5 className="fw-bold my-2">
                                {t("guest.areaSpecialtyText")}
                              </h5>
                              {serviceProviderProfile?.specialities &&
                                serviceProviderProfile?.specialities?.map(
                                  (specialty, index) => (
                                    <Badge
                                      key={index}
                                      color="custom"
                                      className="me-2 mb-2 text-black-custom fw-normal custom-badge px-3 small text-center"
                                    >
                                      {i18n.dir() === "ltr"
                                        ? specialty.name
                                        : specialty.arabic_name}
                                    </Badge>
                                  )
                                )}
                            </Col>
                          </Row>
                        )}

                      <Row>
                        <Col md={12}>
                          <h5 className="fw-bold mt-3 text-black-custom">
                            {t("guest.commentsText")}
                          </h5>
                          {commentsData.map((item, index) => {
                            return (
                              <CommentCard
                                index={index}
                                commentTitle={item.commentTitle}
                                commentImg={item.imgSrc}
                                commentContent={item.commentContent}
                              />
                            );
                          })}
                        </Col>
                        <Col md={12}>
                          <div className="text-center">
                            <FillBtn
                              className=" py-2"
                              text={t("guest.seeMoreText")}
                            />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      ) : (
        <div className="d-flex vh-100 justify-content-center align-items-center">
          {loading !== "pending" && (
            <img img-fluid src={Images.NO_DATA_FOUND_IMG} alt="no-data-found" />
          )}
        </div>
      )}
    </Container>
  );
};

export default memo(ServiceProviderProfileWrapper);
