import { Link } from "react-router-dom";
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
  ADMIN_COACH_LISTING_URL,
  ADMIN_SERVICE_PROVIDER_BLOCK_UNBLOCK_URL,
  PER_PAGE_COUNT,
} from "../../../../utils/constants";
import {
  getCoachListing,
  userBlockUnblock,
} from "../../../../Redux/features/Admin/UserListing/userListingApi";

const Coach = (props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userListing);

  const [page, setPage] = useState(1);
  const [totalSize, setSizePages] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [stcPayNumber, setStcPayNumber] = useState("");
  const [coachData, setCoachData] = useState(null);

  const handlePageChange = useCallback((page) => {
    setPage(page.selected + 1);
  }, []);

  useEffect(() => {
    fetchCoachListing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page, stcPayNumber]);

  const fetchCoachListing = () => {
    const data = {
      apiEndpoint: `${ADMIN_COACH_LISTING_URL}?page=${page}&stc_pay=${stcPayNumber}`,
    };

    dispatch(getCoachListing(data)).then((res) => {
      if (res.type === "getCoachListing/fulfilled") {
        setSizePages(res.payload.data.count);
        setCoachData(res.payload.data.results);
      }
    });
  };

  const handleActionClick = (id) => {
    const data = {
      apiEndpoint: ADMIN_SERVICE_PROVIDER_BLOCK_UNBLOCK_URL.replace(
        "userId",
        id
      ),
    };
    dispatch(userBlockUnblock(data)).then((res) => {
      if (res.type === "userBlockUnblock/fulfilled") {
        fetchCoachListing();
      }
    });
  };

  useEffect(() => {
    if (coachData && coachData.length > 0) {
      let CoachListArray = [];

      coachData.forEach((singleCoach, index) => {
        CoachListArray.push({
          full_name: (
            <Link to={`/admin/serviceProviderProfile/${singleCoach?.uuid}`}>
              <div className="d-md-flex align-items-center">
                <div
                  className="bgProperties rounded-circle me-2 mb-2"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundImage:
                      singleCoach?.profile_pic === null
                        ? `url(${Images.USER_DUMMY_IMG})`
                        : `url(${singleCoach?.profile_pic})`,
                  }}
                ></div>
                <div className="tableResponsiveWidth">
                  <h6 className="text-secondary fw-bold mb-0">
                    {singleCoach?.full_name}
                  </h6>
                </div>
              </div>
            </Link>
          ),
          role: singleCoach?.role,
          email: singleCoach?.email,
          stc_pay: singleCoach.stc_pay,
          status: (
            <div className="d-flex align-items-center justify-content-center">
              <div
                className={`me-2 ${
                  singleCoach?.is_deleted
                    ? "bg-danger"
                    : singleCoach?.is_blocked
                    ? "bg-danger"
                    : singleCoach?.is_approved
                    ? "bg-success"
                    : !singleCoach?.is_active
                    ? "bg-warning"
                    : "bg-success"
                } rounded-circle`}
                style={{ minWidth: "8px", minHeight: "8px" }}
              ></div>
              <span>
                {singleCoach?.is_deleted
                  ? "Deleted"
                  : singleCoach?.is_blocked
                  ? "Rejected"
                  : singleCoach?.is_approved
                  ? "Approved"
                  : !singleCoach?.is_active
                  ? "Incomplete Profile"
                  : "Profile Completed"}
              </span>
            </div>
          ),
          action: !singleCoach?.is_deleted && (
            <div className="d-flex align-items-center justify-content-md-center">
              {!singleCoach?.is_blocked && (
                <span
                  className={`iconBadge me-1`}
                  id={`userId_${singleCoach?.id}`}
                  onClick={() => handleActionClick(singleCoach?.id)}
                >
                  <MdOutlinePersonOutline
                    size={25}
                    className={`cursorPointer ${
                      singleCoach?.is_blocked === false ? "text-success" : ""
                    }`}
                  />
                </span>
              )}

              {singleCoach?.is_blocked && (
                <span
                  className={`iconBadge me-1`}
                  id={`userId_${singleCoach?.id}`}
                  onClick={() => handleActionClick(singleCoach?.id)}
                >
                  <MdOutlinePersonOff
                    size={25}
                    className={`cursorPointer ${
                      singleCoach?.is_blocked === true ? "" : "text-danger"
                    }`}
                  />
                </span>
              )}
            </div>
          ),
        });
      });

      setTableData(CoachListArray);
    } else {
      setTableData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coachData]);

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
            <Row className="align-items-center px-2">
              <Col md={6}>
                <PageHeading headingText="Coach List" categoryText="" />
              </Col>
              <Col md={6} className="mb-3 px-4 mt-2">
                <PhoneInput
                  inputProps={{
                    name: "stc_pay",
                    required: true,
                    className:
                      "form-control-lg w-100 py-3 px-4 customPhoneInput border-0",
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
    </Row>
  );
};

export default Coach;
