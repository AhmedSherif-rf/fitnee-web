import React, { useEffect } from "react";
import PhoneInput from "react-phone-input-2";
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
  const [stcPayNumber, setStcPayNumber] = useState("");
  const [serviceProvidersData, setServiceProvidersData] = useState(null);

  const handlePageChange = useCallback((page) => {
    setPage(page.selected + 1);
  }, []);

  useEffect(() => {
    const data = {
      apiEndpoint: `${ADMIN_SERVICE_PROVIDER_LISTING_URL}?page=${page}&stc_pay=${stcPayNumber}`,
    };

    dispatch(getServiceProviderListing(data)).then((res) => {
      if (res.type === "getServiceProviderListing/fulfilled") {
        setSizePages(res.payload.data.count);
        setServiceProvidersData(res.payload.data.results);
      }
    });
  }, [dispatch, page, stcPayNumber]);

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
                    serviceProvider?.profile_pic === null
                      ? `url(${Images.USER_DUMMY_IMG})`
                      : `url(${serviceProvider?.profile_pic})`,
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
                  serviceProvider?.is_deleted
                    ? "bg-danger"
                    : serviceProvider?.is_blocked
                    ? "bg-danger"
                    : serviceProvider?.is_approved
                    ? "bg-success"
                    : "bg-warning"
                } rounded-circle`}
                style={{ minWidth: "8px", minHeight: "8px" }}
              ></div>
              <span>
                {serviceProvider?.is_deleted
                  ? "Deleted"
                  : serviceProvider?.is_blocked
                  ? "Rejected"
                  : serviceProvider?.is_approved
                  ? "Approved"
                  : "Incomplete Profile"}
              </span>
            </div>
          ),
          action: (
            <div className="d-flex align-items-center justify-content-md-center">
              <span className={`iconBadge me-1`}>
                <MdOutlinePersonOff
                  size={22}
                  className={`rejectUser cursorPointer ${
                    serviceProvider.is_blocked ? "" : "text-danger"
                  }`}
                />
              </span>
              <span className={`iconBadge me-1`}>
                <MdOutlinePersonOutline
                  size={22}
                  className={`approveUser cursorPointer ${
                    serviceProvider.is_blocked ? "text-success" : ""
                  }`}
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
      {loading === "pending" && <LoadingScreen />}
      <Col md={12}>
        <Card className="border-0 h-100 text-start">
          <CardHeader className="bg-transparent border-0 p-0">
            <PageHeading headingText="Service Provider List" categoryText="" />
          </CardHeader>
          <CardBody className="tableBodyWrapperPagination">
            <Row className="justify-content-end py-1">
              <Col md={4}>
                <PhoneInput
                  inputProps={{
                    name: "stc_pay",
                    required: true,
                    className:
                      "form-control-lg w-100 py-1 px-4 customPhoneInput border",
                  }}
                  country={"sa"}
                  value={stcPayNumber}
                  className="border ltr"
                  onChange={(value) => {
                    setPage(1);
                    setStcPayNumber(value);
                  }}
                />
              </Col>
            </Row>
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
