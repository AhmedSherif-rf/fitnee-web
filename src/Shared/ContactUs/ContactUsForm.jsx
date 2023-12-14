import { Formik } from "formik";
import InputField from "../InputField";
import FillBtn from "../Buttons/FillBtn";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OutlineBtn from "../Buttons/OutlineBtn";
import PhoneInputField from "../PhoneInputField";
import { INITIAL_VALUES } from "./data/initialValue";
import { CONTACT_US_SCHEMA } from "./data/validation";
import { CONTACT_US_URL } from "../../utils/constants";
import { Col, Container, Form, Row } from "reactstrap";
import InformationModal from "../Modal/InformationModal";
import React, { memo, useCallback, useState } from "react";
import LoadingScreen from "../../HelperMethods/LoadingScreen";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { contactUs } from "../../Redux/features/ContactUs/contactUsApi";

const ContactUsForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.contactUs);

  const [showContactUsConfirmModal, setShowContactUsConfirmModal] = useState(
    false
  );

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
    dispatch(contactUs(data)).then(res => {
      if (res.type === "contactUs/fulfilled") {
        resetForm();
        setShowContactUsConfirmModal(true);
      }
    });
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        {loading === "pending" && <LoadingScreen />}
        <Col lg={7} md={12} sm={10}>
          <h1 className="text-center mb-5 f-w-bold ">Contact Us</h1>
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
              <Form onSubmit={handleSubmit}>
                <Row md={12}>
                  <Col md={6} className="mb-2">
                    <InputField
                      className="py-3 px-5"
                      type="text"
                      name="first_name"
                      placeholder="First name"
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
                      placeholder="Last name"
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
                      placeholder="Email"
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.email}
                      icon={<img src={Images.EMAIL_ICON} alt="email-icon" />}
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
                        required: true,
                        className:
                          "form-control-lg w-100 py-3 px-4 customPhoneInput",
                      }}
                      defaultCountry={"ae"}
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
                      placeholder="Describe your issue"
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.message}
                      className={"p-3"}
                      rows={"5"}
                    />
                    <p className="errorField">
                      {errors.message && touched.message && errors.message}
                    </p>
                  </Col>
                  <Col md={12} className="mb-2 mt-3">
                    <FillBtn
                      className="w-100 py-3"
                      text={"Send"}
                      disabled={loading === "pending" ? true : false}
                      type={"submit"}
                    />
                  </Col>
                  <Col md={12} className="mb-2">
                    <OutlineBtn
                      className="w-100 py-3"
                      handleOnClick={handleCancelClick}
                      text="Cancel"
                    />
                  </Col>

                  <InformationModal
                    size={"md"}
                    TOneClassName={"mb-3 text-center"}
                    isOpen={showContactUsConfirmModal}
                    onClose={handleContactUsConfirmModalClose}
                    ModalTextOne="Your email has been sent. Our representative will reach out to you within 72 hours."
                    ButtonThree={
                      <FillBtn
                        className="w-50"
                        text={"Ok"}
                        handleOnClick={handleContactUsConfirmModalClose}
                      />
                    }
                  />
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
