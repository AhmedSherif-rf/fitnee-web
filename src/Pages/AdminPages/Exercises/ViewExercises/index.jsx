import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import Pagination from "../../../../Shared/Pagination";
import { useDispatch, useSelector } from "react-redux";
import PageHeading from "../../../../Shared/Headings/PageHeading";
import LoadingScreen from "../../../../HelperMethods/LoadingScreen";
import { Card, CardBody, CardFooter, CardHeader, Col, Row } from "reactstrap";
import ListingTable from "../../../../Shared/AdminShared/Components/ListingTable";
import { MdDelete } from "react-icons/md";
import {
  ADMIN_EXERCISES_URL,
  PER_PAGE_COUNT,
} from "../../../../utils/constants";
import { getMealsClassifications } from "../../../../Redux/features/Admin/Meals/mealsApi";

const ViewExercises = (props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userListing);
  const [lang, setLang] = useState("en");
  const [page, setPage] = useState(1);
  const [totalSize, setSizePages] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [exercises, setExercisesData] = useState(null);

  const handlePageChange = useCallback((page) => {
    setPage(page.selected + 1);
  }, []);

  useEffect(() => {
    fetchMealsClassificationListing();
  }, [dispatch, page]);

  const fetchMealsClassificationListing = () => {
    const data = {
      apiEndpoint: `${ADMIN_EXERCISES_URL}`,
    };

    dispatch(getMealsClassifications(data)).then((res) => {
      if (res.type === "getMealsClassifications/fulfilled") {
        setSizePages(res.payload.data.count);
        setExercisesData(res.payload.data);
      }
    });
  };

  // const handleActionClick = (id) => {
  //   const data = {
  //     apiEndpoint: ADMIN_EXERCISES_URL,
  //   };
  //   dispatch(mealClassificationStatus(data)).then((res) => {
  //     if (res.type === "mealClassificationStatus/fulfilled") {
  //       fetchMealsClassificationListing();
  //     }
  //   });
  // };

  // const handleDelete = (id) => {
  //   const data = {
  //     apiEndpoint: ADMIN_MEAL_URL + `${id}/`,
  //   };
  //   dispatch(deleteCategoryClassification(data)).then((res) => {
  //     if (res.type === "deleteCategoryClassification/fulfilled") {
  //       fetchMealsClassificationListing();
  //     }
  //   });
  // };

  useEffect(() => {
    if (exercises && exercises.length > 0) {
      let exercisesArray = [];

      exercises.forEach(({ exercise: category }, index) => {
        category?.sub_categories?.forEach((subcategory) => {
          subcategory?.exercise?.forEach((singleExercise) => {
            exercisesArray.push({
              title: (
                <Link to={`/admin/exercises/${singleExercise?.id}`}>
                  <div className="d-md-flex align-items-center">
                    <h6 className="text-secondary fw-bold mb-0">
                      {lang === "en"
                        ? singleExercise?.title
                        : singleExercise?.title_ar}
                    </h6>
                  </div>
                </Link>
              ),
              category: lang === "en" ? category?.title : category?.title_ar,
              subcategory:
                lang === "en" ? subcategory?.title : subcategory?.title_ar,
              type: singleExercise?.stretching
                ? "Stretching"
                : singleExercise?.warm_up === "Yes"
                ? "Warm up"
                : "Exercise",
            });
          });
        });
      });

      setTableData(exercisesArray);
    } else {
      setTableData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exercises]);

  useEffect(() => {
    setLang(window.localStorage.getItem("Website_Language__fitnee"));
  }, []);

  const columns = [
    { label: "Title", dataKey: "title" },
    { label: "Category", dataKey: "category", align: "center" },
    { label: "Subcategories", dataKey: "subcategory", align: "center" },
    { label: "Type", dataKey: "type", align: "center" },
  ];

  return (
    <Row className="h-100">
      {loading === "pending" && <LoadingScreen />}
      <Col md={12}>
        <Card className="border-0 h-100 text-start">
          <CardHeader className="bg-transparent border-0 p-0">
            <Row className="align-items-center px-2">
              <Col md={6}>
                <PageHeading headingText="Exercises" categoryText="" />
              </Col>
            </Row>
          </CardHeader>
          <CardBody className="tableBodyWrapperPagination p-md-2 p-0">
            <ListingTable data={tableData} columns={columns} />
          </CardBody>
          <CardFooter className="bg-transparent text-end pb-0 pt-2">
            {totalSize > PER_PAGE_COUNT && (
              <Pagination
                size={totalSize}
                handlePageChange={handlePageChange}
                page={page}
              />
            )}
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
};

export default ViewExercises;
