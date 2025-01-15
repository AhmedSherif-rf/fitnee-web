import styles from "./style.module.scss";
import React, { memo, useEffect } from "react";
import { use } from "react";
import { useTranslation } from "react-i18next";

import Select from "react-select";

const SelectField = (props) => {
  const {
    placeholder,
    name,
    className,
    disabled,
    rows,
    options,
    isDisabled = false,
    isLoading = false,
    isSearchable = false,
    handleChange,
    isMulti = false,
  } = props;

  const { i18n } = useTranslation("");

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      margin: "0",
      padding: "10px 0",
      width: "100%",
      fontSize: "14px",
      borderRedius: "14px",
      borderColor: state.isFocused ? "#91f533" : provided.borderColor,
      boxShadow: state.isFocused ? "0 0 0 1px #91f533" : provided.boxShadow,
      "&:hover": {
        borderColor: "#91f533",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#91f533" // Black for selected
        : provided.backgroundColor,
      color: state.isSelected ? "white" : provided.color, // Ensure text color is readable
      "&:hover": {
        backgroundColor: "#91f533", // Light black hover
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black", // Black for selected single value
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "black", // Black background for multi-value
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "white", // White text for multi-value label
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "white", // White remove icon
      "&:hover": {
        backgroundColor: "#000000", // Black background on hover
        color: "white", // Keep text white
      },
    }),
  };

  useEffect(() => {
    if (options.length > 0) {
      handleChange(options[0].value);
    }
  }, []);

  return (
    <div className={`${styles.inputWrapper} ${i18n.dir()}`}>
      <Select
        placeholder={placeholder}
        name={name}
        styles={customStyles}
        className={`form-control-lg w-100 ${styles.inputDesign} basic-single ${className}`}
        disabled={disabled}
        rows={rows}
        isMulti={isMulti}
        classNamePrefix="select"
        defaultValue={options[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isSearchable={isSearchable}
        options={options}
        onChange={(e) => {
          if (isMulti) {
            handleChange(e);
          } else {
            handleChange(e.value);
          }
        }}
      />
    </div>
  );
};

export default memo(SelectField);
