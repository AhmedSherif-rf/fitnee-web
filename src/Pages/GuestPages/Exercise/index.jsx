import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import React, { useCallback, useState } from "react";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import OutlineBtn from "../../../Shared/Buttons/OutlineBtn";
import ExerciseSection from "../../../Shared/ExerciseSection";
import PushUpVideo from "../../../Assets/Videos/Exercise/pushUp.mp4";
import InformationModal from "../../../Shared/Modal/InformationModal";

const Exercise = (props) => {
  const navigate = useNavigate();
  const [
    showSubscriptionInformatoinModal,
    setShowSubscriptionInformatoinModal,
  ] = useState(false);

  const handleSubscriptionInformationModalClose = useCallback(() => {
    setShowSubscriptionInformatoinModal(false);
  }, []);

  const handleNotNowClick = useCallback(() => {
    setShowSubscriptionInformatoinModal(false);
  }, []);

  const handleRegisterClick = useCallback(() => {
    navigate("/registerAs");
  }, [navigate]);

  const handleSeeMoreClick = useCallback(() => {
    setShowSubscriptionInformatoinModal(true);
  }, []);

  const ExerciseData = useCallback(() => {
    return [
      {
        level: "Beginner",
        categoryName: "Barbell Bench Press",
        media1: PushUpVideo,
        media2: PushUpVideo,
        description: [
          "Lay flat on the bench with your feet on the ground. With straight arms unrack the bar.",
          "Lower the bar to your mid chest.",
          "Raise the bar until you have locked your elbows.",
        ],
      },
      {
        level: "Beginner",
        categoryName: "Barbell Bench Press",
        media1: PushUpVideo,
        media2: PushUpVideo,
        description: [
          "Lay flat on the bench with your feet on the ground. With straight arms unrack the bar.",
          "Lower the bar to your mid chest.",
          "Raise the bar until you have locked your elbows.",
        ],
      },
    ];
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <div className="d-flex align-items-center my-3 ">
            <h2 className="me-2">Chest</h2>
            <span className="textYellow small h6">(Upper Chest)</span>
          </div>
        </Col>
        <Col md={12} className="mb-3">
          <ExerciseSection exercisesData={ExerciseData} />
        </Col>
        <Col md={12} className="mb-3">
          <div className="text-center w-100">
            <FillBtn
              className="py-2 px-5 buttonBoxShadow"
              text="Show More"
              handleOnClick={handleSeeMoreClick}
            />
          </div>
        </Col>
      </Row>

      <InformationModal
        size={"md"}
        TOneClassName={"fw-bold mb-4 fs-5 text-center"}
        className={"p-4"}
        isOpen={showSubscriptionInformatoinModal}
        onClose={handleSubscriptionInformationModalClose}
        ModalTextOne="The rest of the exercises will be hidden. Subscribe for only 39 SAR per month to access all exercises."
        ButtonOne={
          <FillBtn
            text={"Subscribe"}
            className="py-2 p-3"
            handleOnClick={handleRegisterClick}
          />
        }
        ButtonTwo={
          <OutlineBtn
            text={"Not now"}
            className="py-2 p-3"
            handleOnClick={handleNotNowClick}
          />
        }
      />
    </Container>
  );
};

export default Exercise;
