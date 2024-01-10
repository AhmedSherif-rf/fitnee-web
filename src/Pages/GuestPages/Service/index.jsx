import styles from "./style.module.scss";
import {
  maleBodyFrontMuscles,
  maleBodyBackMuscles,
  femaleBodyFrontMuscles,
  femaleBodyBackMuscles,
} from "./BodyMap";
import { useNavigate } from "react-router-dom";
import React, { useState, useCallback } from "react";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import { Container, Row, Col, Card } from "reactstrap";
import OutlineBtn from "../../../Shared/Buttons/OutlineBtn";
import { IoFemaleOutline, IoMaleOutline } from "react-icons/io5";
import { MALE_BODY, FEMALE_BODY } from "../../../utils/constants";
import InformationModal from "../../../Shared/Modal/InformationModal";

const Services = (props) => {
  const navigate = useNavigate();
  const [currentBody, setCurrentBody] = useState(MALE_BODY);
  const [currentActivePart, setCurrentActivePart] = useState("");
  const [
    showSubscriptionInformationModal,
    setShowSubscriptionInformationModal,
  ] = useState(false);
  const activeBodyParts = [
    "maleChest",
    "maleBackArm",
    "femaleAbdominal",
    "femaleBackThigh",
  ];

  const handleChangeBodyClick = (body) => {
    if (currentBody !== body) {
      if (currentBody === MALE_BODY) {
        setCurrentBody(FEMALE_BODY);
      } else {
        setCurrentBody(MALE_BODY);
      }
    }
  };

  const handleSubscriptionInformationModalClose = useCallback(() => {
    setShowSubscriptionInformationModal(false);
  }, []);

  const handleNotNowClick = useCallback(() => {
    setShowSubscriptionInformationModal(false);
  }, []);

  const handleRegisterClick = useCallback(() => {
    setShowSubscriptionInformationModal(false);
    navigate("/registerAs");
  }, [navigate]);

  const handleMouseEnter = (e) => {
    setCurrentActivePart(e.target.id);
  };

  return (
    <Container fluid className={`pt-2 ${styles.servicesWrapper}`}>
      <Card className="bg-transparent contentCard mt-5 px-3 pt-1">
        <Row>
          <Col md={2} sm={6} xs={6}>
            <div
              className={`${styles.customBodySelect} ${
                currentBody === MALE_BODY ? styles.activeBody : ""
              } mx-md-3 mx-0`}
              onClick={() => handleChangeBodyClick(MALE_BODY)}
            >
              <IoMaleOutline />
              <div className="checkbox-text">{MALE_BODY}</div>
            </div>
          </Col>
          <Col md={2} sm={6} xs={6}>
            <div
              className={`${styles.customBodySelect} ${
                currentBody === FEMALE_BODY ? styles.activeBody : ""
              } mx-md-3 mx-0`}
              onClick={() => handleChangeBodyClick(FEMALE_BODY)}
            >
              <IoFemaleOutline />
              <div className="checkbox-text">{FEMALE_BODY}</div>
            </div>
          </Col>
        </Row>
        <Row
          className={`gap-md-0 gap-lg-0 gap-5 justify-content-center align-items-center ${styles.servicesRow}`}
        >
          {currentBody === MALE_BODY && (
            <>
              <Col md={4} className={`${styles.servicesCol} text-center`}>
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
                          muscle.fill === "#EBEBEB"
                            ? activeBodyParts.includes(muscle.id)
                              ? styles.activeBodyMuscle
                              : styles.inActiveBodyMuscle
                            : ""
                        }`}
                        key={index}
                        onClick={() => {
                          if (muscle.id === "maleChest") {
                            navigate("/guest/exercises");
                          } else {
                            setShowSubscriptionInformationModal(true);
                          }
                        }}
                        d={muscle.d}
                        onMouseEnter={handleMouseEnter}
                        id={muscle?.id}
                        fill={
                          currentActivePart === muscle?.id
                            ? activeBodyParts.includes(muscle.id)
                              ? "#F5E74C"
                              : "rgb(255, 0, 0)"
                            : muscle.fill
                        }
                      />
                    );
                  })}
                </svg>
              </Col>
              <Col md={4} className={`${styles.servicesCol} text-center`}>
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
                          muscle.fill === "#EBEBEB"
                            ? activeBodyParts.includes(muscle.id)
                              ? styles.activeBodyMuscle
                              : styles.inActiveBodyMuscle
                            : ""
                        }`}
                        onClick={() => {
                          if (muscle.id === "maleBackArm") {
                            navigate("/guest/exercises");
                          } else {
                            setShowSubscriptionInformationModal(true);
                          }
                        }}
                        onMouseEnter={handleMouseEnter}
                        id={muscle?.id}
                        d={muscle.d}
                        fill={
                          currentActivePart === muscle?.id
                            ? activeBodyParts.includes(muscle.id)
                              ? "#F5E74C"
                              : "rgb(255, 0, 0)"
                            : muscle.fill
                        }
                      />
                    );
                  })}
                </svg>
              </Col>
            </>
          )}
          {currentBody === FEMALE_BODY && (
            <>
              <Col md={4} className={`${styles.servicesCol} text-center`}>
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
                          muscle.fill === "#EBEBEB"
                            ? activeBodyParts.includes(muscle.id)
                              ? styles.activeBodyMuscle
                              : styles.inActiveBodyMuscle
                            : ""
                        }`}
                        onClick={() => {
                          if (muscle.id === "femaleAbdominal") {
                            navigate("/guest/exercises");
                          } else {
                            setShowSubscriptionInformationModal(true);
                          }
                        }}
                        onMouseEnter={handleMouseEnter}
                        id={muscle?.id}
                        d={muscle.d}
                        fill={
                          currentActivePart === muscle?.id
                            ? activeBodyParts.includes(muscle.id)
                              ? "#F5E74C"
                              : "rgb(255, 0, 0)"
                            : muscle.fill
                        }
                      />
                    );
                  })}
                </svg>
              </Col>
              <Col md={4} className={`${styles.servicesCol} text-center`}>
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
                          muscle.fill === "#EBEBEB"
                            ? activeBodyParts.includes(muscle.id)
                              ? styles.activeBodyMuscle
                              : styles.inActiveBodyMuscle
                            : ""
                        }`}
                        onClick={() => {
                          if (muscle.id === "femaleBackThigh") {
                            navigate("/guest/exercises");
                          } else {
                            setShowSubscriptionInformationModal(true);
                          }
                        }}
                        onMouseEnter={handleMouseEnter}
                        id={muscle?.id}
                        d={muscle.d}
                        fill={
                          currentActivePart === muscle?.id
                            ? activeBodyParts.includes(muscle.id)
                              ? "#F5E74C"
                              : "rgb(255, 0, 0)"
                            : muscle.fill
                        }
                      />
                    );
                  })}
                </svg>
              </Col>
            </>
          )}
        </Row>
        <InformationModal
          size={"md"}
          TOneClassName={"fw-bold mb-4 fs-5 text-center"}
          className={"p-4"}
          isOpen={showSubscriptionInformationModal}
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
      </Card>
    </Container>
  );
};

export default Services;
