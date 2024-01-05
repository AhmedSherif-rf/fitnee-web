import { Formik } from "formik";
import React, { memo } from "react";
import InputField from "../InputField";
import FillBtn from "../Buttons/FillBtn";
import { useNavigate } from "react-router-dom";
import { Col, Container, Form, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../../HelperMethods/LoadingScreen";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { changePassword } from "../../Redux/features/User/userApi";
import { TRAINEE_CHANGE_PASSWORD_URL } from "../../utils/constants";
import { CHANGE_PASSWORD_SCHEMA } from "../ValidationData/validation";
import { CHANGE_PASSWORD_INITIAL_VALUES } from "../ValidationData/initialValue";

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  const handleChangePasswordSubmit = (values, resetForm) => {
    const data = {
      apiEndpoint: TRAINEE_CHANGE_PASSWORD_URL,
      requestData: JSON.stringify(values),
      navigate,
    };
    dispatch(changePassword(data)).then((res) => {
      if (res.type === "changePassword/fulfilled") {
        resetForm();
      }
    });
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        {loading === "pending" && <LoadingScreen />}
        <Col lg={7} md={12} sm={10}>
          <h1 className="text-center mb-5">Change Password</h1>
          <Formik
            initialValues={{ ...CHANGE_PASSWORD_INITIAL_VALUES }}
            validationSchema={CHANGE_PASSWORD_SCHEMA}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              handleChangePasswordSubmit(values, resetForm);
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
                  name="previous_password"
                  placeholder={"Previous Password"}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.previous_password}
                  icon={
                    <img src={Images.PASSWORD_ICON_IMG} alt="password-icon" />
                  }
                  className={
                    "form-control-lg BorderRadiusInput py-3 px-5 mb-1 mt-1"
                  }
                />
                <p className="errorField">
                  {errors.previous_password &&
                    touched.previous_password &&
                    errors.previous_password}
                </p>

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
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(ResetPasswordForm);
