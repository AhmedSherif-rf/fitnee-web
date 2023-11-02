import CommentCard from "../CommentCard";
import DocumentCard from "../DocumentCard";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { useCallback, memo } from "react";
import FillBtn from "../../Shared/Buttons/FillBtn";
import AvailableHourList from "../AvailableHourListing";
import ProfileInformationCard from "../ProfileInformationCard";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { Row, Col, Container, Card, CardBody, Badge } from "reactstrap";

const availableHoursData = [
  {
    day: "Monday",
    time: "13:00 - 14:00",
  },
  {
    day: "Tuesday",
    time: "15:00 - 16:00",
  },
  {
    day: "Wednesday",
    time: "17:00 - 18:00",
  },
  {
    day: "Thursday",
    time: "19:00 - 20:00",
  },
  {
    day: "Friday",
    time: "21:00 - 22:00",
  },
  {
    day: "Saturday",
    time: "13:00 - 24:00",
  },
];

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

const documentsData = [
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

const personalData = {
  infoImg: Images.PROFILE_IMG,
  infoLogo: Images.SHORTLOGO_IMG,
  infoTitle: "Shane",
  infoRating: 4,
  infoDes: "2 Years",
  Height: "25",
};

const ServiceProviderProfileWrapper = (props) => {
  const { subscriptionLink } = props;
  const navigate = useNavigate();
  const { t } = useTranslation("");

  const categories = [
    t("guest.bodyBuildingText"),
    t("guest.powerLiftingText"),
    t("guest.healthyLifeStyleText"),
  ];
  const handleSubscribeClick = useCallback(() => {
    navigate(subscriptionLink);
  }, [navigate, subscriptionLink]);

  return (
    <Container fluid>
      <Row className="py-2">
        <Col lg={3} md={4}>
          <div className="mb-2">
            <ProfileInformationCard
              infoLogo={personalData.infoLogo}
              infoTitle={personalData.infoTitle}
              infoRating={personalData.infoRating}
              infoImg={personalData.infoImg}
              infoDes={personalData.infoDes}
              CardHeight={personalData.Height}
            />
          </div>
          <div className="mb-3">
            <FillBtn
              className="w-100 py-2"
              text={t("guest.subscribeText")}
              handleOnClick={handleSubscribeClick}
            />
          </div>
          <div>
            <h6 className="fw-bold text-black-custom">Available Hours</h6>
            <AvailableHourList data={availableHoursData} />
          </div>
        </Col>
        <Col lg={9} md={8}>
          <Card className="BorderRadius border-0 text-black-custom">
            <CardBody>
              <h5 className="fw-bold my-2">{t("guest.meetText")} Shane</h5>
              <p className="small">
                {" "}
                Experienced fitness pro. With a degree in Exercise Science and
                national certifications, I craft personalized fitness plans. My
                philosophy encompasses exercise, nutrition, and mental health
                for a complete wellness approach. Assessing your needs
                comprehensively, I focus on strength, cardio, and flexibility.
                Custom workouts blend challenges with achievable goals to ensure
                steady progress and avoid injuries. Nutrition is vital. I offer
                diet advice to fuel workouts and recovery. As your coach, I'm
                more than workouts – I motivate and keep you on track, adjusting
                plans as needed. Mental well-being is a priority too; stress
                reduction and relaxation techniques are part of my training.
                Results speak. I've transformed lives by tailoring programs for
                weight loss, muscle gain, or overall health. From novices to
                experts, I've got you. Passionate, I'm committed to staying
                current in fitness trends. Join me to celebrate milestones,
                conquer challenges, and achieve well-being.
              </p>

              <Row>
                <Col md={12}>
                  <h5 className="fw-bold my-2">
                    {t("guest.qualificationExperienceText")}
                  </h5>
                </Col>
                {documentsData.map((item) => {
                  return (
                    <DocumentCard
                      className="BorderYellow"
                      documentTitle={item.docTitle}
                      documentImg={item.docSrc}
                    />
                  );
                })}
              </Row>
              <Row>
                <Col md={12}>
                  <h5 className="fw-bold my-2">
                    {t("guest.areaSpecialtyText")}
                  </h5>
                  {categories?.map((item, index) => {
                    return (
                      <Badge
                        key={index}
                        color="custom"
                        className="me-2 mb-2 text-black-custom custom-badge px-3 text-center"
                      >
                        {item}
                      </Badge>
                    );
                  })}
                </Col>
              </Row>
              <Row>
                <h5 className="fw-bold mt-3 text-black-custom">Comments</h5>
                {commentsData.map((item) => {
                  return (
                    <CommentCard
                      commentTitle={item.commentTitle}
                      commentImg={item.imgSrc}
                      commentContent={item.commentContent}
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

export default memo(ServiceProviderProfileWrapper);
