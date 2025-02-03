import { Formik } from "formik";
import React, { memo } from "react";
import InputField from "../../InputField";
import FillBtn from "../../Buttons/FillBtn";
import OutlineBtn from "../../Buttons/OutlineBtn";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_MEAL_CLASSIFICATION_URL } from "../../../utils/constants";
import { MEAL_CLASSIFICATIONS_SCHEMA } from "../../ValidationData/validation";
import { Modal, ModalBody, ModalHeader, Label, Form } from "reactstrap";
import { MEAL_CLASSIFICATIONS_INITIAL_VALUES } from "../../ValidationData/initialValue";
import { AddMealClassifications } from "../../../Redux/features/Admin/Meals/mealsApi";
import Toaster from "../../../Shared/Toaster";

const AddCategoryClassification = (props) => {
  const { onClose, isOpen, className, size, handleRefetchHistory } = props;
  const { loading } = useSelector((state) => state.userListing);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation("");

  const handleAddProgressSubmit = async (values, resetForm) => {
    const data = {
      apiEndpoint: ADMIN_MEAL_CLASSIFICATION_URL,
      requestData: values,
    };

    await dispatch(AddMealClassifications(data)).then((res) => {
      if (res.type === "AddMealClassifications/fulfilled") {
        handleRefetchHistory();
      }
    });

    resetForm({ values: { ...MEAL_CLASSIFICATIONS_INITIAL_VALUES } });
    onClose();
    Toaster.success(t("meals.addedSuccess"));
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
        <b>{t("meals.addMealClassification")}</b>
      </ModalHeader>
      <ModalBody className="px-4">
        <Formik
          initialValues={{ ...MEAL_CLASSIFICATIONS_INITIAL_VALUES }}
          validationSchema={MEAL_CLASSIFICATIONS_SCHEMA}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            await handleAddProgressSubmit(values, resetForm);
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
                  {`${t("meals.en_nameLabel")}`}
                </Label>
                <InputField
                  type="text"
                  name="en_name"
                  placeholder={t("meals.en_namePlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.en_name}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.en_name) && touched.en_name && t(errors.en_name)}
                </p>
              </div>

              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("meals.ar_nameLabel")}`}
                </Label>
                <InputField
                  type="text"
                  name="ar_name"
                  placeholder={t("meals.ar_namePlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.ar_name}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.ar_name) && touched.ar_name && t(errors.ar_name)}
                </p>
              </div>

              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("meals.descriptionLabel")}`}
                </Label>
                <InputField
                  type="text"
                  name="description"
                  placeholder={t("meals.descriptionPlaceholder")}
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
                  {`${t("meals.orderLabel")}`}
                </Label>
                <InputField
                  type="number"
                  name="order"
                  placeholder={t("meals.orderPlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.order}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.order) && touched.order && t(errors.order)}
                </p>
              </div>

              <div className="w-100 d-flex align-items-center justify-content-center gap-3">
                <FillBtn
                  className="w-100 py-2"
                  text={t("meals.saveText")}
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

export default memo(AddCategoryClassification);
