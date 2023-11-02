import React, { memo } from "react";
import { CardBody } from "reactstrap";
import { Card, Col, Row } from "reactstrap";
import { FaAngleDoubleRight } from "react-icons/fa";

const ExerciseSection = (props) => {
  const { exercisesData } = props;

  return (
    <>
      {exercisesData()?.map((exercise, index) => {
        return (
          <Col md={12} className="mb-3 text-black-custom" key={index}>
            <div className="border-bottom">
              <h4 className="fw-bold">{exercise?.categoryName}</h4>
            </div>
            <div className="mt-3">
              <h5>
                <span className="fw-bold">Difficulty:</span> {exercise?.level}
              </h5>
              <Row className="text-center">
                <Col md={6} className="mb-2">
                  <video
                    playsinline=""
                    preload="metadata"
                    muted
                    autoplay="yes"
                    loop="yes"
                    class="workoutVideos"
                    src={exercise.media1}
                  ></video>
                </Col>
                <Col md={6} className="mb-2">
                  <video
                    playsinline=""
                    preload="metadata"
                    muted
                    autoplay="yes"
                    loop="yes"
                    class="workoutVideos"
                    src={exercise.media2}
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
