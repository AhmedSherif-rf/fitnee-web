import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Form } from "reactstrap";
import InputField from "../../../../../Shared/InputField";
import FillBtn from "../../../../../Shared/Buttons/FillBtn";
import React, { useEffect, useState, useCallback } from "react";
import LoadingScreen from "../../../../../HelperMethods/LoadingScreen";
import GoBack from "../../../../../Shared/AdminShared/Components/GoBack";
import { ADMIN_EXERCISE_SUBCATEGORY_URL } from "../../../../../utils/constants";
import { getAllSubCategory } from "../../../../../Redux/features/Exercise/exerciseApi";
import { ADD_SUB_CATEGORY_SCHEMA } from "../../../../../Shared/ValidationData/validation";
import SubCategoryCard from "../../../../../Shared/AdminShared/Components/SubCategoryCard";
import { ADD_SUB_CATEGORY_INITIAL_VALUES } from "../../../../../Shared/ValidationData/initialValue";
import {
  updateSubCategory,
  addSubCategory,
} from "../../../../../Redux/features/Exercise/exerciseApi";

const SubCategory = () => {
  const dispatch = useDispatch();
  const { categoryUuid, categoryId } = useParams();
  const { loading } = useSelector((state) => state.exercise);

  const [type, setType] = useState("Add");
  const [subCategoriesData, setSubCategoriesData] = useState([]);
  const [initialValues, setInitialValues] = useState(
    ADD_SUB_CATEGORY_INITIAL_VALUES
  );

  useEffect(() => {
    fetchSubCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchSubCategories = () => {
    const data = {
      apiEndpoint: `${ADMIN_EXERCISE_SUBCATEGORY_URL}?uuid=${categoryUuid}`,
    };
    dispatch(getAllSubCategory(data)).then((res) => {
      if (res.type === "getAllSubCategory/fulfilled") {
        setSubCategoriesData(res.payload.data);
      }
    });
  };

  const handleEditClick = useCallback((values) => {
    setType("Edit");
    setInitialValues(values);
  }, []);

  const handleAddSubCategory = (values, resetForm) => {
    if (type === "Edit") {
      const data = {
        apiEndpoint: `${ADMIN_EXERCISE_SUBCATEGORY_URL}${values.id}/?uuid=${categoryUuid}`,
        requestData: JSON.stringify({ ...values, exercise: categoryId }),
      };
      dispatch(updateSubCategory(data)).then((res) => {
        if (res.type === "updateSubCategory/fulfilled") {
          setInitialValues(ADD_SUB_CATEGORY_INITIAL_VALUES);
          setType("Add");
        }
      });
    } else {
      const data = {
        apiEndpoint: ADMIN_EXERCISE_SUBCATEGORY_URL,
        requestData: JSON.stringify({ ...values, exercise: categoryId }),
      };
      dispatch(addSubCategory(data)).then((res) => {
        if (res.type === "addSubCategory/fulfilled") {
          resetForm();
          setType("Add");
        }
      });
    }
    fetchSubCategories();
  };

  return (
    <Container>
      <GoBack />
      {loading === "pending" && <LoadingScreen />}
      <Formik
        initialValues={initialValues}
        validationSchema={ADD_SUB_CATEGORY_SCHEMA}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          handleAddSubCategory(values, resetForm);
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
            <Row>
              <Col md={4} className="mb-2">
                <InputField
                  type="text"
                  name="title"
                  placeholder={"Type sub category"}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.title}
                  className={"form-control-lg BorderRadiusInput py-3 px-3"}
                />
                <p className="errorField text-start">
                  {errors.title && touched.title && errors.title}
                </p>
              </Col>
              <Col md={4} className="mb-2">
                <InputField
                  type="text"
                  name="title_ar"
                  placeholder={"Type sub category in arabic"}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.title_ar}
                  className={"form-control-lg BorderRadiusInput py-3 px-3 rtl"}
                />
                <p className="errorField text-start">
                  {errors.title_ar && touched.title_ar && errors.title_ar}
                </p>
              </Col>
              <Col md={2} className="mb-2">
                <FillBtn
                  className="w-100 py-3 mb-3"
                  text={type}
                  disabled={loading === "pending" ? true : false}
                  type={"submit"}
                />
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
      {subCategoriesData.length > 0 && (
        <Row className="p-4">
          {subCategoriesData.map((subCategory, index) => (
            <Col md={4} className="mb-2" key={index}>
              <SubCategoryCard
                subCategory={subCategory}
                onEditClick={handleEditClick}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};
export default SubCategory;
