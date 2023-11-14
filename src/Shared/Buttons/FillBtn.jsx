import "./BtnStyle.scss";
import React, { memo } from "react";
import { Button } from "reactstrap";

const FillBtn = (props) => {
  const { className, text, handleOnClick, disabled = false } = props;

  return (
    <Button
      className={`fillBtn fw-bold buttonBoxShadow ${className}`}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default memo(FillBtn);
