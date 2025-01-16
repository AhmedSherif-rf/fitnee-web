import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Container, Row, Form, Label } from "reactstrap";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import {
  ILLNESS_URL,
  ADMIN_MEAL_TYPE_URL,
  SUBSCRIPTION_FORM_URL,
  PACKAGES_URL,
} from "../../../utils/constants";
import {
  getIllness,
  getLikedMeals,
  getSubscriped,
} from "../../../Redux/features/Subscription/subscriptionApi";
import { SUBSCRIPTION_FORM_INITIAL_VALUES } from "../../../Shared/ValidationData/initialValue";
import InputField from "../../../Shared/InputField";
import SelectField from "../../../Shared/Select";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import { useNavigate } from "react-router-dom";
import { setSubscriptionPlan } from "../../../Redux/features/Subscription/subscriptionSlice";
import {
  findUs,
  gender,
  trainingGoal,
  trainingLevel,
  trainingPlaces,
} from "./constants";
import toast from "react-hot-toast";
import { getPackageDetails } from "../../../Redux/features/Admin/Packages/packagesApi";

const SubscriptionForm = () => {
  // ------------- hooks -------------
  const { t, i18n } = useTranslation("");
  const { loading } = useSelector((state) => state.subscription);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [likedMeals, setLikedMeals] = React.useState([]);
  const [illness, setIllness] = React.useState([]);
  const lang = window.localStorage.getItem("Website_Language__fitnee");

  // ------------- functions -------------

  const handleSubscriptionForm = async (values) => {
    const requestData = {
      ...values,
      diseases: values?.diseases?.map(({ value }) => value),
      how_did_you_know_us: [values.how_did_you_know_us],
      likes_meal: [values.likes_meal],
    };

    if (requestData.diseases.length > 0) {
      requestData.have_diseases = true;
    }

    const data = {
      apiEndpoint: `${SUBSCRIPTION_FORM_URL}`,
      requestData,
    };

    let packageDetails;

    await dispatch(
      getPackageDetails({ apiEndpoint: `${PACKAGES_URL}1/` })
    ).then((res) => {
      if (res.type === "getPackageDetails/fulfilled") {
        packageDetails = res.payload.data?.package;
      }
    });

    dispatch(getSubscriped(data)).then((res) => {
      if (res.type === "getSubscriped/fulfilled") {
        if (res.payload.data?.detail === "You are not qualified for this.") {
          toast.error(res.payload.data?.detail);
        } else {
          dispatch(
            setSubscriptionPlan({
              id: packageDetails?.id,
              duration: packageDetails?.duration,
              price: packageDetails?.price,
              type: packageDetails?.type,
            })
          );
          navigate("/trainee/subscription/creditCardDetail");
        }
      }
    });
  };

  const fetchLikedMealsListing = () => {
    const data = {
      apiEndpoint: `${ADMIN_MEAL_TYPE_URL}`,
    };

    dispatch(getLikedMeals(data)).then((res) => {
      if (res.type === "getLikedMeals/fulfilled") {
        setLikedMeals(res.payload.data);
      }
    });
  };

  const fetchIllnessListing = () => {
    const data = {
      apiEndpoint: `${ILLNESS_URL}`,
    };

    dispatch(getIllness(data)).then((res) => {
      if (res.type === "getIllness/fulfilled") {
        setIllness(res.payload.data);
      }
    });
  };

  // ------------- side effects -------------
  useEffect(() => {
    fetchLikedMealsListing();
    fetchIllnessListing();
  }, []);

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
                // validationSchema={SUBSCRIPTION_FORM_SCHEMA}
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
                            options={gender}
                            handleChange={(value) =>
                              setFieldValue("gender", value)
                            }
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
                          <InputField
                            type="number"
                            name="weight"
                            placeholder={t("subscription.weightPlaceholder")}
                            style={{ borderRadius: "4px" }}
                            onChangeHandle={handleChange}
                            onBlurHandle={handleBlur}
                            value={values.weight}
                            className={
                              "form-control-lg BorderRadiusInput py-3 px-2"
                            }
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
                            name="likes_meal"
                            isMulti={true}
                            className={"form-control-lg BorderRadiusInput"}
                            handleChange={(value) =>
                              setFieldValue("likes_meal", value)
                            }
                            options={likedMeals?.map((item) => {
                              return {
                                value: item?.id,
                                label:
                                  lang === "en" ? item?.en_name : item?.ar_name,
                              };
                            })}
                          />
                          <p className="errorField">
                            {t(errors.likes_meal) &&
                              touched.likes_meal &&
                              t(errors.likes_meal)}
                          </p>
                        </div>
                        <div className="mb-2">
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.training_placeLabel")}`}
                          </Label>
                          <SelectField
                            name="training_place"
                            className={"form-control-lg BorderRadiusInput"}
                            options={trainingPlaces}
                            handleChange={(value) =>
                              setFieldValue("training_place", value)
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
                          <SelectField
                            name="training_level"
                            className={"form-control-lg BorderRadiusInput"}
                            options={trainingLevel}
                            handleChange={(value) =>
                              setFieldValue("training_level", value)
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
                          <SelectField
                            name="is_injured"
                            className={"form-control-lg BorderRadiusInput"}
                            options={[
                              { label: "Yes", value: "True" },
                              { label: "No", value: "False" },
                            ]}
                            handleChange={(value) =>
                              setFieldValue("is_injured", value)
                            }
                          />
                          <p className="errorField">
                            {t(errors.is_injured) &&
                              touched.is_injured &&
                              t(errors.is_injured)}
                          </p>
                        </div>

                        <div className="mb-2">
                          <div className="mb-2 d-flex flex-row align-items-start gap-2">
                            <input
                              type="checkbox"
                              name="accept"
                              className="mt-1"
                              onChange={handleChange}
                              value={values.conditions}
                            />
                            <Label className="fw-normal small mb-0">
                              {`${t("subscription.acceptLabel")}`}
                            </Label>
                          </div>
                          <p className="errorField">
                            {t(errors.accept) &&
                              touched.accept &&
                              t(errors.accept)}
                          </p>
                        </div>
                        <div className="mb-2">
                          <div className="mb-2 d-flex flex-row align-items-start gap-2">
                            <input
                              type="checkbox"
                              name="have_diseases"
                              className="mt-1"
                              onChange={handleChange}
                              value={values.have_diseases}
                            />
                            <Label className="fw-normal small mb-0">
                              {`${t("subscription.conditionsLabel")}`}
                            </Label>
                          </div>
                          <p className="errorField">
                            {t(errors.have_diseases) &&
                              touched.have_diseases &&
                              t(errors.have_diseases)}
                          </p>
                        </div>
                      </Col>
                      <Col md={5} className={`p-2 mx-auto`}>
                        <div className="mb-2">
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.ageLabel")}`}
                          </Label>
                          <InputField
                            type="number"
                            name="age"
                            placeholder={t("subscription.agePlaceholder")}
                            style={{ borderRadius: "4px" }}
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
                            type="number"
                            name="height"
                            placeholder={t("subscription.heightPlaceholder")}
                            style={{ borderRadius: "4px" }}
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
                            {`${t("subscription.your_goalLabel")}`}
                          </Label>

                          <SelectField
                            name="training_goal"
                            className={"form-control-lg BorderRadiusInput"}
                            options={trainingGoal}
                            handleChange={(value) =>
                              setFieldValue("training_goal", value)
                            }
                          />
                          <p className="errorField">
                            {t(errors.training_goal) &&
                              touched.training_goal &&
                              t(errors.training_goal)}
                          </p>
                        </div>
                        <div className="mb-2">
                          <Label className="fw-normal small mb-0">
                            {`${t("subscription.illnessLabel")}`}
                          </Label>

                          <SelectField
                            name="diseases"
                            isMulti={true}
                            className={"form-control-lg BorderRadiusInput"}
                            options={illness?.map((item) => ({
                              value: item?.id,
                              label:
                                lang === "ar" ? item?.ar_name : item?.en_name,
                            }))}
                            handleChange={(value) =>
                              setFieldValue("diseases", value)
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
                            {`${t("subscription.referenceLabel")}`}
                          </Label>
                          <SelectField
                            name="how_did_you_know_us"
                            className={"form-control-lg BorderRadiusInput"}
                            options={findUs}
                            handleChange={(value) =>
                              setFieldValue("how_did_you_know_us", value)
                            }
                          />
                          <p className="errorField">
                            {t(errors.how_did_you_know_us) &&
                              touched.how_did_you_know_us &&
                              t(errors.how_did_you_know_us)}
                          </p>
                        </div>
                      </Col>
                    </div>
                    <Col md={12} className="text-center">
                      <FillBtn
                        className="w-25 py-2 mx-5 my-3"
                        text={t("landing.register")}
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
