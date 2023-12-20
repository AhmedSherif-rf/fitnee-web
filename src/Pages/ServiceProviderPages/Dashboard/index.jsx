import React from "react";
import { useCallback } from "react";
import TopBar from "../../../Shared/TopBar";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import CommentCard from "../../../Shared/CommentCard";
import DocumentCard from "../../../Shared/DocumentCard";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";
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

const documentMedia = [
  {
    docSrc: Images.DOCUMENT_IMG,
    docTitle: "Loki",
  },
  {
    docSrc: Images.DOCUMENT_IMG,
    docTitle: "Loki",
  },
  {
    docSrc: Images.DOCUMENT_IMG,
    docTitle: "Loki",
  },
  {
    docSrc: Images.DOCUMENT_IMG,
    docTitle: "Loki",
  },
];

const infoData = [
  {
    infoImg: Images.PROFILE4_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "38",
    TraineeEmail: "shane@gmail.com",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("");
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
      <TopBar />
      <Row className="py-2">
        <Col lg={3} md={4} className="bg-F6F6F6">
          <div className="mb-2">
            {infoData.map((item, index) => {
              return (
                <ProfileInformationCard
                  index={index}
                  infoLogo={item.infoLogo}
                  infoTitle={item.infoTitle}
                  infoRating={item.infoRating}
                  infoImg={item.infoImg}
                  infoDes={item.infoDes}
                  CardHeight={item.Height}
                  TraineeEmail={item.TraineeEmail}
                />
              );
            })}
          </div>

          <div className="">
            <Row className="my-3">
              <Col md={12}>
                <FillBtn
                  handleOnClick={handleCurrentSubscribersClick}
                  className="w-100 mb-2 py-2"
                  text={t("trainer.trainerSubscriberText")}
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
                <p className="small">{t("trainer.trainerParagraphText")}</p>
              </div>

              <Row>
                <Col md={12}>
                  <h5 className="fw-bold my-2">
                    {t("trainer.trainerHeadingText")}
                  </h5>
                </Col>
                {documentMedia.map((item) => {
                  return (
                    <DocumentCard
                      className="BorderRadius"
                      documentTitle={item.docTitle}
                      documentImg={item.docSrc}
                    />
                  );
                })}
              </Row>

              <Row>
                <h5 className="fw-bold my-2">{t("trainer.commentText")}</h5>
                {commentMedia.map((item) => {
                  return (
                    <CommentCard
                      commentTitle={item.commentTitle}
                      commentImg={item.imgSrc}
                      commentContent={t("trainer.trainerCommentContentText")}
                    />
                  );
                })}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
