import styles from "./style.module.scss";
import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import { setGuest } from "../../../Redux/features/User/userSlice";
import Images from "../../../HelperMethods/Constants/ImgConstants";

const RegisterAs = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation("");

  const handleAsGuestClick = useCallback(() => {
    navigate("/guest/serviceProviderList");
  }, [navigate]);

  const handleAsTraineeClick = useCallback(() => {
    dispatch(setGuest(false));
    navigate("/signUp/trainee");
  }, [dispatch, navigate]);

  const handleAsTrainerClick = useCallback(() => {
    navigate("/serviceProvider/dashboard");
  }, [navigate]);

  const handleAsNutritionistClick = useCallback(() => {
    navigate("/serviceProvider/dashboard");
  }, [navigate]);

  return (
    <Container fluid className={`vh-100 ${styles.registerAsContainer}`}>
      <Row
        className={`justify-content-center vh-100 bgProperties ${styles.registerAsWrapper}`}
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${Images.REGISTER_AS_BG})`,
        }}
      >
        <Col md={4} className={`${styles.registerAsContent} px-2`}>
          <h2 className=" mb-5 text-center text-white fw-bold">
            {t("registerAs.registerAsText")}
          </h2>
          <div className="">
            <FillBtn
              className="w-100 mb-3 py-2"
              text={t("registerAs.traineeText")}
              handleOnClick={handleAsTraineeClick}
            />
            <FillBtn
              className="w-100 mb-3 py-2"
              text={t("registerAs.trainerText")}
              handleOnClick={handleAsTrainerClick}
            />
            <FillBtn
              className="w-100 mb-3 py-2"
              text={t("registerAs.nutritionistText")}
              handleOnClick={handleAsNutritionistClick}
            />
            <FillBtn
              className="w-100 mb-3 py-2"
              text={t("registerAs.guestText")}
              handleOnClick={handleAsGuestClick}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterAs;
