import React, { memo } from "react";
import styles from "./style.module.scss";

const InputField = (props) => {
  const {
    placeholder,
    type,
    onHandleChange,
    value,
    name,
    className,
    icon,
    disabled,
  } = props;

  return (
    <div className={`${styles.inputWrapper}`}>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`form-control w-100 BorderYellow ${styles.inputDesign} ${className}`}
        disabled={disabled}
        onChange={onHandleChange}
        value={value}
      />
    </div>
  );
};

export default memo(InputField);
