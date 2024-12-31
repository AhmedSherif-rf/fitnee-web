import React, { useCallback, useEffect, useState } from "react";
import PageHeading from "../../../Shared/Headings/PageHeading";
import { Container, Row, Col, CardBody, CardFooter } from "reactstrap";
// import ListingTable from "../../../Shared/AdminShared/Components/ListingTable";
// import { COLUMNS } from "./services";
// import Pagination from "../../../Shared/Pagination";
import { useDispatch } from "react-redux";
import { PACKAGES_URL, PER_PAGE_COUNT } from "../../../utils/constants";
import { getPackageDetails } from "../../../Redux/features/Admin/Packages/packagesApi";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { CiEdit } from "react-icons/ci";
// import EditPackageModal from "../../../Shared/Modal/EditPackage";

const Packages = () => {
  const dispatch = useDispatch();
  const [packageDetails, setPackageDetails] = useState([]);
  const { id } = useParams();
  // const [isOpen, setIsOpen] = useState(false);
  // const [editedPackage, setEditedPackage] = useState({});
  // const [page, setPage] = useState(1);

  // // ------------- functions ------------
  // const handlePageChange = useCallback((page) => {
  //   setPage(page.selected + 1);
  // }, []);

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  // const handleOpen = () => {
  //   setIsOpen(true);
  // };

  function fetchPackageDetails() {
    const data = {
      apiEndpoint: `${PACKAGES_URL + id}/`,
    };

    dispatch(getPackageDetails(data)).then((res) => {
      if (res.type === "getPackageDetails/fulfilled") {
        setPackageDetails(res.payload.data[0]);
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
              headingText="Packages"
              categoryText=""
              className="text-start"
            />
            <Col md={12} className="text-start">
              <h1>{packageDetails?.name}</h1>
              <p>{packageDetails?.description}</p>
              <p>Price: {packageDetails?.price}</p>
            </Col>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Packages;
