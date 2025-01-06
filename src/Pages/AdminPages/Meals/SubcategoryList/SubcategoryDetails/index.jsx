import React, { useCallback, useEffect, useState } from "react";
import PageHeading from "../../../../../Shared/Headings/PageHeading";
import { Container, Row, Col, CardBody, CardFooter } from "reactstrap";
// import ListingTable from "../../../Shared/AdminShared/Components/ListingTable";
// import { COLUMNS } from "./services";
// import Pagination from "../../../Shared/Pagination";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ADMIN_MEAL_TYPE_URL } from "../../../../../utils/constants";
import { getCategoryClassificationDetails } from "../../../../../Redux/features/Admin/Meals/mealsApi";
import EditSubcategory from "../../../../../Shared/Modal/EditSubcategory";
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
      apiEndpoint: ADMIN_MEAL_TYPE_URL + `${id}/`,
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
              headingText="Subcategory Details"
              categoryText=""
              className="text-start"
            />
            <Col
              md={12}
              className="d-flex flex-row justify-content-between align-items-start text-start p-3"
            >
              <div>
                <h3>English Name: {categoryClassificationDetails?.en_name}</h3>
                <h3>Arabic Name: {categoryClassificationDetails?.ar_name}</h3>
                <h3>
                  Status:{" "}
                  {categoryClassificationDetails?.active
                    ? "Active"
                    : "Inactive"}
                </h3>
              </div>

              <div className="d-flex flex-row justify-content-start">
                <FillBtn
                  className="w-100"
                  text="Edit Coach"
                  handleOnClick={handleOpen}
                />
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
      <EditSubcategory
        isOpen={isOpen}
        onClose={handleClose}
        categoryData={categoryClassificationDetails}
        handleRefetchHistory={fetchPackageDetails}
      />
    </React.Fragment>
  );
};
export default Packages;
