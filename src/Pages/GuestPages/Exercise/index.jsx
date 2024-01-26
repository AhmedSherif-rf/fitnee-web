import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import MyDropdown from "../../../Shared/MyDropdown";
import { category } from "../../../utils/constants";
import React, { useCallback, useState, useEffect } from "react";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import { Container, Row, Col, Card } from "reactstrap";
import OutlineBtn from "../../../Shared/Buttons/OutlineBtn";
import ExerciseSection from "../../../Shared/ExerciseSection";
import PageHeading from "../../../Shared/Headings/PageHeading";
import InformationModal from "../../../Shared/Modal/InformationModal";
import { useDispatch } from "react-redux";
import { getExercisesForGuest } from "../../../Redux/features/Exercise/exerciseApi";

const Exercise = (props) => {
  const navigate = useNavigate();
  const { uuid } = useParams();
  const dispatch = useDispatch();
  // /guest/exercisedata/558023ed-9abb-407e-ad8a-e454b69740f4
  const { i18n } = useTranslation("");
  const [
    showSubscriptionInformatoinModal,
    setShowSubscriptionInformatoinModal,
  ] = useState(false);
  const [exercisesData, setExercisesData] = useState([]);

  useEffect(() => {
    fetchGuestExercises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchGuestExercises = () => {
    const data = {
      apiEndpoint: `guest/exercisedata/${uuid}`,
    };

    dispatch(getExercisesForGuest(data)).then((res) => {
      if (res.type === "getExercisesForGuest/fulfilled") {
        console.log("ad", res.payload.data);
        setExercisesData(res.payload.data);
      }
    });
  };

  const handleSubscriptionInformationModalClose = useCallback(() => {
    setShowSubscriptionInformatoinModal(false);
  }, []);

  const handleNotNowClick = useCallback(() => {
    setShowSubscriptionInformatoinModal(false);
  }, []);

  const handleRegisterClick = useCallback(() => {
    setShowSubscriptionInformatoinModal(false);
    navigate("/registerAs");
  }, [navigate]);

  const handleSeeMoreClick = useCallback(() => {
    setShowSubscriptionInformatoinModal(true);
  }, []);

  // const ExerciseData = useCallback(() => {
  //   return [
  //     {
  //       title: "Upper Chest",
  //       level: "Beginner",
  //       categoryName: "Barbell Bench Press",
  //       description: [
  //         "Lay flat on the bench with your feet on the ground. With straight arms unrack the bar.",
  //         "Lower the bar to your mid chest.",
  //         "Raise the bar until you have locked your elbows.",
  //       ],
  //     },
  //     {
  //       title: "Lower Chest",
  //       level: "Beginner",
  //       categoryName: "Barbell Bench Press",
  //       description: [
  //         "Lay flat on the bench with your feet on the ground. With straight arms unrack the bar.",
  //         "Lower the bar to your mid chest.",
  //         "Raise the bar until you have locked your elbows.",
  //       ],
  //     },
  //   ];
  // }, []);

  return (
    <Container fluid className="contentCardPadding">
      <Row className={`text-black-custom ${i18n.dir()}`}>
        <Col md="12">
          <Card className="BorderRadius contentCard mt-0 px-3">
            <Col md={12}>
              <div className="d-flex align-items-center justify-content-between">
                <div className="w-50">
                  <PageHeading headingText="Chest" />
                </div>
                <div className="w-50 px-3">
                  <MyDropdown
                    className="border py-3 my-2"
                    Options={category}
                    placeholder={"Select category"}
                    name={"categories"}
                  />
                </div>
              </div>
            </Col>
            <Col md={12} className="mb-3">
              <ExerciseSection exercisesData={exercisesData} />
            </Col>
            <Col md={12} className="mb-3">
              <div className="text-center w-100">
                <FillBtn
                  className="py-2 buttonBoxShadow"
                  text="Show More"
                  handleOnClick={handleSeeMoreClick}
                />
              </div>
            </Col>
          </Card>
        </Col>
      </Row>

      <InformationModal
        size={"md"}
        TOneClassName={"mb-4 fs-5 text-center"}
        className={"p-4"}
        isOpen={showSubscriptionInformatoinModal}
        onClose={handleSubscriptionInformationModalClose}
        ModalTextOne="The rest of the exercises will be hidden. Subscribe for 39 SAR per month to access all exercises."
        ButtonOne={
          <FillBtn
            text={"Subscribe"}
            className="py-2 px-5"
            handleOnClick={handleRegisterClick}
          />
        }
        ButtonTwo={
          <OutlineBtn
            text={"Not now"}
            className="py-2 px-5"
            handleOnClick={handleNotNowClick}
          />
        }
      />
    </Container>
  );
};

export default Exercise;
