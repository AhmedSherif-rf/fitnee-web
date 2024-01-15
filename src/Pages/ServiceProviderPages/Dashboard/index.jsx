import React from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import CommentCard from "../../../Shared/CommentCard";
import DocumentCard from "../../../Shared/DocumentCard";
import {
  TRAINER_NUTRITIONIST_ROLE,
  TRAINER_ROLE,
} from "../../../utils/constants";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import { Row, Col, Container, Card, CardBody, Badge } from "reactstrap";
import AvailableHourListing from "../../../Shared/AvailableHourListing";
import ProfileInformationCard from "../../../Shared/ProfileInformationCard";

const commentMedia = [
  {
    imgSrc: Images.DOCUMENT_IMG,
    commentTitle: "Loki",
    commentContent:
      "Exemplary trainer! Skillfully tailored workouts, constant motivation, and expertise led to remarkable progress. Highly recommended for transformative fitness journeys.",
  },
  {
    imgSrc: Images.DOCUMENT_IMG,
    commentTitle: "Loki",
    commentContent:
      "Exemplary trainer! Skillfully tailored workouts, constant motivation, and expertise led to remarkable progress. Highly recommended for transformative fitness journeys.",
  },
  {
    imgSrc: Images.DOCUMENT_IMG,
    commentTitle: "Loki",
    commentContent:
      "Exemplary trainer! Skillfully tailored workouts, constant motivation, and expertise led to remarkable progress. Highly recommended for transformative fitness journeys.",
  },
  {
    imgSrc: Images.DOCUMENT_IMG,
    commentTitle: "Loki",
    commentContent:
      "Exemplary trainer! Skillfully tailored workouts, constant motivation, and expertise led to remarkable progress. Highly recommended for transformative fitness journeys.",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("");
  const { user } = useSelector((state) => state.user);

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
      <Row>
        <Col md="12">
          <Card className="contentCard bg-transparent overflow-x-hidden">
            <Row>
              <Col lg={3} md={4} className="bg-F6F6F6">
                <div className="mb-2">
                  <ProfileInformationCard providerProfile={user} />
                </div>

                <Row className="mt-3">
                  <Col md={12}>
                    <FillBtn
                      handleOnClick={handleCurrentSubscribersClick}
                      className="w-100 mb-2 py-2"
                      text={
                        (user?.role === TRAINER_ROLE ||
                        user?.role === TRAINER_NUTRITIONIST_ROLE)
                          ? "My Current Trainees"
                          : t("trainer.trainerSubscriberText")
                      }
                    />
                    <FillBtn
                      handleOnClick={handlePaymentClick}
                      className="w-100 mb-2 py-2"
                      text={t("trainer.trainerPaymentText")}
                    />
                    <FillBtn
                      handleOnClick={handleSubscriptionsClick}
                      className="w-100 mb-2 py-2"
                      text={t("trainer.trainerPackageText")}
                    />
                  </Col>
                </Row>
                <div>
                  <h6 className="fw-bold text-white">Available Hours</h6>
                  <AvailableHourListing data={user?.profile_availability} />
                </div>
              </Col>
              <Col lg={9} md={8}>
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
                        <h5 className="fw-bold my-2">
                          {t("trainer.trainerHeadingText")}
                        </h5>
                      </Col>
                      {user?.ServiceProvider_Certification &&
                        user?.ServiceProvider_Certification.map(
                          (certificate, index) => {
                            return (
                              <DocumentCard
                                key={index}
                                className="BorderRadius"
                                documentTitle={certificate.title}
                                documentImg={certificate.certificate_image.replace(
                                  "/api",
                                  ""
                                )}
                              />
                            );
                          }
                        )}
                    </Row>

                    <Row>
                      <Col md={12}>
                        <h5 className="fw-bold my-2">
                          {t("guest.areaSpecialtyText")}
                        </h5>
                        {user?.specialities &&
                          user?.specialities?.map((specialty, index) => (
                            <Badge
                              key={index}
                              color="custom"
                              className="me-2 mb-2 text-black-custom fw-normal custom-badge px-3 small text-center"
                            >
                              {specialty.name}
                            </Badge>
                          ))}
                      </Col>
                    </Row>

                    <Row>
                      <h5 className="fw-bold my-2">
                        {t("trainer.commentText")}
                      </h5>
                      {commentMedia?.map((item) => {
                        return (
                          <CommentCard
                            commentTitle={item.commentTitle}
                            commentImg={item.imgSrc}
                            commentContent={t(
                              "trainer.trainerCommentContentText"
                            )}
                          />
                        );
                      })}
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
