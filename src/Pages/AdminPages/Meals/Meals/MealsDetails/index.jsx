import React, { useCallback, useEffect, useState } from "react";
import PageHeading from "../../../../../Shared/Headings/PageHeading";
import { Container, Row, Col, CardBody, CardFooter } from "reactstrap";
// import ListingTable from "../../../Shared/AdminShared/Components/ListingTable";
// import { COLUMNS } from "./services";
// import Pagination from "../../../Shared/Pagination";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ADMIN_MEAL_URL } from "../../../../../utils/constants";
import { getCategoryClassificationDetails } from "../../../../../Redux/features/Admin/Meals/mealsApi";
import EditCategoryClassification from "../../../../../Shared/Modal/EditCategoryClassification";
import FillBtn from "../../../../../Shared/Buttons/FillBtn";
// import { Link } from "react-router-dom";
// import { CiEdit } from "react-icons/ci";
// import EditPackageModal from "../../../Shared/Modal/EditPackage";

const Packages = () => {
  const dispatch = useDispatch();
  const [categoryClassificationDetails, setCategoryClassificationDetails] =
    useState([]);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  // const [editedPackage, setEditedPackage] = useState({});
  // const [page, setPage] = useState(1);

  // // ------------- functions ------------
  // const handlePageChange = useCallback((page) => {
  //   setPage(page.selected + 1);
  // }, []);

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

  // // ------------ side effects -----------
  useEffect(() => {
    fetchPackageDetails();
  }, [dispatch]);
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
                  text="Edit Meals"
                  handleOnClick={handleOpen}
                />
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
      <EditCategoryClassification
        isOpen={isOpen}
        onClose={handleClose}
        categoryData={categoryClassificationDetails}
        handleRefetchHistory={fetchPackageDetails}
      />
    </React.Fragment>
  );
};
export default Packages;
