import { motion } from "framer-motion";
import styles from "./style.module.scss";
import FillBtn from "../Buttons/FillBtn";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { memo, useCallback } from "react";
import { Col, Container, Row } from "reactstrap";
// import PushUpVideo from "../../Assets/Videos/homeBannerNew.mov";

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
    <Container fluid className={styles.bannerVideo}>
      <div className={styles.videoContainer}>
        <div className={`${styles.overlay}`}></div>
          <video
            playsInline
            preload="metadata"
            muted
            autoPlay
            loop
            className={`rounded-0`}
            src="https://asset.cloudinary.com/ddbegwuqp/c2cf87dc360de1012b93b105000b1456"
          ></video>
      </div>

      <Row className="vh-100">
        <Col md={12} className="d-flex align-items-center">
          <div style={{ zIndex: "1" }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ type: "spring", stiffness: 100, duration: 2.5 }}
              className={`mb-3 ms-3 ${styles.bannerTextWrapper}`}
            >
              {bannerText.map((item, index) => (
                <p key={index} className=" text-white">
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
