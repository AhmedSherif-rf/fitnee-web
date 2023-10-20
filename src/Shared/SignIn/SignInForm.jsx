import Checkbox from "../Checkbox";
import InputField from "../InputField";
import FillBtn from "../Buttons/FillBtn";
import OutlineBtn from "../Buttons/OutlineBtn";
import React, { memo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Form, Row } from "reactstrap";
import Images from "../../HelperMethods/Constants/ImgConstants";

const SignInForm = () => {
  const navigate = useNavigate();

  const handleCancelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col lg={7} md={12} sm={10} className="">
          <h1 className="text-center mb-5">SignIn</h1>
          <Form>
            <InputField
              placeholder={"Type your email"}
              type="email"
              icon={<img src={Images.EMAIL_ICON} alt="email-icon" />}
              className={"mb-3 py-3 px-5"}
            />
            <InputField
              placeholder={"Type your password"}
              type="password"
              icon={<img src={Images.PERSON_ICON} alt="password-icon" />}
              className={"mb-1 py-3 px-5"}
            />
            <p className="text-end textYellow">Forgot Password?</p>
            <div className="d-flex mb-2">
              <Checkbox
                label={
                  <p className="mb-0 fs-6">
                    Agree on Fitnee's{" "}
                    <Link to="/termAndCondition">
                      <span className="textYellow">terms and conditions</span>
                    </Link>
                  </p>
                }
                name={"termAndConditionCheck"}
              />
            </div>
            <FillBtn className="w-100 py-3 mb-3" text={"Sign In"} />
            <OutlineBtn
              className="w-100 py-3 text-dark"
              text={"Cancel"}
              handleOnClick={handleCancelClick}
            />
            <p className="pt-3 text-center">
              New Here?{" "}
              <Link to="/registerAs" className="textYellow">
                Create Account
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(SignInForm);
