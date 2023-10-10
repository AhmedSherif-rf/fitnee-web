import React from "react";
import { Link } from "react-router-dom";
// import InfoCard from "../../Components/InfoCard";
// import HourCard from "../../Components/HourCard/";
import FillBtn from "../../../Shared/Buttons/FillBtn";
// import CommentCard from "../../Components/CommentsCard";
// import DocumentCard from "../../Components/DocumentCard";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";

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

const personalData = [
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "25",
  },
];

const ServiceProviderProfile = () => {
  return (
    <Container fluid>
      <Row className="py-2">
        {/* <Col lg={3} md={4} className="bg-F6F6F6">
          <div className="mb-2">
            {personalData.map((item) => {
              return (
                <InfoCard
                  infoLogo={item.infoLogo}
                  infoTitle={item.infoTitle}
                  infoRating={item.infoRating}
                  infoImg={item.infoImg}
                  infoDes={item.infoDes}
                  CardHeight={item.Height}
                />
              );
            })}
          </div>
          <div className="mb-3">
            <Link to="pricing">
              <FillBtn className="w-100 text-dark" text={"Subscribe"} />
            </Link>
          </div>
          <div className="px-3">
            <h6 className="fw-bold px-2">Available Hours</h6>
            {availableHoursData.map((item) => {
              return (
                <HourCard
                  className="rounded-3"
                  day={item.day}
                  time={item.time}
                />
              );
            })}
          </div>
        </Col>
        <Col lg={9} md={8}>
          <Card className="BorderRadius border-0 shadow">
            <CardBody>
              <h5 className="fw-bold my-2">Meet Shane</h5>
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
                  <h5 className="fw-bold my-2">Qualification and Experience</h5>
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
                  <h5 className="fw-bold my-2">Area of Specialty</h5>
                  <Row>
                    <Col xxl={1} xl={3} lg={4} md={6} sm={6} className="mb-2">
                      <FillBtn
                        className="w-100 text-dark"
                        text={"Body Building"}
                      />
                    </Col>
                    <Col xxl={1} xl={3} lg={4} md={6} sm={6} className="mb-2">
                      <FillBtn
                        className="w-100 text-dark"
                        text={"Power Lifting"}
                      />
                    </Col>
                    <Col xxl={1} xl={3} lg={4} md={6} sm={6} className="mb-2">
                      <FillBtn
                        className="w-100 text-dark"
                        text={"Healthy Lifestyle"}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <h5 className="fw-bold my-2">Comments</h5>
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
        </Col> */}
      </Row>
    </Container>
  );
};

export default ServiceProviderProfile;
