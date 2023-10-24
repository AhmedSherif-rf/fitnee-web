import { Col, Row } from "reactstrap";
import styles from "./style.module.scss";
import React, { memo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay } from "swiper/modules";

const Feature = (props) => {
  const { t } = useTranslation("");
  const { textData, imageData, type } = props;
  const cardSwiperRef = useRef(null);

  const handletextSlideChange = (swiper) => {
    const index =
      swiper.activeIndex === 0 || swiper.activeIndex === 1
        ? 0
        : swiper.activeIndex - 1;
    cardSwiperRef.current.slideTo(index);
  };

  return (
    <Row
      className={`my-4 h-100 ${styles.featureSectionWrapper} ${
        type === "textRight" ? "flex-row-reverse" : ""
      }`}
    >
      <Col xs={12} md={6} className={`p-0 ${styles.featureSectionLeftContent}`}>
        <div className={`h-100 d-flex align-items-center`}>
          <div className="">
            <div className="pt-3">
              <span
                className={`fw-bold textYellow fs-1 ms-4 ${styles.featureHeading}`}
              >
                {t("landing.featuresText")}
              </span>
            </div>
            <br />
            <div className=" mb-5">
              <Swiper
                speed={1000}
                spaceBetween={100}
                grabCursor={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                onSlideChange={handletextSlideChange}
                className={`h-100 ${styles.featureTextSlider}`}
                modules={[Pagination, Autoplay, Pagination]}
              >
                {textData?.map((item, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className="d-flex align-items-center text-center text-white fs-6 h-100"
                    >
                      {item.text}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </Col>
      <Col
        xs={12}
        md={6}
        className={`p-0 d-flex justify-content-center align-items-center ${styles.featureSectionRightContent}`}
      >
        <Swiper
          speed={1000}
          grabCursor={true}
          className={`${styles.cardSwiper}`}
          onSwiper={(swiper) => (cardSwiperRef.current = swiper)}
        >
          {imageData?.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className={`${styles.cardSwiperSlider}`}
                style={{ backgroundImage: `url(${item.image})` }}
              ></SwiperSlide>
            );
          })}
        </Swiper>
      </Col>
    </Row>
  );
};

export default memo(Feature);
