import React, { memo } from "react";
import { Button } from "reactstrap";
import "./BtnStyle.scss";

const OutlineBtn = (props) => {
  const { className, text, handleOnClick } = props;
  return (
    <Button className={`OutlineBtn ${className}`} onClick={handleOnClick}>
      {text}
    </Button>
  );
};

export default memo(OutlineBtn);
