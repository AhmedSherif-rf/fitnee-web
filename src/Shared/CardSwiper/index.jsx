import "./style.scss";
import React, { memo } from "react";
import RatingCard from "../FeedbackCard";
import { Container, Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CardSwiper = (props) => {
  const { data: cardsData, heading } = props;

  const slicedCardsData = cardsData.slice(0, 10);

  const swiperConfiguration = {
    grabCursor: true,
    spaceBetween: 10,
    centeredSlides: false,
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      530: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1360: {
        slidesPerView: 4,
      },
    },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Autoplay, Pagination, Navigation],
    className: "mySwiper",
  };

  return (
    <Container fluid className="px-5">
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
