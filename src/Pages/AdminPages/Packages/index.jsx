import "./styles.scss";
import React, { useEffect, useState } from "react";
import PageHeading from "../../../Shared/Headings/PageHeading";
import { Container, Row, Col, CardBody, CardFooter } from "reactstrap";
import ListingTable from "../../../Shared/AdminShared/Components/ListingTable";
import { COLUMNS } from "./services";
import Pagination from "../../../Shared/Pagination";
import { useDispatch } from "react-redux";
import { PACKAGES_LISTING_URL } from "../../../utils/constants";
import { getPackages } from "../../../Redux/features/Admin/Packages/packagesApi";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import EditPackageModal from "../../../Shared/Modal/EditPackage";

const Packages = () => {
  const dispatch = useDispatch();
  const [packageList, setPackageList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editedPackage, setEditedPackage] = useState({});

  // ------------- functions ------------
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  function fetchPackagesList() {
    const data = {
      apiEndpoint: PACKAGES_LISTING_URL,
    };

    dispatch(getPackages(data)).then((res) => {
      if (res.type === "getPackages/fulfilled") {
        const packagesData = res.payload.data?.map((singlePackage) => {
          return {
            ...singlePackage,
            name: (
              <Link to={`/admin/package/${singlePackage?.id}`}>
                <div className="d-md-flex align-items-center">
                  <div className="tableResponsiveWidth">
                    <h6 className="text-secondary fw-bold mb-0">
                      {singlePackage?.name}
                    </h6>
                  </div>
                </div>
              </Link>
            ),
            action: (
              <div className="d-flex align-items-center justify-content-md-center">
                <span
                  className={`iconBadge me-1`}
                  id={`userId_${singlePackage?.id}`}
                  onClick={() => {
                    setEditedPackage(singlePackage);
                    handleOpen();
                  }}
                >
                  <CiEdit size={25} className={`cursorPointer`} />
                </span>
              </div>
            ),
          };
        });
        setPackageList(packagesData);
      }
    });
  }

  // ------------ side effects -----------
  useEffect(() => {
    fetchPackagesList();
  }, [dispatch]);
  return (
    <React.Fragment>
      <Container className="adminDashBoardScrolling" fluid>
        <Row>
          <Col md={12} className="text-center">
            <PageHeading
              headingText="Packages"
              categoryText=""
              className="text-start"
            />
          </Col>
          <CardBody className="tableBodyWrapperPagination p-md-2 p-0">
            <ListingTable data={packageList} columns={COLUMNS} />
          </CardBody>
          <CardFooter className="bg-transparent text-end pb-0 pt-2">
            <Pagination size={{}} handlePageChange={() => {}} page={0} />
          </CardFooter>
        </Row>
      </Container>
      <EditPackageModal
        isOpen={isOpen}
        onClose={handleClose}
        handleRefetchHistory={fetchPackagesList}
        packageData={editedPackage}
      />
    </React.Fragment>
  );
};
export default Packages;
