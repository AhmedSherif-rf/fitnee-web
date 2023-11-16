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
      className={`bg-back ${styles.heroSectionWrapper} ${
        type === "textRight" ? "flex-row-reverse" : ""
      }`}
    >
            <Col
        xs={12}
        md={6}
        className={`p-0 d-flex align-items-center ${styles.heroSectionLeftContent}`}
      >
        <div
          className={`${
            textBackgroundImage ? styles.heroTextBackground : ""
          } px-4 pt-4 d-flex align-items-center `}
        >
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
          >
            <div className={`mb-4 ${styles.heroHeading} hoverWrapper`}>
              {heading}
            </div>
            {text}
          </motion.div>
        </div>
      </Col>
      <Col
        xs={12}
        md={6}
        className={`overflow-hidden p-0 ${styles.heroSectionRightContent}`}
      >
        {image}
      </Col>
    </Row>
  );
};

export default memo(Hero);
