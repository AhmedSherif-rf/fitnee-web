import "./styles.scss";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { copyToClipboard } from "../../../utils/functions";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const InformationModal = (props) => {
  const {
    onClose,
    isOpen,
    className,
    size,
    heading,
    requestId,
    ModalTextOne,
    ModalTextTwo,
    TOneClassName,
    TTwoClassName,
    ButtonOne,
    ButtonTwo,
    ButtonThree,
  } = props;

  const [isRequestIdCopied, setIsRequestIdCopied] = useState(false);

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size={size}
      isOpen={isOpen}
      toggle={onClose}
      className={className}
      backdrop="static"
    >
      {heading && (
        <ModalHeader className="border-0">
          <b>{heading}</b>
        </ModalHeader>
      )}

      <ModalBody className="py-4 px-2 text-black-custom">
        <div className={`${TOneClassName}`}> {ModalTextOne}</div>
        <div className={`${TTwoClassName}`}> {ModalTextTwo}</div>
        {requestId && (
          <div
            className="text-center fw-bold mb-3 fs-4 cursorPointer"
            onClick={() => {
              copyToClipboard(requestId);
              setIsRequestIdCopied(true);
              setTimeout(() => {
                setIsRequestIdCopied(false);
              }, 500);
            }}
          >
            {requestId}
            {"  "}
            <span>
              {isRequestIdCopied ? (
                <IoMdCheckmarkCircleOutline color="#F6E709" />
              ) : (
                <MdContentCopy />
              )}
            </span>
          </div>
        )}
        <div className="w-100 text-center">{ButtonThree}</div>
        <div className="w-100 d-flex align-items-center justify-content-center gap-3 modalButtons">
          <div>{ButtonOne}</div>
          <div>{ButtonTwo}</div>
        </div>
      </ModalBody>
    </Modal>
  );
};

InformationModal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  size: PropTypes.string,
};

InformationModal.defaultProps = {
  className: "",
  size: "sm",
  isOpen: false,
  requestId: null,
  onClose: () => {},
};

export default memo(InformationModal);
