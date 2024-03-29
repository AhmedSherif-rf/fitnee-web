import "./styles.scss";
import moment from "moment";
import { memo } from "react";
import { Card } from "reactstrap";
import Images from "../../../../HelperMethods/Constants/ImgConstants";

const Member = ({ message, member }) => {
  return (
    <div className="d-flex gap-2 py-2">
      <div
        className="bgProperties rounded-circle me-2"
        style={{
          backgroundImage:
            member?.avatar === null
              ? `url(${Images.USER_DUMMY_IMG})`
              : `url(${member?.avatar})`,
          width: "35px",
          height: "35px",
        }}
      ></div>
      <Card
        className={`d-flex flex-column border ${
          message.isDeleted ? "messageWrapperDanger" : "messageWrapper"
        } p-2`}
      >
        <small className="fw-bold ">{member?.name}</small>
        {message.messageType === "TEXT" && (
          <small className="px-2">{message.messageText}</small>
        )}
        {message.messageType === "IMAGE" && (
          <div className="">
            <div
              className="bgProperties"
              style={{
                backgroundImage:
                  message?.mediaUrl === null
                    ? `url(${Images.USER_DUMMY_IMG})`
                    : `url(${message?.mediaUrl})`,
                width: "80px",
                height: "100px",
              }}
            ></div>
          </div>
        )}
        <div className="d-flex justify-content-end pe-2">
          {" "}
          <small>{moment(message.messageTime).format("h:mm A")}</small>
        </div>
      </Card>
    </div>
  );
};

export default memo(Member);
