import Checkbox from "../Checkbox";
import InputField from "../InputField";
import FillBtn from "../Buttons/FillBtn";
import OutlineBtn from "../Buttons/OutlineBtn";
import React, { memo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Form, Row } from "reactstrap";
import Images from "../../HelperMethods/Constants/ImgConstants";

const ResetPasswordForm = () => {
  const navigate = useNavigate();

  const handleCancelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col lg={7} md={12} sm={10}>
          <h1 className="text-center mb-5">Change Password</h1>
          <Form>
            <InputField
              placeholder={"Current Password"}
              type="password"
              icon={<img src={Images.PASSWORD_ICON_IMG} alt="password-icon" />}
              className={"mb-2 py-3 px-5"}
            />
            <InputField
              placeholder={"New Password"}
              type="password"
              icon={<img src={Images.PASSWORD_ICON_IMG} alt="password-icon" />}
              className={"mb-2 py-3 px-5"}
            />
            <InputField
              placeholder={"Confirm Password"} 
              type="password"
              icon={<img src={Images.PASSWORD_ICON_IMG} alt="password-icon" />}
              className={"mb-2 py-3 px-5"}
            />

            <FillBtn className="w-100 py-3 mb-3 mt-5" text={"Confirm"} />
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

export default memo(ResetPasswordForm);
