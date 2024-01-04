import React from "react";
import { Input } from "reactstrap";

const MyDropdown = (props) => {
  const {
    Options,
    className,
    name,
    onChangeHandle,
    onBlurHandle,
    placeholder,
    value,
  } = props;

  return (
    <div className="mb-0">
      <Input
        className={`customDropDown customDropdownRadius form-control-lg w-100 ${className}`}
        type="select"
        name={name}
        onChange={onChangeHandle}
        onBlur={onBlurHandle}
        value={value}
      >
        <option value="" className="customDropDownOption">
          {placeholder}
        </option>
        {Options &&
          Options?.map((item, index) => (
            <option key={index} value={item} className="customDropDownOption">
              {item}
            </option>
          ))}
      </Input>
    </div>
  );
};

export default MyDropdown;
