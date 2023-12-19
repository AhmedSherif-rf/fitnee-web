import InputField from "../InputField";
import FillBtn from "../Buttons/FillBtn";
import { useNavigate, Link } from "react-router-dom";
import OutlineBtn from "../Buttons/OutlineBtn";
import React, { memo, useCallback } from "react";
import { Col, Container, Form, Row } from "reactstrap";
import Images from "../../HelperMethods/Constants/ImgConstants";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  const handleCancelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleSendClick = useCallback(() => {
    navigate("/verifyOTP");
  }, [navigate]);

  return (
    <Container>
      <Row className="justify-content-center text-black-custom align-items-center vh-100">
        <Col lg={7} md={12} sm={10}>
          <h1 className="text-center mb-5 fs-1 fw-bold">Forgot Password</h1>

          <Form>
            <InputField
              placeholder={"Type your email"}
              type="email"
              icon={<img src={Images.PASSWORD_ICON_IMG} alt="email-icon" />}
              className={"mb-3 py-3 px-5"}
            />
            <Link to="/signIn" className="mt-5 textYellow">
              I know my password take me back to login
            </Link>

            <FillBtn
              className="w-100 py-3 mb-2"
              text={"Send"}
              handleOnClick={handleSendClick}
            />
            <OutlineBtn
              className="w-100 py-3"
              text={"Cancel"}
              handleOnClick={handleCancelClick}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(ForgotPasswordForm);
