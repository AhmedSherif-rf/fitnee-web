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
      <ModalBody className="p-4">
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
  children: PropTypes.node,
  heading: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  TOneClassName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  ModalText1: PropTypes.node.isRequired,
  ButtonOne: PropTypes.node.isRequired,
  ButtonTwo: PropTypes.node.isRequired,
};
InfoModal.defaultProps = {
  className: "",
  size: "sm",
  isOpen: false,
  onClose: () => {},
};

export default InfoModal;
