import { Col } from "reactstrap";
import StarRating from "../Rating";
import React, { memo } from "react";

const CommentsCard = (props) => {
  const { commentImg, commentTitle, commentContent } = props;

  return (
    <Col md={12}>
      <div class="d-flex align-items-center px-2">
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
          <span className="d-flex align-items-end mb-2 gap-2">
            <h6 className="mb-0 fw-bold">{commentTitle}</h6>
            <StarRating/>
          </span>
          <p className="mb-0 small lh-1"> {commentContent}</p>
        </div>
      </div>
      <hr className="text-black-custom mx-3" />
    </Col>
  );
};

export default memo(CommentsCard);
