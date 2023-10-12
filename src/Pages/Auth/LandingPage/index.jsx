import React from "react";
import { useCallback } from "react";
import { Container } from "reactstrap";
import Hero from "../../../Shared/Hero";
import Footer from "../../../Shared/Footer";
import Feature from "../../../Shared/Feature";
import { useTranslation } from "react-i18next";
import HomeBanner from "../../../Shared/Banner";
import CardSwiper from "../../../Shared/CardSwiper";
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

  const FeaturesData = useCallback(() => {
    return [
      {
        text: t("landing.firstFeaturesText"),
        image: Images.FEATURE_ONE,
      },
      {
        text: t("landing.secondFeaturesText"),
        image: Images.FEATURE_ONE,
      },
      {
        text: t("landing.thirdFeaturesText"),
        image: Images.FEATURE_TWO,
      },
      {
        text: t("landing.fourthFeaturesText"),
        image: Images.FEATURE_THREE,
      },
    ];
  }, [t]);

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
    ];
  }, []);

  return (
    <React.Fragment>
      <HomeBanner />
      <Container fluid>
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
      </Container>

      <Container fluid>
        <Feature data={FeaturesData()} type={"textRight"} />
      </Container>

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
      <h2 className="text-center fw-bold fs-1 pb-3">
        {" "}
        {t("landing.feedbackText")}
      </h2>
      <CardSwiper data={SwiperCardsData()} />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
