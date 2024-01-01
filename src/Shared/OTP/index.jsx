import OTPInput from "otp-input-react";
import FillBtn from "../Buttons/FillBtn";
import styles from "./style.module.scss";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../../HelperMethods/LoadingScreen";
import { setEmail } from "../../Redux/features/User/userSlice";
import {
  resendOtp,
  verifyOtp,
} from "../../Redux/features/ForgotPassword/forgotPasswordApi";
import {
  FORGOT_PASSWORD_VERIFY_URL,
  FORGOT_PASSWORD_RESEND_OTP_URL,
} from "../../utils/constants";

const OTPVerification = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState({ minutes: 1, seconds: 59 });
  const { email: userEmail } = useSelector((state) => state.user);
  const { forgotPasswordEmail, loading } = useSelector(
    (state) => state.forgotPassword
  );

  useEffect(() => {
    const otpTimeInterval = setInterval(() => {
      if (timer.seconds > 0) {
        setTimer({ ...timer, seconds: timer.seconds - 1 });
      }
      if (timer.seconds === 0) {
        if (timer.minutes === 0) {
          clearInterval(otpTimeInterval);
        } else {
          setTimer({ minutes: timer.minutes - 1, seconds: 59 });
        }
      }
    }, 1000);

    return () => {
      clearInterval(otpTimeInterval);
    };
  }, [timer]);

  const handleNextClick = () => {
    let email = "";
    if (type === "forgotPassword" || type === "signUp") {
      email = type === "forgotPassword" ? forgotPasswordEmail : userEmail;
    }
    const data = {
      apiEndpoint: FORGOT_PASSWORD_VERIFY_URL,
      requestData: JSON.stringify({ email, otp }),
    };
    dispatch(verifyOtp(data)).then((res) => {
      if (res.type === "verifyOtp/fulfilled") {
        if (type === "forgotPassword") {
          navigate("/changePassword");
        } else {
          dispatch(setEmail(""));
          navigate("/signIn");
        }
      }
    });
  };

  const handleResendClick = () => {
    let email = "";
    if (type === "forgotPassword" || type === "signUp") {
      email = type === "forgotPassword" ? forgotPasswordEmail : userEmail;
    }
    if (timer.seconds === 0 && timer.minutes === 0) {
      if (type === "forgotPassword" || type === "signUp") {
        const data = {
          apiEndpoint: FORGOT_PASSWORD_RESEND_OTP_URL,
          requestData: JSON.stringify({ email }),
        };
        dispatch(resendOtp(data)).then((res) => {
          if (res.type === "resendOtp/fulfilled") {
            setOtp("");
            setTimer({ minutes: 1, seconds: 59 });
          }
        });
      }
    }
  };

  return (
    <Container className={`vh-100 text-black-custom ${styles.otpContainer}`}>
      <Row className={`h-100 justify-content-center ${styles.otpWrapper}`}>
        {loading === "pending" && <LoadingScreen />}
        <Col md={4} className={`text-center py-3 ${styles.otpCol}`}>
          <h1 className="my-5 fw-400 fw-bold">
            {t("otpVerification.verificationText")}
          </h1>
          <p className="mb-5 fs-4 lh-1 px-5">
            {t("otpVerification.openYourEmailText")}
          </p>

          <OTPInput
            className={`${styles.otpInputs}`}
            value={otp}
            onChange={setOtp}
            autoFocus={true}
            OTPLength={6}
            otpType="number"
            disabled={false}
          />

          <p className="mb-0 fw-bold">
            {t("otpVerification.didNotRecieveCodeText")}
          </p>
          <p className="text-black-custom">
            {t("otpVerification.resendCodeInText")}{" "}
            <span className="textYellow fw-bold">
              {timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}:
              {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
            </span>
          </p>
          <p
            className={`pb-2 fw-bold ${
              timer.seconds !== 0 || timer.minutes !== 0
                ? "text-muted"
                : "cursorPointer textYellow"
            }`}
            onClick={() => handleResendClick()}
          >
            {t("otpVerification.resendCodeText")}
          </p>

          <FillBtn
            text={t("otpVerification.nextText")}
            className="w-100 py-2 mt-3"
            disabled={otp.length < 6 ? true : false}
            handleOnClick={handleNextClick}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default OTPVerification;
