import React, { memo } from "react";
import { Label, Input } from "reactstrap";

const Checkbox = ({ label, onChangeHandle, onBlurHandle, name, checked }) => {
  return (
    <>
      <Input
        type="checkbox"
        name={name}
        onChange={onChangeHandle}
        onBlur={onBlurHandle}
        checked={checked}
        className="p-2 checkBox me-2"
      />
      <Label check>{label}</Label>
    </>
  );
};

export default memo(Checkbox);
