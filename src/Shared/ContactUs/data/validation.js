import * as Yup from "yup";

export const CONTACT_US_SCHEMA = Yup.object().shape({
  first_name: Yup.string()
    .matches(/^[A-Za-z ]+$/, "First Name should contain only letters")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First Name is Required"),
  last_name: Yup.string()
    .matches(/^[A-Za-z ]+$/, "Last Name should contain only letters")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last Name is Required"),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email address"
    )
    .required("Email is required"),
  phone: Yup.string().required("Phone Number is required"),
  message: Yup.string()
    .min(5, "Too Short!")
    .max(500, "Too Long!")
    .required("Message is required"),
});
