import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Container, Row, Form, Label } from "reactstrap";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { SUBSCRIPTION_FORM_URL } from "../../../utils/constants";
import { subscribeWithACoach } from "../../../Redux/features/Subscription/subscriptionApi";
import { SUBSCRIPTION_FORM_INITIAL_VALUES } from "../../../Shared/ValidationData/initialValue";
import { SUBSCRIPTION_FORM_SCHEMA } from "../../../Shared/ValidationData/validation";
import InputField from "../../../Shared/InputField";
import SelectField from "../../../Shared/Select";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import { useNavigate } from "react-router-dom";
import { setSubscriptionPlan } from "../../../Redux/features/Subscription/subscriptionSlice";

const SubscriptionForm = () => {
  // ------------- hooks -------------
  const { t, i18n } = useTranslation("");
  const { loading } = useSelector((state) => state.subscription);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ------------- functions -------------

  const handleSubscriptionForm = async ({ id, duration, price, type }) => {
    dispatch(setSubscriptionPlan({ id: 50, duration, price: 50, type }));
    navigate("/trainee/subscription/creditCardDetail");
  };

  // ------------- side effects -------------

  return (
    <Container fluid className={`${i18n.dir()}`}>
      <Row className="justify-content-center align-items-center">
        <Col md={12}>
          <Card
            className={`BorderRadius contentCard ${styles.traineeListWrapper}`}
            id={"listingContainer"}
          >
            <CardBody>
              <h3 className="text-center py-5">
                {t("subscription.formTitle")}
              </h3>
              <Formik
                initialValues={{ ...SUBSCRIPTION_FORM_INITIAL_VALUES }}
                validationSchema={SUBSCRIPTION_FORM_SCHEMA}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  setSubmitting(true);

                  await handleSubscriptionForm(values);
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
                    <div className="d-flex flex-row">
                      <Col md={5} className={`p-2 mx-auto`}>
                        <div className="mb-2">
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.genderLabel")}`}
                          </Label>
                          <SelectField
                            name="gender"
                            className={"form-control-lg BorderRadiusInput"}
                            options={[
                              { value: "male", label: "Male" },
                              { value: "female", label: "Female" },
                            ]}
                          />
                          <p className="errorField">
                            {t(errors.gender) &&
                              touched.gender &&
                              t(errors.gender)}
                          </p>
                        </div>
                        <div className="mb-2">
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.weightLabel")}`}
                          </Label>

                          <SelectField
                            name="weight"
                            className={"form-control-lg BorderRadiusInput"}
                            options={[
                              { value: "male", label: "Male" },
                              { value: "female", label: "Female" },
                            ]}
                          />
                          <p className="errorField">
                            {t(errors.weight) &&
                              touched.weight &&
                              t(errors.weight)}
                          </p>
                        </div>
                        <div className="mb-2">
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.favMealsLabel")}`}
                          </Label>

                          <SelectField
                            name="favMeals"
                            className={"form-control-lg BorderRadiusInput"}
                            options={[
                              { value: "male", label: "Male" },
                              { value: "female", label: "Female" },
                            ]}
                          />
                          <p className="errorField">
                            {t(errors.favMeals) &&
                              touched.favMeals &&
                              t(errors.favMeals)}
                          </p>
                        </div>
                        <div className="mb-2">
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.training_placeLabel")}`}
                          </Label>
                          <InputField
                            type="training_place"
                            name="training_place"
                            placeholder={t(
                              "subscription.training_placePlaceholder"
                            )}
                            style={{ margin: "12.8px", borderRadius: "4px" }}
                            onChangeHandle={handleChange}
                            onBlurHandle={handleBlur}
                            value={values.training_place}
                            className={
                              "form-control-lg BorderRadiusInput py-3 px-2"
                            }
                          />
                          <p className="errorField">
                            {t(errors.training_place) &&
                              touched.training_place &&
                              t(errors.training_place)}
                          </p>
                        </div>
                        <div className="mb-2">
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.training_levelLabel")}`}
                          </Label>
                          <InputField
                            type="training_level"
                            name="training_level"
                            placeholder={t(
                              "subscription.training_levelPlaceholder"
                            )}
                            style={{ margin: "12.8px", borderRadius: "4px" }}
                            onChangeHandle={handleChange}
                            onBlurHandle={handleBlur}
                            value={values.training_level}
                            className={
                              "form-control-lg BorderRadiusInput py-3 px-2"
                            }
                          />
                          <p className="errorField">
                            {t(errors.training_level) &&
                              touched.training_level &&
                              t(errors.training_level)}
                          </p>
                        </div>
                        <div className="mb-2">
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.injuriesLabel")}`}
                          </Label>
                          <InputField
                            type="injuries"
                            name="injuries"
                            placeholder={t("subscription.injuriesPlaceholder")}
                            style={{ margin: "12.8px", borderRadius: "4px" }}
                            onChangeHandle={handleChange}
                            onBlurHandle={handleBlur}
                            value={values.injuries}
                            className={
                              "form-control-lg BorderRadiusInput py-3 px-2"
                            }
                          />
                          <p className="errorField">
                            {t(errors.injuries) &&
                              touched.injuries &&
                              t(errors.injuries)}
                          </p>
                        </div>
                        <div className="mb-2">
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.referenceLabel")}`}
                          </Label>
                          <InputField
                            type="reference"
                            name="reference"
                            placeholder={t("subscription.referencePlaceholder")}
                            style={{ margin: "12.8px", borderRadius: "4px" }}
                            onChangeHandle={handleChange}
                            onBlurHandle={handleBlur}
                            value={values.reference}
                            className={
                              "form-control-lg BorderRadiusInput py-3 px-2"
                            }
                          />
                          <p className="errorField">
                            {t(errors.reference) &&
                              touched.reference &&
                              t(errors.reference)}
                          </p>
                        </div>
                        <div className="mb-2 d-flex flex-row align-items-start gap-2">
                          <input
                            type="checkbox"
                            name="accept"
                            className="mt-1"
                            onChangeHandle={handleChange}
                            onBlurHandle={handleBlur}
                            value={values.conditions}
                          />
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.acceptLabel")}`}
                          </Label>
                        </div>
                      </Col>
                      <Col md={5} className={`p-2 mx-auto`}>
                        <div className="mb-2">
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.ageLabel")}`}
                          </Label>
                          <InputField
                            type="age"
                            name="age"
                            placeholder={t("subscription.agePlaceholder")}
                            style={{ margin: "12.8px", borderRadius: "4px" }}
                            onChangeHandle={handleChange}
                            onBlurHandle={handleBlur}
                            value={values.age}
                            className={
                              "form-control-lg BorderRadiusInput py-3 px-2"
                            }
                          />
                          <p className="errorField">
                            {t(errors.age) && touched.age && t(errors.age)}
                          </p>
                        </div>
                        <div className="mb-2">
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.heightLabel")}`}
                          </Label>
                          <InputField
                            type="height"
                            name="height"
                            placeholder={t("subscription.heightPlaceholder")}
                            style={{ margin: "12.8px", borderRadius: "4px" }}
                            onChangeHandle={handleChange}
                            onBlurHandle={handleBlur}
                            value={values.height}
                            className={
                              "form-control-lg BorderRadiusInput py-3 px-2"
                            }
                          />
                          <p className="errorField">
                            {t(errors.height) &&
                              touched.height &&
                              t(errors.height)}
                          </p>
                        </div>
                        <div className="mb-2">
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.training_typeLabel")}`}
                          </Label>
                          <InputField
                            type="training_type"
                            name="training_type"
                            placeholder={t(
                              "subscription.training_typePlaceholder"
                            )}
                            style={{ margin: "12.8px", borderRadius: "4px" }}
                            onChangeHandle={handleChange}
                            onBlurHandle={handleBlur}
                            value={values.training_type}
                            className={
                              "form-control-lg BorderRadiusInput py-3 px-2"
                            }
                          />
                          <p className="errorField">
                            {t(errors.training_type) &&
                              touched.training_type &&
                              t(errors.training_type)}
                          </p>
                        </div>
                        <div className="mb-2">
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.your_goalLabel")}`}
                          </Label>
                          <InputField
                            type="your_goal"
                            name="your_goal"
                            placeholder={t("subscription.your_goalPlaceholder")}
                            style={{ margin: "12.8px", borderRadius: "4px" }}
                            onChangeHandle={handleChange}
                            onBlurHandle={handleBlur}
                            value={values.your_goal}
                            className={
                              "form-control-lg BorderRadiusInput py-3 px-2"
                            }
                          />
                          <p className="errorField">
                            {t(errors.your_goal) &&
                              touched.your_goal &&
                              t(errors.your_goal)}
                          </p>
                        </div>
                        <div className="mb-2">
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.illnessLabel")}`}
                          </Label>
                          <InputField
                            type="illness"
                            name="illness"
                            placeholder={t("subscription.illnessPlaceholder")}
                            style={{ margin: "12.8px", borderRadius: "4px" }}
                            onChangeHandle={handleChange}
                            onBlurHandle={handleBlur}
                            value={values.illness}
                            className={
                              "form-control-lg BorderRadiusInput py-3 px-2"
                            }
                          />
                          <p className="errorField">
                            {t(errors.illness) &&
                              touched.illness &&
                              t(errors.illness)}
                          </p>
                        </div>
                        <div className="mb-2">
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.preference_mealsLabel")}`}
                          </Label>
                          <InputField
                            type="preference_meals"
                            name="preference_meals"
                            placeholder={t(
                              "subscription.preference_mealsPlaceholder"
                            )}
                            style={{ margin: "12.8px", borderRadius: "4px" }}
                            onChangeHandle={handleChange}
                            onBlurHandle={handleBlur}
                            value={values.preference_meals}
                            className={
                              "form-control-lg BorderRadiusInput py-3 px-2"
                            }
                          />
                          <p className="errorField">
                            {t(errors.preference_meals) &&
                              touched.preference_meals &&
                              t(errors.preference_meals)}
                          </p>
                        </div>
                        <div className="mb-2 d-flex flex-row align-items-start gap-2">
                          <input
                            type="checkbox"
                            name="conditions"
                            className="mt-1"
                            onChangeHandle={handleChange}
                            onBlurHandle={handleBlur}
                            value={values.conditions}
                          />
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.conditionsLabel")}`}
                          </Label>
                        </div>
                      </Col>
                    </div>
                    <Col md={3} className="text-center">
                      <FillBtn
                        className="w-100 py-2 mx-5 my-3"
                        text={t("landing.signUpText")}
                        disabled={loading === "pending" ? true : false}
                        type={"submit"}
                      />
                    </Col>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SubscriptionForm;
