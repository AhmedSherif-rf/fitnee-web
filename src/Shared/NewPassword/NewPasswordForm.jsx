import { Formik } from "formik";
import InputField from "../InputField";
import FillBtn from "../Buttons/FillBtn";
import { useNavigate } from "react-router-dom";
import OutlineBtn from "../Buttons/OutlineBtn";
import { useTranslation } from "react-i18next";
import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Form, Row } from "reactstrap";
import { NEW_PASSWORD_URL } from "../../utils/constants";
import LoadingScreen from "../../HelperMethods/LoadingScreen";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { NEW_PASSWORD_SCHEMA } from "../ValidationData/validation";
import { NEW_PASSWORD_INITIAL_VALUES } from "../ValidationData/initialValue";
import { newPassword } from "../../Redux/features/ForgotPassword/forgotPasswordApi";

const NewPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("");
  const { loading, email } = useSelector((state) => state.forgotPassword);

  const handleCancelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleNewPasswordSubmit = (values) => {
    const data = {
      apiEndpoint: NEW_PASSWORD_URL,
      requestData: JSON.stringify({ ...values, email }),
    };
    dispatch(newPassword(data)).then((res) => {
      if (res.type === "newPassword/fulfilled") {
        navigate("/signIn");
      }
    });
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        {loading === "pending" && <LoadingScreen />}
        <Col lg={7} md={12} sm={10}>
          <h1 className="text-center mb-5">
            {t("changePassword.newPasswordText")}
          </h1>
          <Formik
            initialValues={{ ...NEW_PASSWORD_INITIAL_VALUES }}
            validationSchema={NEW_PASSWORD_SCHEMA}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              handleNewPasswordSubmit(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <InputField
                  type="password"
                  name="new_password"
                  placeholder={"New Password"}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.new_password}
                  icon={
                    <img src={Images.PASSWORD_ICON_IMG} alt="password-icon" />
                  }
                  className={
                    "form-control-lg BorderRadiusInput py-3 px-5 mb-1 mt-1"
                  }
                />
                <p className="errorField">
                  {errors.new_password &&
                    touched.new_password &&
                    errors.new_password}
                </p>

                <InputField
                  type="password"
                  name="confirm_password"
                  placeholder={"Confirm Password"}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.confirm_password}
                  icon={
                    <img src={Images.PASSWORD_ICON_IMG} alt="password-icon" />
                  }
                  className={
                    "form-control-lg BorderRadiusInput py-3 px-5 mb-1 mt-1"
                  }
                />
                <p className="errorField">
                  {errors.confirm_password &&
                    touched.confirm_password &&
                    errors.confirm_password}
                </p>

                <FillBtn
                  className="w-100 py-3 mb-3 mt-5"
                  text={"Confirm"}
                  type={"submit"}
                  handleOnClick={handleSubmit}
                  disabled={loading === "pending" ? true : false}
                />
                <OutlineBtn
                  className="w-100 py-3"
                  text={"Cancel"}
                  handleOnClick={handleCancelClick}
                />
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(NewPasswordForm);
