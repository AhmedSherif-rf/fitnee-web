import { Formik } from "formik";
import "./CreditCardStyle.scss";
import InputField from "../InputField";
import FillBtn from "../Buttons/FillBtn";
import ToggleSwitch from "../ToggleSwitch";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import functions from "../../utils/functions";
import { useTranslation } from "react-i18next";
import SubHeading from "../Headings/SubHeading";
import { CURRENCY } from "../../utils/constants";
import PageHeading from "../Headings/PageHeading";
import { useDispatch, useSelector } from "react-redux";
import { PREPARE_CHECKOUT_URL } from "../../utils/constants";
import { Card, Col, Container, Row, Form } from "reactstrap";
import { CardBody, CardFooter, CardHeader } from "reactstrap";
import LoadingScreen from "../../HelperMethods/LoadingScreen";
import Images from "../../HelperMethods/Constants/ImgConstants";
import "react-country-state-city/dist/react-country-state-city.css";
import React, { memo, useCallback, useState, useEffect } from "react";
import { PAYMENT_METHOD_DETAIL_SCHEMA } from "../ValidationData/validation";
import { getCheckoutId } from "../../Redux/features/Subscription/subscriptionApi";
import { PAYMENT_METHOD_DETAIL_INITIAL_VALUES } from "../ValidationData/initialValue";

