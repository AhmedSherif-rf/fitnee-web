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
import UploadPic from "../../UploadPic";

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

  const [displayImages, setDisplayImages] = useState("");

  const { t, i18n } = useTranslation("");

  const handleEditPackageSubmit = async (values) => {
    const requestData = new FormData();

    if (values.pic && typeof values.pic === "object") {
      requestData.append("pic", values.pic);
    }

    requestData.append("name", values.name);
    requestData.append("description", values.description);
    requestData.append("price", values.price);

    const data = {
      apiEndpoint: PACKAGES_URL + packageData.id + "/",
      requestData,
    };

    await dispatch(EditPackage(data)).then((res) => {
      if (res.type === "EditPackage/fulfilled") {
        handleRefetchHistory();
      }
    });
  };

  useEffect(() => {
    if (isOpen) {
      setDisplayImages(packageData?.pic);
    } else {
      setDisplayImages("");
    }
  }, [isOpen]);

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
            setDisplayImages("");
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
            setFieldValue,
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className="mb-2">
                <UploadPic
                  setFieldValue={setFieldValue}
                  displayImages={displayImages}
                  setDisplayImages={setDisplayImages}
                  keyName="pic"
                />
                <p className="errorField">
                  {t(errors.profile_pic) &&
                    touched.profile_pic &&
                    t(errors.profile_pic)}
                </p>
              </div>

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
