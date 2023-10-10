import PropTypes from "prop-types";
import React, { memo } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const SubscriptionInformationModal = (props) => {
  const {
    onClose,
    isOpen,
    className,
    size,
    heading,
    ModalText1,
    ModalText2,
    TOneClassName,
    TTwoClassName,
    ButtonOne,
    ButtonTwo,
    ButtonThree,
  } = props;
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size={size}
      isOpen={isOpen}
      toggle={onClose}
      className={className}
    >
      {heading && (
        <ModalHeader className="border-0 ">
          <b>{heading}</b>
        </ModalHeader>
      )}

      <ModalBody className="py-4 px-2">
        <div className={`${TOneClassName}`}> {ModalText1}</div>
        <div className={`${TTwoClassName}`}> {ModalText2}</div>
        <div className="w-100 text-center">{ButtonThree}</div>
        <div className="w-100 d-flex align-items-center justify-content-center gap-3">
          <div>{ButtonOne}</div>
          <div>{ButtonTwo}</div>
        </div>
      </ModalBody>
    </Modal>
  );
};

SubscriptionInformationModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  size: PropTypes.string,
};

SubscriptionInformationModal.defaultProps = {
  className: "",
  size: "sm",
  isOpen: false,
  onClose: () => {},
};

export default memo(SubscriptionInformationModal);
