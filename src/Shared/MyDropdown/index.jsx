import React, { useState } from "react";
import "./myDropdown.css";
import Select from "react-select";

const MyDropdown = (props) => {
  // const { Options, className, name, onChangeHandle, onBlurHandle } = props;
  const [selectedOption, setSelectedOption] = useState("none");
  const handleTypeSelect = (e) => {
    setSelectedOption(e.value);
  };
  const options = [
    { value: "none", label: "Empty" },
    { value: "left", label: "Open Left" },
    { value: "right", label: "Open Right" },
    {
      value: "tilt,left",
      label: "Tilf and Open Left"
    },
    {
      value: "tilt,right",
      label: "Tilf and Open Right"
    }
  ];

  return (
    <div className={`mb-0`}>
      <Select
      classNames="form-control-lg"
      isSearchable={false}
        options={options}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'white' : '#DEE2E6',
            borderRadius: '14px',
            paddingTop:'9px',
            paddingBottom:'9px',
            "&:hover": {
              border: "1px solid #91f533",
              boxShadow: "0px 0px 6px transparent"
            }
          }),
        }}
        onChange={handleTypeSelect}
        value={options.filter(function (option) {
          return option.value === selectedOption;
        })}
        label="Single select"
        className="select-wrapper"
        classNamePrefix="select"
      />
      {/* <select
        className={`w-100 BorderRadius ${className} select-wrapper`}
        name={name}
        onChange={onChangeHandle}
        onBlur={onBlurHandle}
      >
        <option value="" className={`bg-transparent`}>
          Select
        </option>
        {Options &&
          Options?.map((item, index) => (
            <option key={index} value={item} className={`bg-transparent `} active>
              {item}
            </option>
          ))}
      </select> */}
    </div>
  );
};

export default MyDropdown;
