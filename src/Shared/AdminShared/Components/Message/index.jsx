import "./styles.scss";
import moment from "moment";
import { memo } from "react";
import Images from "../../../../HelperMethods/Constants/ImgConstants";

const Member = ({ message, member }) => {
  return (
    <div className="d-flex gap-2 py-2">
      <div
        className="bgProperties rounded-circle"
        style={{
          backgroundImage:
            member?.avatar === null
              ? `url(${Images.USER_DUMMY_IMG})`
              : `url(${member?.avatar})`,
          width: "35px",
          height: "35px",
        }}
      ></div>
      <div className="d-flex flex-column">
        <small>{member?.name}</small>
        {message.messageType === "TEXT" && (
          <small className="messageWrapper">{message.messageText}</small>
        )}
        {message.messageType === "IMAGE" && (
          <div className="messageWrapper">
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
        <small>{moment(message.messageTime).format("h:mm A")}</small>
      </div>
    </div>
  );
};

export default memo(Member);
