import "./style.scss";
import React, { memo } from "react";
import RatingCard from "../FeedbackCard";
import { Container, Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

const CardSwiper = (props) => {
  const { data: cardsData, heading } = props;

  // Slice the first 3 elements from the cardsData array
  const slicedCardsData = cardsData.slice(0, 20);

  const swiperConfiguration = {
    // effect: "coverflow",
    grabCursor: true,
    spaceBetween: 10,
    centeredSlides: true,
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      530: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
      },
      1360: {
        slidesPerView: 3,
      },
    },
    // coverflowEffect: {
    //   rotate: 0,
    //   stretch: 0,
    //   depth: 10,
    //   modifier: 25,
    //   slideShadows: true,
    // },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    // modules: [FreeMode, Autoplay, EffectCoverflow, Pagination],
    modules: [Autoplay, Pagination],
    className: "mySwiper",
  };

  return (
    <Container className="px-5">
      <Row className="mb-5">
        <Col>
          <h1 className="text-center fw-bold text-white mt-5"> {heading}</h1>
          <Swiper {...swiperConfiguration} className={"feedbackSwiper"}>
            {slicedCardsData.map((card, index) => {
              return (
                <SwiperSlide
                  key={"_" + index}
                  className={"feedbackSwiperSlider"}
                >
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
  );
};

export default memo(CardSwiper);
