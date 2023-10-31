import React from "react";
import { useCallback } from "react";
import Hero from "../../../Shared/Hero";
import styles from "./style.module.scss";
import Footer from "../../../Shared/Footer";
import Feature from "../../../Shared/Feature";
import { useTranslation } from "react-i18next";
import { FaNutritionix } from "react-icons/fa";
import HomeBanner from "../../../Shared/Banner";
import { Col, Container, Row } from "reactstrap";
import CounterUp from "../../../Shared/CounterUp/";
import CardSwiper from "../../../Shared/CardSwiper";
import { GiWeightLiftingUp, GiBodyBalance } from "react-icons/gi";
import Images from "../../../HelperMethods/Constants/ImgConstants";

const LandingPage = (props) => {
  const { t } = useTranslation("");

  const WhatIsFtineeData = [
    {
      heading: (
        <h2 className={`fw-bold text-white fs-1`}>
          {t("landing.whatIsText")}{" "}
          <span className="textYellow"> {t("landing.fitneeText")} </span>
        </h2>
      ),
      text: (
        <p className={"fs-5 text-white lh-1"}>
          {t("landing.firstHeroSectionText")}
        </p>
      ),
      type: "textLeft",
      textBackgroundImage: true,
      image: (
        <img className="img-fluid w-100" src={Images.ABOUT_IMG} alt="hero1" />
      ),
    },
  ];

  const FeaturesTextData = useCallback(() => {
    return [
      {
        text: t("landing.firstFeaturesText"),
      },
      {
        text: t("landing.secondFeaturesText"),
      },
      {
        text: t("landing.thirdFeaturesText"),
      },
      {
        text: t("landing.fourthFeaturesText"),
      },
    ];
  }, [t]);

  const FeaturesImageData = useCallback(() => {
    return [
      {
        image: Images.FEATURE_ONE,
      },
      {
        image: Images.FEATURE_TWO,
      },
      {
        image: Images.FEATURE_THREE,
      },
    ];
  }, []);

  const HeroData = [
    {
      heading: (
        <h2 className="fw-bold text-white fs-1">
          {t("landing.ourText")}{" "}
          <span className="textYellow"> {t("landing.goalText")}</span>
        </h2>
      ),
      text: (
        <>
          <p className={"fs-5 lh-1 text-white"}>
            {t("landing.secondHeroSectionTextOne")}
          </p>

          <p className={"fs-5 lh-1 text-white"}>
            {t("landing.secondHeroSectionTextTwo")}
          </p>
        </>
      ),
      type: "textLeft",
      textBackgroundImage: true,
      image: (
        <img className="img-fluid w-100" src={Images.GOAL_IMG} alt="hero3" />
      ),
    },
    {
      heading: (
        <h2 className="fw-bold text-white fs-1">
          {" "}
          {t("landing.ourText")}{" "}
          <span className="textYellow">{t("landing.visionText")} </span>
        </h2>
      ),
      text: (
        <p className="text-white fs-5 lh-1">
          {t("landing.thirdHeroSectionTextOne")}
        </p>
      ),
      type: "textRight",
      textBackgroundImage: true,
      image: (
        <img className="img-fluid w-100" src={Images.VISION_IMG} alt="hero4" />
      ),
    },
  ];

  const SwiperCardsData = useCallback(() => {
    return [
      {
        sliderImg: Images.SLIDER1_IMG,
        description: `“Your training has been transformative! Your guidance, support, and
              expertise have propelled my fitness journey. Each session was
              empowering, and I've achieved more than I thought possible.”`,

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: `“Your training has been transformative! Your guidance, support, and
              expertise have propelled my fitness journey. Each session was
              empowering, and I've achieved more than I thought possible.”`,

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: `“Your training has been transformative! Your guidance, support, and
              expertise have propelled my fitness journey. Each session was
              empowering, and I've achieved more than I thought possible.”`,

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: `“Your training has been transformative! Your guidance, support, and
              expertise have propelled my fitness journey. Each session was
              empowering, and I've achieved more than I thought possible.”`,

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: `“Your training has been transformative! Your guidance, support, and
              expertise have propelled my fitness journey. Each session was
              empowering, and I've achieved more than I thought possible.”`,

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: `“Your training has been transformative! Your guidance, support, and
              expertise have propelled my fitness journey. Each session was
              empowering, and I've achieved more than I thought possible.”`,

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: `“Your training has been transformative! Your guidance, support, and
              expertise have propelled my fitness journey. Each session was
              empowering, and I've achieved more than I thought possible.”`,

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: `“Your training has been transformative! Your guidance, support, and
              expertise have propelled my fitness journey. Each session was
              empowering, and I've achieved more than I thought possible.”`,

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: `“Your training has been transformative! Your guidance, support, and
              expertise have propelled my fitness journey. Each session was
              empowering, and I've achieved more than I thought possible.”`,

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: `“Your training has been transformative! Your guidance, support, and
              expertise have propelled my fitness journey. Each session was
              empowering, and I've achieved more than I thought possible.”`,

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: `“Your training has been transformative! Your guidance, support, and
              expertise have propelled my fitness journey. Each session was
              empowering, and I've achieved more than I thought possible.”`,

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: `“Your training has been transformative! Your guidance, support, and
              expertise have propelled my fitness journey. Each session was
              empowering, and I've achieved more than I thought possible.”`,

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: `“Your training has been transformative! Your guidance, support, and
              expertise have propelled my fitness journey. Each session was
              empowering, and I've achieved more than I thought possible.”`,

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: `“Your training has been transformative! Your guidance, support, and
              expertise have propelled my fitness journey. Each session was
              empowering, and I've achieved more than I thought possible.”`,

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: `“Your training has been transformative! Your guidance, support, and
              expertise have propelled my fitness journey. Each session was
              empowering, and I've achieved more than I thought possible.”`,

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: `“Your training has been transformative! Your guidance, support, and
              expertise have propelled my fitness journey. Each session was
              empowering, and I've achieved more than I thought possible.”`,

        title: "Zorawar",
      },
    ];
  }, []);

  return (
    <div className="bg-black">
      <HomeBanner />
      <Container fluid>
        <Row className={`${styles.bannerImg}`}>
          <Col md={4}>
            <div
              className="d-flex align-items-center justify-content-center w-100 h-100"
              style={{ bottom: 0, right: 0 }}
            >
              <div className="text-center">
                <GiWeightLiftingUp className="text-white display-2" />
                <br />
                <CounterUp start={0} end={500} duration={5} />
                <p className="text-white fw-bold">
                  {t("landing.trainersText")}
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div
              className="d-flex align-items-center justify-content-center w-100 h-100"
              style={{ bottom: 0, right: 0 }}
            >
              <div className="text-center">
                <GiBodyBalance className="text-white display-2" />
                <br />
                <CounterUp start={0} end={1000} duration={7} />
                <p className="text-white fw-bold">
                  {t("landing.traineesText")}
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div
              className="d-flex align-items-center justify-content-center w-100 h-100"
              style={{ bottom: 0, right: 0 }}
            >
              <div className="text-center">
                <FaNutritionix className="text-white display-2" />
                <br />
                <CounterUp start={0} end={2000} duration={9} />
                <p className="text-white fw-bold">
                  {t("landing.nutritionistsText")}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mb-3">
        {WhatIsFtineeData?.map((item, index) => (
          <Hero
            key={item.heading + "_" + index}
            heading={item.heading}
            text={item.text}
            image={item.image}
            type={item.type}
            textBackgroundImage={item.textBackgroundImage}
          />
        ))}

        <Feature
          textData={FeaturesTextData()}
          imageData={FeaturesImageData()}
          type={"textRight"}
        />

        {HeroData?.map((item, index) => (
          <Hero
            key={item.heading + "_" + index}
            heading={item.heading}
            text={item.text}
            image={item.image}
            type={item.type}
            textBackgroundImage={item.textBackgroundImage}
          />
        ))}
      </Container>
      <CardSwiper
        data={SwiperCardsData()}
        heading={t("landing.feedbackText")}
      />
      <Footer />
    </div>
  );
};

export default LandingPage;
