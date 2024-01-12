import "./style.scss";
import Checkbox from "../Checkbox";
import MyDropdown from "../MyDropdown";
import InputField from "../InputField";
import { Link } from "react-router-dom";
import FillBtn from "../Buttons/FillBtn";
import MultiSelector from "../MultiSelector";
import functions from "../../utils/functions";
import { useTranslation } from "react-i18next";
import { FaDeleteLeft } from "react-icons/fa6";
import PhoneInputField from "../PhoneInputField";
import { SIGNUP_SCHEMA } from "./data/validation";
import { INITIAL_VALUES } from "./data/initialValue";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ConnectedFocusError } from "focus-formik-error";
import React, { memo, useState, useEffect } from "react";
import LoadingScreen from "../../HelperMethods/LoadingScreen";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { FaBirthdayCake, FaVenus, FaMars } from "react-icons/fa";
import { Formik, Field, FieldArray, ErrorMessage } from "formik";
import {
  signUp,
  editProfile,
  getSpecialities,
} from "../../Redux/features/User/userApi";
import {
  TRAINEE_SIGNUP_SCHEMA,
  TRAINEE_EDIT_PROFILE_SCHEMA,
  TRAINER_SIGNUP_SCHEMA,
  TRAINER_EDIT_PROFILE_SCHEMA,
  NUTRITIONIST_SIGNUP_SCHEMA,
  NUTRITIONIST_EDIT_PROFILE_SCHEMA,
  TRAINER_NUTRITIONIST_SIGNUP_SCHEMA,
  TRAINER_NUTRITIONIST_EDIT_PROFILE_SCHEMA,
} from "../ValidationData/validation";
import {
  TRAINEE_SIGNUP_INITIAL_VALUES,
  TRAINER_SIGNUP_INITIAL_VALUES,
  NUTRITIONIST_SIGNUP_INITIAL_VALUES,
  TRAINER_NUTRITIONIST_SIGNUP_INITIAL_VALUES,
} from "../ValidationData/initialValue";
import {
  roleOptions,
  REGISTER_URL,
  TRAINEE_TYPE,
  TRAINER_TYPE,
  EDIT_PROFILE_URL,
  NUTRITIONIST_TYPE,
  GET_SPECIALITIES_URL,
  TRAINER_NUTRITIONIST_TYPE,
  NUTRITIONIST_ROLE,
  TRAINER_NUTRITIONIST_ROLE,
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
  weekDaysOptions,
} from "../../utils/constants";

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("");
  const { roleType } = useParams();
  const { lang } = useSelector((state) => state.language);
  const { loading, user } = useSelector((state) => state.user);
  const filterFields = functions.filterSignUpFields(roleType, user);

  const [specialityOptions, setSpecialityOptions] = useState([]);

  useEffect(() => {
    if (roleType === TRAINER_TYPE || roleType === TRAINER_NUTRITIONIST_TYPE) {
      const data = {
        apiEndpoint: GET_SPECIALITIES_URL,
      };
      dispatch(getSpecialities(data)).then((res) => {
        if (res.type === "getSpecialities/fulfilled") {
          let specialities = [];
          if (lang === "en") {
            specialities = res.payload.data.en;
          } else {
            specialities = res.payload.data.ar;
          }
          specialities = specialities.map(({ id, name }) => ({
            label: name,
            value: id,
          }));
          setSpecialityOptions(specialities);
        }
      });
    }
  }, [dispatch, lang, roleType]);

  const getInitialValues = () => {
    if (user) {
      switch (roleType) {
        case TRAINEE_TYPE:
          return functions.setTraineeInitialValues(
            TRAINEE_SIGNUP_INITIAL_VALUES,
            user
          );
        case TRAINER_TYPE:
          return functions.setTrainerInitialValues(
            TRAINER_SIGNUP_INITIAL_VALUES,
            user
          );
        case NUTRITIONIST_TYPE:
          return functions.setNutritionistInitialValues(
            NUTRITIONIST_SIGNUP_INITIAL_VALUES,
            user
          );
        case TRAINER_NUTRITIONIST_TYPE:
          return functions.setTrainerNutritionistInitialValues(
            TRAINER_NUTRITIONIST_SIGNUP_INITIAL_VALUES,
            user
          );

        default:
          return INITIAL_VALUES;
      }
    } else {
      switch (roleType) {
        case TRAINEE_TYPE:
          return TRAINEE_SIGNUP_INITIAL_VALUES;
        case TRAINER_TYPE:
          return TRAINER_SIGNUP_INITIAL_VALUES;
        case NUTRITIONIST_TYPE:
          return NUTRITIONIST_SIGNUP_INITIAL_VALUES;
        case TRAINER_NUTRITIONIST_TYPE:
          return TRAINER_NUTRITIONIST_SIGNUP_INITIAL_VALUES;

        default:
          return INITIAL_VALUES;
      }
    }
  };

  const getSchemaValidation = () => {
    if (user) {
      switch (roleType) {
        case TRAINEE_TYPE:
          return TRAINEE_EDIT_PROFILE_SCHEMA;
        case TRAINER_TYPE:
          return TRAINER_EDIT_PROFILE_SCHEMA;
        case NUTRITIONIST_TYPE:
          return NUTRITIONIST_EDIT_PROFILE_SCHEMA;
        case TRAINER_NUTRITIONIST_TYPE:
          return TRAINER_NUTRITIONIST_EDIT_PROFILE_SCHEMA;
        default:
          return SIGNUP_SCHEMA;
      }
    } else {
      switch (roleType) {
        case TRAINEE_TYPE:
          return TRAINEE_SIGNUP_SCHEMA;
        case TRAINER_TYPE:
          return TRAINER_SIGNUP_SCHEMA;
        case NUTRITIONIST_TYPE:
          return NUTRITIONIST_SIGNUP_SCHEMA;
        case TRAINER_NUTRITIONIST_TYPE:
          return TRAINER_NUTRITIONIST_SIGNUP_SCHEMA;

        default:
        // return INITIAL_VALUES;
      }
    }
  };

  const handleSignUpSubmit = (values) => {
    const formData = functions.createFormData(values);
    if (user === null) {
      const data = {
        apiEndpoint: REGISTER_URL,
        requestData: formData,
      };
      dispatch(signUp(data)).then((res) => {
        if (res.type === "signUp/fulfilled") {
          navigate("/verifyOtp/signUp");
        }
      });
    } else {
      const data = {
        apiEndpoint: EDIT_PROFILE_URL.replace("userId", user?.id),
        requestData: formData,
      };
      dispatch(editProfile(data)).then((res) => {
        if (res.type === "editProfile/fulfilled") {
          navigate(functions.getInitialProfileUrl(user?.role));
        }
      });
    }
  };

  return (
    <Container>
      {loading === "pending" && <LoadingScreen />}
      <Formik
        initialValues={getInitialValues()}
        validationSchema={getSchemaValidation()}
        onSubmit={(values) => {
          handleSignUpSubmit(values);
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
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <ConnectedFocusError />

            {filterFields.includes("profile_pic") && (
              <Row className="justify-content-center">
                <Col md={2} className="my-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="rounded-circle bgProperties position-relative">
                      {values.profile_pic || user?.profile_pic ? (
                        <img
                          src={
                            values?.profile_pic
                              ? URL.createObjectURL(values?.profile_pic)
                              : user?.profile_pic
                              ? user?.profile_pic.replace("/api", "")
                              : ""
                          }
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
                            backgroundImage: `url(${Images.USER_DUMMY_IMG})`,
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
            )}

            <Row>
              <Col md={12}>
                <h6 className="fw-bold">{t("signup.yourInformationText")}</h6>
              </Col>
              {filterFields.includes("first_name") && (
                <Col lg={6} md={6} className="mb-2">
                  {user === null && (
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                  )}
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
                    {errors.first_name &&
                      touched.first_name &&
                      errors.first_name}
                  </p>
                </Col>
              )}

              {filterFields.includes("full_name") && (
                <Col lg={6} md={6} className="mb-2">
                  {user === null && (
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                  )}
                  <InputField
                    className="py-3 px-4"
                    type="text"
                    placeholder={t("signup.fullNameText")}
                    name="full_name"
                    onChangeHandle={handleChange}
                    onBlurHandle={handleBlur}
                    value={values.full_name}
                  />
                  <p className="errorField">
                    {errors.full_name && touched.full_name && errors.full_name}
                  </p>
                </Col>
              )}

              {filterFields.includes("last_name") && (
                <Col lg={6} md={6} className="mb-2">
                  {user === null && (
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                  )}
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
              )}

              {filterFields.includes("email") && (
                <Col lg={6} md={6} className="mb-2">
                  {user === null && (
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                  )}
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
              )}

              {filterFields.includes("password") && (
                <Col lg={6} md={6} className="mb-2">
                  {user === null && (
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                  )}
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
              )}

              {filterFields.includes("confirm_password") && (
                <Col lg={6} md={6} className="mb-2">
                  {user === null && (
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                  )}
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
              )}

              {filterFields.includes("phone_number") && (
                <Col lg={6} md={6} className="mb-2">
                  {user === null && (
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                  )}
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
              )}

              {filterFields.includes("gender") && (
                <Col md={6} lg={6} className="mb-2">
                  {user === null && (
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                  )}
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
                      <h6 className="mb-0 font14">{t("signup.femaleText")}</h6>
                      <FaVenus />
                    </div>
                  </div>
                  <p className="errorField">
                    {errors.gender && touched.gender && errors.gender}
                  </p>
                </Col>
              )}

              {filterFields.includes("date_of_birth") && (
                <Col md={6} lg={6} className="mb-2">
                  {user === null && (
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                  )}
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
              )}

              {filterFields.includes("experience") && (
                <Col lg={6} md={6} className="mb-2">
                  {user === null && (
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                  )}
                  <InputField
                    className="py-3 px-4"
                    type="number"
                    placeholder={t("signup.yearOfExperienceText")}
                    name="experience"
                    onWheel={(event) => event.currentTarget.blur()}
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
              )}

              {filterFields.includes("role") && (
                <Col md={6}>
                  <Row className="training">
                    <Col md={12} className="mb-2">
                      <div
                        className="text-end"
                        style={{ marginBottom: "-15px" }}
                      >
                        *
                      </div>
                      <MyDropdown
                        className="shadow-0 py-3 px-4 border"
                        Options={roleOptions}
                        name={"role"}
                        placeholder={"What you will provide to the end user"}
                        onChangeHandle={handleChange}
                        onBlurHandle={handleBlur}
                        value={values.role}
                      />
                      <p className="errorField">
                        {errors.role && touched.role && errors.role}
                      </p>
                    </Col>
                  </Row>
                </Col>
              )}

              {filterFields.includes("bio") && (
                <Col md={6} lg={6} className="mb-2">
                  {user === null && (
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                  )}
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
              )}
            </Row>

            <Row className="mb-3">
              {filterFields.includes("body_images") && (
                <>
                  <Col md={12}>
                    <h6 className="fw-bold">{t("signup.inBodyText")}</h6>
                  </Col>
                  <Col>
                    <div className="form-group multi-preview d-flex flex-wrap align-items-center">
                      {user?.body_images && (
                        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mx-2 position-relative BorderRadius border">
                          <img
                            src={user?.body_images}
                            alt="body_images"
                            className="uploaded-image BorderRadius"
                            style={{
                              width: "100%",
                              height: "170px",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          />
                        </div>
                      )}
                      {values?.body_images && (
                        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mx-2 position-relative BorderRadius border">
                          <img
                            src={URL.createObjectURL(values?.body_images)}
                            alt="body_images"
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
                              setFieldValue("body_images", null);
                            }}
                          >
                            &#10006;
                          </button>
                        </div>
                      )}
                      {values?.body_images === null && (
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
                            id="body_images"
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            onChange={(event) => {
                              const selectedFile = event.currentTarget.files[0];
                              setFieldValue("body_images", selectedFile);
                            }}
                            style={{ display: "none" }}
                          />
                          <h6>{t("signup.uploadImageText")}</h6>
                        </Label>
                      )}
                    </div>
                  </Col>
                </>
              )}

              {filterFields.includes("certification") && (
                <>
                  <Col md={12}>
                    <h6 className="fw-bold">
                      {t("signup.attachCertificateText")} {user === null && "*"}
                    </h6>
                  </Col>
                  <Col>
                    <div className="form-group multi-preview d-flex flex-wrap align-items-center">
                      {values.certification.map((image, index) => (
                        <div
                          key={index}
                          className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mx-2 position-relative BorderRadius border"
                        >
                          <Field
                            name={`certificate_title.${index}`}
                            type="text"
                            className="form-control-lg certificatioTitle bgBlur"
                            placeholder="Add title"
                          />
                          <img
                            src={URL.createObjectURL(image)}
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
                              const updatedImages = [...values.certification];
                              updatedImages.splice(index, 1);
                              setFieldValue("certification", updatedImages);

                              const updatedCertificateTitles = [
                                ...values.certificate_title,
                              ];
                              updatedCertificateTitles.splice(index, 1);
                              setFieldValue(
                                "certificate_title",
                                updatedCertificateTitles
                              );
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
                              setFieldValue("certification", [
                                ...values.certification,
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
                </>
              )}
              <p className="errorField">
                {errors.certification &&
                  touched.certification &&
                  errors.certification}
              </p>
              <p className="errorField">
                {errors.certificate_title &&
                  touched.certificate_title &&
                  errors.certificate_title}
              </p>
            </Row>

            <Row className="mb-3">
              {filterFields.includes("weight") && (
                <>
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
                </>
              )}

              {filterFields.includes("height") && (
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
              )}

              {filterFields.includes("skeletal_muscel_mass") && (
                <Col md={6} className="mb-3">
                  <InputField
                    className="py-3 px-4"
                    type="number"
                    placeholder={t("signup.skeletonMuscleText")}
                    name="skeletal_muscel_mass"
                    onChangeHandle={handleChange}
                    onBlurHandle={handleBlur}
                    value={values.skeletal_muscel_mass}
                  />
                </Col>
              )}

              {filterFields.includes("body_fat_mass") && (
                <Col md={6} className="mb-3">
                  <InputField
                    className="py-3 px-4"
                    type="number"
                    placeholder={t("signup.bodyFatText")}
                    name="body_fat_mass"
                    onChangeHandle={handleChange}
                    onBlurHandle={handleBlur}
                    value={values.body_fat_mass}
                  />
                </Col>
              )}

              {filterFields.includes("total_body_water") && (
                <Col md={6} className="mb-3">
                  <InputField
                    className="py-3 px-4"
                    type="number"
                    placeholder={t("signup.totalBodyText")}
                    name="total_body_water"
                    onChangeHandle={handleChange}
                    onBlurHandle={handleBlur}
                    value={values.total_body_water}
                  />
                </Col>
              )}

              {filterFields.includes("protien") && (
                <Col md={6} className="mb-3">
                  <InputField
                    className="py-3 px-4"
                    type="number"
                    placeholder={t("signup.protienText")}
                    name="protien"
                    onChangeHandle={handleChange}
                    onBlurHandle={handleBlur}
                    value={values.protien}
                  />
                </Col>
              )}
            </Row>

            <Row className="mb-2">
              {filterFields.includes("specialities") &&
                specialityOptions.length > 0 && (
                  <>
                    <Col md={12}>
                      <div className="form-group">
                        <h6 className="mb-2 fw-bold">
                          {t("signup.selectAreaOfSpecialtyText")}
                          {user === null && "*"}
                        </h6>
                        <Field
                          name="specialities"
                          component={MultiSelector}
                          options={specialityOptions}
                          placeholder="Select options"
                          className="border-0 customMultiSelector"
                        />
                      </div>
                    </Col>
                    <p className="errorField">
                      {errors.specialities &&
                        touched.specialities &&
                        errors.specialities}
                    </p>
                  </>
                )}
            </Row>

            <Row className="mb-3">
              {filterFields.includes("goal") && (
                <Col md={6}>
                  <h6 className="mb-2 fw-bold">{t("signup.myGoalText")}</h6>
                  <InputField
                    className="py-3 px-4"
                    type="text"
                    placeholder={t("signup.looseWeightText")}
                    name="goal"
                    onChangeHandle={handleChange}
                    onBlurHandle={handleBlur}
                    value={values.goal}
                  />
                </Col>
              )}

              {filterFields.includes("training_goal") && (
                <Col md={6}>
                  <h6 className="mb-2 fw-bold">
                    {t("signup.trainingGoalText")}
                  </h6>
                  <Row className="training">
                    <Col md={12} className="mb-2">
                      <MyDropdown
                        className=" shadow-0 py-3 px-4 border"
                        Options={trainingGoalOptions}
                        name={"training_goal"}
                        placeholder={"Select training goal"}
                        onChangeHandle={handleChange}
                        onBlurHandle={handleBlur}
                        value={values.training_goal}
                      />
                    </Col>
                  </Row>
                </Col>
              )}

              {filterFields.includes("food_sensitive") && (
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
              )}

              {filterFields.includes("level") && (
                <Col md={6}>
                  <h6 className="mb-2 fw-bold">
                    {t("signup.activityLevelText")}
                  </h6>
                  <Row className="activity">
                    <Col md={12} className="mb-2">
                      <MyDropdown
                        className=" shadow-0 py-3 px-4 border"
                        Options={activityLevelOptions}
                        name={"level"}
                        placeholder={"Select activity level"}
                        onChangeHandle={handleChange}
                        onBlurHandle={handleBlur}
                        value={values.level}
                      />
                    </Col>
                  </Row>
                </Col>
              )}

              {filterFields.includes("injury_details") && (
                <Col lg={6} md={6} className="mb-2">
                  <h6 className="mb-2 fw-bold">{t("signup.anyInjuryText")}</h6>
                  <Row className="p-0">
                    <Col md={12} className="mb-2">
                      <InputField
                        className="py-3 px-4"
                        type="textarea"
                        style={{ minHeight: "20px" }}
                        placeholder={t("signup.describeInjuryText")}
                        name="injury_details"
                        onChangeHandle={handleChange}
                        onBlurHandle={handleBlur}
                        value={values.injury_details}
                      />
                    </Col>
                  </Row>
                </Col>
              )}
            </Row>

            <Row className="mb-3">
              {filterFields.includes("saudireps_number") && (
                <Col md={6}>
                  <h6 className="mb-2 fw-bold">
                    {t("signup.saudiRepsNumberText")}{" "}
                  </h6>
                  <InputField
                    className="py-3 px-4"
                    type="number"
                    placeholder={t("signup.saudiRepsNumberText")}
                    name="saudireps_number"
                    onChangeHandle={handleChange}
                    onBlurHandle={handleBlur}
                    value={values.saudireps_number}
                  />
                  <p className="errorField">
                    {errors.saudireps_number &&
                      touched.saudireps_number &&
                      errors.saudireps_number}
                  </p>
                </Col>
              )}

              {filterFields.includes("license_number") &&
                (values.role === NUTRITIONIST_ROLE ||
                  values.role === TRAINER_NUTRITIONIST_ROLE) && (
                  <Col md={6}>
                    <h6 className="mb-2 fw-bold">
                      {t("signup.enterYourProfessionalText")}{" "}
                    </h6>
                    <InputField
                      className="py-3 px-4"
                      type="number"
                      placeholder={t("signup.enterYourProfessionalText")}
                      name="license_number"
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.license_number}
                    />
                    <p className="errorField">
                      {errors.license_number &&
                        touched.license_number &&
                        errors.license_number}
                    </p>
                  </Col>
                )}

              {filterFields.includes("saudiReps") && (
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

              {filterFields.includes("stc_pay") && (
                <Col lg={6} md={6} className="mb-2">
                  <h6 className="mb-2 fw-bold">
                    {t("signup.enterStcPayAccountText")} {user === null && "*"}
                  </h6>
                  <PhoneInputField
                    inputProps={{
                      name: "stc_pay",
                      required: true,
                      className:
                        "form-control-lg w-100  py-3 px-4 customPhoneInput border",
                    }}
                    defaultCountry={"sa"}
                    value={values.stc_pay}
                    setFieldValue={setFieldValue}
                  />
                  <p className="errorField">
                    {errors.stc_pay && touched.stc_pay && errors.stc_pay}
                  </p>
                </Col>
              )}
            </Row>

            <Row>
              {filterFields.includes("profile_availability") && (
                <Col lg={12} md={12}>
                  <h6 className="mb-2 fw-bold">
                    {`   ${t("signup.availableToRespondTraineeText")} ${
                      roleType === NUTRITIONIST_TYPE ? "subscriber" : "trainee"
                    } ${user === null && "*"}`}
                  </h6>
                  <FieldArray
                    name="profile_availability"
                    className="d-flex"
                    render={(arrayHelpers) => (
                      <>
                        {values.profile_availability.map(
                          (daySchedule, index) => (
                            <Row key={index} className="mb-1">
                              <Col lg={5} md={5} className="mb-2">
                                <Field
                                  as="select"
                                  name={`profile_availability.${index}.day`}
                                  className="customDropDown customDropdownRadius form-control-lg w-100 selectField border px-4 h-75"
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
                                  name={`profile_availability.${index}.day`}
                                  component="p"
                                  className="errorField"
                                />
                              </Col>
                              <Col md={3} className="mb-2">
                                <Field
                                  name={`profile_availability.${index}.starttime`}
                                  type="time"
                                  className="customDropdownRadius form-control select-field py-3 px-4 border"
                                />
                                <ErrorMessage
                                  name={`profile_availability.${index}.starttime`}
                                  component="p"
                                  className="errorField"
                                />
                              </Col>
                              <Col md={3} className="mb-2">
                                <Field
                                  name={`profile_availability.${index}.endtime`}
                                  type="time"
                                  className="customDropdownRadius form-control select-field py-3 px-4 border"
                                />
                                <ErrorMessage
                                  name={`profile_availability.${index}.endtime`}
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
                          )
                        )}
                        <span
                          className="textYellow fs-6 cursorPointer"
                          onClick={() =>
                            arrayHelpers.push({
                              day: "",
                              starttime: "",
                              endtime: "",
                            })
                          }
                        >
                          {t("signup.addMoreText")}
                        </span>
                      </>
                    )}
                  />
                </Col>
              )}
            </Row>

            <Row className="my-3">
              {filterFields.includes("subscription_plans") && (
                <>
                  <h5 className="mb-2 fw-bold">Subscription Plans</h5>
                  <FieldArray
                    name="subscription_plans"
                    className="d-flex"
                    render={(arrayHelpers) => (
                      <>
                        {values.subscription_plans.map(
                          (subscription_plan, index) => (
                            <Col md={4}>
                              <p className="mb-0">{`${index + 1} Months`}</p>
                              <Field
                                name={`subscription_plans.${index}.price`}
                                type="number"
                                className="customDropdownRadius form-control select-field py-3 px-4 border"
                              />
                              <ErrorMessage
                                name={`subscription_plans.${index}.price`}
                                component="p"
                                className="errorField"
                              />
                            </Col>
                          )
                        )}
                      </>
                    )}
                  />
                </>
              )}
            </Row>

            {filterFields.includes("is_currently_working") && (
              <Row className="mb-3">
                <h6 className="mb-2 fw-bold">
                  {" "}
                  {t("signup.areYouCurrentlyWorkingText")}
                </h6>
                <Col md={6} className="mb-2">
                  <div className="d-flex currentlyWorkingBtn align-items-center justify-content-between gap-2">
                    <div
                      className={`d-flex align-items-center py-3 justify-content-between form-control-lg border customDropdownRadius w-100  bg-white ${
                        values.is_currently_working === true ? "selected" : ""
                      }`}
                      onClick={() =>
                        setFieldValue("is_currently_working", true)
                      }
                    >
                      <h6 className="mb-0 font14"> {t("signup.yesText")}</h6>
                    </div>
                    <div
                      className={`d-flex align-items-center py-3 justify-content-between form-control-lg border customDropdownRadius w-100  bg-white ${
                        values.is_currently_working === false ? "selected" : ""
                      }`}
                      onClick={() =>
                        setFieldValue("is_currently_working", false)
                      }
                    >
                      <h6 className="mb-0 font14"> {t("signup.noText")}</h6>
                    </div>
                  </div>
                  <p className="errorField">
                    {errors.is_currently_working &&
                      touched.is_currently_working &&
                      errors.is_currently_working}
                  </p>
                </Col>
              </Row>
            )}

            {filterFields.includes("term_and_condition") && (
              <Row>
                <div className="d-flex mb-2">
                  <Checkbox
                    label={
                      roleType !== TRAINEE_TYPE ? (
                        <p className="mb-0 fs-6">
                          {t("signup.moneyTransferText")}

                          <Link
                            target="blank"
                            to={`/termAndCondition/serviceProvider/signUp`}
                          >
                            <span className="textYellow">
                              {t("signup.termsAndConditionText")}
                            </span>
                          </Link>
                          <span> & </span>
                          <Link
                            target="blank"
                            to={`/termAndCondition/general/home`}
                          >
                            <span className="textYellow">
                              {t("signup.generalText")}
                            </span>
                          </Link>
                        </p>
                      ) : (
                        <p className="mb-0 fs-6">
                          {t("signup.acknowledgeText")}

                          <Link
                            target="blank"
                            to={`/termAndCondition/trainee/signUp`}
                          >
                            <span className="textYellow">
                              {t("signup.termsAndConditionText")}
                            </span>
                          </Link>
                          <span> & </span>
                          <Link
                            target="blank"
                            to={`/termAndCondition/general/home`}
                          >
                            <span className="textYellow">
                              {t("signup.generalText")}
                            </span>
                          </Link>
                        </p>
                      )
                    }
                    name={"term_and_condition"}
                    onChangeHandle={handleChange}
                    onBlurHandle={handleBlur}
                    checked={values.term_and_condition}
                  />
                </div>
                <p className="errorField">
                  {errors.term_and_condition &&
                    touched.term_and_condition &&
                    errors.term_and_condition}
                </p>
              </Row>
            )}

            <Row className="pb-5">
              <Col md={12}>
                <FillBtn
                  type={"submit"}
                  text={t("signup.nextText")}
                  className="w-100 py-2"
                  disabled={loading === "pending" ? true : false}
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
