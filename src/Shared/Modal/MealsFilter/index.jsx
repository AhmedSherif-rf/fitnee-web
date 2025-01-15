import { Formik } from "formik";
import React, { memo, useEffect, useState } from "react";
import FillBtn from "../../Buttons/FillBtn";
import OutlineBtn from "../../Buttons/OutlineBtn";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  ADMIN_MEAL_TYPE_URL,
  ADMIN_MEAL_CLASSIFICATION_URL,
} from "../../../utils/constants";
import { MEALS_Filter_SCHEMA } from "../../ValidationData/validation";
import { Modal, ModalBody, ModalHeader, Label, Form } from "reactstrap";
import { MEALS_Filters_INITIAL_VALUES } from "../../ValidationData/initialValue";
import { getMealsClassifications } from "../../../Redux/features/Admin/Meals/mealsApi";
import SelectField from "../../../Shared/Select";

const MealsFilter = (props) => {
  const [mealTypes, setMealTypes] = useState([]);
  const [mealClassification, setMealClassification] = useState([]);
  const { onClose, isOpen, handleRefetchHistory } = props;
  const { loading } = useSelector((state) => state.userListing);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation("");

  const handleFilter = async (values) => {
    let queries = {};

    if (values.classification) queries.classification = values.classification;
    if (values.meal_type) queries.meal_type = values.meal_type;
    if (values.active) queries.active = values.active;

    handleRefetchHistory(queries);
  };

  const getClassifications = async () => {
    const data = {
      apiEndpoint: ADMIN_MEAL_CLASSIFICATION_URL,
    };

    await dispatch(getMealsClassifications(data)).then((res) => {
      if (res.type === "getMealsClassifications/fulfilled") {
        setMealClassification(res.payload.data);
      }
    });
  };

  const getMealTypes = async () => {
    const data = {
      apiEndpoint: ADMIN_MEAL_TYPE_URL,
    };

    await dispatch(getMealsClassifications(data)).then((res) => {
      if (res.type === "getMealsClassifications/fulfilled") {
        setMealTypes(res.payload.data);
      }
    });
  };

  // ----------------- side effects -----------------
  useEffect(() => {
    getClassifications();
    getMealTypes();
  }, [isOpen]);

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size={{}}
      isOpen={isOpen}
      onClosed={onClose}
      toggle={onClose}
      className={` ${i18n.dir()}`}
    >
      <ModalHeader className="border-0">
        <b>{t("meals.filter")}</b>
      </ModalHeader>
      <ModalBody className="px-4">
        <Formik
          initialValues={{ ...MEALS_Filters_INITIAL_VALUES }}
          validationSchema={MEALS_Filter_SCHEMA}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            await handleFilter(values);
            onClose();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            setFieldValue,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("meals.classificationLabel")}`}
                </Label>
                <SelectField
                  name="classification"
                  className={"form-control-lg BorderRadiusInput"}
                  options={mealClassification?.map((item) => ({
                    value: item.id,
                    label: i18n.language === "en" ? item.en_name : item.ar_name,
                  }))}
                  handleChange={(value) =>
                    setFieldValue("classification", value)
                  }
                />
                <p className="errorField">
                  {t(errors.classification) &&
                    touched.classification &&
                    t(errors.classification)}
                </p>
              </div>

              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("meals.meal_typeLabel")}`}
                </Label>
                <SelectField
                  name="meal_type"
                  className={"form-control-lg BorderRadiusInput"}
                  options={mealTypes?.map((item) => ({
                    value: item.id,
                    label: i18n.language === "en" ? item.en_name : item.ar_name,
                  }))}
                  handleChange={(value) => setFieldValue("meal_type", value)}
                />
                <p className="errorField">
                  {t(errors.meal_type) &&
                    touched.meal_type &&
                    t(errors.meal_type)}
                </p>
              </div>

              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("meals.statusLabel")}`}
                </Label>
                <SelectField
                  name="active"
                  className={"form-control-lg BorderRadiusInput"}
                  options={[
                    {
                      value: "true",
                      label: "Active",
                    },
                    {
                      value: "false",
                      label: "Inactive",
                    },
                  ]}
                  handleChange={(value) => setFieldValue("active", value)}
                />
                <p className="errorField">
                  {t(errors.active) && touched.active && t(errors.active)}
                </p>
              </div>

              {/* <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("meals.calorie_rangeLabel")}`}
                </Label>
                <SelectField
                  name="calorie_range"
                  className={"form-control-lg BorderRadiusInput"}
                  options={calories?.map((item) => ({
                    value: item.id,
                    label: item.name,
                  }))}
                  handleChange={(value) =>
                    setFieldValue("calorie_range", value)
                  }
                />
                <p className="errorField">
                  {t(errors.calorie_range) &&
                    touched.calorie_range &&
                    t(errors.calorie_range)}
                </p>
              </div> */}

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

export default memo(MealsFilter);
