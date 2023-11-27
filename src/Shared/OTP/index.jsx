import OTPInput from "otp-input-react";
import { Link } from "react-router-dom";
import FillBtn from "../Buttons/FillBtn";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import React, { useCallback, useState } from "react";
import InformationModal from "../Modal/InformationModal";

const OTPVerification = () => {
  const navigate = useNavigate();
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
          <h1 className="my-5 fw-400 fw-bold">Verification</h1>
          <p className="mb-5 fs-4 lh-1 px-5">
            Open your email and insert the code{" "}
          </p>

          <OTPInput
            className={styles.otpInputs}
            value={OTP}
            onChange={setOTP}
            autoFocus={true}
            OTPLength={4}
            otpType="number"
            disabled={false}
          />

          <p className="mb-0">I Didn't Receive a Code!</p>
          <Link to="#0" className="pb-5 textYellow">
            Resend code
          </Link>

          <FillBtn
            text="Next"
            className="w-100 py-2 mt-5"
            handleOnClick={handleNextClick}
          />
          <InformationModal
            size={"md"}
            TOneClassName={"fw-bold mb-4 fs-5 text-center"}
            className={"p-4"}
            isOpen={showWrongOtpModal}
            onClose={handleWrongOtpModalClose}
            ModalTextOne={"You entered an Invalid OTP, please try again"}
            ButtonOne={
              <FillBtn
                text={"Okay"}
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
