import "./styles.scss";
import React from "react";

const PageHeading = (props) => {
  const { headingText, categoryText, className, style } = props;
  return (
    <React.Fragment>
      <h2
        className={`fw-bold text-black-custom px-md-3 pt-3 ${className} heading`}
        style={{ style, textTransform: "camelCase" }}
      >
        {headingText}
        {categoryText && (
          <span
            className="text-muted h6 fw-bold"
            style={{ style, textTransform: "camelCase" }}
          >{`${categoryText}`}</span>
        )}
      </h2>
    </React.Fragment>
  );
};
export default PageHeading;
