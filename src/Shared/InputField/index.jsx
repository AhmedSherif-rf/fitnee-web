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
    style
  } = props;

  return (
    <div className={`${styles.inputWrapper}`}>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        style={style}
        className={`form-control-lg  w-100 ${styles.inputDesign} ${className}`}
        disabled={disabled}
        onChange={onChangeHandle}
        onBlur={onBlurHandle}
        value={value}
      />
    </div>
  );
};

export default memo(InputField);
