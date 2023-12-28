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
  const sectionTwo = [
    {
      description: t("termAndCondition.general.sectionTwoDescriptionOneText"),
    },
    {
      description: t("termAndCondition.general.sectionTwoDescriptionTwoText"),
    },
    {
      description: t("termAndCondition.general.sectionTwoDescriptionThreeText"),
    },
    {
      description: t("termAndCondition.general.sectionTwoDescriptionFourText"),
    },
  ];
  const sectionThree = [
    {
      description: t("termAndCondition.general.sectionThreeDescriptionOneText"),
    },
    {
      description: t("termAndCondition.general.sectionThreeDescriptionTwoText"),
    },
    {
      description: t(
        "termAndCondition.general.sectionThreeDescriptionThreeText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionThreeDescriptionFourText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionThreeDescriptionFiveText"
      ),
    },
    {
      description: t("termAndCondition.general.sectionThreeDescriptionSixText"),
    },
    {
      description: t(
        "termAndCondition.general.sectionThreeDescriptionSevenText"
      ),
    },
  ];
  const sectionFour = [
    {
      description: t("termAndCondition.general.sectionFourDescriptionOneText"),
    },
    {
      description: t("termAndCondition.general.sectionFourDescriptionTwoText"),
    },
    {
      description: t(
        "termAndCondition.general.sectionFourDescriptionThreeText"
      ),
    },
    {
      description: t("termAndCondition.general.sectionFourDescriptionFourText"),
    },
    {
      description: t("termAndCondition.general.sectionFourDescriptionFiveText"),
    },
    {
      description: t("termAndCondition.general.sectionFourDescriptionSixText"),
    },
    {
      description: t(
        "termAndCondition.general.sectionFourDescriptionSevenText"
      ),
    },
  ];
  const sectionFive = [
    {
      description: t("termAndCondition.general.sectionFiveDescriptionOneText"),
    },
    {
      description: t("termAndCondition.general.sectionFiveDescriptionTwoText"),
    },
    {
      description: t(
        "termAndCondition.general.sectionFiveDescriptionThreeText"
      ),
    },
    {
      description: t("termAndCondition.general.sectionFiveDescriptionFourText"),
    },
  ];
  const sectionSix = [
    {
      description: t("termAndCondition.general.sectionSixDescriptionOneText"),
    },
    {
      description: t("termAndCondition.general.sectionSixDescriptionTwoText"),
    },
    {
      description: t("termAndCondition.general.sectionSixDescriptionThreeText"),
    },
    {
      description: t("termAndCondition.general.sectionSixDescriptionFourText"),
    },
  ];
  const sectionSeven = [
    {
      description: t("termAndCondition.general.sectionSevenDescriptionOneText"),
    },
    {
      description: t("termAndCondition.general.sectionSevenDescriptionTwoText"),
    },
    {
      description: t(
        "termAndCondition.general.sectionSevenDescriptionThreeText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionSevenDescriptionFourText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionSevenDescriptionFiveText"
      ),
    },
    {
      description: t("termAndCondition.general.sectionSevenDescriptionSixText"),
    },
    {
      description: t(
        "termAndCondition.general.sectionSevenDescriptionSevenText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionSevenDescriptionEightText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionSevenDescriptionNineText"
      ),
    },
    {
      description: t("termAndCondition.general.sectionSevenDescriptionTenText"),
    },
  ];
  const sectionEight = [
    {
      description: t("termAndCondition.general.sectionEightDescriptionOneText"),
    },
    {
      description: t("termAndCondition.general.sectionEightDescriptionTwoText"),
    },
    {
      description: t(
        "termAndCondition.general.sectionEightDescriptionThreeText"
      ),
    },
  ];
  const sectionNine = [
    {
      description: t("termAndCondition.general.sectionNineDescriptionOneText"),
    },
    {
      description: t("termAndCondition.general.sectionNineDescriptionTwoText"),
    },
    {
      description: t(
        "termAndCondition.general.sectionNineDescriptionThreeText"
      ),
    },
    {
      description: t("termAndCondition.general.sectionNineDescriptionFourText"),
    },
    {
      description: t("termAndCondition.general.sectionNineDescriptionFiveText"),
    },
    {
      description: t("termAndCondition.general.sectionNineDescriptionSixText"),
    },
    {
      description: t(
        "termAndCondition.general.sectionNineDescriptionSevenText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionNineDescriptionEightText"
      ),
    },
    {
      description: t("termAndCondition.general.sectionNineDescriptionNineText"),
    },
    {
      description: t("termAndCondition.general.sectionNineDescriptionTenText"),
    },
    {
      description: t(
        "termAndCondition.general.sectionNineDescriptionElevenText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionNineDescriptionTwelveText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionNineDescriptionThirteenText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionNineDescriptionFourteenText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionNineDescriptionFifteenText"
      ),
    },
  ];
  const sectionTen = [
    {
      description: t("termAndCondition.general.sectionTenDescriptionOneText"),
    },
    {
      description: t("termAndCondition.general.sectionTenDescriptionTwoText"),
    },
    {
      description: t("termAndCondition.general.sectionTenDescriptionThreeText"),
    },
    {
      description: t("termAndCondition.general.sectionTenDescriptionFourText"),
    },
    {
      description: t("termAndCondition.general.sectionTenDescriptionFiveText"),
    },
    {
      description: t("termAndCondition.general.sectionTenDescriptionSixText"),
    },
    {
      description: t("termAndCondition.general.sectionTenDescriptionSevenText"),
    },
    {
      description: t("termAndCondition.general.sectionTenDescriptionEightText"),
    },
    {
      description: t("termAndCondition.general.sectionTenDescriptionNineText"),
    },
    {
      description: t("termAndCondition.general.sectionTenDescriptionTenText"),
    },
    {
      description: t(
        "termAndCondition.general.sectionTenDescriptionElevenText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionTenDescriptionTwelveText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionTenDescriptionThirteenText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionTenDescriptionFourteenText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionTenDescriptionFifteenText"
      ),
    },
  ];
  const sectionEleven = [
    {
      description: t(
        "termAndCondition.general.sectionElevenDescriptionOneText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionElevenDescriptionTwoText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionElevenDescriptionThreeText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionElevenDescriptionFourText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionElevenDescriptionFiveText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionElevenDescriptionSixText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionElevenDescriptionSevenText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionElevenDescriptionEightText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionElevenDescriptionNineText"
      ),
    },
  ];
  const sectionTwelve = [
    {
      description: t(
        "termAndCondition.general.sectionTwelveDescriptionOneText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionTwelveDescriptionTwoText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionTwelveDescriptionThreeText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionTwelveDescriptionFourText"
      ),
    },
  ];
  const sectionFourteen = [
    {
      description: t(
        "termAndCondition.general.sectionFourteenDescriptionOneText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionFourteenDescriptionTwoText"
      ),
    },
    {
      description: t(
        "termAndCondition.general.sectionFourteenDescriptionThreeText"
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
                <h6 className="fw-bold">
                  {t("termAndCondition.general.sectionTwoHeadingText")}
                </h6>
                <ol align="justify">
                  {sectionTwo.map((item, index) => {
                    return <li key={index}>{item.description}</li>;
                  })}
                </ol>
                <h6 className="fw-bold">
                  {t("termAndCondition.general.sectionThreeHeadingText")}
                </h6>
                <ol align="justify">
                  {sectionThree.map((item, index) => {
                    return <li key={index}>{item.description}</li>;
                  })}
                </ol>
                <h6 className="fw-bold">
                  {t("termAndCondition.general.sectionFourHeadingText")}
                </h6>
                <ol align="justify">
                  {sectionFour.map((item, index) => {
                    return <li key={index}>{item.description}</li>;
                  })}
                </ol>
                <h6 className="fw-bold">
                  {t("termAndCondition.general.sectionFiveHeadingText")}
                </h6>
                <ol align="justify">
                  {sectionFive.map((item, index) => {
                    return <li key={index}>{item.description}</li>;
                  })}
                </ol>
                <h6 className="fw-bold">
                  {t("termAndCondition.general.sectionSixHeadingText")}
                </h6>
                <p align="justify">
                  {t("termAndCondition.general.sectionSixMainDescriptionText")}{" "}
                  <br />
                  <ol>
                    {sectionSix.map((item, index) => {
                      return <li key={index}>{item.description}</li>;
                    })}
                  </ol>
                </p>
                <h6 className="fw-bold">
                  {t("termAndCondition.general.sectionSevenHeadingText")}
                </h6>
                <ol align="justify">
                  {sectionSeven.map((item, index) => {
                    return <span key={index}>{item.description}</span>;
                  })}
                </ol>
                <h6 className="fw-bold">
                  {t("termAndCondition.general.sectionEightHeadingText")}
                </h6>
                <ol align="justify">
                  {sectionEight.map((item, index) => {
                    return (
                   
                      
                        <li key={index}>
                        {item.description}
                        </li> 
                        
                  
                    );
                  })}
                </ol>
                <h6 className="fw-bold">
                  {t("termAndCondition.general.sectionNineHeadingText")}
                </h6>
                <p align="justify">
                  {t("termAndCondition.general.sectionNineMainDescriptionText")}{" "}
                  <br />
                  <ol>
                  {sectionNine.map((item, index) => {
                    return (
                  
                       
                        <li key={index}>
                        {item.description}
                        </li> 
                      
                   
                    );
                  })}
                  </ol>
                </p>
                <h6 className="fw-bold">
                  {t("termAndCondition.general.sectionTenHeadingText")}
                </h6>
                <ol align="justify">
                  {sectionTen.map((item, index) => {
                    return <li key={index}>{item.description}</li>;
                  })}
                </ol>

                <h6 className="fw-bold">
                  {t("termAndCondition.general.sectionElevenHeadingText")}
                </h6>
                <p align="justify">
                  {t(
                    "termAndCondition.general.sectionElevenMainDescriptionText"
                  )}{" "}
                  <br />
                  <ol>

                
                  {sectionEleven.map((item, index) => {
                    return (
                   
                     
                        <li key={index}>
                        {item.description}
                        </li> 
                   
                    
                    );
                  })}
                    </ol>
                </p>
                <h6 className="fw-bold">
                  {t("termAndCondition.general.sectionTwelveHeadingText")}
                </h6>
                <p align="justify">
                  <ol>

                 
                  {sectionTwelve.map((item, index) => {
                    return (
                     
                     
                        <li  key={index}>
                          {item.description}
                        </li> 
                      
                   
                    );
                  })}
                   </ol>
                </p>
                <h6 className="fw-bold">
                  {t("termAndCondition.general.sectionThirteenHeadingText")}
                </h6>
                <p align="justify">
                  {t(
                    "termAndCondition.general.sectionThirteenDescriptionOneText"
                  )}{" "}
                </p>
                <h6 className="fw-bold">
                  {t("termAndCondition.general.sectionFourteenHeadingText")}
                </h6>
                <p align="justify">
                  <ol>
                  {sectionFourteen.map((item, index) => {
                    return (
                     
                        <li key={index}>
                        {item.description}
                        </li> 
                   
                     
                    );
                  })}
                  </ol>
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
