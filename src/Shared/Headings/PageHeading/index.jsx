import React, { Component } from "react";

const PageHeading = (props) => {
  const { headingText, categoryText, className, style } = props;
  return (
    <React.Fragment>
      <h2
        className={`fw-bold text-black-custom p-3 ${className}`}
        style={{ style, textTransform: "camelCase" }}
      >
        {headingText}
        <span
          className="text-muted h6 fw-bold"
          style={{ style, textTransform: "camelCase" }}
        >{`${categoryText}`}</span>
      </h2>
    </React.Fragment>
  );
};
export default PageHeading;
