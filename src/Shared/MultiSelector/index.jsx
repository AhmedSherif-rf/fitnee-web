import React from "react";
import { MultiSelect } from "react-multi-select-component";

const MultiSelector = ({ field, form, options, ...props }) => {
  const handleChange = (selectedOptions) => {
    form.setFieldValue(field.name, selectedOptions);
  };

  return (
    <MultiSelect
      options={options}
      value={field.value}
      onChange={handleChange}
      labelledBy="Select"
      {...props}
    />
  );
};

export default MultiSelector;
