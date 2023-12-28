import "./style.scss";
import Checkbox from "../Checkbox";
import React, { memo } from "react";
import MyDropdown from "../MyDropdown";
import InputField from "../InputField";
import { Link } from "react-router-dom";
import FillBtn from "../Buttons/FillBtn";
import { useDispatch } from "react-redux";
import MultiSelector from "../MultiSelector";
import { useTranslation } from "react-i18next";
import { FaDeleteLeft } from "react-icons/fa6";
import PhoneInputField from "../PhoneInputField";
import { SIGNUP_SCHEMA } from "./data/validation";
import { INITIAL_VALUES } from "./data/initialValue";
import { useNavigate, useParams } from "react-router";
import { createFormData } from "../../utils/functions";
import { ConnectedFocusError } from "focus-formik-error";
import { signUp } from "../../Redux/features/User/userApi";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { FaBirthdayCake, FaVenus, FaMars } from "react-icons/fa";
import { Formik, Field, FieldArray, ErrorMessage } from "formik";
import { TRAINEE_SIGNUP_SCHEMA } from "../ValidationData/validation";
import { TRAINEE_SIGNUP_INITIAL_VALUES } from "../ValidationData/initialValue";
import {
  TRAINEE_TYPE,
  TRAINER_TYPE,
  NUTRITIONIST_TYPE,
} from "../../utils/constants";

import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupText,
  Input,
  Label,
} from "reactstrap";
import {
  trainingGoalOptions,
  activityLevelOptions,
  roleOptions,
  specialityOptions,
  weekDaysOptions,
} from "../../utils/constants";

