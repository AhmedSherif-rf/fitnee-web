import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import ContactUsWrapper from "../../../Shared/ContactUs/ContactUsWrapper";

const ContactUsData = [
  {
    CompStyle: { backgroundImage: `url(${Images.LOGIN_BG_IMG})` },
    text1: (
      <div className="text-center">
        <Link to="/">
          <img className="img-fluid w-25 m-3" src={Images.LOGO_IMG} alt={""} />
        </Link>
      </div>
    ),
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

const ContactUs = () => {
  return (
    <Container fluid className="vh-100">
      {ContactUsData?.map((item) => (
        <ContactUsWrapper
          CompStyle={item.CompStyle}
          text1={item.text1}
          text2={item.text2}
          text3={item.text3}
        />
      ))}
    </Container>
  );
};

export default ContactUs;
