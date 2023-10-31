import "./BtnStyle.scss";
import React, { memo } from "react";
import { Button } from "reactstrap";

const FillBtn = (props) => {
  const { className, text, handleOnClick } = props;

  return (
    <Button className={`fillBtn fw-bold shadow-sm ${className}`} onClick={handleOnClick}>
      {text}
    </Button>
  );
};

export default memo(FillBtn);
