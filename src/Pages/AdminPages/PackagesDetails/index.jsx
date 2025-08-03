import React, { useCallback, useEffect, useState } from "react";
import PageHeading from "../../../Shared/Headings/PageHeading";
import { Container, Row, Col, CardBody, CardFooter } from "reactstrap";
// import { COLUMNS } from "./services";
// import Pagination from "../../../Shared/Pagination";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import { useDispatch } from "react-redux";
import { PACKAGES_URL, PER_PAGE_COUNT } from "../../../utils/constants";
import { getPackageDetails } from "../../../Redux/features/Admin/Packages/packagesApi";
import { useParams } from "react-router-dom";
import ListingTable from "../../../Shared/AdminShared/Components/ListingTable";
// import { Link } from "react-router-dom";
// import { CiEdit } from "react-icons/ci";
// import EditPackageModal from "../../../Shared/Modal/EditPackage";

const columns = [
  { label: "Trainee", dataKey: "trainee" },
  { label: "Trainer Email", dataKey: "trainer_email" },
  { label: "Start date", dataKey: "start_date" },
  { label: "End date", dataKey: "end_date" },
];

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
        setPackageDetails(res.payload.data);
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
              headingText="Packages Details"
              categoryText=""
              className="text-start"
            />
            <Col md={12} className="text-start">
              <div
                className="bgProperties rounded-circle me-2 mx-5 my-3"
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundImage:
                    packageDetails?.meal_pic === null
                      ? `url(${Images.USER_DUMMY_IMG})`
                      : `url(${packageDetails?.package?.pic})`,
                }}
              ></div>
              <h3>Name: {packageDetails?.package?.name}</h3>
              <p>Description: {packageDetails?.package?.description}</p>
              <p>Price: {packageDetails?.package?.price}</p>
            </Col>
            <Col md={12} className="text-start">
              <h2>Subscripers</h2>
              <ListingTable
                data={packageDetails?.trainers || []}
                columns={columns}
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Packages;
