import { Col, Row } from "reactstrap";
import styles from "./style.module.scss";
import React, { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Feature = (props) => {

  const { t } = useTranslation("");
  const { data, type } = props;
  const cardSwiperRef = useRef(null);
    
  const handletextSlideChange = (swiper) => {
    cardSwiperRef.current.slideTo(swiper.activeIndex);
  };

  return (
    <Row
      className={`my-4 h-100 ${styles.featureSectionWrapper} ${
        type === "textRight" ? "flex-row-reverse" : ""
      }`}
    >
      <Col xs={12} md={6} className={`p-0 ${styles.featureSectionLeftContent}`}>
        <div className={`px-md-2 px-3 h-100 d-flex  align-items-center`}>
          <div
            initial="hidden"
            className="my-3"
          >
            <h2 className={`fw-bold textYellow fs-1 ${styles.featureHeading}`}>
            {t("landing.FeaturesText")} 
            </h2>

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
              className={`${styles.featureTextSlider}`}
              modules={[Pagination, Autoplay, Pagination]}
            >
              {data?.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="d-flex align-items-center text-center justify-content-center text-white fs-6"
                  >
                    {item.text}
                  </SwiperSlide>
                );
              })}
            </Swiper>
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
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className={`${styles.cardSwiper}`}
          onSwiper={(swiper) => (cardSwiperRef.current = swiper)}
        >
          {data?.map((item, index) => {
            return <SwiperSlide key={index} className={`${styles.cardSwiperSlider}`} style={{backgroundImage: `url(${item.image})`}}></SwiperSlide>
          })}
        </Swiper>
      </Col>
    </Row>
  );
};

export default memo(Feature);
