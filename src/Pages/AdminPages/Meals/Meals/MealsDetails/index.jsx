import React, { useCallback, useEffect, useState } from "react";
import PageHeading from "../../../../../Shared/Headings/PageHeading";
import { Container, Row, Col, CardBody, CardFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  ADMIN_MEAL_URL,
  ADMIN_CALORIES_URL,
  ADMIN_MEAL_TYPE_URL,
  ADMIN_MEAL_CLASSIFICATION_URL,
} from "../../../../../utils/constants";
import {
  getCategoryClassificationDetails,
  getMealsClassifications,
} from "../../../../../Redux/features/Admin/Meals/mealsApi";
import EditMeals from "../../../../../Shared/Modal/EditMeals";
import FillBtn from "../../../../../Shared/Buttons/FillBtn";
import { useTranslation } from "react-i18next";
import Images from "../../../../../HelperMethods/Constants/ImgConstants";

const Packages = () => {
  const dispatch = useDispatch();
  const [categoryClassificationDetails, setCategoryClassificationDetails] =
    useState([]);
  const { t, i18n } = useTranslation("");

  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [mealTypes, setMealTypes] = useState([]);
  const [calories, setCalories] = useState([]);
  const [mainCategory, setMainCategory] = useState([]);
  const [mealTypeDefaultData, setMealTypeDefaultData] = useState(null);
  const [calorieDefaultData, setCalorieDefaultData] = useState(null);
  const [mainCategoryDefaultData, setMainCategoryDefaultData] = useState([]);

  // // ------------- functions ------------

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  function fetchPackageDetails() {
    const data = {
      apiEndpoint: ADMIN_MEAL_URL + `${id}/`,
    };

    dispatch(getCategoryClassificationDetails(data)).then((res) => {
      if (res.type === "getCategoryClassificationDetails/fulfilled") {
        setCategoryClassificationDetails(res.payload.data);
      }
    });
  }

  const getMealTypes = async () => {
    const data = {
      apiEndpoint: ADMIN_MEAL_TYPE_URL,
    };

    await dispatch(getMealsClassifications(data)).then((res) => {
      if (res.type === "getMealsClassifications/fulfilled") {
        setMealTypeDefaultData({
          label:
            i18n?.language === "en"
              ? res.payload.data?.find(
                  (item) => item.id === categoryClassificationDetails.meal_type
                )?.en_name
              : res.payload.data?.find(
                  (item) => item.id === categoryClassificationDetails.meal_type
                )?.ar_name,
          value: categoryClassificationDetails.meal_type,
        });

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
        setCalorieDefaultData({
          label: res.payload.data?.find(
            (item) => item.id === categoryClassificationDetails.calorie_range
          )?.name,
          value: categoryClassificationDetails.calorie_range,
        });

        setCalories(res.payload.data);
      }
    });
  };

  const getMealClassification = async () => {
    const data = {
      apiEndpoint: ADMIN_MEAL_CLASSIFICATION_URL,
    };

    await dispatch(getMealsClassifications(data)).then((res) => {
      if (res.type === "getMealsClassifications/fulfilled") {
        setMainCategoryDefaultData({
          label:
            i18n?.language === "en"
              ? res.payload.data?.find(
                  (item) =>
                    item.id === categoryClassificationDetails.classification
                )?.en_name
              : res.payload.data?.find(
                  (item) =>
                    item.id === categoryClassificationDetails.classification
                )?.ar_name,
          value: categoryClassificationDetails.classification,
        });

        setMainCategory(res.payload.data);
      }
    });
  };

  // // ------------ side effects -----------
  useEffect(() => {
    fetchPackageDetails();
  }, [dispatch]);

  useEffect(() => {
    getMealTypes();
    getCalories();
    getMealClassification();
  }, [categoryClassificationDetails]);

  return (
    <React.Fragment>
      <Container className="adminDashBoardScrolling" fluid>
        <Row>
          <Col md={12}>
            <PageHeading
              headingText="Meals Details"
              categoryText=""
              className="text-start"
            />
            <Col
              md={12}
              className="d-flex flex-row justify-content-between align-items-start text-start p-3"
            >
              <div>
                <div
                  className="bgProperties rounded-circle me-2 mx-5 my-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundImage:
                      categoryClassificationDetails?.meal_pic === null
                        ? `url(${Images.USER_DUMMY_IMG})`
                        : `url(${categoryClassificationDetails?.meal_pic})`,
                  }}
                ></div>
                <h3>
                  English Name:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {categoryClassificationDetails?.en_name}
                  </span>
                </h3>
                <h3>
                  Arabic Name:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {categoryClassificationDetails?.ar_name}
                  </span>
                </h3>
                <h3>
                  Description:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {categoryClassificationDetails?.description}
                  </span>
                </h3>
                <h3>
                  Main Classification:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {i18n?.language === "en"
                      ? categoryClassificationDetails?.meal_classification
                          ?.en_name
                      : categoryClassificationDetails?.meal_classification
                          ?.ar_name}
                  </span>
                </h3>
                <h3>
                  Meal Type:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {mealTypeDefaultData?.label}
                  </span>
                </h3>
                <h3>
                  Methods:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {categoryClassificationDetails?.methods}
                  </span>
                </h3>
                <h3>
                  Ingredients:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {categoryClassificationDetails?.ingredients}
                  </span>
                </h3>
                <h3>
                  Calorie Range:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {categoryClassificationDetails?.calorie_range}
                  </span>
                </h3>
                <h3>
                  Fats:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {categoryClassificationDetails?.fats}
                  </span>
                </h3>
                <h3>
                  Calorie Recipe:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {categoryClassificationDetails?.calorie_recipe}
                  </span>
                </h3>
                <h3>
                  Carbohydrate:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {categoryClassificationDetails?.carbohydrate}
                  </span>
                </h3>
                <h3>
                  Protein:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {categoryClassificationDetails?.protein}
                  </span>
                </h3>
                <h3>
                  Status:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {categoryClassificationDetails?.active
                      ? "Active"
                      : "Inactive"}
                  </span>
                </h3>
              </div>

              <div className="d-flex flex-row justify-content-start">
                <FillBtn
                  className="w-100"
                  text="Edit Meals Category"
                  handleOnClick={handleOpen}
                />
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
      <EditMeals
        isOpen={isOpen}
        onClose={handleClose}
        mealData={categoryClassificationDetails}
        handleRefetchHistory={fetchPackageDetails}
        mealTypes={mealTypes}
        calories={calories}
        mainCategory={mainCategory}
        mealTypeDefaultData={mealTypeDefaultData}
        calorieDefaultData={calorieDefaultData}
        mainCategoryDefaultData={mainCategoryDefaultData}
      />
    </React.Fragment>
  );
};
export default Packages;
