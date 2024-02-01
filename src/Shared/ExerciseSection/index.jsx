import React, { memo } from "react";
import { CardBody } from "reactstrap";
import styles from "./style.module.scss";
import { Card, Col, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

const ExerciseSection = (props) => {
  const { exercisesData } = props;
  const { i18n } = useTranslation("");

  console.log(exercisesData);

  return (
    <Row>
      <Col md={12} className="mb-3 text-black-custom px-md-5">
        <div className="mt-3">
          <h5>
            <span className="fw-bold">
              {i18n.dir() === "ltr"
                ? exercisesData?.title
                : exercisesData?.title_ar}
            </span>
          </h5>

          <Row>
            {exercisesData?.sub_categories?.map((subCategory) => {
              return (
                <>
                  <Col md={12}>
                    <div
                      className={`py-2 px-4 fw-bold fs-2 ${styles.workoutVideosHeader}`}
                    >
                      {i18n.dir() === "ltr"
                        ? subCategory?.title
                        : subCategory?.title_ar}
                    </div>
                  </Col>
                  <Col md={12} className="mb-2">
                    <video
                      playsInline
                      preload="metadata"
                      muted
                      autoPlay="yes"
                      loop="yes"
                      className={styles.workoutVideos}
                      src={subCategory?.exercise[0]?.exercise_media[0].file}
                    ></video>
                  </Col>
                  <Col md={12} className="mb-2">
                    <Card className="BorderRadius">
                      <CardBody className="p-3 lh-2">
                        {i18n.dir() === "ltr" &&
                          subCategory?.exercise[0]?.exercise_part_text?.map(
                            (desc, index) => {
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
                            }
                          )}
                        {i18n.dir() === "rtl" &&
                          subCategory?.exercise[0]?.exercise_part_text_ar?.map(
                            (desc, index) => {
                              return (
                                <div
                                  className="p-1 d-flex align-items-center rtl"
                                  key={index}
                                >
                                  <div>
                                    <FaAngleDoubleLeft className="textYellow fs-4 me-2" />
                                  </div>
                                  <div className="">
                                    <span>{desc}</span>
                                  </div>
                                </div>
                              );
                            }
                          )}
                      </CardBody>
                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default memo(ExerciseSection);
