import * as Yup from "yup";
import TranslationHelper from "../TranslationHelper";

const firstNameValidation = Yup.string()
  .matches(/^[A-Za-z ]+$/, TranslationHelper("validation.invalidFirstNameText"))
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required(TranslationHelper("validation.requiredFirstNameText"));

const lastNameValidation = Yup.string()
  .matches(/^[A-Za-z ]+$/, TranslationHelper("validation.invalidLastNameText"))
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required(TranslationHelper("validation.requiredLastNameText"));

const emailValidation = Yup.string()
  .matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    TranslationHelper("validation.invalidEmailText")
  )
  .required(TranslationHelper("validation.requiredEmailText"));

const currentPasswordValidation = Yup.string()
  .min(
    8,
    TranslationHelper("Previous password must be at least 8 characters long")
  )
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,
    "Password must contain at least one number, one lowercase letter, one uppercase letter, and one special character"
  )
  .required(TranslationHelper("Previous password is required"));

const newPasswordValidation = Yup.string()
  .min(8, TranslationHelper("New password must be at least 8 characters long"))
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,
    "Password must contain at least one number, one lowercase letter, one uppercase letter, and one special character"
  )
  .required(TranslationHelper("New password is required"));

const confirmNewPasswordValidation = Yup.string()
  .oneOf(
    [Yup.ref("new_password"), null],
    TranslationHelper("validation.invalidConfirmPasswordText")
  )
  .required(TranslationHelper("validation.requiredConfirmPasswordText"));

const passwordValidation = Yup.string()
  .min(8, TranslationHelper("validation.invalidPasswordText"))
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,
    "Password must contain at least one number, one lowercase letter, one uppercase letter, and one special character"
  )
  .required(TranslationHelper("validation.requiredPasswordText"));

const confirmPasswordValidation = Yup.string()
  .oneOf(
    [Yup.ref("password"), null],
    TranslationHelper("validation.invalidConfirmPasswordText")
  )
  .required(TranslationHelper("validation.requiredConfirmPasswordText"));

const bioValidation = Yup.string().required(
  TranslationHelper("validation.requiredBioText")
);
const phoneNumberValidaton = Yup.string().required(
  TranslationHelper("validation.requiredContactText")
);

const dobValidation = Yup.string().required(
  TranslationHelper("validation.requiredDOBText")
);

const genderValidation = Yup.string().required(
  TranslationHelper("validation.requiredGenderText")
);

const experienceValidation = Yup.string().required(
  TranslationHelper("validation.requiredYearsOfExperienceText")
);

const roleValidation = Yup.string().required(
  TranslationHelper("validation.requiredRoleText")
);

const currentlyWorkingValidation = Yup.string().required(
  "validation.RequiredText"
);

const daySchedulesValidation = Yup.array().of(
  Yup.object().shape({
    day: Yup.string().required(TranslationHelper("validation.requiredDayText")),
    fromTime: Yup.string().required(
      TranslationHelper("validation.requiredFromDayText")
    ),
    toTime: Yup.string().required(
      TranslationHelper("validation.requiredToDayText")
    ),
  })
);

const termAndConditionCheckValidation = Yup.bool().oneOf(
  [true],
  TranslationHelper("validation.requiredtermAndConditionCheck")
);

export const TRAINEE_SIGNUP_SCHEMA = Yup.object().shape({
  email: emailValidation,
  gender: genderValidation,
  password: passwordValidation,
  date_of_birth: dobValidation,
  last_name: lastNameValidation,
  first_name: firstNameValidation,
  phone_number: phoneNumberValidaton,
  confirm_password: confirmPasswordValidation,
});

export const CHANGE_PASSWORD_SCHEMA = Yup.object().shape({
  new_password: newPasswordValidation,
  previous_password: currentPasswordValidation,
  confirm_password: confirmNewPasswordValidation,
});

export const FORGOT_PASSWORD_SCHEMA = Yup.object().shape({
  email: emailValidation,
});

export const NEW_PASSWORD_SCHEMA = Yup.object().shape({
  new_password: newPasswordValidation,
  confirm_password: confirmNewPasswordValidation,
});
