import { Col } from "reactstrap";
import React, { memo } from "react";

const CommentsCard = (props) => {
  const { commentImg, commentTitle, commentContent } = props;

  return (
    <Col md={12}>
      <div class="d-flex align-items-center p-2 bg-white mb-1 shadow-sm BorderRadius">
        <div>
          {" "}
          <div
            className="bgProperties"
            style={{
              borderRadius: "100%",
              width: "70px",
              height: "70px",
              backgroundImage: `url(${commentImg})`,
            }}
          ></div>
        </div>
        <div className="ms-3">
          <h6 className="fw-bold">{commentTitle}</h6>
          <p className="mb-0 small lh-1"> {commentContent}</p>
        </div>
      </div>
    </Col>
  );
};

export default memo(CommentsCard);
