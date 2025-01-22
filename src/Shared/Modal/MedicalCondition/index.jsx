import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import medicalCondition from "../../../Assets/Images/medicalCondition.png";

const MedicalConditionModal = (props) => {
  const { onClose, isOpen, className, size } = props;

  const { t, i18n } = useTranslation("");

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size={size}
      isOpen={isOpen}
      onClosed={onClose}
      toggle={onClose}
      className={`${className} ${i18n.dir()}`}
    >
      <ModalHeader className="border-0 p-0 d-flex justify-content-center w-75 mx-auto">
        <img
          className="w-100 p-0"
          src={medicalCondition}
          alt="Medical Condition"
        />
      </ModalHeader>
      <ModalBody className="px-5 pb-5 text-center fw-bold">
        {t("subscription.medicalCondition")}
      </ModalBody>
    </Modal>
  );
};

export default memo(MedicalConditionModal);
