import * as Yup from "yup";
import React, { memo } from "react";
import { Formik, Field } from "formik";
import { Container, Row, Col } from "reactstrap";
import InputField from "../InputField/InputField";

const SignUpForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
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
      .oneOf([Yup.ref('password'), null], 'Passwords must match') // Ensure confirm password matches password
      .required('Confirm Password is required'),
    bio: Yup.string()
      .required('Bio is required'),
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
            console.log(values)
          setTimeout(() => {
            alert(JSON.stringify(values));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
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
            <Row>
              <Col md={12}>
                <h5>Your information</h5>
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
                <p className="error-field">{errors.firstName && touched.firstName && errors.firstName}</p>
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
                <p className="error-field">{errors.lastName && touched.lastName && errors.lastName}</p>
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
                <p className="error-field">{errors.email && touched.email && errors.email}</p>
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
                <p className="error-field">{errors.password && touched.password && errors.password}</p>
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
                <p className="error-field">{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</p>
              </Col>

              {/* <Col lg={6} md={6} className="mb-2">
                <Row className="p-0">
                  <Col md={12} className="mb-2">
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                    <div className="d-flex genderBtn align-items-center justify-content-between gap-2">
                      <div
                        className={`d-flex align-items-center justify-content-between form-control-lg border w-100 BorderRadius ${
                          selectedGender === "male" ? "selected" : ""
                        }`}
                        onClick={() => handleGenderClick("male")}
                      >
                        <h6 className="mb-0">Male</h6>
                        <FaMars />
                      </div>
                      <div
                        className={`d-flex align-items-center justify-content-between form-control-lg border w-100 BorderRadius ${
                          selectedGender === "female" ? "selected" : ""
                        }`}
                        onClick={() => handleGenderClick("female")}
                      >
                        <h6 className="mb-0">Female</h6>
                        <FaVenus />
                      </div>
                    </div>
                  </Col>
                  <Col md={12} className="mb-2">
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>
                    <PhoneInput
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: true,
                        className: "form-control-lg w-100 BorderYellow",
                        disableDropdown: "true",
                      }}
                      country={"us"}
                      value={state.phone}
                      onChange={(phone) => setState({ phone })}
                    />
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
                        placeholder="Date of Birthday"
                        className="form-control-lg BorderYellow"
                        required
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Col> */}
              <Col lg={6} md={6} className="mb-2">
                <Row className="p-0">
                  <Col md={12} className="mb-2">
                    <div className="text-end" style={{ marginBottom: "-15px" }}>
                      *
                    </div>{" "}
                    <InputField
                      className="form-control-lg BorderRadius py-3 px-4"
                      type="textarea"
                      style={{ minHeight: "180px" }}
                      placeholder="Add your bio here.."
                      name="bio"
                      onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.bio}
                    />
                    <p className="error-field">{errors.bio && touched.bio && errors.bio}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default memo(SignUpForm);
