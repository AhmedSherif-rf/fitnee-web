import { Input } from "reactstrap";
import React, { memo } from "react";
import styles from "./style.module.scss";

const InputField = (props) => {
  const {
    placeholder,
    type,
    onChangeHandle,
    onBlurHandle,
    value,
    name,
    className,
    icon,
    disabled,
  } = props;

  return (
    <div className={`${styles.inputWrapper}`}>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`form-control w-100 BorderYellow ${styles.inputDesign} ${className}`}
        disabled={disabled}
        onChange={onChangeHandle}
        onBlur={onBlurHandle}
        value={value}
      />
    </div>
  );
};

export default memo(InputField);
