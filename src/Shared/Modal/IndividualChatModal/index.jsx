import moment from "moment";
import PropTypes from "prop-types";
import React, { memo } from "react";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import { Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";

const IndividualChatModal = (props) => {
  const { onClose, isOpen, className, size, messages, recipient } = props;

  console.log(messages);

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size={size}
      isOpen={isOpen}
      onClosed={onClose}
      toggle={onClose}
      className={`${className}`}
    >
      <ModalHeader className="border-0 bgYellow">
        <div className="d-flex align-items-center">
          <div
            className="bgProperties rounded-circle me-2"
            style={{
              width: "50px",
              height: "50px",
              backgroundImage:
                recipient?.profile_pic === null
                  ? `url(${Images.USER_DUMMY_IMG})`
                  : `url(${recipient?.profile_pic})`,
            }}
          ></div>
          <h5 className="text-secondary fw-bold mb-0">
            {recipient?.full_name}
          </h5>
        </div>
      </ModalHeader>
      <ModalBody className="p-4">
        <Row>
          <Col md={12} className="border border-primary">
            {messages.map((message, index) => {
              return (
                <div
                  className={
                    parseInt(message?.messageFrom) === recipient?.id
                      ? "ltr d-flex flex-column border messageWrapper p-2 card "
                      : "rtl d-flex flex-column border messageWrapper p-2 d-inline-block border-danger bgYellow"
                  }
                >
                  {message.messageType === "TEXT" && (
                    <p className="px-2">{message.messageText}</p>
                  )}
                  {message.messageType === "EXERCISE" && (
                    <p className="px-2">{message.messageText}</p>
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

                  <small>{moment(message.messageTime).format("h:mm A")}</small>
                </div>
              );
            })}
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};
IndividualChatModal.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
};
IndividualChatModal.defaultProps = {
  className: "",
  size: "sm",
  isOpen: false,
  onClose: () => {},
};

export default memo(IndividualChatModal);
