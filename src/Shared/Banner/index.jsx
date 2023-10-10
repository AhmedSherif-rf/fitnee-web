import CounterUp from "../CounterUp";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import FillBtn from "../Buttons/FillBtn";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { memo, useCallback } from "react";
import { Col, Container, Row } from "reactstrap";

const HomeBanner = () => {
  const { t } = useTranslation("");
  const navigate = useNavigate();

  const bannerText = [
    { type: "heading1", text: t("landing.embraceAText") },
    {
      type: "heading1",
      text: t("landing.healthierYouText"),
    },
  ];

  const handleGetStartedClick = useCallback(() => {
    navigate("/registerAs");
  }, [navigate]);

  const fadeInVariants = {
    hidden: { x: -100 },
    visible: { x: 0 },
  };

  return (
    <Container fluid className={`${styles.bannerImg}`}>
      <Row className="pt-5 h-100">
        <Col className="mt-5" md={6}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ type: "spring", stiffness: 100, duration: 2.5 }}
            className="mt-5 mb-3 pt-5 ms-3"
          >
            {bannerText.map((item, index) => (
              <p key={index} className="h1 text-white">
                {item.text}
              </p>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: "90%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, duration: 2.5 }}
          >
            <FillBtn
              className="ms-3 px-4"
              text="Get Started"
              handleOnClick={handleGetStartedClick}
            />
          </motion.div>
        </Col>
        <Col md={6}>
          <div className="h-100 position-relative px-5">
            <div
              className="d-flex align-items-center justify-content-end w-100 position-absolute"
              style={{ bottom: 0, right: 0 }}
            >
              <div className="p-md-3 p-sm-2 mx-2 text-center lh-2">
                <CounterUp start={0} end={500} duration={5} />
                <p className="text-secondary fw-bold fs-md-5 fs-sm-3">
                  {t("landing.trainersText")}
                </p>
              </div>

              <div className="p-md-3 p-sm-2 mx-2 text-center lh-2">
                <CounterUp start={0} end={1000} duration={7} />
                <p className="text-secondary fw-bold fs-md-5 fs-sm-3">
                  {t("landing.traineesText")}
                </p>
              </div>

              <div className="p-md-3 p-sm-2 mx-2 text-center lh-2">
                <CounterUp start={0} end={2000} duration={9} />
                <p className="text-secondary fw-bold fs-md-5 fs-sm-3">
                  {t("landing.nutritionistsText")}
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(HomeBanner);
