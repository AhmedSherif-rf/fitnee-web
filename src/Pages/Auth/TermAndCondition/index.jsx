import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import { IoIosArrowRoundBack } from "react-icons/io";
import OutlineBtn from "../../../Shared/Buttons/OutlineBtn";
import { useParams } from "react-router-dom";
const TermAndCondition = () => {
  const { t } = useTranslation("");
  const { type } = useParams();

  const sectionOne = [
    {
      heading: t("termAndCondition.general.sectionOneDescriptionTwoBoldText"),
      description: t("termAndCondition.general.sectionOneDescriptionTwoText"),
    },
    {
      heading: t("termAndCondition.general.sectionOneDescriptionThreeBoldText"),
      description: t("termAndCondition.general.sectionOneDescriptionThreeText"),
    },
    {
      heading: t("termAndCondition.general.sectionOneDescriptionFourBoldText"),
      description: t("termAndCondition.general.sectionOneDescriptionFourText"),
    },
    {
      heading: t("termAndCondition.general.sectionOneDescriptionFiveBoldText"),
      description: t("termAndCondition.general.sectionOneDescriptionFiveText"),
    },
    {
      heading: t("termAndCondition.general.sectionOneDescriptionSixBoldText"),
      description: t("termAndCondition.general.sectionOneDescriptionSixText"),
    },
    {
      heading: t("termAndCondition.general.sectionOneDescriptionSevenBoldText"),
      description: t("termAndCondition.general.sectionOneDescriptionSevenText"),
    },
    {
      heading: t("termAndCondition.general.sectionOneDescriptionEightBoldText"),
      description: t("termAndCondition.general.sectionOneDescriptionEightText"),
    },
    {
      heading: t("termAndCondition.general.sectionOneDescriptionNineBoldText"),
      description: t("termAndCondition.general.sectionOneDescriptionNineText"),
    },
    {
      heading: t("termAndCondition.general.sectionOneDescriptionTenBoldText"),
      description: t("termAndCondition.general.sectionOneDescriptionTenText"),
    },
    {
      heading: t(
        "termAndCondition.general.sectionOneDescriptionElevenBoldText"
      ),
      description: t(
        "termAndCondition.general.sectionOneDescriptionElevenText"
      ),
    },
    {
      heading: t(
        "termAndCondition.general.sectionOneDescriptionTwelveBoldText"
      ),
      description: t(
        "termAndCondition.general.sectionOneDescriptionTwelveText"
      ),
    },
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <h1 className="text-center my-4 f-w-bold ">
            {t("termAndCondition.termAndConditionHeadingText")}
          </h1>

          <Link to="/" className="my-2 textYellow">
            <div className="d-flex align-items-end">
              <div>
                <IoIosArrowRoundBack size={42} />
              </div>
              <div>
                <h5> {t("termAndCondition.backButtonText")}</h5>
              </div>
            </div>
          </Link>

          {type === "general" && (
            <>
              <h6 className="fw-bold">
                {t("termAndCondition.general.welcomeText")}
              </h6>
              <p align="justify">
                {t("termAndCondition.general.welcomeDescriptionText")}
                <br />
                <br />
              </p>

              <div>
                <h6 className="fw-bold">
                  {t("termAndCondition.general.sectionOneHeadingText")}
                </h6>
                <p align="justify">
                  {t("termAndCondition.general.sectionOneDescriptionOneText")}{" "}
                  <br />
                  {sectionOne.map((item, index) => {
                    return (
                      <div key={index}>
                        <span className="fw-bold">{item.heading}</span>
                        {item.description}
                        <br />
                      </div>
                    );
                  })}
                </p>
              </div>
            </>
          )}

          <Row className="justify-content-center mb-3">
            <Col md={4}>
              <Link to="/">
                <OutlineBtn
                  className="w-100 py-3"
                  text={t("termAndCondition.doneButtonText")}
                />
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TermAndCondition;
