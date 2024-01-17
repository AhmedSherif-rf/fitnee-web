import { memo } from "react";
import PhoneInput from "react-phone-input-2";

const PhoneInputField = (props) => {
  const {
    value,
    setFieldValue,
    defaultCountry,
    inputProps,
    className,
    disabled,
  } = props;

  return (
    <PhoneInput
      inputProps={{
        ...inputProps,
      }}
      country={defaultCountry}
      value={value}
      className={`${className} ltr`}
      onChange={(value) => setFieldValue(inputProps.name, value)}
      disabled={disabled}
    />
  );
};

export default memo(PhoneInputField);
