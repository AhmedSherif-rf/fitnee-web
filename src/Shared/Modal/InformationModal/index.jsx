import "./styles.scss";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { useTranslation } from "react-i18next";
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

  const { i18n } = useTranslation("");

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size={size}
      isOpen={isOpen}
      toggle={onClose}
      className={`${className} ${i18n.dir()}`}
      backdrop={"static"}
    >
      {heading && (
        <ModalHeader className="border-0 pt-3 pb-0">
          <b>{heading}</b>
        </ModalHeader>
      )}

      <ModalBody className="py-4 text-black-custom">
        <div className={`${TOneClassName}`}> {ModalTextOne}</div>
        <div className={`${TTwoClassName}`}> {ModalTextTwo}</div>
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