const CreditCardDetailWrapper = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation("");
  const { user } = useSelector((state) => state.user);
  const { loading, subscriptionPlan, checkoutId, entity } = useSelector(
    (state) => state.subscription
  );
  const [summaryData, setSummaryData] = useState({
    grandTotal: subscriptionPlan.price,
    discount: 0,
    walletAmount: 0,
  });

  useEffect(() => {
    if (checkoutId) {
      const scriptUrl = `https://eu-test.oppwa.com/v1/paymentWidgets.js?checkoutId=${checkoutId}`;

      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [checkoutId]);

  const [countryData, setCountryData] = useState({
    countryId: "",
    stateId: "",
  });

  const handlePayClick = useCallback(
    (values) => {
      const data = {
        apiEndpoint: PREPARE_CHECKOUT_URL,
        requestData: JSON.stringify({
          ...values,
          amount: subscriptionPlan.price,
          email: user?.email,
          subscription_id: subscriptionPlan.id,
        }),
        entity: values.entity,
      };
      dispatch(getCheckoutId(data));
    },
    [dispatch, subscriptionPlan, user?.email]
  );

  return (
    <Container fluid className={`h-100 ${i18n.dir()}`}>
      {loading === "pending" && <LoadingScreen />}
      <Row className="h-100 CardDetails">
        <Col md={12}>
          <PageHeading
            headingText={t("cardDetails.PaymentMethodText")}
            className="mb-0"
            categoryText=""
          />
        </Col>
        <Col md={6}>
          {checkoutId && (
            <div className="text-center mt-4">
              {checkoutId && (
                <form
                  action={process.env.REACT_APP_HYPERPAY_REDIRECT_URL}
                  className="paymentWidgets"
                  data-brands={
                    entity === "VISA"
                      ? "MASTER VISA"
                      : entity === "MADA"
                      ? "MADA"
                      : entity === "APPLE_PAY"
                      ? "APPLEPAY"
                      : "STC_PAY"
                  }
                ></form>
              )}
            </div>
          )}
          {!checkoutId && (
            <Formik
              initialValues={{ ...PAYMENT_METHOD_DETAIL_INITIAL_VALUES }}
              validationSchema={PAYMENT_METHOD_DETAIL_SCHEMA}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                handlePayClick(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
              }) => (
                <Form onSubmit={handleSubmit}>
                  {console.log(errors)}
                  <Container>
                    <Row className="paymentMethodBtn py-4">
                      <Col md={4} className="mb-1">
                        <div
                          className={`d-flex align-items-center justify-content-between form-control-lg py-2 customDropdownRadius border bg-white cursorPointer ${
                            values.entity === "VISA" ? "selected" : ""
                          }`}
                          onClick={() => setFieldValue("entity", "VISA")}
                        >
                          <h6 className="mb-0 font14">VISA/Master</h6>
                          <img src={Images.VISA_ICON} alt="visa-icon" />
                        </div>
                      </Col>
                      <Col md={4} className="mb-1">
                        <div
                          className={`d-flex align-items-center justify-content-between form-control-lg py-2 customDropdownRadius border w-100 bg-white cursorPointer ${
                            values.entity === "MADA" ? "selected" : ""
                          }`}
                          onClick={() => setFieldValue("entity", "MADA")}
                        >
                          <h6 className="mb-0 font14">Mada</h6>
                          <img src={Images.MADA_ICON} alt="mada-icon" />
                        </div>
                      </Col>
                      <Col md={4} className="mb-1">
                        <div
                          className={`d-flex align-items-center justify-content-between form-control-lg py-2 customDropdownRadius border w-100 bg-white cursorPointer ${
                            values.entity === "APPLE_PAY" ? "selected" : ""
                          }`}
                          onClick={() => setFieldValue("entity", "APPLE_PAY")}
                        >
                          <h6 className="mb-0 font14">Apple pay</h6>
                          <img src={Images.APPLE_PAY_ICON} alt="mada-icon" />
                        </div>
                      </Col>
                      <Col md={4} className="mb-1">
                        <div
                          className={`d-flex align-items-center justify-content-between form-control-lg py-2 customDropdownRadius border w-100 bg-white cursorPointer ${
                            values.entity === "STC_PAY" ? "selected" : ""
                          }`}
                          onClick={() => setFieldValue("entity", "STC_PAY")}
                        >
                          <h6 className="mb-0 font14">STC pay</h6>
                          <img src={Images.STC_PAY_ICON} alt="mada-icon" />
                        </div>
                      </Col>
                      <p className="errorField">
                        {errors.entity && touched.entity && errors.entity}
                      </p>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <SubHeading
                          headingText={"Billing Address"}
                          className="mb-0"
                          categoryText=""
                        />
                      </Col>
                      <Col md={6} className="mb-2">
                        <InputField
                          type="text"
                          name="surname"
                          placeholder={"Surname"}
                          onChangeHandle={handleChange}
                          onBlurHandle={handleBlur}
                          value={values.surname}
                          icon={
                            <img src={Images.PERSON_ICON} alt="email-icon" />
                          }
                          className={
                            "form-control-lg BorderRadiusInput py-3 px-5"
                          }
                        />
                        <p className="errorField">
                          {errors.surname && touched.surname && errors.surname}
                        </p>
                      </Col>
                      <Col md={6} className="mb-2">
                        <InputField
                          type="text"
                          name="givenName"
                          placeholder={"Given name"}
                          onChangeHandle={handleChange}
                          onBlurHandle={handleBlur}
                          value={values.givenName}
                          icon={
                            <img src={Images.PERSON_ICON} alt="email-icon" />
                          }
                          className={
                            "form-control-lg BorderRadiusInput py-3 px-5"
                          }
                        />
                        <p className="errorField">
                          {errors.givenName &&
                            touched.givenName &&
                            errors.givenName}
                        </p>
                      </Col>
                      <Col md={6} className="mb-2">
                        <InputField
                          type="text"
                          name="postcode"
                          placeholder={"Postcode"}
                          onChangeHandle={handleChange}
                          onBlurHandle={handleBlur}
                          value={values.postcode}
                          icon={
                            <img src={Images.PERSON_ICON} alt="email-icon" />
                          }
                          className={
                            "form-control-lg BorderRadiusInput py-3 px-5"
                          }
                        />
                        <p className="errorField">
                          {errors.postcode &&
                            touched.postcode &&
                            errors.postcode}
                        </p>
                      </Col>
                      <Col md={6} className="mb-2">
                        <CountrySelect
                          def
                          onChange={(e) => {
                            setCountryData({ ...countryData, countryId: e.id });
                            setFieldValue("country", e.iso2);
                          }}
                          containerClassName={"countryContainerClass"}
                          placeHolder="Select Country"
                        />
                        <p className="errorField">
                          {errors.country && touched.country && errors.country}
                        </p>
                      </Col>

                      <Col md={6} className="mb-2">
                        <StateSelect
                          countryid={countryData.countryId}
                          onChange={(e) => {
                            setCountryData({ ...countryData, stateId: e.id });
                            setFieldValue("state", e.name);
                          }}
                          containerClassName={"countryContainerClass"}
                          placeHolder="Select State"
                        />
                        <p className="errorField">
                          {errors.state && touched.state && errors.state}
                        </p>
                      </Col>
                      <Col md={6} className="mb-2">
                        <CitySelect
                          countryid={countryData.countryId}
                          onChange={(e) => {
                            setFieldValue("city", e.name);
                          }}
                          containerClassName={"countryContainerClass"}
                          stateid={countryData.stateId}
                          placeHolder="Select City"
                        />
                        <p className="errorField">
                          {errors.city && touched.city && errors.city}
                        </p>
                      </Col>
                      <Col md={12} className="mb-2">
                        <InputField
                          type="text"
                          name="street1"
                          placeholder={"Address"}
                          onChangeHandle={handleChange}
                          onBlurHandle={handleBlur}
                          value={values.street1}
                          icon={
                            <img src={Images.PERSON_ICON} alt="email-icon" />
                          }
                          className={
                            "form-control-lg BorderRadiusInput py-3 px-5"
                          }
                        />
                        <p className="errorField">
                          {errors.street1 && touched.street1 && errors.street1}
                        </p>
                      </Col>
                      <Col md={12}>
                        <div className="CreditCard d-flex justify-content-between align-items-center">
                          <div className=" me-2">
                            <p className="mb-0 fw-bold">
                              {t("cardDetails.useFitNeeWalletText")}
                            </p>
                          </div>
                          <div className="d-flex align-items-center">
                            <ToggleSwitch
                              id="use_wallet"
                              isOn={values.use_wallet}
                              handleToggle={() => {
                                setFieldValue("use_wallet", !values.use_wallet);
                              }}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={12}>
                        <Row className="d-flex my-4 align-items-center">
                          <Col md={4}>
                            <p className="mb-0 fw-bold">
                              {t("cardDetails.promoCodeText")}
                            </p>
                          </Col>
                          <Col
                            md={8}
                            className="d-flex gap-2 justify-content-end"
                          >
                            <InputField
                              type="number"
                              name="promo_code"
                              placeholder={t("cardDetails.promoCodeText")}
                              onChangeHandle={handleChange}
                              onBlurHandle={handleBlur}
                              value={values.promo_code}
                              className={
                                "form-control-lg BorderRadiusInput py-3 px-3 fs-6"
                              }
                            />
                            <FillBtn
                              text={t("cardDetails.applyText")}
                              className="px-4 py-3 customDropdownRadius"
                            />
                          </Col>
                        </Row>
                      </Col>
                      <div className="w-100 bg-transparent border-0 customDropdownRadius">
                        <FillBtn
                          type="submit"
                          text={t("cardDetails.payText")}
                          className="w-100 py-3"
                        />
                      </div>
                    </Row>
                  </Container>
                </Form>
              )}
            </Formik>
          )}
        </Col>
        <Col md={6}>
          <Card className="BorderRadius my-2">
            <CardHeader className="bg-transparent py-4 fw-bold">
              <h6 className="mb-0 fw-bold">
                {t("cardDetails.paymentSummaryText")}
              </h6>
            </CardHeader>
            <CardBody>
              <div className="d-flex align-items-center justify-content-between">
                <div className="">
                  <h6>{t("cardDetails.discountText")}</h6>
                </div>
                <div style={{ width: "20%" }}>
                  <h6>SAR 0</h6>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="">
                  <h6>{t("cardDetails.fitneeWalletText")}</h6>
                </div>
                <div style={{ width: "20%" }}>
                  <h6>SAR 0</h6>
                </div>
              </div>
            </CardBody>
            <CardFooter className="bg-transparent">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="mb-0 py-3 fw-bold">
                    {t("cardDetails.totalPayText")}
                  </h6>
                </div>
                <div style={{ width: "20%" }}>
                  <h6 className="mb-0">
                    {CURRENCY}{" "}
                    {functions.getSummary(
                      summaryData.discount,
                      summaryData.walletAmount,
                      subscriptionPlan.price
                    )}
                  </h6>
                </div>
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(CreditCardDetailWrapper);
