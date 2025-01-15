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
  ADMIN_MEAL_STATUS_URL,
  ADMIN_MEAL_URL,
  PER_PAGE_COUNT,
} from "../../../../utils/constants";
import FillBtn from "../../../../Shared/Buttons/FillBtn";
import AddMeals from "../../../../Shared/Modal/AddMeals";
import {
  deleteCategoryClassification,
  getMealsClassifications,
  mealClassificationStatus,
} from "../../../../Redux/features/Admin/Meals/mealsApi";
import MealsFilter from "../../../../Shared/Modal/MealsFilter";

const Category = (props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userListing);
  const [lang, setLang] = useState("en");
  const [page, setPage] = useState(1);
  const [totalSize, setSizePages] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [mealsClassifications, setMealsClassificationsData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleCloseFilter = () => {
    setIsOpenFilter(false);
  };

  const handleOpenFilter = () => {
    if (isFiltered) {
      setIsFiltered(false);
    } else setIsOpenFilter(true);
  };

  const handlePageChange = useCallback((page) => {
    setPage(page.selected + 1);
  }, []);

  useEffect(() => {
    fetchMealsClassificationListing();
  }, [dispatch, page]);

  const fetchMealsClassificationListing = (filter = null) => {
    const isFiltered = filter !== null && Object.keys(filter).length > 0;

    const data = {
      apiEndpoint: `${ADMIN_MEAL_URL}${isFiltered ? "filter/" : ""}`,
      params: filter,
    };

    if (filter !== null) {
      setIsFiltered(true);
    }

    dispatch(getMealsClassifications(data)).then((res) => {
      if (res.type === "getMealsClassifications/fulfilled") {
        setSizePages(res.payload.data.count);
        setMealsClassificationsData(res.payload.data);
      }
    });
  };

  const handleActionClick = (id) => {
    const data = {
      apiEndpoint: ADMIN_MEAL_STATUS_URL.replace("id", id),
    };
    dispatch(mealClassificationStatus(data)).then((res) => {
      if (res.type === "mealClassificationStatus/fulfilled") {
        fetchMealsClassificationListing();
      }
    });
  };

  const handleDelete = (id) => {
    const data = {
      apiEndpoint: ADMIN_MEAL_URL + `${id}/`,
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
          name: (
            <Link to={`/admin/meals/${singleMealsClassification?.id}`}>
              <div className="d-md-flex align-items-center">
                <h6 className="text-secondary fw-bold mb-0">
                  {lang === "en"
                    ? singleMealsClassification?.en_name
                    : singleMealsClassification?.ar_name}
                </h6>
              </div>
            </Link>
          ),
          description: singleMealsClassification?.description,
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

  useEffect(() => {
    if (!isFiltered) fetchMealsClassificationListing();
  }, [isFiltered]);

  const columns = [
    { label: "Name", dataKey: "name" },
    { label: "Description", dataKey: "description" },
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
                <PageHeading headingText="Meals List" categoryText="" />
              </Col>
              <Col
                md={6}
                className="mb-3 px-4 mt-2 d-flex flex-row gap-3 justify-content-end"
              >
                <FillBtn
                  className="w-50"
                  text="Add Meals Category"
                  handleOnClick={handleOpen}
                />
              </Col>
            </Row>
          </CardHeader>
          <CardBody className="tableBodyWrapperPagination p-md-2 p-0">
            <div className="d-flex justify-content-end">
              <FillBtn
                className="px-5 my-2"
                text={isFiltered ? "Clear Filter" : "Filter"}
                handleOnClick={handleOpenFilter}
              />
            </div>
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
      <AddMeals
        isOpen={isOpen}
        onClose={handleClose}
        handleRefetchHistory={fetchMealsClassificationListing}
      />
      <MealsFilter
        isOpen={isOpenFilter}
        onClose={handleCloseFilter}
        handleRefetchHistory={(filter) =>
          fetchMealsClassificationListing(filter)
        }
        setIsFiltered={setIsFiltered}
      />
    </Row>
  );
};

export default Category;
