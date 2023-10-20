import React from "react";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const InfoModal = (props) => {
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
      onClosed={onClose}
      toggle={onClose}
      className={className}
    >
      <ModalHeader className="border-0 ">
        <b>{heading}</b>
      </ModalHeader>
      <ModalBody>
        <div className={`${TOneClassName}`}> {ModalText1}</div>
        <div className={`${TTwoClassName}`}> {ModalText2}</div>
        <div className="w-100 text-center">{ButtonThree}</div>
        <div className="w-100 d-flex align-items-center justify-content-center gap-3">
          <div className="w-100">{ButtonOne}</div>
          <div className="w-100">{ButtonTwo}</div>
        </div>
      </ModalBody>
    </Modal>
  );
};

InfoModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  size: PropTypes.string,
};
InfoModal.defaultProps = {
  className: "",
  size: "sm",
  isOpen: false,
  onClose: () => {},
};

export default InfoModal;
