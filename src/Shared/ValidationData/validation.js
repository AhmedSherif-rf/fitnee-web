import * as Yup from "yup";
import TranslationHelper from "../TranslationHelper";

const firstNameValidation = Yup.string()
  .matches(/^[A-Za-z ]+$/, TranslationHelper("validation.invalidFirstNameText"))
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required(TranslationHelper("validation.requiredFirstNameText"));

const fullNameValidation = Yup.string()
  .matches(/^[A-Za-z ]+$/, TranslationHelper("validation.invalidFullNameText"))
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required(TranslationHelper("validation.requiredFullNameText"));

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

const certificationValidation = Yup.array()
  .min(1, TranslationHelper("validation.requiredMinimumCertificateText"))
  .test(
    "certificatesRequired",
    TranslationHelper("validation.requiredCertificateText"),
    (value) => {
      return value && value.every((file) => file);
    }
  )
  .test(
    "certificateFormat",
    TranslationHelper("validation.invalidFileCertificateText"),
    (value) => {
      return (
        value &&
        value.every((file) =>
          ["image/png", "image/jpeg", "image/jpg"].includes(file.type)
        )
      );
    }
  )
  .test(
    "certificateSize",
    TranslationHelper("validation.limitCertificateText"),
    (value) => {
      return value && value.every((file) => file.size <= 5 * 1024 * 1024);
    }
  );

const certificateTitleValidation = Yup.array().test(
  "certificateTitleLength",
  "Certificate title is required",
  function (value) {
    const { certification } = this.parent;

    if (!certification || certification.length !== value.length) {
      return false;
    }

    return true;
  }
);

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

const serviceValidation = Yup.string().required(
  TranslationHelper("validation.requiredText")
);

const specialitiesValidation = Yup.array().min(
  1,
  TranslationHelper("validation.requiredText")
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

const currentlyWorkingValidation = Yup.string().required(
  "validation.RequiredText"
);

const RequiredValidation = Yup.string().required(
  TranslationHelper("validation.requiredText")
);

const profileAvailabilityValidation = Yup.array().of(
  Yup.object().shape({
    day: Yup.string().required(TranslationHelper("validation.requiredDayText")),
    starttime: Yup.string().required(
      TranslationHelper("validation.requiredFromDayText")
    ),
    endtime: Yup.string().required(
      TranslationHelper("validation.requiredToDayText")
    ),
  })
);

const subscriptionPlanValidation = Yup.array().of(
  Yup.object().shape({
    price: Yup.string().required(TranslationHelper("validation.requiredText")),
  })
);

const termAndConditionCheckValidation = Yup.bool().oneOf(
  [true],
  TranslationHelper("validation.requiredTermAndConditionCheck")
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
  term_and_condition: termAndConditionCheckValidation,
});

export const TRAINER_SIGNUP_SCHEMA = Yup.object().shape({
  bio: bioValidation,
  email: emailValidation,
  gender: genderValidation,
  service: serviceValidation,
  password: passwordValidation,
  stc_pay: phoneNumberValidaton,
  full_name: fullNameValidation,
  experience: experienceValidation,
  phone_number: phoneNumberValidaton,
  specialities: specialitiesValidation,
  certification: certificationValidation,
  confirm_password: confirmPasswordValidation,
  certificate_title: certificateTitleValidation,
  subscription_plans: subscriptionPlanValidation,
  profile_availability: profileAvailabilityValidation,
  term_and_condition: termAndConditionCheckValidation,
});

export const NUTRITIONIST_SIGNUP_SCHEMA = Yup.object().shape({
  bio: bioValidation,
  email: emailValidation,
  gender: genderValidation,
  password: passwordValidation,
  stc_pay: phoneNumberValidaton,
  full_name: fullNameValidation,
  experience: experienceValidation,
  phone_number: phoneNumberValidaton,
  certification: certificationValidation,
  confirm_password: confirmPasswordValidation,
  certificate_title: certificateTitleValidation,
  subscription_plans: subscriptionPlanValidation,
  profile_availability: profileAvailabilityValidation,
  term_and_condition: termAndConditionCheckValidation,
});

export const TRAINER_NUTRITIONIST_SIGNUP_SCHEMA = Yup.object().shape({
  bio: bioValidation,
  email: emailValidation,
  gender: genderValidation,
  password: passwordValidation,
  stc_pay: phoneNumberValidaton,
  full_name: fullNameValidation,
  experience: experienceValidation,
  phone_number: phoneNumberValidaton,
  specialities: specialitiesValidation,
  certification: certificationValidation,
  confirm_password: confirmPasswordValidation,
  certificate_title: certificateTitleValidation,
  profile_availability: profileAvailabilityValidation,
  term_and_condition: termAndConditionCheckValidation,
});

export const TRAINEE_EDIT_PROFILE_SCHEMA = Yup.object().shape({
  email: Yup.string(),
  gender: Yup.string(),
  last_name: Yup.string(),
  first_name: Yup.string(),
  phone_number: Yup.string(),
  date_of_birth: Yup.string(),
});

export const TRAINER_EDIT_PROFILE_SCHEMA = Yup.object().shape({
  bio: Yup.string(),
  gender: Yup.string(),
  full_name: Yup.string(),
  experience: Yup.string(),
  saudireps_number: Yup.string(),
  is_currently_working: Yup.string(),
});

export const NUTRITIONIST_EDIT_PROFILE_SCHEMA = Yup.object().shape({
  bio: Yup.string(),
  gender: Yup.string(),
  full_name: Yup.string(),
  experience: Yup.string(),
  license_number: Yup.string(),
  is_currently_working: Yup.string(),
});

export const TRAINER_NUTRITIONIST_EDIT_PROFILE_SCHEMA = Yup.object().shape({
  bio: Yup.string(),
  gender: Yup.string(),
  full_name: Yup.string(),
  experience: Yup.string(),
  license_number: Yup.string(),
  saudireps_number: Yup.string(),
  is_currently_working: Yup.string(),
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

export const PAYMENT_METHOD_DETAIL_SCHEMA = Yup.object().shape({
  city: RequiredValidation,
  state: RequiredValidation,
  entity: RequiredValidation,
  country: RequiredValidation,
  street1: RequiredValidation,
  surname: RequiredValidation,
  postcode: RequiredValidation,
  givenName: RequiredValidation,
});
