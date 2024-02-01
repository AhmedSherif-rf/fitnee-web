import { Col, Container, Row } from "reactstrap";
import styles from "./style.module.scss";
import React, { memo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Feature = (props) => {
  const { t, i18n } = useTranslation("");
  const { textData, imageData, type } = props;
  const cardSwiperRef = useRef(null);

  const handletextSlideChange = (swiper) => {
    cardSwiperRef.current.slideTo(swiper.activeIndex);
  };

  return (
    <Container fluid>
      <Row
        className={`p-2 ${styles.featureSectionWrapper} ${
          type === "textRight" ? "flex-row-reverse" : ""
        }`}
      >
        <Col
          xs={12}
          md={6}
          className={`p-0 mb-md-0 mb-3 ${styles.featureSectionLeftContent}`}
        >
          <div className={`d-flex align-items-center h-100`}>
            <div className="">
              <div>
                <Swiper
                  className="p-0"
                  speed={1000}
                  spaceBetween={500}
                  grabCursor={true}
                  direction="vertical"
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  onSlideChange={handletextSlideChange}
                  style={{ height: "70vh", overflow: "hidden" }}
                  modules={[Pagination, Autoplay, Pagination]}
                >
                  {textData?.map((item, index) => {
                    return (
                      <SwiperSlide
                        key={index}
                        className={`w-100 d-block  text-white fs-5 text-justify p-0 ${
                          i18n.dir() === "ltr" ? "customSpacing" : ""
                        } ${i18n.dir()}`}
                      >
                        <div
                          className={`fw-bold textYellow mb-0 display-5 mb-3 p-0 w-100 ${styles.featureHeading}`}
                        >
                          <span className="arabicBorderHover p-0">
                            {t("landing.featuresText")}
                          </span>
                        </div>
                        <div
                          className={`${
                            i18n.dir() === "ltr"
                              ? "text-md-start"
                              : "text-md-end"
                          } text-center pt-md-5 pt-0`}
                        >
                          <span className="textYellow fw-bolder fs-4 outline-yellow mb-2">
                            {item.heading}
                          </span>
                          <p className="mb-0 pt-md-3 pt-0">{item.text}</p>
                        </div>
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
          className={`mb-md-0 mb-3 ${styles.featureSectionRightContent}`}
        >
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
    </Container>
  );
};

export default memo(Feature);
