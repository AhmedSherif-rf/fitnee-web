import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import Pagination from "../../../../Shared/Pagination";
import { useDispatch, useSelector } from "react-redux";
import PageHeading from "../../../../Shared/Headings/PageHeading";
import LoadingScreen from "../../../../HelperMethods/LoadingScreen";
import { MdOutlinePersonOff, MdOutlinePersonOutline } from "react-icons/md";
import { Card, CardBody, CardFooter, CardHeader, Col, Row } from "reactstrap";
import ListingTable from "../../../../Shared/AdminShared/Components/ListingTable";
import { MdDelete } from "react-icons/md";
import {
  ADMIN_MEAL_TYPE_STATUS_URL,
  ADMIN_MEAL_TYPE_URL,
  PER_PAGE_COUNT,
} from "../../../../utils/constants";
import FillBtn from "../../../../Shared/Buttons/FillBtn";
import AddSubcategory from "../../../../Shared/Modal/AddSubcategory";
import {
  deleteCategoryClassification,
  getMealsClassifications,
  mealClassificationStatus,
} from "../../../../Redux/features/Admin/Meals/mealsApi";

const SubCategory = (props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userListing);
  const [lang, setLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [totalSize, setSizePages] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [mealsClassifications, setMealsClassificationsData] = useState(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handlePageChange = useCallback((page) => {
    setPage(page.selected + 1);
  }, []);

  useEffect(() => {
    fetchMealsClassificationListing();
  }, [dispatch, page]);

  const fetchMealsClassificationListing = () => {
    const data = {
      apiEndpoint: `${ADMIN_MEAL_TYPE_URL}?page=${page}`,
    };

    dispatch(getMealsClassifications(data)).then((res) => {
      if (res.type === "getMealsClassifications/fulfilled") {
        setSizePages(res.payload.data.count);
        setMealsClassificationsData(res.payload.data);
      }
    });
  };

  const handleActionClick = (id) => {
    const data = {
      apiEndpoint: ADMIN_MEAL_TYPE_STATUS_URL.replace("id", id),
    };
    dispatch(mealClassificationStatus(data)).then((res) => {
      if (res.type === "mealClassificationStatus/fulfilled") {
        fetchMealsClassificationListing();
      }
    });
  };

  const handleDelete = (id) => {
    const data = {
      apiEndpoint: ADMIN_MEAL_TYPE_URL + `${id}/`,
    };
    dispatch(deleteCategoryClassification(data)).then((res) => {
      if (res.type === "deleteCategoryClassification/fulfilled") {
        fetchMealsClassificationListing();
      }
    });
  };

  useEffect(() => {
    if (mealsClassifications && mealsClassifications.length > 0) {
      let mealsClassificationsArray = [];

      mealsClassifications.forEach((singleMealsClassification, index) => {
        mealsClassificationsArray.push({
          en_name: (
            <Link to={`/admin/subcategories/${singleMealsClassification?.id}`}>
              <div className="d-md-flex align-items-center">
                <h6 className="text-secondary fw-bold mb-0">
                  {singleMealsClassification?.en_name}
                </h6>
              </div>
            </Link>
          ),
          ar_name: singleMealsClassification?.ar_name,
          main_category: singleMealsClassification?.classification?.en_name,
          status: (
            <div className="d-flex align-items-center justify-content-md-center">
              {singleMealsClassification?.active && (
                <span
                  className={`iconBadge me-1`}
                  id={`userId_${singleMealsClassification?.id}`}
                  onClick={() =>
                    handleActionClick(singleMealsClassification?.id)
                  }
                >
                  <MdOutlinePersonOutline
                    size={25}
                    className={`cursorPointer ${
                      singleMealsClassification?.active === false
                        ? "text-success"
                        : ""
                    }`}
                  />
                </span>
              )}

              {!singleMealsClassification?.active && (
                <span
                  className={`iconBadge me-1`}
                  id={`userId_${singleMealsClassification?.id}`}
                  onClick={() =>
                    handleActionClick(singleMealsClassification?.id)
                  }
                >
                  <MdOutlinePersonOff
                    size={25}
                    className={`cursorPointer ${
                      singleMealsClassification?.active === true
                        ? ""
                        : "text-danger"
                    }`}
                  />
                </span>
              )}
            </div>
          ),
          action: (
            <div>
              <MdDelete
                onClick={() => handleDelete(singleMealsClassification?.id)}
                size={25}
                className={`cursorPointer text-danger`}
              />
            </div>
          ),
        });
      });

      setTableData(mealsClassificationsArray);
    } else {
      setTableData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mealsClassifications]);

  useEffect(() => {
    setLang(window.localStorage.getItem("Website_Language__fitnee"));
  }, []);

  const columns = [
    { label: "English name", dataKey: "en_name" },
    { label: "Arabic name", dataKey: "ar_name" },
    { label: "Main category", dataKey: "main_category" },
    { label: "Active / Inactive", dataKey: "status", align: "center" },
    { label: "Action", dataKey: "action", align: "center" },
  ];

  return (
    <Row className="h-100">
      {loading === "pending" && <LoadingScreen />}
      <Col md={12}>
        <Card className="border-0 h-100 text-start">
          <CardHeader className="bg-transparent border-0 p-0">
            <Row className="align-items-center px-2">
              <Col md={6}>
                <PageHeading headingText="Subcategory List" categoryText="" />
              </Col>
              <Col
                md={6}
                className="mb-3 px-4 mt-2 d-flex flex-row gap-3 justify-content-end"
              >
                <FillBtn
                  className="w-50"
                  text="Add Subcategory"
                  handleOnClick={handleOpen}
                />
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
      <AddSubcategory
        isOpen={isOpen}
        onClose={handleClose}
        handleRefetchHistory={fetchMealsClassificationListing}
      />
    </Row>
  );
};

export default SubCategory;
