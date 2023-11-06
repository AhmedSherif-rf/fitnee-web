import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import ResetPasswordWrapper from "../../../Shared/ResetPassword/ResetPasswordWrapper";
import Images from "../../../HelperMethods/Constants/ImgConstants";

const ResetData = [
  {
    CompStyle: { backgroundImage: `url(${Images.LOGIN_BG_IMG})` },
    text1: "",
    text2: (
      <div className="text-center">
        <h1 className="fw-bold text-white">Unlock your potential</h1>
        <span className="fs-4 text-white fst-italic">
          & transform your body
        </span>
      </div>
    ),
    text3: <h6 className="small text-center text-white">www.fitnee.com</h6>,
  },
];

const ResetPassword = () => {
  return (
    <Container fluid className="vh-100">
      {ResetData?.map((item) => (
        <ResetPasswordWrapper
          CompStyle={item.CompStyle}
          text1={item.text1}
          text2={item.text2}
          text3={item.text3}
        />
      ))}
    </Container>
  );
};
export default ResetPassword;
