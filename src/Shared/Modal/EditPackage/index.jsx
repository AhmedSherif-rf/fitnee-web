import { Formik } from "formik";
import React, { memo, useEffect, useState } from "react";
import InputField from "../../InputField";
import FillBtn from "../../Buttons/FillBtn";
import OutlineBtn from "../../Buttons/OutlineBtn";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { PACKAGES_URL } from "../../../utils/constants";
import { EDIT_PACKAGE_SCHEMA } from "../../ValidationData/validation";
import { Modal, ModalBody, ModalHeader, Label, Form } from "reactstrap";
import { EditPackage } from "../../../Redux/features/Admin/Packages/packagesApi";

const EditPackageModal = (props) => {
  const {
    onClose,
    isOpen,
    className,
    size,
    packageData,
    handleRefetchHistory,
  } = props;

  const { loading } = useSelector((state) => state.packages);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation("");

  const handleEditPackageSubmit = async (values) => {
    const data = {
      apiEndpoint: PACKAGES_URL + packageData.id + "/",
      requestData: values,
    };

    await dispatch(EditPackage(data)).then((res) => {
      if (res.type === "EditPackage/fulfilled") {
        handleRefetchHistory();
      }
    });
  };

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
      <ModalHeader className="border-0">
        <b>{t("packages.editPackage")}</b>
      </ModalHeader>
      <ModalBody className="px-4">
        <Formik
          initialValues={{ ...packageData }}
          validationSchema={EDIT_PACKAGE_SCHEMA}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            await handleEditPackageSubmit(values);
            onClose();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("packages.nameLabel")}`}
                </Label>
                <InputField
                  type="name"
                  name="name"
                  placeholder={t("packages.namePlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.name}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.name) && touched.name && t(errors.name)}
                </p>
              </div>

              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("packages.descriptionLabel")}`}
                </Label>
                <InputField
                  type="text"
                  name="description"
                  placeholder={t("packages.descriptionPlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.description}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.description) &&
                    touched.description &&
                    t(errors.description)}
                </p>
              </div>
              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("packages.priceLabel")}`}
                </Label>
                <InputField
                  type="text"
                  name="price"
                  placeholder={t("packages.pricePlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.price}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.price) && touched.price && t(errors.price)}
                </p>
              </div>
              <div className="w-100 d-flex align-items-center justify-content-center gap-3">
                <FillBtn
                  className="w-100 py-2"
                  text={t("packages.saveText")}
                  disabled={loading === "pending" ? true : false}
                  type={"submit"}
                />
                <OutlineBtn
                  className="w-100 py-2"
                  disabled={loading === "pending" ? true : false}
                  text={t("login.cancelText")}
                  handleOnClick={() => onClose()}
                />
              </div>
            </Form>
          )}
        </Formik>
      </ModalBody>
    </Modal>
  );
};

export default memo(EditPackageModal);
