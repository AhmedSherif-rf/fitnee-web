import Hero from "../../../Shared/Hero";
import styles from "./style.module.scss";
import React, { useCallback } from "react";
import Footer from "../../../Shared/Footer";
import Feature from "../../../Shared/Feature";
import { useTranslation } from "react-i18next";
import HomeBanner from "../../../Shared/Banner";
import { Col, Container, Row } from "reactstrap";
import CardSwiper from "../../../Shared/CardSwiper";
import AboutBg from "../../../Assets/Images/AboutImg.svg";
import Images from "../../../HelperMethods/Constants/ImgConstants";

const LandingPage = (props) => {
  const { t, i18n } = useTranslation("");

  const WhatIsFitneeData = [
    {
      heading: (
        <span className={`fw-bold text-white display-5 arabicBorderHover`}>
          {t("landing.whatIsText")}
          <span className="textYellow"> {t("landing.fitneeText")} </span>
        </span>
      ),
      text: (
        <p className={"fs-4 lh-1 text-white text-center customSpacing pb-4"}>
          {t("landing.firstHeroSectionText")}
        </p>
      ),
      type: "textLeft",
      textBackgroundImage: true,
      image: (
        <img
          className={`img-fluid w-100 ${styles.heroImg}`}
          src={Images.ABOUT_IMG}
          alt="hero1"
        />
      ),
    },
  ];

  const FeaturesTextData = useCallback(() => {
    return [
      {
        heading: t("landing.firstFeaturesHeadingText"),
        text: t("landing.firstFeaturesText"),
      },
      {
        heading: t("landing.secondFeaturesHeadingText"),
        text: t("landing.secondFeaturesText"),
      },
      {
        heading: t("landing.thirdFeaturesHeadingText"),
        text: t("landing.thirdFeaturesText"),
      },
      {
        heading: t("landing.fourthFeaturesHeadingText"),
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
      {
        image: Images.FEATURE_FOUR,
      },
    ];
  }, []);

  const HeroData = [
    {
      heading: (
        <span className="fw-bold text-white display-5 arabicBorderHover">
          {t("landing.ourText")}
          <span className="textYellow"> {t("landing.goalText")}</span>
        </span>
      ),
      text: (
        <div className="customSpacing text-center pb-4">
          <p className={"fs-4 lh-2 text-white"}>
            {t("landing.secondHeroSectionTextOne")}
          </p>

          <p className={"fs-4 lh-2 text-white"}>
            {t("landing.secondHeroSectionTextTwo")}
          </p>
        </div>
      ),
      type: "textLeft",
      textBackgroundImage: true,
      image: (
        <img
          className={`img-fluid w-100 ${styles.heroImg}`}
          src={Images.GOAL_IMG}
          alt="hero3"
        />
      ),
    },
    {
      heading: (
        <span className="fw-bold text-white display-5 arabicBorderHover">
          {t("landing.ourText")}
          <span className="textYellow"> {t("landing.visionText")} </span>
        </span>
      ),
      text: (
        <p className="text-white fs-4 lh-2 text-center customSpacing pb-4">
          {t("landing.thirdHeroSectionTextOne")}
        </p>
      ),
      type: "textRight",
      textBackgroundImage: true,
      image: (
        <img
          className={`img-fluid w-100 ${styles.heroImg}`}
          src={Images.VISION_IMG}
          alt="hero4"
        />
      ),
    },
  ];

  const SwiperCardsData = useCallback(() => {
    return [
      {
        sliderImg: Images.GOAL_IMG,
        description: t("landing.swiperText"),

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: t("landing.swiperText"),

        title: "Zorawar",
      },
      {
        sliderImg: Images.GOAL_IMG,
        description: t("landing.swiperText"),

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: t("landing.swiperText"),

        title: "Zorawar",
      },
      {
        sliderImg: Images.GOAL_IMG,
        description: t("landing.swiperText"),

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: t("landing.swiperText"),

        title: "Zorawar",
      },
      {
        sliderImg: Images.GOAL_IMG,
        description: t("landing.swiperText"),

        title: "Zorawar",
      },
      {
        sliderImg: Images.GOAL_IMG,
        description: t("landing.swiperText"),

        title: "Zorawar",
      },
      {
        sliderImg: Images.SLIDER1_IMG,
        description: t("landing.swiperText"),

        title: "Zorawar",
      },
    ];
  }, [t]);

  return (
    <div className="bg-black">
      <section id="bannerSection" style={{ direction: i18n.dir() }}>
        <HomeBanner />
      </section>
      <section
        id="fitneeSection"
        className=""
        style={{ direction: i18n.dir() }}
      >
        <Container fluid className="h-100">
          {WhatIsFitneeData?.map((item, index) => (
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
      </section>
      <section>
        <Container
          fluid
          className="vh-100 overflow-hidden position-relative"
        >
          <Row className="position-absolute w-100 h-100 justify-content-center align-items-center">
            <Col md={4} className="h-100">
              <div className="h-100 d-flex align-items-center justify-content-center">
                <div
                  className={`d-flex align-items-center ${styles.aboutTextContainer}`}
                >
                  <div className={`${styles.aboutTextDiv} pt-4`}>
                    <h1 className="mb-5 text-center d-md-none d-block">
                      <span className={`fw-bold display-5 arabicBorderHover text-white`}>
                        {t("landing.whatIsText")}
                        <span className="textYellow"> {t("landing.fitneeText")} </span>
                      </span>
                    </h1>
                    <p
                      className={
                        "fs-1 lh-1 text-white text-center customSpacing pb-4"
                      }
                    >
                      {t("landing.firstHeroSectionText")}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              md={6}
              className="p-0 bgProperties d-md-block d-none"
              style={{
                backgroundImage:`url(${AboutBg})`,
                // backgroundSize: "contain",
              }}
            >
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <h1 className="mb-5 w-100 ">
                  <span className={`text-white fw-bold display-4 arabicBorderHover`}>
                    {t("landing.whatIsText")}
                    <span className="textYellow"> {t("landing.fitneeText")} </span>
                  </span>
                </h1>
                {/* <p
                  className={
                    "fs-4 lh-1 text-white text-center customSpacing pb-4"
                  }
                >
                  {t("landing.firstHeroSectionText")}
                </p> */}
              </div>
            </Col>
            <Col md={6} className="p-0 h-100 border border-danger">
              <img
                className={`img-fluid w-100 vh-100 ${styles.heroImg}`}
                src={Images.ABOUT_IMG}
                alt="hero1"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="featureSection" className="100-vh">
        <Feature
          textData={FeaturesTextData()}
          imageData={FeaturesImageData()}
          type={"textRight"}
        />
      </section>

      <section id="heroSection" style={{ direction: i18n.dir() }}>
        <Container fluid>
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
      </section>
      <br />
      <section id="swiperSection">
        <CardSwiper
          data={SwiperCardsData()}
          heading={t("landing.feedbackText")}
        />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
