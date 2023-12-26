import { Formik } from "formik";
import Toaster from "../Toaster";
import Checkbox from "../Checkbox";
import InputField from "../InputField";
import FillBtn from "../Buttons/FillBtn";
import { useTranslation } from "react-i18next";
import OutlineBtn from "../Buttons/OutlineBtn";
import React, { memo, useCallback } from "react";
import { SIGNIN_SCHEMA } from "./data/validation";
import { LOGIN_URL } from "../../utils/constants";
import { INITIAL_VALUES } from "./data/initialValue";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Form, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/features/User/userApi";
import LoadingScreen from "../../HelperMethods/LoadingScreen";
import Images from "../../HelperMethods/Constants/ImgConstants";

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("");
  const { loading } = useSelector((state) => state.user);

  const handleLoginSubmit = (values) => {
    const data = {
      apiEndpoint: LOGIN_URL,
      requestData: JSON.stringify(values),
    };
    dispatch(login(data)).then((res) => {
      if (res.type === "login/fulfilled") {
        import("../../../src/utils/constants").then((item) => {
          switch (res?.payload?.data?.role) {
            case item.TRAINEE_ROLE:
              navigate(item.TRAINEE_INITIAL_URL);
              break;
            case item.TRAINER_ROLE:
              navigate(item.SERVICE_PROVIDER_INITIAL_URL);
              break;
            default:
              navigate("/default-dashboard");
          }
        });
        Toaster.success("Logged in successfully");
      }
    });
  };

  const handleCancelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Container>
      <Row className="justify-content-center text-black-custom align-items-center vh-100">
        {loading === "pending" && <LoadingScreen />}
        <Col lg={7} md={12} sm={10}>
          <h1 className="text-center mb-5 fs-1 fw-bold">
            {" "}
            {t("login.loginText")}
          </h1>
          <Formik
            initialValues={{ ...INITIAL_VALUES }}
            validationSchema={SIGNIN_SCHEMA}
            validate={(values) => {}}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              handleLoginSubmit(values);
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
                  type="email"
                  name="email"
                  placeholder={t("login.emailText")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.email}
                  icon={<img src={Images.EMAIL_ICON} alt="email-icon" />}
                  className={"form-control-lg BorderRadiusInput py-3 px-5"}
                />
                <p className="errorField">
                  {errors.email && touched.email && errors.email}
                </p>
                <InputField
                  type="password"
                  name="password"
                  placeholder={t("login.passwordText")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.password}
                  icon={
                    <img src={Images.PASSWORD_ICON_IMG} alt="password-icon" />
                  }
                  className={
                    "form-control-lg BorderRadiusInput py-3 px-5 mb-1 mt-3"
                  }
                />
                <p className="errorField">
                  {errors.password && touched.password && errors.password}
                </p>

                <Link to="/forgotPassword">
                  <p className="text-end textYellow">
                    {t("login.forgotPasswordText")}
                  </p>
                </Link>
                <div className="d-flex mb-1">
                  <Checkbox
                    label={
                      <p className="mb-0 fs-6">
                        {t("login.agreeOnFitneeText")}
                        <Link to="/termAndCondition">
                          <span className="textYellow">
                            {" "}
                            {t("login.termsAndConditionsText")}
                          </span>
                        </Link>
                      </p>
                    }
                    name={"termAndConditionCheck"}
                    onChangeHandle={handleChange}
                    onBlurHandle={handleBlur}
                    checked={values.termAndConditionCheck}
                  />
                </div>
                <p className="errorField mb-2">
                  {errors.termAndConditionCheck &&
                    touched.termAndConditionCheck &&
                    errors.termAndConditionCheck}
                </p>
                <FillBtn
                  className="w-100 py-3 mb-3"
                  text={t("login.signInText")}
                  disabled={loading === "pending" ? true : false}
                  type={"submit"}
                />
                <OutlineBtn
                  className="w-100 py-3"
                  text={t("login.cancelText")}
                  handleOnClick={handleCancelClick}
                />
                <p className="pt-3 text-center">
                  {t("login.newHereText")}
                  <Link to="/registerAs" className="textYellow">
                    {t("login.createAccountText")}
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(SignInForm);
