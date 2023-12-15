import React, { useState } from "react";
import Styles from "./style.module.scss";
import { Input, Label } from "reactstrap";

const ToggleSwitch = ({id, isOn, handleToggle, colorOne, colorTwo }) => {
  return (
    <>
    <Input
      checked={isOn}
      onChange={handleToggle}
      className={`${Styles.switchCheckbox}`}
      id={id}
      type="checkbox"
    />
    <Label
      style={{ background: isOn ? colorOne : colorTwo }}
      className={`${Styles.switchLabel} mb-0`}
      htmlFor={id}
    >
      <span className={`${Styles.switchButton}`} />
    </Label>
  </>
  );
};
export default ToggleSwitch;
