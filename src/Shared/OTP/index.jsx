import OTPInput from "otp-input-react";
import FillBtn from "../Buttons/FillBtn";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import React, { useCallback, useState } from "react";
import InformationModal from "../Modal/InformationModal";

const OTPVerification = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("");
  const [OTP, setOTP] = useState("");
  const [showWrongOtpModal, setShowWrongOtpModal] = useState(false);

  const handleNextClick = useCallback(() => {
    setShowWrongOtpModal(true);
  }, []);

  const handleWrongOtpModalClose = useCallback(() => {
    setShowWrongOtpModal(false);
  }, []);

  const handleOkayClick = useCallback(() => {
    navigate("/changePassword");
  }, [navigate]);

  return (
    <Container className={`h-100 text-black-custom ${styles.otpContainer}`}>
      <Row className={`h-100 justify-content-center ${styles.otpWrapper}`}>
        <Col md={4} className={`text-center py-3 ${styles.otpCol}`}>
          <h1 className="my-5 fw-400 fw-bold">{t("otpVerification.verificationText")}</h1>
          <p className="mb-5 fs-4 lh-1 px-5">
          {t("otpVerification.openYourEmailText")}
          </p>

          <OTPInput
            className={`${styles.otpInputs}`}
            value={OTP}
            onChange={setOTP} 
            autoFocus={true}
            OTPLength={4}
            otpType="number"
            disabled={false}
          />

          <p className="mb-0 fw-bold">{t("otpVerification.didNotRecieveCodeText")}</p>
          <p to="#0" className="text-black-custom">
          {t("otpVerification.resendCodeInText")} <span className="textYellow fw-bold">00:60</span>
          </p>
          <p className="pb-2 fw-bold textYellow">{t("otpVerification.resendCodeText")}</p>

          <FillBtn
            text={t("otpVerification.nextText")}
            className="w-100 py-2 mt-3"
            handleOnClick={handleNextClick}
          />
          <InformationModal
            size={"md"}
            TOneClassName={"fw-bold mb-4 fs-5 text-center"}
            className={"p-4"}
            isOpen={showWrongOtpModal}
            onClose={handleWrongOtpModalClose}
            ModalTextOne= {t("otpVerification.invalidOtpModalText")}
            ButtonOne={
              <FillBtn
                text={t("otpVerification.okayText")}
                className="py-2 px-5"
                handleOnClick={handleOkayClick}
              />
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default OTPVerification;
