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
          <Col md={12} className="mb-3 text-black-custom px-md-5" key={index}>
            <div className="mt-3">
              <h5>
                <span className="fw-bold">Upper Chest</span>
              </h5>
              <Row>
                <Col md={12}>
                  <div className="py-2 px-4 fw-bold fs-2 workoutVideosHeader">
                    {exercise?.categoryName}
                  </div>
                  <div className="fw-bold py-0 px-4 workoutVideosLevel">
                    {exercise?.level}
                  </div>
                </Col>
                <Col md={6} className="mb-2">
                  <video
                    playsinline
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
                    playsinline
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
