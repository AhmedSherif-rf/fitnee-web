import * as Yup from "yup";
import TranslationHelper from "../../TranslationHelper";

export const SIGNIN_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      TranslationHelper("validation.invalidEmail")
    )
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,
      "Password must contain at least one number, one lowercase letter, one uppercase letter, and one special character"
    )
    .required("Password is required"),
  termAndConditionCheck: Yup.bool().oneOf(
    [true],
    "You must accept the terms and conditions."
  ),
});
