import React, { memo } from "react";
import { Col, Row } from "reactstrap";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { useInView } from "react-intersection-observer";

const Hero = (props) => {
  const { heading, text, image, type, textBackgroundImage } = props;

  const [textRef, textInView] = useInView({
    triggerOnce: true,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
  });

  const animationVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const animationVariantsRightToLeft = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
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
        {type === "textRight" ? (
          <motion.div
            className="h-100"
            ref={textRef}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div
              className={`${
                textBackgroundImage ? styles.heroTextBackground : ""
              } px-4 pt-4 d-flex align-items-center`}
            >
              <motion.div
                initial="hidden"
                animate={textInView ? "visible" : "hidden"}
                variants={animationVariantsRightToLeft}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <div className={`mb-5 pb-4 ${styles.heroHeading} hoverWrapper text-center`}>
                  {heading}
                </div>
                {text}
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="h-100"
            ref={textRef}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div
              className={`${
                textBackgroundImage ? styles.heroTextBackground : ""
              } px-4 pt-4 d-flex align-items-center`}
            >
              <motion.div
                initial="hidden"
                animate={textInView ? "visible" : "hidden"}
                variants={animationVariants}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <div className={`mb-5 pb-4 ${styles.heroHeading} hoverWrapper text-center`}>
                  {heading}
                </div>
                <div className="text.center">{text}</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </Col>
      <Col
        xs={12}
        md={6}
        className={`overflow-hidden p-0 ${styles.heroSectionRightContent}`}
      >
        {type === "textRight" ? (
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {image}
          </motion.div>
        ) : (
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={animationVariantsRightToLeft}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {image}
          </motion.div>
        )}
      </Col>
    </Row>
  );
};

export default memo(Hero);
