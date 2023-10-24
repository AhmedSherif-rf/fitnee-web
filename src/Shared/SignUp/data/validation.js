import * as Yup from "yup";

export const SIGNUP_SCHEMA = Yup.object().shape({
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
  termAndConditionCheck: Yup.bool().oneOf(
    [true],
    "You must accept the terms and conditions."
  ),
});
