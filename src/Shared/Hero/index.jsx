import React, { memo } from "react";
import { Col, Row } from "reactstrap";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { useInView } from "react-intersection-observer";

const Hero = (props) => {
  const { heading, text, image, type, textBackgroundImage } = props;

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <Row
      className={`${styles.heroSectionWrapper} ${
        type === "textRight" ? "flex-row-reverse" : ""
      }`}
    >
      <Col xs={12} md={6} className={`p-0 ${styles.heroSectionLeftContent}`}>
        <div
          className={`${
            textBackgroundImage ? styles.heroTextBackground : ""
          } px-md-5 px-3 py-5 h-100 d-flex  align-items-center`}
        >
          <motion.div
            className="my-3"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
          >
            <span className={styles.heroHeadingText}>{heading}</span>
            {text}
          </motion.div>
        </div>
      </Col>
      <Col xs={12} md={6} className={`p-0 ${styles.heroSectionRightContent}`}>
        {image}
      </Col>
    </Row>
  );
};

export default memo(Hero);
