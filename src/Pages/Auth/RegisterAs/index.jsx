import styles from "./style.module.scss";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import { useTranslation } from "react-i18next";
const RegisterAs = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation("");

  const handleAsGuestClick = useCallback(() => {
    navigate("/guest/serviceProviderList");
  }, [navigate]);

  return (
    <Container fluid className={`vh-100 ${styles.registerAsContainer}`}>
      <Row
        className={`justify-content-center vh-100 bgProperties ${styles.registerAsWrapper}`}
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${Images.REGISTER_AS_BG})`,
        }}
      >
        <Col md={4} className={`${styles.registerAsContent}`}>
          <h2 className=" mb-5 text-center text-white">{t("registerAs.registerAsText")}</h2>
          <div className="">
            <FillBtn className="w-100 mb-3 py-2" text= {t("registerAs.traineeText")}/>
            <FillBtn className="w-100 mb-3 py-2" text={t("registerAs.trainerText")} />
            <FillBtn className="w-100 mb-3 py-2" text={t("registerAs.nutritionistText")} />
            <FillBtn
              className="w-100 mb-3 py-2"
              text={t("registerAs.guestText")}
              handleOnClick={handleAsGuestClick}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterAs;
