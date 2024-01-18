import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import Pagination from "../../../../Shared/Pagination";
import { useDispatch, useSelector } from "react-redux";
import PageHeading from "../../../../Shared/Headings/PageHeading";
import LoadingScreen from "../../../../HelperMethods/LoadingScreen";
import Images from "../../../../HelperMethods/Constants/ImgConstants";
import { MdOutlinePersonOff, MdOutlinePersonOutline } from "react-icons/md";
import { Card, CardBody, CardFooter, CardHeader, Col, Row } from "reactstrap";
import ListingTable from "../../../../Shared/AdminShared/Components/ListingTable";
import {
  ADMIN_TRAINEE_LISTING_URL,
  PER_PAGE_COUNT,
} from "../../../../utils/constants";
import { getTraineeListing } from "../../../../Redux/features/Admin/UserListing/userListingApi";

const ServiceProviders = (props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userListing);

  const [page, setPage] = useState(1);
  const [totalSize, setSizePages] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [traineesData, setTraineesData] = useState(null);

  const handlePageChange = useCallback((page) => {
    setPage(page.selected + 1);
  }, []);

  useEffect(() => {
    const data = {
      apiEndpoint: `${ADMIN_TRAINEE_LISTING_URL}?page=${page}`,
    };

    dispatch(getTraineeListing(data)).then((res) => {
      if (res.type === "getTraineeListing/fulfilled") {
        setSizePages(res.payload.data.count);
        setTraineesData(res.payload.data.results);
      }
    });
  }, [dispatch, page]);

  useEffect(() => {
    if (traineesData && traineesData.length > 0) {
      let traineeListArray = [];

      traineesData.forEach((trainee, index) => {
        traineeListArray.push({
          name: (
            <div className="d-flex align-items-center">
              <div
                className="bgProperties rounded-circle me-2"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundImage:
                    trainee?.profile_pic === "" || trainee?.profile_pic === null
                      ? `url(${Images.USER_DUMMY_IMG})`
                      : `url(${trainee?.profile_pic.replace("/api", "")})`,
                }}
              ></div>
              <h6 className="text-secondary fw-bold mb-0">
                {`${trainee?.first_name} ${trainee?.last_name}`}
              </h6>
            </div>
          ),
          role: trainee?.role,
          email: trainee?.email,
          phone_number: trainee?.phone_number,
          status: (
            <div className="d-flex align-items-center justify-content-center">
              <div
                className={`me-2 ${
                  trainee?.is_active ? "bg-success" : "bg-danger"
                } rounded-circle`}
                style={{ minWidth: "8px", minHeight: "8px" }}
              ></div>
              <span>{trainee?.is_active ? "Active" : "Inactive"}</span>
            </div>
          ),
          action: (
            <div className="d-flex align-items-center justify-content-md-center">
              <span className={`iconBadge me-1`}>
                <MdOutlinePersonOff
                  size={22}
                  className="rejectUser cursorPointer"
                />
              </span>
              <span className={`iconBadge me-1`}>
                <MdOutlinePersonOutline
                  size={22}
                  className="approveUser cursorPointer"
                />
              </span>
            </div>
          ),
        });
      });

      setTableData(traineeListArray);
    } else {
      setTableData([]);
    }
  }, [traineesData]);

  const columns = [
    { label: "Name", dataKey: "name" },
    {
      label: "Role",
      dataKey: "role",
      align: "center",
    },
    { label: "Email", dataKey: "email", align: "center" },
    { label: "Phone No", dataKey: "phone_number", align: "center" },
    { label: "Status", dataKey: "status", align: "center" },
    { label: "Block / UnBlock", dataKey: "action", align: "center" },
  ];

  return (
    <Row className="h-100">
      <Col md={12}>
        <Card className="border-0 h-100 text-start">
          <CardHeader className="bg-transparent border-0 p-0">
            <PageHeading headingText="Trainee List" categoryText="" />
          </CardHeader>
          <CardBody className="tableBodyWrapperPagination">
            {loading === "pending" && <LoadingScreen />}
            <ListingTable data={tableData} columns={columns} />
          </CardBody>
          <CardFooter className="bg-transparent text-end pb-0 pt-2">
            {totalSize > PER_PAGE_COUNT && (
              <Pagination
                size={totalSize}
                handlePageChange={handlePageChange}
              />
            )}
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
};

export default ServiceProviders;
