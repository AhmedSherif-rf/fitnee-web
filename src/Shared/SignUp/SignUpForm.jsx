import * as Yup from "yup";
import React, { memo } from "react";
import MyDropdown from "../MyDropdown";
import InputField from "../InputField";
import FillBtn from "../Buttons/FillBtn";
import { useNavigate } from "react-router";
import PhoneInputField from "../PhoneInputField";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { FaBirthdayCake, FaVenus, FaMars } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Formik, Field, FieldArray, ErrorMessage } from "formik";
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupText,
} from "reactstrap";

const SignUpForm = () => {
  const navigate = useNavigate();

  const trainingGoalOptions = [
    "Body Building",
    "Gain Weight",
    "Healthy Lifestyle",
    "Lose Weight",
    "Power Lifting",
  ];

  const activityLevelOptions = ["Beginner", "Intermediate", "Advanced"];

  const roleOptions = ["Trainer", "Nutrition", "Trainer & Nutrition"];

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    phoneNumber: "",
    dob: "",
    gender: "",
    weight: "",
    height: "",
    smm: "",
    bfm: "",
    tbw: "",
    protein: "",
    myGoal: "",
    trainingGoal: "",
    activityLevel: "",
    injury: "",
    experience: "",
    role: "",
    daySchedules: [{ day: "", fromTime: "", toTime: "" }],
    saudiReps: "",
    stcPhoneNumber: "",
    currentlyWorking: "",
  };

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, "First Name should contain only letters")
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First Name is Required"),
    lastName: Yup.string()
      .matches(/^[A-Za-z]+$/, "Last Name should contain only letters")
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last Name is Required"),
    email: Yup.string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address"
      )
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,
        "Password must contain at least one number, one lowercase letter, one uppercase letter, and one special character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match") // Ensure confirm password matches password
      .required("Confirm Password is required"),
    bio: Yup.string().required("Bio is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    dob: Yup.string().required("Date of Birth is required"),
    gender: Yup.string().required("Gender is required"),
    experience: Yup.string().required("Year of Experience is required"),
    role: Yup.string().required("Role is required"),
    currentlyWorking: Yup.string().required("Required"),
    daySchedules: Yup.array().of(
      Yup.object().shape({
        day: Yup.string().required("Day is required"),
        fromTime: Yup.string().required("From Time is required"),
        toTime: Yup.string().required("To Time is required"),
      })
    ),
  });

  return (
    <Container>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={SignupSchema}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = "Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "Invalid email address";
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values));
            setSubmitting(false);
            navigate("/trainee/dashboard");
          }, 400);
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            {/* <InputField />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password} */}
            <Row className="justify-content-center">
              <Col md={2} className="my-4">
                <div className="d-flex justify-content-center align-items-center">
                  <div
                    className="rounded-circle bgProperties position-relative"
                    style={{
                      backgroundImage: `url(${Images.PROFILE_IMG})`,
                      height: "160px",
                      width: "160px",
                    }}
                  >
                    <span className="CameraImg d-flex justify-content-center align-items-center bgProperties">
                      <img
                        src={Images.CAMERA_IMG}
                        className="img-fluid"
                        alt=""
                      />
                    </span>
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
                  className="form-control-lg BorderRadius py-3 px-4"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.firstName}
                />
                <p className="errorField">
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>
              </Col>
              <Col lg={6} md={6} className="mb-2">
                <div className="text-end" style={{ marginBottom: "-15px" }}>
                  *
                </div>{" "}
                <InputField
                  className="form-control-lg BorderRadius py-3 px-4"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.lastName}
                />
                <p className="errorField">
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>
              </Col>
              <Col lg={6} md={6} className="mb-2">
                <div className="text-end" style={{ marginBottom: "-15px" }}>
                  *
                </div>{" "}
                <InputField
                  className="form-control-lg BorderRadius py-3 px-4"
                  type="text"
                  name="email"
                  placeholder="Email"
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
                </div>{" "}
                <InputField
                  className="form-control-lg BorderRadius py-3 px-4"
                  type="password"
                  name="password"
                  placeholder="Password"
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
                  className="form-control-lg BorderRadius py-3 px-4"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.confirmPassword}
                />
                <p className="errorField">
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword}
                </p>
              </Col>

              <Col lg={6} md={6} className="mb-2">
                <div className="text-end" style={{ marginBottom: "-15px" }}>
                  *
                </div>{" "}
                <PhoneInputField
                  inputProps={{
                    name: "phoneNumber",
                    required: true,
                    autoFocus: true,
                    className:
                      "form-control-lg w-100 BorderYellow py-3 px-4 customPhoneInput",
                  }}
                  defaultCountry={"ae"}
                  value={values.phoneNumber}
                  setFieldValue={setFieldValue}
                />
                <p className="errorField">
                  {errors.phoneNumber &&
                    touched.phoneNumber &&
                    errors.phoneNumber}
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
                        className={`d-flex align-items-center justify-content-between form-control-lg border w-100 BorderRadius ${
                          values.gender === "male" ? "selected" : ""
                        }`}
                        onClick={() => setFieldValue("gender", "male")}
                      >
                        <h6 className="mb-0 font14">Male</h6>
                        <FaMars />
                      </div>
                      <div
                        className={`d-flex align-items-center justify-content-between form-control-lg border w-100 BorderRadius ${
                          values.gender === "female" ? "selected" : ""
                        }`}
                        onClick={() => setFieldValue("gender", "female")}
                      >
                        <h6 className="mb-0 font14">Female</h6>
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
                        className="BorderYellow"
                        style={{
                          borderTopLeftRadius: "15px",
                          borderBottomLeftRadius: "15px",
                        }}
                      >
                        <FaBirthdayCake />
                      </InputGroupText>
                      <InputField
                        type="date"
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          borderTopRightRadius: "15px",
                          borderBottomRightRadius: "15px",
                        }}
                        name="dob"
                        placeholder="Date of Birthday"
                        className="form-control-lg py-3 px-4"
                        onChangeHandle={handleChange}
                        onBlurHandle={handleBlur}
                        value={values.dob}
                      />
                    </InputGroup>
                    <p className="errorField">
                      {errors.dob && touched.dob && errors.dob}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} md={6} className="mb-2">
                <Row className="p-0">
                  <Col md={12} className="mb-2">
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>{" "}
                    <InputField
                      className="form-control-lg BorderRadius py-3 px-4"
                      type="textarea"
                      style={{ minHeight: "115px" }}
                      placeholder="Add your bio here..."
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
                </div>{" "}
                <InputField
                  className="form-control-lg BorderRadius py-3 px-4"
                  type="number"
                  placeholder="Year of Experience"
                  name="experience"
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.experience}
                />
                <p className="errorField">
                  {errors.experience && touched.experience && errors.experience}
                </p>
              </Col>

              <Col lg={6} md={6} className="mb-2">
                <div className="text-end" style={{ marginBottom: "-15px" }}>
                  *
                </div>{" "}
                <MyDropdown
                  className="BorderRadius py-3 px-4 mb-0"
                  Options={roleOptions}
                  name={"role"}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.role}
                  // SelectedOption={Goal.TriningGoal}
                  // onChange={(value) =>
                  //   handleTimeRowChange(Goal.id, 'TriningGoal', value)
                  // }
                />
                {/* ))} */}
                <p className="errorField">
                  {errors.role && touched.role && errors.role}
                </p>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12} className="mb-3">
                <h6 className="fw-bold mt-2">Body Information</h6>
              </Col>
              <Col md={6} className="mb-2">
                <InputField
                  className="form-control-lg BorderRadius py-3 px-4"
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
              <Col md={6} className="mb-2">
                <InputField
                  className="form-control-lg BorderRadius py-3 px-4"
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
              <Col md={6} className="mb-2">
                <InputField
                  className="form-control-lg BorderRadius py-3 px-4"
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
              <Col md={6} className="mb-2">
                <InputField
                  className="form-control-lg BorderRadius py-3 px-4"
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
              <Col md={6} className="mb-2">
                <InputField
                  className="form-control-lg BorderRadius py-3 px-4"
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
              <Col md={6} className="mb-2">
                <InputField
                  className="form-control-lg BorderRadius py-3 px-4"
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

            <Row className="mb-3">
              <Col md={6}>
                <h6 className="mb-2 fw-bold">My goal</h6>
                <InputField
                  className="form-control-lg BorderRadius py-3 px-4"
                  type="text"
                  placeholder="I want to lose my 5kg weight in 4 weeks"
                  name="myGoal"
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.myGoal}
                />
                <p className="errorField">
                  {errors.myGoal && touched.myGoal && errors.myGoal}
                </p>
              </Col>

              <Col md={6}>
                <h6 className="mb-2 fw-bold">Training goal</h6>
                {/* {Goal.map((Goal) => ( */}
                <Row className="training">
                  <Col md={12} className="mb-2">
                    <MyDropdown
                      className="BorderRadius py-3 px-4"
                      Options={trainingGoalOptions}
                      name={"trainingGoal"}
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.trainingGoal}
                      // SelectedOption={Goal.TriningGoal}
                      // onChange={(value) =>
                      //   handleTimeRowChange(Goal.id, 'TriningGoal', value)
                      // }
                    />
                  </Col>
                </Row>
                {/* ))} */}
                <p className="errorField">
                  {errors.trainingGoal &&
                    touched.trainingGoal &&
                    errors.trainingGoal}
                </p>
              </Col>

              <Col md={6}>
                <h6 className="mb-2 fw-bold">Activity Level</h6>
                {/* {Goal.map((Goal) => ( */}
                <Row className="activity">
                  <Col md={12} className="mb-2">
                    <MyDropdown
                      className="BorderRadius py-3 px-4"
                      Options={activityLevelOptions}
                      name={"activityLevel"}
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.activityLevel}
                      // SelectedOption={Goal.TriningGoal}
                      // onChange={(value) =>
                      //   handleTimeRowChange(Goal.id, 'TriningGoal', value)
                      // }
                    />
                  </Col>
                </Row>
                {/* ))} */}
                <p className="errorField">
                  {errors.activityLevel &&
                    touched.activityLevel &&
                    errors.activityLevel}
                </p>
              </Col>

              <Col lg={6} md={6} className="mb-2">
                <h6 className="mb-2 fw-bold">Any Injury</h6>
                <Row className="p-0">
                  <Col md={12} className="mb-2">
                    <InputField
                      className="form-control-lg BorderRadius py-3 px-4"
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

            <Row className="mb-3">
              <Col md={6}>
                <h6 className="mb-2 fw-bold">Your SAUDIREPS number</h6>
                <InputField
                  className="form-control-lg BorderRadius py-3 px-4"
                  type="number"
                  placeholder="Your SAUDIREPS number"
                  name="saudiReps"
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.saudiReps}
                />
                <p className="errorField">
                  {errors.saudiReps && touched.saudiReps && errors.saudiReps}
                </p>
              </Col>

              <Col lg={6} md={6} className="mb-2">
                <h6 className="mb-2 fw-bold">
                  Enter the phone number that has an STC Pay Account
                </h6>
                <PhoneInputField
                  inputProps={{
                    name: "stcPhoneNumber",
                    required: true,
                    autoFocus: true,
                    className:
                      "form-control-lg w-100 BorderYellow py-3 px-4 customPhoneInput",
                  }}
                  defaultCountry={"ae"}
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
                  You are available to respond on your trainee
                </h6>
                <FieldArray
                  name="daySchedules"
                  className="d-flex"
                  render={(arrayHelpers) => (
                    <>
                      {values.daySchedules.map((daySchedule, index) => (
                        <Row key={index} className="mb-1">
                          <Col lg={6} md={6}>
                            <Field
                              as="select"
                              name={`daySchedules.${index}.day`}
                              className="customDropDown form-control-lg w-100 BorderYellow selectField BorderRadius px-4"
                            >
                              <option
                                className="customDropDownOption"
                                value=""
                                label="Select"
                              />
                              <option
                                className="customDropDownOption"
                                value="monday"
                                label="Monday"
                              />
                              <option
                                className="customDropDownOption"
                                value="tuesday"
                                label="Tuesday"
                              />
                              <option
                                className="customDropDownOption"
                                value="wednesday"
                                label="Wednesday"
                              />
                              <option
                                className="customDropDownOption"
                                value="thursday"
                                label="Thursday"
                              />
                              <option
                                className="customDropDownOption"
                                value="friday"
                                label="Friday"
                              />
                              <option
                                className="customDropDownOption"
                                value="saturday"
                                label="Saturday"
                              />
                              <option
                                className="customDropDownOption"
                                value="sunday"
                                label="Sunday"
                              />
                            </Field>
                            {/* <div className="mb-0">
                            <Input
                              as="select"
                              name={`daySchedules.${index}.day`}
                              className={`customDropDown form-control-lg w-100 BorderYellow BorderRadius py-3 px-4`}
                              type="select"
                              // onChange={onChangeHandle}
                              // onBlur={onBlurHandle}
                            >
                              <option value="" label="Select a day" />
                              <option label="Monday">Monday</option>
                              <option label="Tuesday" >Tuesday</option>
                              <option label="Wednesday" >Wednesday</option>
                              <option label="Thursday" >Thursday</option>
                              <option label="Friday" >Friday</option>
                              <option label="Saturday" >Saturday</option>
                              <option label="Sunday" >Sunday</option>
                            </Input>
                          </div> */}
                            <ErrorMessage
                              name={`daySchedules.${index}.day`}
                              component="p"
                              className="errorField"
                            />
                          </Col>
                          <Col md={2}>
                            <Field
                              name={`daySchedules.${index}.fromTime`}
                              type="time"
                              className="customDropdown form-control select-field BorderRadius py-3 px-4"
                            />
                            <ErrorMessage
                              name={`daySchedules.${index}.fromTime`}
                              component="p"
                              className="errorField"
                            />
                          </Col>
                          <Col md={2}>
                            <Field
                              name={`daySchedules.${index}.toTime`}
                              type="time"
                              className="customDropdown form-control select-field BorderRadius py-3 px-4"
                            />
                            <ErrorMessage
                              name={`daySchedules.${index}.toTime`}
                              component="p"
                              className="errorField"
                            />
                          </Col>
                          <Col>
                            <FaDeleteLeft
                              className="cursorPointer"
                              size={22}
                              onClick={() => arrayHelpers.remove(index)}
                            />
                            {/* <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Remove
                        </button> */}
                          </Col>
                        </Row>
                      ))}
                      <span
                        className="textYellow fs-5 cursorPointer"
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
            </Row>

            <Row className="mb-3">
              <h6 className="mb-2 fw-bold">Are you currently working? *</h6>
              <Col md={6} className="mb-2">
                <div className="text-end" style={{ marginBottom: "-15px" }}>
                  *
                </div>
                <div className="d-flex currentlyWorkingBtn align-items-center justify-content-between gap-2">
                  <div
                    className={`d-flex align-items-center justify-content-between form-control-lg border w-100 BorderRadius ${
                      values.currentlyWorking === "yes" ? "selected" : ""
                    }`}
                    onClick={() => setFieldValue("currentlyWorking", "yes")}
                  >
                    <h6 className="mb-0 font14">Yes</h6>
                  </div>
                  <div
                    className={`d-flex align-items-center justify-content-between form-control-lg border w-100 BorderRadius ${
                      values.currentlyWorking === "no" ? "selected" : ""
                    }`}
                    onClick={() => setFieldValue("currentlyWorking", "no")}
                  >
                    <h6 className="mb-0 font14">No</h6>
                  </div>
                </div>
                <p className="errorField">
                  {errors.currentlyWorking &&
                    touched.currentlyWorking &&
                    errors.currentlyWorking}
                </p>
              </Col>
            </Row>

            {/* <button type="submit" disabled={isSubmitting}>
              Submit
            </button> */}
            <Row className="mb-3">
              <Col md={12}>
                {/* <button className="w-100" type="submit" disabled={isSubmitting}>
                  Submit
                </button> */}
                <FillBtn text="Next" className="w-100 py-2" />
                {/* <Link to="OTPVerification"><FillBtn text="Next" className="w-100"/></Link> */}
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default memo(SignUpForm);
