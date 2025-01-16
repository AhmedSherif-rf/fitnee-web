import { Input } from "reactstrap";
import styles from "./style.module.scss";
import React, { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FillBtn from "../Buttons/FillBtn";

const MultiInputField = (props) => {
  const {
    placeholder,
    type,
    onBlurHandle,
    onChangeHandle,
    value,
    name,
    className,
    disabled,
    style,
    rows,
    dataKey,
  } = props;
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input) {
      value.push(input);
      onChangeHandle(dataKey, value);
      setInput("");
    }
  };

  const handleDelete = (item) => {
    const data = value.filter((i) => i !== item);
    onChangeHandle(dataKey, data);
  };

  const { i18n } = useTranslation("");

  return (
    <>
      <div
        className={`d-flex flex-row gap-3 ${styles.inputWrapper} ${i18n.dir()}`}
      >
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          style={style}
          min={type === "number" ? 0 : ""}
          step={type === "number" ? "any" : ""}
          className={`form-control-lg w-100 ${styles.inputDesign} ${
            type === "number" ? "remove-arrow" : ""
          } ${className}`}
          disabled={disabled}
          onChange={(e) => setInput(e.target.value)}
          onBlur={onBlurHandle}
          value={input}
          rows={rows}
        />
        <FillBtn type="button" handleOnClick={handleAdd} text={"Add"} />
      </div>
      <div className="d-flex flex-row gap-1 my-2">
        {value?.map((item, index) => {
          return (
            <p
              key={index}
              style={{
                borderRadius: "5px",
              }}
              className={`relative border border-secondary px-2 ${
                styles.inputWrapper
              } ${i18n.dir()}`}
            >
              <span
                onClick={() => handleDelete(item)}
                className={`${styles.close} `}
              >
                X
              </span>
              {item}
            </p>
          );
        })}{" "}
      </div>
    </>
  );
};

export default memo(MultiInputField);
