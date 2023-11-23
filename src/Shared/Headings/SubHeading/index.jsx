import React, { Component } from "react";

const SubHeading = (props) => {
  const { headingText, categoryText, className, style } = props;
  return (
    <React.Fragment>
      <h4
        className={`fw-bold text-dark p-3 ${className}`}
        style={{ style, textTransform: "uppercase" }}
      >
        {headingText}
        <span
          className="text-muted h6 fw-bold"
          style={{ style, textTransform: "camelCase" }}
        >{`${categoryText}`}</span>
      </h4>
    </React.Fragment>
  );
};
export default SubHeading;
