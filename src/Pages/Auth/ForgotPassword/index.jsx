import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import ForgotPasswordWrapper from "../../../Shared/ForgotPassword/ForgotPasswordWrapper";

const ForgotPasswordData = {
  CompStyle: { backgroundImage: `url(${Images.LOGIN_BG_IMG})` },
  text1: (
    <div className="text-center">
      <Link to="/">
        <img className="img-fluid w-25 m-3" src={Images.LOGO_IMG} alt={""} />
      </Link>
    </div>
  ),
  text2: (
    <div className="text-center lh-1">
      <h1 className="fw-bold fs-1 text-white">Unlock your potential</h1>
      <span className="fs-2 text-white fst-italic">& transform your body</span>
    </div>
  ),
  text3: <h6 className="small text-center text-white">www.fitnee.com</h6>,
};

const ForgotPassword = () => {
  const { i18n } = useTranslation("");

  return (
    <Container fluid className={`vh-100 ${i18n.dir()}`}>
      <ForgotPasswordWrapper
        CompStyle={ForgotPasswordData.CompStyle}
        text1={ForgotPasswordData.text1}
        text2={ForgotPasswordData.text2}
        text3={ForgotPasswordData.text3}
      />
    </Container>
  );
};

export default ForgotPassword;
