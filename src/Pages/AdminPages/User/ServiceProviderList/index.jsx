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
  ADMIN_SERVICE_PROVIDER_LISTING_URL,
  PER_PAGE_COUNT,
} from "../../../../utils/constants";
import { getServiceProviderListing } from "../../../../Redux/features/Admin/UserListing/userListingApi";

const ServiceProviders = (props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userListing);

  const [page, setPage] = useState(1);
  const [totalSize, setSizePages] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [serviceProvidersData, setServiceProvidersData] = useState(null);

  const handlePageChange = useCallback((page) => {
    setPage(page.selected + 1);
  }, []);

  useEffect(() => {
    const data = {
      apiEndpoint: `${ADMIN_SERVICE_PROVIDER_LISTING_URL}?page=${page}`,
    };

    dispatch(getServiceProviderListing(data)).then((res) => {
      if (res.type === "getServiceProviderListing/fulfilled") {
        setSizePages(res.payload.data.count);
        setServiceProvidersData(res.payload.data.results);
      }
    });
  }, [dispatch, page]);

  useEffect(() => {
    if (serviceProvidersData && serviceProvidersData.length > 0) {
      let ServiceProviderListArray = [];

      serviceProvidersData.forEach((serviceProvider, index) => {
        ServiceProviderListArray.push({
          full_name: (
            <div className="d-flex align-items-center">
              <div
                className="bgProperties rounded-circle me-2"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundImage:
                    serviceProvider?.profile_pic === "" ||
                    serviceProvider?.profile_pic === null
                      ? `url(${Images.USER_DUMMY_IMG})`
                      : `url(${serviceProvider?.profile_pic.replace(
                          "/api",
                          ""
                        )})`,
                }}
              ></div>
              <h6 className="text-secondary fw-bold mb-0">
                {serviceProvider?.full_name}
              </h6>
            </div>
          ),
          role: serviceProvider?.role,
          email: serviceProvider?.email,
          stc_pay: serviceProvider.stc_pay,
          status: (
            <div className="d-flex align-items-center justify-content-center">
              <div
                className={`me-2 ${
                  serviceProvider?.is_approved
                    ? "bg-success"
                    : serviceProvider?.is_blocked
                    ? "bg-danger"
                    : "bg-warning"
                } rounded-circle`}
                style={{ minWidth: "8px", minHeight: "8px" }}
              ></div>
              <span>
                {serviceProvider?.is_approved
                  ? "Approved"
                  : serviceProvider?.is_blocked
                  ? "Rejected"
                  : "Pending"}
              </span>
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

      setTableData(ServiceProviderListArray);
    } else {
      setTableData([]);
    }
  }, [serviceProvidersData]);

  const columns = [
    { label: "FullName", dataKey: "full_name" },
    {
      label: "Role",
      dataKey: "role",
      align: "center",
    },
    { label: "Email", dataKey: "email", align: "center" },
    { label: "STC Phone No", dataKey: "stc_pay", align: "center" },
    { label: "Status", dataKey: "status", align: "center" },
    { label: "Block / UnBlock", dataKey: "action", align: "center" },
  ];

  return (
    <Row className="h-100">
      <Col md={12}>
        <Card className="border-0 h-100 text-start">
          <CardHeader className="bg-transparent border-0 p-0">
            <PageHeading headingText="Service Provider List" categoryText="" />
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
