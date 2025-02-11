import { Formik } from "formik";
import React, { memo } from "react";
import InputField from "../../InputField";
import FillBtn from "../../Buttons/FillBtn";
import OutlineBtn from "../../Buttons/OutlineBtn";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_CALORIES_URL } from "../../../utils/constants";
import { CALORIES_GROUP_SCHEMA } from "../../ValidationData/validation";
import { Modal, ModalBody, ModalHeader, Label, Form } from "reactstrap";
import { CALORIES_GROUP_INITIAL_VALUES } from "../../ValidationData/initialValue";
import { AddMealClassifications } from "../../../Redux/features/Admin/Meals/mealsApi";
import Toaster from "../../../Shared/Toaster";

const AddCalGroup = (props) => {
  const { onClose, isOpen, className, size, handleRefetchHistory } = props;
  const { loading } = useSelector((state) => state.userListing);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation("");

  const handleAddProgressSubmit = async (values, resetForm) => {
    const data = {
      apiEndpoint: ADMIN_CALORIES_URL,
      requestData: values,
    };

    await dispatch(AddMealClassifications(data)).then((res) => {
      if (res.type === "AddMealClassifications/fulfilled") {
        handleRefetchHistory();
        resetForm({ values: { ...CALORIES_GROUP_INITIAL_VALUES } });
        // onClose();
        Toaster.success(t("meals.addedSuccess"));
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
        <b>{t("meals.addcalGroup")}</b>
      </ModalHeader>
      <ModalBody className="px-4">
        <Formik
          initialValues={{ ...CALORIES_GROUP_INITIAL_VALUES }}
          validationSchema={CALORIES_GROUP_SCHEMA}
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
                  {`${t("meals.nameLabel")}`}
                </Label>
                <InputField
                  type="text"
                  name="name"
                  placeholder={t("meals.namePlaceholder")}
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
                  {`${t("meals.minCalLabel")}`}
                </Label>
                <InputField
                  type="number"
                  name="min_calories"
                  placeholder={t("meals.minCalPlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.min_calories}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.min_calories) &&
                    touched.min_calories &&
                    t(errors.min_calories)}
                </p>
              </div>

              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("meals.maxCalLabel")}`}
                </Label>
                <InputField
                  type="number"
                  name="max_calories"
                  placeholder={t("meals.maxCalPlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.max_calories}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.max_calories) &&
                    touched.max_calories &&
                    t(errors.max_calories)}
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

export default memo(AddCalGroup);
