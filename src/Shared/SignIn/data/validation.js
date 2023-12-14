import * as Yup from "yup";
import TranslationHelper from "../../TranslationHelper";

export const SIGNIN_SCHEMA = Yup.object().shape({
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
      TranslationHelper("validation.invalidPasswordTwoText")
    )
    .required(TranslationHelper("validation.requiredPasswordText")),
  termAndConditionCheck: Yup.bool().oneOf(
    [true],
    TranslationHelper("validation.requiredtermAndConditionCheck")
  ),
});
