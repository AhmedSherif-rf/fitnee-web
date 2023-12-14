import * as Yup from "yup";
import TranslationHelper from "../../TranslationHelper";
 
export const SIGNUP_SCHEMA = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z ]+$/,  TranslationHelper("validation.invalidFirstNameText"))
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required(TranslationHelper("validation.requiredFirstNameText")),
  lastName: Yup.string()
    .matches(/^[A-Za-z ]+$/, TranslationHelper("validation.invalidLastNameText"))
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required(TranslationHelper("validation.requiredLastNameText")),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      TranslationHelper("validation.invalidEmailText")
    )
    .required(TranslationHelper("validation.requiredEmailText")),
  password: Yup.string()
    .min(8, TranslationHelper("validation.invalidPasswordText"))
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,
      "Password must contain at least one number, one lowercase letter, one uppercase letter, and one special character"
    )
    .required(TranslationHelper("validation.requiredPasswordText")),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], TranslationHelper("validation.invalidConfirmPasswordText")) // Ensure confirm password matches password
    .required(TranslationHelper("validation.requiredConfirmPasswordText")),
  bio: Yup.string().required(TranslationHelper("validation.requiredBioText")),
  phoneNumber: Yup.string().required(TranslationHelper("validation.requiredContactText")),
  dob: Yup.string().required(TranslationHelper("validation.requiredDOBText")),
  gender: Yup.string().required(TranslationHelper("validation.requiredGenderText")),
  experience: Yup.string().required(TranslationHelper("validation.requiredYearsOfExperienceText")),
  certificates: Yup.array()
    .min(1, TranslationHelper("validation.requiredMinimumCertificateText"))
    .of(
      Yup.object().shape({
        file: Yup.mixed()
          .required(TranslationHelper("validation.requiredCertificateText"))
          .test(
            "fileFormat",
            TranslationHelper("validation.invalidFileCertificateText"),
            (value) => {
              if (value) {
                return ["image/png", "image/jpeg", "image/jpg"].includes(
                  value.type
                );
              }
              return true;
            }
          )
          .test(
            "fileSize",
            TranslationHelper("validation.limitCertificateText"),
            (value) => {
              if (value) {
                return value.size <= 5 * 1024 * 1024;
              }
              return true;
            }
          ),
      })
    ),
  role: Yup.string().required(TranslationHelper("validation.requiredRoleText")),
  currentlyWorking: Yup.string().required("validation.RequiredText"),
  daySchedules: Yup.array().of(
    Yup.object().shape({
      day: Yup.string().required(TranslationHelper("validation.requiredDayText")),
      fromTime: Yup.string().required(TranslationHelper("validation.requiredFromDayText")),
      toTime: Yup.string().required(TranslationHelper("validation.requiredToDayText")),
    })
  ),
  termAndConditionCheck: Yup.bool().oneOf(
    [true],
    TranslationHelper("validation.requiredtermAndConditionCheck")
  ),
});
