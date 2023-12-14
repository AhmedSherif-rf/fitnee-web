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
  const navigate = useNavigate();
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
    console.log("awdawdwa", values);
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
                {console.log(errors)}
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle bgProperties position-relative">
                    {values.profile_image ? (
                      <img
                        src={URL.createObjectURL(values?.profile_image)}
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
                      id="profile_image"
                      style={{ display: "none" }}
                      name="profile_image"
                      accept=".png, .jpg, .jpeg"
                      onChange={(event) => {
                        const selectedFile = event.currentTarget.files[0];
                        setFieldValue("profile_image", selectedFile);
                      }}
                    />
                    <label
                      htmlFor="profile_image"
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
                <h6 className="fw-bold">Your information</h6>
              </Col>
              <Col lg={6} md={6} className="mb-2">
                <div className="text-end" style={{ marginBottom: "-15px" }}>
                  *
                </div>{" "}
                <InputField
                  className="form-control-lg  py-3 px-4"
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
                  className="form-control-lg  py-3 px-4"
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
                  className="form-control-lg  py-3 px-4"
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
                  className="form-control-lg  py-3 px-4"
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
                  className="form-control-lg  py-3 px-4"
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
                    name: "phone",
                    required: true,
                    className:
                      "form-control-lg w-100 py-3 px-4 customPhoneInput border",
                  }}
                  defaultCountry={"sa"}
                  value={values.phone}
                  setFieldValue={setFieldValue}
                />
                <p className="errorField">
                  {errors.phone && touched.phone && errors.phone}
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
                        className={`d-flex align-items-center justify-content-between form-control-lg w-100 py-3 customDropdownRadius  bg-white ${
                          values.gender === "male" ? "selected" : ""
                        }`}
                        onClick={() => setFieldValue("gender", "male")}
                      >
                        <h6 className="mb-0 font14"> {t("signup.maleText")}</h6>
                        <FaMars />
                      </div>
                      <div
                        className={`d-flex align-items-center justify-content-between form-control-lg py-3 customDropdownRadius w-100  bg-white ${
                          values.gender === "female" ? "selected" : ""
                        }`}
                        onClick={() => setFieldValue("gender", "female")}
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
                        className=""
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
                        name="dob"
                        placeholder="Date of Birthday"
                        className="form-control-lg px-4"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dob}
                      />
                    </InputGroup>
                    <p className="errorField">
                      {errors.dob && touched.dob && errors.dob}
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
                          className="form-control-lg  py-3 px-4"
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
                      className="form-control-lg  py-3 px-4"
                      type="number"
                      placeholder="Year of Experience"
                      name="experience"
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
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.role}
                    />
                    <p className="errorField">
                      {errors.role && touched.role && errors.role}
                    </p>
                  </Col>
                </>
              )}
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <h6 className="fw-bold">In Body</h6>
              </Col>
              <Col>
                <div className="form-group multi-preview d-flex flex-wrap align-items-center">
                  {values?.inbody.map((image, index) => (
                    <div
                      key={index}
                      className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mx-2 position-relative BorderRadius border"
                    >
                      <img
                        src={URL.createObjectURL(image.file)}
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
                          const updatedImages = [...values.inbody];
                          updatedImages.splice(index, 1);
                          setFieldValue("inbody", updatedImages);
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
                          const uploadedImages = Array.from(
                            files
                          ).map((file) => ({ file }));
                          setFieldValue("inbody", [
                            ...values.inbody,
                            ...uploadedImages,
                          ]);
                        }
                      }}
                      multiple
                      style={{ display: "none" }}
                    />
                    <h6>Upload Image</h6>
                  </Label>
                </div>
              </Col>
              <p className="errorField">
                {errors.inbody &&
                  touched.inbody &&
                  errors.inbody}
              </p>
            </Row>

            <Row className="mb-3">
              <Col md={12} className="mb-3">
                <h6 className="fw-bold mt-2">Body Information</h6>
              </Col>
              <Col md={6} className="mb-3">
                <InputField
                  className="form-control-lg  py-3 px-4"
                  type="number"
                  placeholder="Weight (lbs / kg)"
                  name="weight"
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.weight}
                />
                <p className="errorField">
                  {errors.weight && touched.weight && errors.weight}
                </p>
              </Col>
              <Col md={6} className="mb-3">
                <InputField
                  className="form-control-lg  py-3 px-4"
                  type="number"
                  placeholder="Hight (cm / feet)"
                  name="height"
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.height}
                />
                <p className="errorField">
                  {errors.height && touched.height && errors.height}
                </p>
              </Col>
              <Col md={6} className="mb-3">
                <InputField
                  className="form-control-lg  py-3 px-4"
                  type="number"
                  placeholder="Skeletal Muscle Mass"
                  name="smm"
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.smm}
                />
                <p className="errorField">
                  {errors.smm && touched.smm && errors.smm}
                </p>
              </Col>
              <Col md={6} className="mb-3">
                <InputField
                  className="form-control-lg  py-3 px-4"
                  type="number"
                  placeholder="Body Fat Mass"
                  name="bfm"
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.bfm}
                />
                <p className="errorField">
                  {errors.bfm && touched.bfm && errors.bfm}
                </p>
              </Col>
              <Col md={6} className="mb-3">
                <InputField
                  className="form-control-lg  py-3 px-4"
                  type="number"
                  placeholder="Total Body Water"
                  name="tbw"
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.tbw}
                />
                <p className="errorField">
                  {errors.tbw && touched.tbw && errors.tbw}
                </p>
              </Col>
              <Col md={6} className="mb-3">
                <InputField
                  className="form-control-lg  py-3 px-4"
                  type="number"
                  placeholder="Protein"
                  name="protein"
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.protein}
                />
                <p className="errorField">
                  {errors.protein && touched.protein && errors.protein}
                </p>
              </Col>
            </Row>

            {roleType === TRAINER_TYPE && (
              <>
                <Row className="mb-2">
                  <Col>
                    <div className="form-group">
                      <h6 className="mb-2 fw-bold">
                        Select your area of specialty
                      </h6>
                      <Field
                        name="speciality"
                        component={MultiSelector}
                        options={specialityOptions}
                        placeholder="Select options"
                        className="border-0"
                      />
                    </div>
                  </Col>
                </Row>
              </>
            )}

            <Row className="mb-3">
              <Col md={6}>
                <h6 className="mb-2 fw-bold">My goal</h6>
                <InputField
                  className="form-control-lg  py-3 px-4"
                  type="text"
                  placeholder="I want to lose my 5kg weight in 4 weeks"
                  name="my_goal"
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.my_goal}
                />
                <p className="errorField">
                  {errors.my_goal && touched.my_goal && errors.my_goal}
                </p>
              </Col>
              <Col md={6}>
                <h6 className="mb-2 fw-bold">Training goal</h6>
                <Row className="training">
                  <Col md={12} className="mb-2">
                    <MyDropdown
                      className=" shadow-0 py-3 px-4 border"
                      Options={trainingGoalOptions}
                      name={"training_goal"}
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.training_goal}
                    />
                  </Col>
                </Row>
                <p className="errorField">
                  {errors.training_goal &&
                    touched.training_goal &&
                    errors.training_goal}
                </p>
              </Col>
              <Col md={6}>
                <h6 className="mb-2 fw-bold">Activity Level</h6>
                <Row className="activity">
                  <Col md={12} className="mb-2">
                    <MyDropdown
                      className=" shadow-0 py-3 px-4 border"
                      Options={activityLevelOptions}
                      name={"activity_level"}
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.activity_level}
                    />
                  </Col>
                </Row>
                <p className="errorField">
                  {errors.activity_level &&
                    touched.activity_level &&
                    errors.activity_level}
                </p>
              </Col>
              <Col lg={6} md={6} className="mb-2">
                <h6 className="mb-2 fw-bold">Any Injury</h6>
                <Row className="p-0">
                  <Col md={12} className="mb-2">
                    <InputField
                      className="form-control-lg  py-3 px-4"
                      type="textarea"
                      style={{ minHeight: "20px" }}
                      placeholder="Describe your injury..."
                      name="injury"
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.injury}
                    />
                    <p className="errorField">
                      {errors.injury && touched.injury && errors.injury}
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>

            {roleType === TRAINER_TYPE && (
              <>
                <Row className="mb-3">
                  <Col md={6}>
                    <h6 className="mb-2 fw-bold">Your SAUDIREPS number</h6>
                    <InputField
                      className="form-control-lg  py-3 px-4"
                      type="number"
                      placeholder="Your SAUDIREPS number"
                      name="saudi_reps"
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.saudi_reps}
                    />
                    <p className="errorField">
                      {errors.saudi_reps &&
                        touched.saudi_reps &&
                        errors.saudi_reps}
                    </p>
                  </Col>
                  <Col lg={6} md={6} className="mb-2">
                    <h6 className="mb-2 fw-bold">
                      Enter the phone number that has an STC Pay Account
                    </h6>
                    <PhoneInputField
                      inputProps={{
                        name: "stc_phone_number",
                        required: true,
                        className:
                          "form-control-lg w-100  py-3 px-4 customPhoneInput border",
                      }}
                      defaultCountry={"ae"}
                      value={values.stc_phone_number}
                      setFieldValue={setFieldValue}
                    />
                    <p className="errorField">
                      {errors.stc_phone_number &&
                        touched.stc_phone_number &&
                        errors.stc_phone_number}
                    </p>
                  </Col>
                </Row>

                {/* <Row>
                  <Col lg={12} md={12}>
                    <h6 className="mb-2 fw-bold">
                      You are available to respond on your trainee *
                    </h6>
                    <FieldArray
                      name="day_schedules"
                      className="d-flex"
                      render={(arrayHelpers) => (
                        <>
                          {values.day_schedules.map((day_schedule, index) => (
                            <Row key={index} className="mb-1">
                              <Col lg={5} md={5} className="mb-2">
                                <Field
                                  as="select"
                                  name={`day_schedules.${index}.day`}
                                  className="customDropDown form-control-lg w-100 selectField BorderRadius border px-4"
                                  style={{
                                    paddingTop: "12px",
                                    paddingBottom: "12px",
                                  }}
                                >
                                  <option
                                    className="customDropDownOption"
                                    value=""
                                    label="Select"
                                  />
                                  {weekDaysOptions?.map((option, index) => (
                                    <option
                                      className="customDropDownOption border"
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
                            Add More +
                          </span>
                        </>
                      )}
                    />
                  </Col>
                </Row> */}

                <Row className="mb-3">
                  <h6 className="mb-2 fw-bold">Are you currently working? *</h6>
                  <Col md={6} className="mb-2">
                    <div className="d-flex currentlyWorkingBtn align-items-center justify-content-between gap-2">
                      <div
                        className={`d-flex align-items-center py-3 justify-content-between form-control-lg border customDropdownRadius w-100  bg-white ${
                          values.currently_working === "yes" ? "selected" : ""
                        }`}
                        onClick={() =>
                          setFieldValue("currently_working", "yes")
                        }
                      >
                        <h6 className="mb-0 font14">Yes</h6>
                      </div>
                      <div
                        className={`d-flex align-items-center py-3 justify-content-between form-control-lg border customDropdownRadius w-100  bg-white ${
                          values.currently_working === "no" ? "selected" : ""
                        }`}
                        onClick={() => setFieldValue("currently_working", "no")}
                      >
                        <h6 className="mb-0 font14">No</h6>
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

            <Row>
              <div className="d-flex mb-2">
                <Checkbox
                  label={
                    <p className="mb-0 fs-6">
                      The money will be transferred to your STC Pay account,
                      please read the{" "}
                      <Link to="/termAndCondition">
                        <span className="textYellow">terms and conditions</span>
                      </Link>
                    </p>
                  }
                  name={"term_and_condition_check"}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  checked={values.term_and_condition_check}
                />
              </div>
              <p className="errorField">
                {errors.term_and_condition_check &&
                  touched.term_and_condition_check &&
                  errors.term_and_condition_check}
              </p>
            </Row>

            <Row className="pb-5">
              <Col md={12}>
                <FillBtn type={"submit"} text="Next" className="w-100 py-2" />
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default memo(SignUpForm);
