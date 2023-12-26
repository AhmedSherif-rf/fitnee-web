import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import { IoIosArrowRoundBack } from "react-icons/io";
import OutlineBtn from "../../../Shared/Buttons/OutlineBtn";

const TermAndCondition = () => {
  const { t } = useTranslation("");
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <h1 className="text-center my-4 f-w-bold ">
            {t("termAndCondition.termAndConditionHeadingText")}
          </h1>

          <Link  to="/" className="my-2 textYellow">
            <div className="d-flex align-items-end">
              <div> <IoIosArrowRoundBack size={42} /></div>
            <div> <h5>  {t("termAndCondition.backButtonText")}</h5> </div> 
            </div>
              
          </Link>
          <p align="justify">
          {t("termAndCondition.term1Text")}
            <br />
            <br />
            {t("termAndCondition.term2Text")}
            <br />
            <br />{t("termAndCondition.term3Text")}
            <br />
            <br />  
            {t("termAndCondition.term4Text")}
          </p>
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
