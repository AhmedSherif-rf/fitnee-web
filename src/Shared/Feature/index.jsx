import { Col, Row } from "reactstrap";
import styles from "./style.module.scss";
import React, { memo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

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
      className={`p-4 ${styles.featureSectionWrapper} ${
        type === "textRight" ? "flex-row-reverse" : ""
      }`}
    >
      <Col xs={12} md={6} className={`p-0 ${styles.featureSectionLeftContent}`}>
        <div className={`d-flex align-items-center h-100`}>
          <div className="">
            <div>
              <span
                className={`fw-bold textYellow fs-1 ms-4 mt-5 mb-0 ${styles.featureHeading}`}
              >
                {t("landing.featuresText")}
              </span>
              <Swiper
                speed={1000}
                spaceBetween={500}
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
                      className="d-flex align-items-center  justify-content-start d-block text-white fs-5 fw-bold"
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
      <Col xs={12} md={6} className={`${styles.featureSectionRightContent}`}>
        <Swiper
          speed={1000}
          spaceBetween={100}
          grabCursor={true}
          className={`${styles.cardSwiper} h-100 position-relative`}
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
