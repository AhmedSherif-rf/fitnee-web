import PropTypes from "prop-types";
import React, { memo } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const InformationModal = (props) => {
  const {
    onClose,
    isOpen,
    className,
    size,
    heading,
    ModalTextOne,
    ModalTextTwo,
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
        <div className={`${TOneClassName}`}> {ModalTextOne}</div>
        <div className={`${TTwoClassName}`}> {ModalTextTwo}</div>
        <div className="w-100 text-center">{ButtonThree}</div>
        <div className="w-100 d-flex align-items-center justify-content-center gap-3">
          <div>{ButtonOne}</div>
          <div>{ButtonTwo}</div>
        </div>
      </ModalBody>
    </Modal>
  );
};

InformationModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  size: PropTypes.string,
};

InformationModal.defaultProps = {
  className: "",
  size: "sm",
  isOpen: false,
  onClose: () => {},
};

export default memo(InformationModal);
