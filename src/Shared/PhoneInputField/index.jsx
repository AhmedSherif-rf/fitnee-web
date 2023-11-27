import { memo } from "react";
import PhoneInput from "react-phone-input-2";

const PhoneInputField = (props) => {
  const { value, setFieldValue, defaultCountry, inputProps, className } = props;

  return (
    <PhoneInput
      inputProps={{
        ...inputProps,
      }}
      country={defaultCountry}
      value={value}
      className={`${className}`}
      onChange={(value) => setFieldValue("phoneNumber", value)}
    />
  );
};

export default memo(PhoneInputField);
