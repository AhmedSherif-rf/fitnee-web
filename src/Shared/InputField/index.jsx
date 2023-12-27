import { Input } from "reactstrap";
import styles from "./style.module.scss";
import React, { memo, useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";

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
    style,
    rows,
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className={`${styles.inputWrapper}`}>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      <Input
        type={
          type === "password" ? (isPasswordVisible ? "text" : "password") : type
        }
        placeholder={placeholder}
        name={name}
        style={style}
        className={`form-control-lg  w-100 ${styles.inputDesign} ${className}`}
        disabled={disabled}
        onChange={onChangeHandle}
        onBlur={onBlurHandle}
        value={value}
        rows={rows}
      />
      {type === "password" && (
        <div
          onClick={togglePasswordVisibility}
          className={styles.passwordIconWrapper}
        >
          {isPasswordVisible ? <GoEyeClosed /> : <GoEye />}
        </div>
      )}
    </div>
  );
};

export default memo(InputField);