const SignUpForm = () => {
  // const navigate = useNavigate();
  const { roleType } = useParams();
  const { t } = useTranslation("");
  const dispatch = useDispatch();

  const getInitialValues = () => {
    switch (roleType) {
      case TRAINEE_TYPE:
        return TRAINEE_SIGNUP_INITIAL_VALUES;

      default:
        return INITIAL_VALUES;
    }
  };

  const getSchemaValidation = () => {
    switch (roleType) {
      case TRAINEE_TYPE:
        return TRAINEE_SIGNUP_SCHEMA;

      default:
        return SIGNUP_SCHEMA;
    }
  };

  const handleSignUpSubmit = async (values) => {
    const formData = createFormData(values);
    const formDataEntries = Array.from(formData.entries());
    formDataEntries.map(([key, value], index) => console.log(key, value));

    const data = {
      apiEndpoint: "/registeruser/",
      requestData: formData,
    };

    dispatch(signUp(data));
  };

  return (
    <Container>
      <Formik
        initialValues={getInitialValues()}
        validationSchema={getSchemaValidation()}
        onSubmit={(values, { setSubmitting }) => {
          handleSignUpSubmit(values);
          // console.log(values);
          // setTimeout(() => {
          //   setSubmitting(false);
          //   if (roleType === TRAINEE_TYPE) {
          //     localStorage.setItem("role", TRAINEE_TYPE);
          //     navigate("/trainee/dashboard");
          //   } else if (
          //     roleType === TRAINER_TYPE ||
          //     roleType === NUTRITIONIST_TYPE
          //   ) {
          //     localStorage.setItem("role", TRAINER_TYPE);
          //     navigate("/serviceProvider/dashboard");
          //   }
          //   // navigate("/verifyOtp");
          // }, 400);

          // initialValues={{ ...INITIAL_VALUES }}
          // // validationSchema={SIGNUP_SCHEMA}
          // onSubmit={(values, { setSubmitting }) => {
          //   console.log(values);
          //   setTimeout(() => {
          //     // alert(JSON.stringify(values));
          //     setSubmitting(false);
          //     if (roleType === TRAINEE_TYPE) {
          //       localStorage.setItem("role", TRAINEE_TYPE);
          //       navigate("/trainee/dashboard");
          //     } else if (roleType === TRAINER_TYPE) {
          //       localStorage.setItem("role", TRAINER_TYPE);
          //       // navigate("/serviceProvider/dashboard");
          //       navigate("/serviceProvider/appDownloadLink");
          //     } else if (roleType === NUTRITIONIST_TYPE) {
          //       localStorage.setItem("role", NUTRITIONIST_TYPE);
          //       // navigate("/serviceProvider/dashboard");
          //       navigate("/serviceProvider/appDownloadLink");
          //     }
          //   }, 400);
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
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <ConnectedFocusError />

            <Row className="justify-content-center">
              <Col md={2} className="my-4">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle bgProperties position-relative">
                    {values.profile_pic ? (
                      <img
                        src={URL.createObjectURL(values?.profile_pic)}
                        className="rounded-circle bgProperties position-relative"
                        alt="Profile Preview"
                        style={{
                          height: "160px",
                          width: "160px",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div
                        className="rounded-circle bgProperties position-relative"
                        style={{
                          backgroundImage: `url(${Images.PROFILE4_IMG})`,
                          height: "160px",
                          width: "160px",
                        }}
                      />
                    )}
                    <input
                      type="file"
                      id="profile_pic"
                      style={{ display: "none" }}
                      name="profile_pic"
                      accept=".png, .jpg, .jpeg"
                      onChange={(event) => {
                        const selectedFile = event.currentTarget.files[0];
                        setFieldValue("profile_pic", selectedFile);
                      }}
                    />
                    <label
                      htmlFor="profile_pic"
                      className="CameraImg d-flex justify-content-center align-items-center bgProperties cursorPointer"
                    >
                      <img
                        src={Images.CAMERA_IMG}
                        className="img-fluid"
                        alt=""
                      />
                    </label>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <h6 className="fw-bold">{t("signup.yourInformationText")}</h6>
              </Col>
              <Col lg={6} md={6} className="mb-2">
                <div className="text-end" style={{ marginBottom: "-15px" }}>
                  *
                </div>{" "}
                <InputField
                  className="py-3 px-4"
                  type="text"
                  placeholder={t("signup.firstNameText")}
                  name="first_name"
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.first_name}
                />
                <p className="errorField">
                  {errors.first_name && touched.first_name && errors.first_name}
                </p>
              </Col>
              <Col lg={6} md={6} className="mb-2">
                <div className="text-end" style={{ marginBottom: "-15px" }}>
                  *
                </div>{" "}
                <InputField
                  className="py-3 px-4"
                  type="text"
                  placeholder={t("signup.lastNameText")}
                  name="last_name"
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.last_name}
                />
                <p className="errorField">
                  {errors.last_name && touched.last_name && errors.last_name}
                </p>
              </Col>
              <Col lg={6} md={6} className="mb-2">
                <div className="text-end" style={{ marginBottom: "-15px" }}>
                  *
                </div>
                <InputField
                  className="py-3 px-4"
                  type="text"
                  name="email"
                  placeholder={t("signup.emailText")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.email}
                />
                <p className="errorField">
                  {errors.email && touched.email && errors.email}
                </p>
              </Col>
              <Col lg={6} md={6} className="mb-2">
                <div className="text-end" style={{ marginBottom: "-15px" }}>
                  *
                </div>
                <InputField
                  className="py-3 px-4"
                  type="password"
                  name="password"
                  placeholder={t("signup.passwordText")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.password}
                />
                <p className="errorField">
                  {errors.password && touched.password && errors.password}
                </p>
              </Col>
              <Col lg={6} md={6} className="mb-2">
                <div className="text-end" style={{ marginBottom: "-15px" }}>
                  *
                </div>{" "}
                <InputField
                  className="py-3 px-4"
                  type="password"
                  placeholder={t("signup.confirmPasswordText")}
                  name="confirm_password"
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.confirm_password}
                />
                <p className="errorField">
                  {errors.confirm_password &&
                    touched.confirm_password &&
                    errors.confirm_password}
                </p>
              </Col>
              <Col lg={6} md={6} className="mb-2">
                <div className="text-end" style={{ marginBottom: "-15px" }}>
                  *
                </div>{" "}
                <PhoneInputField
                  inputProps={{
                    name: "phone_number",
                    required: true,
                    className:
                      "form-control-lg w-100 py-3 px-4 customPhoneInput border",
                  }}
                  defaultCountry={"sa"}
                  value={values.phone_number}
                  setFieldValue={setFieldValue}
                />
                <p className="errorField">
                  {errors.phone_number &&
                    touched.phone_number &&
                    errors.phone_number}
                </p>
              </Col>
              <Col lg={6} md={6} className="mb-2">
                <Row className="p-0">
                  <Col md={12} className="mb-2">
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                    <div className="d-flex genderBtn align-items-center justify-content-between gap-2">
                      <div
                        className={`d-flex align-items-center justify-content-between form-control-lg w-100 py-3 customDropdownRadius border  bg-white ${
                          values.gender === "Male" ? "selected" : ""
                        }`}
                        onClick={() => setFieldValue("gender", "Male")}
                      >
                        <h6 className="mb-0 font14"> {t("signup.maleText")}</h6>
                        <FaMars />
                      </div>
                      <div
                        className={`d-flex align-items-center justify-content-between form-control-lg py-3 customDropdownRadius border w-100  bg-white ${
                          values.gender === "Female" ? "selected" : ""
                        }`}
                        onClick={() => setFieldValue("gender", "Female")}
                      >
                        <h6 className="mb-0 font14">
                          {t("signup.femaleText")}
                        </h6>
                        <FaVenus />
                      </div>
                    </div>
                    <p className="errorField">
                      {errors.gender && touched.gender && errors.gender}
                    </p>
                  </Col>
                  <Col md={12} className="mb-2">
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                    <InputGroup>
                      <InputGroupText
                       
                        style={{
                          borderTopLeftRadius: "14px",
                          borderBottomLeftRadius: "14px",
                        }}
                      >
                        <FaBirthdayCake />
                      </InputGroupText>
                      <Input
                        type="date"
                        style={{
                          fontSize: "14px",
                          paddingTop: "16px",
                          paddingBottom: "16px",
                          backgroundColor: "white",
                          color: "black",
                          borderTopRightRadius: "14px",
                          borderBottomRightRadius: "14px",
                        }}
                        name="date_of_birth"
                        placeholder="Date of Birthday"
                        className="form-control-lg px-4"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.date_of_birth}
                      />
                    </InputGroup>
                    <p className="errorField">
                      {errors.date_of_birth &&
                        touched.date_of_birth &&
                        errors.date_of_birth}
                    </p>
                  </Col>
                </Row>
              </Col>
              {roleType === TRAINER_TYPE && (
                <>
                  <Col lg={6} md={6} className="mb-2">
                    <Row className="p-0">
                      <Col md={12} className="mb-2">
                        <div
                          className="text-end"
                          style={{ marginBottom: "-15px" }}
                        >
                          *
                        </div>{" "}
                        <InputField
                          className="py-3 px-4"
                          type="textarea"
                          style={{ minHeight: "115px" }}
                          placeholder={t("signup.addBioText")}
                          name="bio"
                          onChangeHandle={handleChange}
                          onBlurHandle={handleBlur}
                          value={values.bio}
                        />
                        <p className="errorField">
                          {errors.bio && touched.bio && errors.bio}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={6} md={6} className="mb-2">
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                    <InputField
                      className="py-3 px-4"
                      type="number"
                      placeholder={t("signup.yearOfExperienceText")}
                      name="experience"
                      onWheel={ event => event.currentTarget.blur() }
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.experience}
                    />

                    <p className="errorField">
                      {errors.experience &&
                        touched.experience &&
                        errors.experience}
                    </p>
                  </Col>
                  <Col lg={6} md={6} className="mb-2">
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                    <MyDropdown
                      className="border py-3 px-4 mb-0"
                      Options={roleOptions}
                      name={"role"}
                      placeholder="What you will provide to the end user"
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.role}
                    />
                    <p className="errorField">
                      {errors.role && touched.role && errors.role}
                    </p>
                  </Col>
                  {roleType === NUTRITIONIST_TYPE && (
                    <Col lg={6} md={6} className="mb-2">
                      <MyDropdown
                        className="border py-3 px-4 mb-0"
                        Options={["What you will provide to end user"]}
                        placeholder="What you will provide to the end user"
                        name={"role"}
                        onChangeHandle={handleChange}
                        onBlurHandle={handleBlur}
                      />
                    </Col>
                  )}
                </>
              )}
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <h6 className="fw-bold">
                  {roleType !== TRAINEE_TYPE
                    ? t("signup.attachCertificateText")
                    : t("signup.inBodyText")}
                </h6>
              </Col>
              <Col>
                <div className="form-group multi-preview d-flex flex-wrap align-items-center">
                  {values?.body_images.map((file, index) => (
                    <div
                      key={index}
                      className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mx-2 position-relative BorderRadius border"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`${index + 1}`}
                        className="uploaded-image BorderRadius"
                        style={{
                          width: "100%",
                          height: "170px",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <button
                        type="button"
                        className="deleteButton"
                        onClick={() => {
                          const updatedImages = [...values.body_images];
                          updatedImages.splice(index, 1);
                          setFieldValue("body_images", updatedImages);
                        }}
                      >
                        &#10006;
                      </button>
                    </div>
                  ))}
                  <Label
                    id="UploadImgLabel"
                    className="BorderRadius text-center mb-0"
                    style={{
                      minWidth: "220px",
                      maxHeight: "170px",
                    }}
                  >
                    <img src={Images.UPLOAD_ICON} alt="" />
                    <input
                      id="file-upload"
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      onChange={(event) => {
                        const files = event.currentTarget.files;
                        if (files.length > 0) {
                          const uploadedImages = Array.from(files);
                          setFieldValue("body_images", [
                            ...values.body_images,
                            ...uploadedImages,
                          ]);
                        }
                      }}
                      multiple
                      style={{ display: "none" }}
                    />
                    <h6>{t("signup.uploadImageText")}</h6>
                  </Label>
                </div>
              </Col>
              <p className="errorField">
                {errors.body_images &&
                  touched.body_images &&
                  errors.body_images}
              </p>
            </Row>

            {roleType === TRAINEE_TYPE && (
              <>
                <Row className="mb-3">
                  <Col md={12} className="mb-3">
                    <h6 className="fw-bold mt-2">
                      {t("signup.bodyInformationText")}
                    </h6>
                  </Col>
                  <Col md={6} className="mb-3">
                    <InputField
                      className="py-3 px-4"
                      type="number"
                      placeholder={t("signup.weightText")}
                      name="weight"
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.weight}
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <InputField
                      className="py-3 px-4"
                      type="number"
                      placeholder={t("signup.heightText")}
                      name="height"
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.height}
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <InputField
                      className="py-3 px-4"
                      type="number"
                      placeholder={t("signup.skeletonMuscleText")}
                      name="smm"
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.smm}
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <InputField
                      className="py-3 px-4"
                      type="number"
                      placeholder={t("signup.bodyFatText")}
                      name="bfm"
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.bfm}
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <InputField
                      className="py-3 px-4"
                      type="number"
                      placeholder={t("signup.totalBodyText")}
                      name="tbw"
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.tbw}
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <InputField
                      className="py-3 px-4"
                      type="number"
                      placeholder={t("signup.protienText")}
                      name="protein"
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.protein}
                    />
                  </Col>
                </Row>
              </>
            )}

            {roleType === TRAINER_TYPE && (
              <Row className="mb-2">
                <Col>
                  <div className="form-group">
                    <h6 className="mb-2 fw-bold">
                      {t("signup.selectAreaOfSpecialtyText")}*
                    </h6>
                    <Field
                      name="speciality"
                      component={MultiSelector}
                      options={specialityOptions}
                      placeholder="Select options"
                      className="border-0 customMultiSelector"
                    />
                  </div>
                </Col>
              </Row>
            )}

            {roleType === TRAINEE_TYPE && (
              <Row className="mb-3">
                <Col md={6}>
                  <h6 className="mb-2 fw-bold">{t("signup.myGoalText")}</h6>
                  <InputField
                    className="py-3 px-4"
                    type="text"
                    placeholder={t("signup.looseWeightText")}
                    name="myGoal"
                    onChangeHandle={handleChange}
                    onBlurHandle={handleBlur}
                    value={values.goal}
                  />
                </Col>
                <Col md={6}>
                  <h6 className="mb-2 fw-bold">
                    {t("signup.trainingGoalText")}
                  </h6>
                  <Row className="training">
                    <Col md={12} className="mb-2">
                      <MyDropdown
                        className=" shadow-0 py-3 px-4 border"
                        Options={trainingGoalOptions}
                        name={"trainingGoal"}
                        onChangeHandle={handleChange}
                        onBlurHandle={handleBlur}
                        value={values.trainingGoal}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <h6 className="mb-2 fw-bold">
                    {t("signup.anyFoodSensitiveText")}
                  </h6>
                  <InputField
                    className="py-3 px-4"
                    type="text"
                    placeholder={t("signup.seeFoodText")}
                    name="food_sensitive"
                    onChangeHandle={handleChange}
                    onBlurHandle={handleBlur}
                    value={values.food_sensitive}
                  />
                </Col>
                <Col md={6}>
                  <h6 className="mb-2 fw-bold">
                    {t("signup.activityLevelText")}
                  </h6>
                  <Row className="activity">
                    <Col md={12} className="mb-2">
                      <MyDropdown
                        className=" shadow-0 py-3 px-4 border"
                        Options={activityLevelOptions}
                        name={"activityLevel"}
                        onChangeHandle={handleChange}
                        onBlurHandle={handleBlur}
                        value={values.activityLevel}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <h6 className="mb-2 fw-bold">Any Food Sensitive</h6>
                  <InputField
                    className="form-control-lg  py-3 px-4"
                    type="text"
                    placeholder="See food"
                    name="food_sensitive"
                    onChangeHandle={handleChange}
                    onBlurHandle={handleBlur}
                    value={values.food_sensitive}
                  />
                </Col>
                <Col lg={6} md={6} className="mb-2">
                  <h6 className="mb-2 fw-bold">{t("signup.anyInjuryText")}</h6>
                  <Row className="p-0">
                    <Col md={12} className="mb-2">
                      <InputField
                        className="py-3 px-4"
                        type="textarea"
                        style={{ minHeight: "20px" }}
                        placeholder={t("signup.describeInjuryText")}
                        name="injury"
                        onChangeHandle={handleChange}
                        onBlurHandle={handleBlur}
                        value={values.injury_details}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            )}

            {roleType !== TRAINEE_TYPE && (
              <>
                <Row className="mb-3">
                  {roleType === TRAINER_TYPE && (
                    <Col md={6}>
                      <h6 className="mb-2 fw-bold">
                        {t("signup.saudiRepsNumberText")}{" "}
                      </h6>
                      <InputField
                        className="py-3 px-4"
                        type="number"
                        placeholder={t("signup.saudiRepsNumberText")}
                        name="saudiReps"
                        onChangeHandle={handleChange}
                        onBlurHandle={handleBlur}
                        value={values.saudiReps}
                      />
                      <p className="errorField">
                        {errors.saudiReps &&
                          touched.saudiReps &&
                          errors.saudiReps}
                      </p>
                    </Col>
                  )}

                  {roleType === NUTRITIONIST_TYPE && (
                    <Col md={6}>
                      <h6 className="mb-2 fw-bold">
                        {t("signup.enterYourProfessionalText")}
                      </h6>
                      <InputField
                        className="py-3 px-4"
                        type="number"
                        placeholder="001122"
                        name="saudiReps"
                        onChangeHandle={handleChange}
                        onBlurHandle={handleBlur}
                        value={values.saudiReps}
                      />
                    </Col>
                  )}
                  <Col lg={6} md={6} className="mb-2">
                    <h6 className="mb-2 fw-bold">
                      {t("signup.enterStcPayAccountText")} *
                    </h6>
                    <PhoneInputField
                      inputProps={{
                        name: "stcPhoneNumber",
                        required: true,
                        className:
                          "form-control-lg w-100  py-3 px-4 customPhoneInput border",
                      }}
                      defaultCountry={"sa"}
                      value={values.stcPhoneNumber}
                      setFieldValue={setFieldValue}
                    />
                    <p className="errorField">
                      {errors.stcPhoneNumber &&
                        touched.stcPhoneNumber &&
                        errors.stcPhoneNumber}
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col lg={12} md={12}>
                    <h6 className="mb-2 fw-bold">
                      {`   ${t("signup.availableToRespondTraineeText")} ${
                        roleType === NUTRITIONIST_TYPE
                          ? "subscriber"
                          : "trainee"
                      } *`}
                    </h6>
                    <FieldArray
                      name="daySchedules"
                      className="d-flex"
                      render={(arrayHelpers) => (
                        <>
                          {values.daySchedules.map((daySchedule, index) => (
                            <Row key={index} className="mb-1">
                              <Col lg={5} md={5} className="mb-2">
                                <Field
                                  as="select"
                                  name={`daySchedules.${index}.day`}
                                  className="customDropDown customDropdownRadius form-control-lg w-100 selectField border px-4"
                                  style={{
                                    paddingTop: "12px",
                                    paddingBottom: "12px",
                                  }}
                                >
                                  <option
                                    className="customDropDownOption text-black-custom"
                                    value=""
                                    label="Select"
                                  />
                                  {weekDaysOptions?.map((option, index) => (
                                    <option
                                      className="customDropDownOption text-black-custom border"
                                      value={option.value}
                                      key={index}
                                      label={option.label}
                                    />
                                  ))}
                                </Field>
                                <ErrorMessage
                                  name={`day_schedules.${index}.day`}
                                  component="p"
                                  className="errorField"
                                />
                              </Col>
                              <Col md={3} className="mb-2">
                                <Field
                                  name={`day_schedules.${index}.fromTime`}
                                  type="time"
                                  className="customDropdownRadius form-control select-field py-3 px-4 border"
                                />
                                <ErrorMessage
                                  name={`day_schedules.${index}.fromTime`}
                                  component="p"
                                  className="errorField"
                                />
                              </Col>
                              <Col md={3} className="mb-2">
                                <Field
                                  name={`day_schedules.${index}.toTime`}
                                  type="time"
                                  className="customDropdownRadius form-control select-field py-3 px-4 border"
                                />
                                <ErrorMessage
                                  name={`day_schedules.${index}.toTime`}
                                  component="p"
                                  className="errorField"
                                />
                              </Col>
                              <Col md={1} className="mb-2">
                                <div className="d-flex align-items-center justify-content-end h-100">
                                  <FaDeleteLeft
                                    className="cursorPointer"
                                    size={22}
                                    onClick={() => arrayHelpers.remove(index)}
                                  />
                                </div>
                              </Col>
                            </Row>
                          ))}
                          <span
                            className="textYellow fs-6 cursorPointer"
                            onClick={() =>
                              arrayHelpers.push({
                                day: "",
                                fromTime: "",
                                toTime: "",
                              })
                            }
                          >
                            {t("signup.addMoreText")}
                          </span>
                        </>
                      )}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <h6 className="mb-2 fw-bold">
                    {" "}
                    {t("signup.areYouCurrentlyWorkingText")}
                  </h6>
                  <Col md={6} className="mb-2">
                    <div className="d-flex currentlyWorkingBtn align-items-center justify-content-between gap-2">
                      <div
                        className={`d-flex align-items-center py-3 justify-content-between form-control-lg border customDropdownRadius w-100  bg-white ${
                          values.currentlyWorking === "yes" ? "selected" : ""
                        }`}
                        onClick={() => setFieldValue("currentlyWorking", "yes")}
                      >
                        <h6 className="mb-0 font14"> {t("signup.yesText")}</h6>
                      </div>
                      <div
                        className={`d-flex align-items-center py-3 justify-content-between form-control-lg border customDropdownRadius w-100  bg-white ${
                          values.currentlyWorking === "no" ? "selected" : ""
                        }`}
                        onClick={() => setFieldValue("currentlyWorking", "no")}
                      >
                        <h6 className="mb-0 font14"> {t("signup.noText")}</h6>
                      </div>
                    </div>
                    <p className="errorField">
                      {errors.currently_working &&
                        touched.currently_working &&
                        errors.currently_working}
                    </p>
                  </Col>
                </Row>
              </>
            )}

            {roleType !== TRAINEE_TYPE && (
              <Row>
                <div className="d-flex mb-2">
                  <Checkbox
                    label={
                      <p className="mb-0 fs-6">
                        {t("signup.moneyTransferText")}
                        <Link to="/termAndCondition">
                          <span className="textYellow">
                            {t("signup.termsAndConditionText")}
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
                <p className="errorField">
                  {errors.termAndConditionCheck &&
                    touched.termAndConditionCheck &&
                    errors.termAndConditionCheck}
                </p>
              </Row>
            )}

            <Row className="pb-5">
              <Col md={12}>
                <FillBtn
                  type={"submit"}
                  text={t("signup.nextText")}
                  className="w-100 py-2"
                />
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default memo(SignUpForm);
