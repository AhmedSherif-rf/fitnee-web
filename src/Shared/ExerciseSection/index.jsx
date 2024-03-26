import React, { memo } from "react";
import { CardBody } from "reactstrap";
import styles from "./style.module.scss";
import { Card, Col, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

const ExerciseSection = (props) => {
  const { exercisesData } = props;
  const { i18n } = useTranslation("");
  const hasPoster = true;

  return (
    <Row>
      <Col md={12} className="mb-3 text-black-custom px-md-5">
        <div className="mt-3">
          <Row>
            {exercisesData?.sub_categories?.map((subCategory, index) => {
              return (
                <div className="mb-3 px-md-5" key={index}>
                  <Col md={12}>
                    <div
                      className={`py-2 px-4 fw-bold fs-2 ${styles.workoutVideosHeader}`}
                    >
                      {i18n.dir() === "ltr"
                        ? `${subCategory?.exercise[0]?.title}`
                        : `${subCategory?.exercise[0]?.title_ar}`}

                      <span className="fs-5">
                        {i18n.dir() === "ltr"
                          ? ` (${subCategory?.title})`
                          : ` (${subCategory?.title_ar})`}
                      </span>
                    </div>
                  </Col>
                  <Col md={12} className="mb-2">
                    <div className="d-flex justify-content-center">
                      <div className="video-container">
                        <video
                          playsInline
                          preload="metadata"
                          muted
                          autoPlay
                          loop
                          className={`workoutVideos w-100 ${
                            hasPoster ? "with-poster" : ""
                          }`}
                          poster={hasPoster ? Images.POSTER_LOADING_GIF : null}
                          src={subCategory?.exercise[0]?.exercise_media[0].file}
                        ></video>
                      </div>
                    </div>
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
                </div>
              );
            })}
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default memo(ExerciseSection);
