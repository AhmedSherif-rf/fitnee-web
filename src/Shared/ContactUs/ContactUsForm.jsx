import { Formik } from "formik";
import InputField from "../InputField";
import FillBtn from "../Buttons/FillBtn";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OutlineBtn from "../Buttons/OutlineBtn";
import { useTranslation } from "react-i18next";
import PhoneInputField from "../PhoneInputField";
import { INITIAL_VALUES } from "./data/initialValue";
import { CONTACT_US_SCHEMA } from "./data/validation";
import { CONTACT_US_URL } from "../../utils/constants";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Row,
} from "reactstrap";
import InformationModal from "../Modal/InformationModal";
import React, { memo, useCallback, useState } from "react";
import LoadingScreen from "../../HelperMethods/LoadingScreen";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { contactUs } from "../../Redux/features/ContactUs/contactUsApi";

const ContactUsForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("");
  const { loading } = useSelector((state) => state?.contactUs);

  const [showContactUsConfirmModal, setShowContactUsConfirmModal] =
    useState(false);

  const handleCancelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleContactUsConfirmModalClose = useCallback(() => {
    setShowContactUsConfirmModal(false);
  }, []);

  const handleContactUsSubmit = (values, resetForm) => {
    const data = {
      apiEndpoint: CONTACT_US_URL,
      requestData: JSON.stringify(values),
      navigate,
    };
    dispatch(contactUs(data)).then((res) => {
      if (res.type === "contactUs/fulfilled") {
        resetForm();
        setShowContactUsConfirmModal(true);
      }
    });
  };

  return (
    <Container className="h-100">
      <Row className="justify-content-center text-black-custom align-items-md-center align-items-end h-100">
        {loading === "pending" && <LoadingScreen />}
        <Col md={10} sm={10} className="h-100">
          <Formik
            initialValues={{ ...INITIAL_VALUES }}
            validationSchema={CONTACT_US_SCHEMA}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              handleContactUsSubmit(values, resetForm);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              setFieldValue,
              handleBlur,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit} className="h-100">
                <Row className="justify-content-center text-black-custom align-items-md-center align-items-end h-100">
                  <Col md={12} sm={10}>
                    <Card className="bg-white onlyBorderRadius border-0">
                      <CardHeader className="border-0 bg-transparent">
                        <h1 className="text-center fs-1 fw-bold mt-2">
                          {t("contactUs.contactUsText")}
                        </h1>
                      </CardHeader>
                      <CardBody className="p-3">
                        <Row>
                          <Col md={6} className="mb-2">
                            <InputField
                              className="py-3 px-5"
                              type="text"
                              name="first_name"
                              placeholder={t("contactUs.firstNameText")}
                              onChangeHandle={handleChange}
                              onBlurHandle={handleBlur}
                              value={values.first_name}
                              icon={<img src={Images.PERSON_ICON} alt="" />}
                            />
                            <p className="errorField">
                              {errors.first_name &&
                                touched.first_name &&
                                errors.first_name}
                            </p>
                          </Col>
                          <Col md={6} className="mb-2">
                            <InputField
                              className="py-3 px-5"
                              type="text"
                              placeholder={t("contactUs.lastNameText")}
                              name="last_name"
                              onChangeHandle={handleChange}
                              onBlurHandle={handleBlur}
                              value={values.last_name}
                              icon={<img src={Images.PERSON_ICON} alt="" />}
                            />
                            <p className="errorField">
                              {errors.last_name &&
                                touched.last_name &&
                                errors.last_name}
                            </p>
                          </Col>
                          <Col md={12} className="mb-2">
                            <InputField
                              type="text"
                              name="email"
                              placeholder={t("contactUs.emailText")}
                              onChangeHandle={handleChange}
                              onBlurHandle={handleBlur}
                              value={values.email}
                              icon={
                                <img src={Images.EMAIL_ICON} alt="email-icon" />
                              }
                              className={"py-3 px-5"}
                            />
                            <p className="errorField">
                              {errors.email && touched.email && errors.email}
                            </p>
                          </Col>
                          <Col md={12} className="mb-2">
                            <PhoneInputField
                              inputProps={{
                                name: "phone",
                                className:
                                  "form-control-lg w-100 py-3 px-4 customPhoneInput",
                              }}
                              defaultCountry={"sa"}
                              value={values.phone}
                              setFieldValue={setFieldValue}
                            />
                            <p className="errorField">
                              {errors.phone && touched.phone && errors.phone}
                            </p>
                          </Col>
                          <Col md={12} className="mb-2">
                            <InputField
                              type="textarea"
                              name="message"
                              placeholder={t("contactUs.describeIssueText")}
                              onChangeHandle={handleChange}
                              onBlurHandle={handleBlur}
                              value={values.message}
                              className={"p-3"}
                              rows={"2"}
                            />
                            <p className="errorField">
                              {errors.message &&
                                touched.message &&
                                errors.message}
                            </p>
                          </Col>
                          <Col md={12} sm={6} className="mb-2">
                            <FillBtn
                              className="w-100 py-3"
                              text={t("contactUs.sendText")}
                              disabled={loading === "pending" ? true : false}
                              type={"submit"}
                            />
                          </Col>
                          <Col md={12} sm={6}>
                            <OutlineBtn
                              className="w-100 py-3"
                              handleOnClick={handleCancelClick}
                              text={t("contactUs.cancelText")}
                            />
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                    <InformationModal
                      size={"md"}
                      TOneClassName={"mb-3 text-center"}
                      isOpen={showContactUsConfirmModal}
                      onClose={handleContactUsConfirmModalClose}
                      ModalTextOne={t("contactUs.modalOneText")}
                      ButtonThree={
                        <FillBtn
                          className="w-50"
                          text={"Ok"}
                          handleOnClick={handleContactUsConfirmModalClose}
                        />
                      }
                    />
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(ContactUsForm);
