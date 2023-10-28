import styles from "./style.module.scss";
import {
  maleBodyFrontMuscles,
  maleBodyBackMuscles,
  femaleBodyFrontMuscles,
  femaleBodyBackMuscles,
} from "./BodyMap";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import React, { useState, useCallback } from "react";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import OutlineBtn from "../../../Shared/Buttons/OutlineBtn";
import { IoFemaleOutline, IoMaleOutline } from "react-icons/io5";
import { MALE_BODY, FEMALE_BODY } from "../../../utils/constants";
import InformationModal from "../../../Shared/Modal/InformationModal";

const Services = (props) => {
  const navigate = useNavigate();
  const [currentBody, setCurrentBody] = useState(MALE_BODY);
  const [
    showSubscriptionInformatoinModal,
    setShowSubscriptionInformatoinModal,
  ] = useState(false);

  const handleChangeBodyClick = () => {
    if (currentBody === MALE_BODY) {
      setCurrentBody(FEMALE_BODY);
    } else {
      setCurrentBody(MALE_BODY);
    }
  };

  const handleSubscriptionInformationModalClose = useCallback(() => {
    setShowSubscriptionInformatoinModal(false);
  }, []);

  const handleNotNowClick = useCallback(() => {
    setShowSubscriptionInformatoinModal(false);
  }, []);

  const handleRegisterClick = useCallback(() => {
    navigate("/registerAs");
  }, [navigate]);

  return (
    <Container fluid className={`py-md-2 py-2 ${styles.servicesWrapper}`}>
      <div
        className={`${styles.customBodySelect}`}
        onClick={handleChangeBodyClick}
      >
        {currentBody === MALE_BODY ? <IoMaleOutline /> : <IoFemaleOutline />}
        <div className="checkbox-text">{currentBody}</div>
      </div>
      {currentBody === MALE_BODY && (
        <Row
          className={`justify-content-center align-items-center ${styles.servicesRow}`}
        >
          <Col
            md={6}
            className={`${styles.servicesCol} d-flex justify-content-between`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="298"
              height="592"
              viewBox="0 0 298 592"
              fill="none"
              className={`${styles.humanBody}`}
            >
              {maleBodyFrontMuscles.map((muscle, index) => {
                return (
                  <path
                    className={`${
                      muscle.fill === "#EBEBEB" ? styles.bodyMuscle : ""
                    }`}
                    onClick={() => {
                      if (muscle.fill === "#F5E74C") {
                        navigate("/guest/exercises");
                      } else {
                        setShowSubscriptionInformatoinModal(true);
                      }
                    }}
                    d={muscle.d}
                    fill={muscle.fill}
                  />
                );
              })}
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="298"
              height="592"
              viewBox="0 0 298 592"
              fill="none"
              className={`${styles.humanBody}`}
            >
              {maleBodyBackMuscles.map((muscle, index) => {
                return (
                  <path
                    className={`${
                      muscle.fill === "#EBEBEB" ? styles.bodyMuscle : ""
                    }`}
                    onClick={() => {
                      if (muscle.fill === "#F5E74C") {
                        navigate("/guest/exercises");
                      } else {
                        setShowSubscriptionInformatoinModal(true);
                      }
                    }}
                    d={muscle.d}
                    fill={muscle.fill}
                  />
                );
              })}
            </svg>
          </Col>
        </Row>
      )}
      {currentBody === FEMALE_BODY && (
        <Row
          className={`justify-content-center align-items-center ${styles.servicesRow}`}
        >
          <Col
            md={6}
            className={`${styles.servicesCol} d-flex justify-content-between`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="298"
              height="592"
              viewBox="0 0 298 592"
              fill="none"
              className={`${styles.humanBody}`}
            >
              {femaleBodyFrontMuscles.map((muscle, index) => {
                return (
                  <path
                    className={`${
                      muscle.fill === "#EBEBEB" ? styles.bodyMuscle : ""
                    }`}
                    onClick={() => {
                      if (muscle.fill === "#F5E74C") {
                        navigate("/guest/exercises");
                      } else {
                        setShowSubscriptionInformatoinModal(true);
                      }
                    }}
                    d={muscle.d}
                    fill={muscle.fill}
                  />
                );
              })}
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="298"
              height="592"
              viewBox="0 0 298 592"
              fill="none"
              className={`${styles.humanBody}`}
            >
              {femaleBodyBackMuscles.map((muscle, index) => {
                return (
                  <path
                    className={`${
                      muscle.fill === "#EBEBEB" ? styles.bodyMuscle : ""
                    }`}
                    onClick={() => {
                      if (muscle.fill === "#F5E74C") {
                        navigate("/guest/exercises");
                      } else {
                        setShowSubscriptionInformatoinModal(true);
                      }
                    }}
                    d={muscle.d}
                    fill={muscle.fill}
                  />
                );
              })}
            </svg>
          </Col>
        </Row>
      )}

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

export default Services;
