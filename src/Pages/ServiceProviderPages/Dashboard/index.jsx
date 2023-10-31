import React from "react";
import { useCallback } from "react";
import TopBar from "../../../Shared/TopBar";
import { useNavigate } from "react-router-dom";
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
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "25",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

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
    <Container fluid className="mt-5">
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
                  text="My Current Subscribers"
                />
                <FillBtn
                  handleOnClick={handlePaymentClick}
                  className="w-100 mb-2 py-2"
                  text="Payment History"
                />
                <FillBtn
                  handleOnClick={handleSubscriptionsClick}
                  className="w-100 mb-2 py-2"
                  text="My Packages"
                />
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={9} md={8}>
          <Card className="BorderRadius border-0">
            <CardBody>
              <h5 className="fw-bold my-2">Bio</h5>
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
                {documentMedia.map((item) => {
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
                <h5 className="fw-bold my-2">Comments</h5>
                {commentMedia.map((item) => {
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

export default Dashboard;
