import { Formik } from "formik";
import React, { memo, useEffect, useState } from "react";
import InputField from "../../InputField";
import FillBtn from "../../Buttons/FillBtn";
import OutlineBtn from "../../Buttons/OutlineBtn";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  ADMIN_MEAL_CLASSIFICATION_URL,
  ADMIN_MEAL_TYPE_URL,
} from "../../../utils/constants";
import { MEAL_CLASSIFICATIONS_SCHEMA } from "../../ValidationData/validation";
import { Modal, ModalBody, ModalHeader, Label, Form } from "reactstrap";
import { MEAL_SUBCATEGORY_INITIAL_VALUES } from "../../ValidationData/initialValue";
import {
  AddMealClassifications,
  getMealsClassifications,
} from "../../../Redux/features/Admin/Meals/mealsApi";
import SelectField from "../../Select";

const AddSubcategory = (props) => {
  const { onClose, isOpen, className, size, handleRefetchHistory } = props;
  const { loading } = useSelector((state) => state.userListing);
  const dispatch = useDispatch();
  const [mainCategoryData, setMainCategoryData] = useState([]);
  const [hasMainCategoryData, setHasMainCategoryData] = useState(false);

  const { t, i18n } = useTranslation("");

  const handleAddProgressSubmit = async (values, resetForm) => {
    if (!values.classification?.length) {
      setHasMainCategoryData(true);
      return;
    }

    setHasMainCategoryData(false);

    const requestData = { ...values };

    requestData.classification = values.classification?.map((i) => i.value);

    const data = {
      apiEndpoint: ADMIN_MEAL_TYPE_URL,
      requestData,
    };

    await dispatch(AddMealClassifications(data)).then((res) => {
      if (res.type === "AddMealClassifications/fulfilled") {
        handleRefetchHistory();
      }
    });

    resetForm({ values: { ...MEAL_SUBCATEGORY_INITIAL_VALUES } });
    onClose();
  };

  useEffect(() => {
    const data = {
      apiEndpoint: `${ADMIN_MEAL_CLASSIFICATION_URL}`,
    };

    dispatch(getMealsClassifications(data)).then((res) => {
      if (res.type === "getMealsClassifications/fulfilled") {
        setMainCategoryData(res.payload.data);
      }
    });
  }, []);

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
        <b>{t("meals.addSubcategory")}</b>
      </ModalHeader>
      <ModalBody className="px-4">
        <Formik
          initialValues={{ ...MEAL_SUBCATEGORY_INITIAL_VALUES }}
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
            setFieldValue,
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
                  {`${t("meals.classificationLabel")}`}
                </Label>

                <SelectField
                  name="classification"
                  isMulti={true}
                  className={"form-control-lg BorderRadiusInput"}
                  options={mainCategoryData?.map((item) => {
                    return {
                      value: item.id,
                      label:
                        i18n.language === "en" ? item.en_name : item.ar_name,
                    };
                  })}
                  handleChange={(value) =>
                    setFieldValue("classification", value)
                  }
                />
                <p className="errorField">
                  {t(errors.classification) &&
                    touched.classification &&
                    t(errors.classification)}
                </p>
                <p className="errorField">
                  {hasMainCategoryData && "Please select a main category"}
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

export default memo(AddSubcategory);
