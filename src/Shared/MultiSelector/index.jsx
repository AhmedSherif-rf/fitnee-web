import React from "react";
import "./styles.scss";
import Select from "react-select";

const MultiSelector = ({ field, form, options, ...props }) => {
  const handleChange = (selectedOptions) => {
    form.setFieldValue(field.name, selectedOptions);
  };

  return (
    <Select
      options={options}
      value={field.value}
      onChange={handleChange}
      isMulti={true}
      isSearchable={false}
      {...props}
      labelledBy={props.placeholder}
    />
  );
};

export default MultiSelector;
