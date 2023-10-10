import "./style.scss";
import React, { memo } from "react";
import RatingCard from "../FeedbackCard";
import { Container, Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  FreeMode,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";

const CardSwiper = (props) => {
  const { data: cardsData } = props;

  const swiperConfiguration = {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 64,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    modules: [FreeMode, Autoplay, EffectCoverflow, Pagination],
    className: "mySwiper",
  };

  return (
    <>
      <Container fluid className="mb-3">
        <Row>
          <Col>
            <Swiper {...swiperConfiguration} className={"feedbackSwiper"}>
              {cardsData.map((card, index) => {
                return (
                  <SwiperSlide key={"_" + index} className={"feedbackSwiperSlider"}>
                    <RatingCard
                      header={card.title}
                      image={card.sliderImg}
                      des={card.description}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default memo(CardSwiper);
