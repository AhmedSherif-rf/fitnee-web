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
      <Row className="h-100">
        <Col md={12} className="d-flex align-items-center">
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ type: "spring", stiffness: 100, duration: 2.5 }}
              className={`mb-3 ms-3 ${styles.bannerTextWrapper}`}
            >
              {bannerText.map((item, index) => (
                <p key={index} className="text-white">
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
                text={t("landing.getStartedText")}
                handleOnClick={handleGetStartedClick}
              />
            </motion.div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(HomeBanner);
