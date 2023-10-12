import React, { memo } from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Checkbox = ({ label, checked, onChange, id, name }) => {
  return (
    <>
      <Input id={id} type="checkbox" className="p-2 checkBox me-2" />
      <Label check>{label}</Label>
    </>
  );
};

export default memo(Checkbox);
