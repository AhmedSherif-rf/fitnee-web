import React from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import AboutBg from "../../Assets/Images/aboutBgImg.svg";

const AboutSection = () => {
  const { t } = useTranslation("");
  // const [textRef, textInView] = useInView({
  //   triggerOnce: true,
  // });
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "anticipate" },
    },
  };
  return (
    <Container
      fluid
      className={`overflow-hidden position-relative ${styles.aboutContainer}`}
    >
      <Row className="h-100">
        <Col
          md={6}
          className={`p-0 bgProperties h-100 ${styles.aboutImg}`}
          style={{
            backgroundImage: `url(${AboutBg})`,
          }}
        >
          <div className="d-flex align-items-center justify-content-center h-100 d-md-none d-block">
            <div
              className={`${styles.aboutTextDiv} pt-4 text-center h-50  px-4 mt-5`}
            >
              <span className="mb-5 w-100 d-md-block d-none">
                <span
                  className={`text-white display-5 fw-bold arabicBorderHover`}
                >
                  {t("landing.whatIsText")}
                  <span className="textYellow">
                    {" "}
                    {t("landing.fitneeText")}{" "}
                  </span>
                </span>
              </span>
              <h5 className="mb-5 text-center d-md-none d-block">
                <span
                  className={`fw-bold display-5 arabicBorderHover text-white`}
                >
                  {t("landing.whatIsText")}
                  <span className="textYellow">
                    {" "}
                    {t("landing.fitneeText")}{" "}
                  </span>
                </span>
              </h5>
              <p
                className={
                  "fs-4 lh-1 text-white text-center customSpacing pb-4"
                }
              >
                {t("landing.firstHeroSectionText")}
              </p>
            </div>
          </div>
        </Col>
        <Col md={6} className="p-0 h-100">
          {/* <motion.div
            initial="hidden"
            ref={textRef}
            animate={textInView ? "visible" : "hidden"}
            variants={textVariants}
            className="w-100"
          > */}
          <div className="d-flex align-items-center justify-content-center h-100">
            <div
              className={`${styles.aboutTextDiv} pt-4 text-center h-50  px-4 `}
            >
              <span className="mb-5 w-100 d-md-block d-none">
                <span
                  className={`text-white display-5 fw-bold arabicBorderHover`}
                >
                  {t("landing.whatIsText")}
                  <span className="textYellow">
                    {" "}
                    {t("landing.fitneeText")}{" "}
                  </span>
                </span>
              </span>
              <h5 className="mb-5 text-center d-md-none d-block">
                <span
                  className={`fw-bold display-5 arabicBorderHover text-white`}
                >
                  {t("landing.whatIsText")}
                  <span className="textYellow">
                    {" "}
                    {t("landing.fitneeText")}{" "}
                  </span>
                </span>
              </h5>
              <p
                className={
                  "fs-4 lh-1 text-white text-center customSpacing pb-4"
                }
              >
                {t("landing.firstHeroSectionText")}
              </p>
            </div>
          </div>
          {/* </motion.div> */}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
