import { Formik } from "formik";
import React, { memo, useEffect, useState } from "react";
import InputField from "../../InputField";
import FillBtn from "../../Buttons/FillBtn";
import OutlineBtn from "../../Buttons/OutlineBtn";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  ADMIN_MEAL_URL,
  ADMIN_MEAL_TYPE_URL,
  ADMIN_CALORIES_URL,
} from "../../../utils/constants";
import { MEALS_SCHEMA } from "../../ValidationData/validation";
import { Modal, ModalBody, ModalHeader, Label, Form } from "reactstrap";
import UploadPic from "../../UploadPic";
import {
  EditMealClassifications,
  getMealsClassifications,
} from "../../../Redux/features/Admin/Meals/mealsApi";
import SelectField from "../../../Shared/Select";

const EditMeals = (props) => {
  const { onClose, isOpen, className, size, mealData, handleRefetchHistory } =
    props;
  const [mealTypes, setMealTypes] = useState([]);
  const [calories, setCalories] = useState([]);
  const [displayImages, setDisplayImages] = useState("");
  const { loading } = useSelector((state) => state.userListing);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation("");

  const handleEditCoachSubmit = async (values) => {
    const requestData = new FormData();
    if (values.meal_pic && typeof values.meal_pic === "object") {
      requestData.append("meal_pic", values.meal_pic);
    }
    requestData.append("en_name", values.en_name);
    requestData.append("ar_name", values.ar_name);
    requestData.append("description", values.description);
    requestData.append("meal_type", values.meal_type);
    requestData.append("calorie_range", values.calorie_range);
    requestData.append("calorie_recipe", values.calorie_recipe);
    requestData.append("fats", values.fats);
    requestData.append("carbohydrate", values.carbohydrate);
    requestData.append("protein", values.protein);
    requestData.append("ingredients", values.ingredients);
    requestData.append("active", "True");

    const data = {
      apiEndpoint: ADMIN_MEAL_URL + mealData.id + "/",
      requestData,
    };

    await dispatch(EditMealClassifications(data)).then((res) => {
      if (res.type === "EditMealClassifications/fulfilled") {
        handleRefetchHistory();
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

  const getCalories = async () => {
    const data = {
      apiEndpoint: ADMIN_CALORIES_URL,
    };

    await dispatch(getMealsClassifications(data)).then((res) => {
      if (res.type === "getMealsClassifications/fulfilled") {
        setCalories(res.payload.data);
      }
    });
  };

  // ----------------- side effects -----------------
  useEffect(() => {
    getMealTypes();
    getCalories();

    if (isOpen) {
      setDisplayImages(mealData?.meal_pic);
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
        <b>{t("meals.editReceipe")}</b>
      </ModalHeader>
      <ModalBody className="px-4">
        <Formik
          initialValues={{ ...mealData }}
          validationSchema={MEALS_SCHEMA}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            await handleEditCoachSubmit(values);
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
              <div className="mb-2 d-flex flex-column align-items-center">
                <UploadPic
                  setFieldValue={setFieldValue}
                  displayImages={displayImages}
                  setDisplayImages={setDisplayImages}
                  keyName="meal_pic"
                />
                <p className="errorField">
                  {t(errors.profile_pic) &&
                    touched.profile_pic &&
                    t(errors.profile_pic)}
                </p>
              </div>
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
              </div>

              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("meals.calorie_recipeLabel")}`}
                </Label>
                <InputField
                  type="number"
                  name="calorie_recipe"
                  placeholder={t("meals.calorie_recipePlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.calorie_recipe}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.calorie_recipe) &&
                    touched.calorie_recipe &&
                    t(errors.calorie_recipe)}
                </p>
              </div>

              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("meals.fatsLabel")}`}
                </Label>
                <InputField
                  type="number"
                  name="fats"
                  placeholder={t("meals.fatsPlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.fats}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.fats) && touched.fats && t(errors.fats)}
                </p>
              </div>

              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("meals.carbohydrateLabel")}`}
                </Label>
                <InputField
                  type="number"
                  name="carbohydrate"
                  placeholder={t("meals.carbohydratePlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.carbohydrate}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.carbohydrate) &&
                    touched.carbohydrate &&
                    t(errors.carbohydrate)}
                </p>
              </div>

              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("meals.proteinLabel")}`}
                </Label>
                <InputField
                  type="number"
                  name="protein"
                  placeholder={t("meals.proteinPlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.protein}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.protein) && touched.protein && t(errors.protein)}
                </p>
              </div>

              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("meals.ingredientsLabel")}`}
                </Label>
                <InputField
                  type="text"
                  name="ingredients"
                  placeholder={t("meals.ingredientsPlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.ingredients}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.ingredients) &&
                    touched.ingredients &&
                    t(errors.ingredients)}
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

export default memo(EditMeals);
