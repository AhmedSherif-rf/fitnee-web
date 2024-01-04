import React, { memo } from "react";
import { CardBody } from "reactstrap";
import styles from "./style.module.scss";
import { Card, Col, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import { FaAngleDoubleRight, FaWheelchair } from "react-icons/fa";

const ExerciseSection = (props) => {
  const { exercisesData } = props;
  const { i18n } = useTranslation("");
  console.log("awdawdwa", i18n.dir());

  return (
    <>
      {exercisesData()?.map((exercise, index) => {
        return (
          <Col md={12} className="mb-3 text-black-custom px-md-5" key={index}>
            <div className="mt-3">
              <h5>
                <span className="fw-bold">Upper Chest</span>
              </h5>
              <Row>
                <Col md={12}>
                  <div
                    className={`py-2 px-4 fw-bold fs-2 ${styles.workoutVideosHeader}`}
                  >
                    {exercise?.categoryName}
                  </div>
                  <div
                    className={`fw-bold py-0 px-4 ${styles.workoutVideosLevel}`}
                  >
                    {exercise?.level}
                  </div>
                </Col>
                <Col md={6} className="mb-2">
                  <video
                    playsInline
                    preload="metadata"
                    muted
                    autoPlay="yes"
                    loop="yes"
                    className={styles.workoutVideos}
                    src={
                      "https://res.cloudinary.com/ddbegwuqp/video/upload/v1700739776/sample2_sirvgw.mp4"
                    }
                  ></video>
                </Col>
                <Col md={6} className="mb-2">
                  <video
                    playsInline
                    preload="metadata"
                    muted
                    autoPlay="yes"
                    loop="yes"
                    className={styles.workoutVideos}
                    src={
                      "https://res.cloudinary.com/ddbegwuqp/video/upload/v1700739776/sample2_sirvgw.mp4"
                    }
                  ></video>
                </Col>
                <Col md={12} className="mb-2">
                  <Card className="BorderRadius">
                    <CardBody className="p-3 lh-2">
                      {exercise?.description?.map((desc, index) => {
                        return (
                          <div
                            className="p-1 d-flex align-items-center"
                            key={index}
                          >
                            <div>
                              <FaAngleDoubleRight className="textYellow fs-4 me-2" />
                            </div>
                            <div className="">
                              <span>{desc}</span>
                            </div>
                          </div>
                        );
                      })}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default memo(ExerciseSection);
