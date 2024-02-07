import { Link } from "react-router-dom";
import Pagination from "../../../Shared/Pagination";
import { useDispatch, useSelector } from "react-redux";
import PageHeading from "../../../Shared/Headings/PageHeading";
import React, { useState, useEffect, useCallback } from "react";
import LoadingScreen from "../../../HelperMethods/LoadingScreen";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import { BsFillPersonXFill, BsPersonCheckFill } from "react-icons/bs";
import { UPDATE_PROFILE_REQUEST_LISTING_URL } from "../../../utils/constants";
import { Card, CardBody, CardFooter, CardHeader, Col, Row } from "reactstrap";
import ListingTable from "../../../Shared/AdminShared/Components/ListingTable";
import { getEditProfileRequestListing } from "../../../Redux/features/Admin/EditProfileRequest/EditProfileRequestApi";
import {
  ADMIN_APPROVE_REVIEW_REQUEST_URL,
  PER_PAGE_COUNT,
  ADMIN_REJECT_REVIEW_REQUEST_URL,
} from "../../../utils/constants";

const EditProfileRequest = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalSize, setSizePages] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [editProfileRequests, setEditProfileRequests] = useState([]);
  const { loading } = useSelector((state) => state.EditProfileRequest);

  const handlePageChange = useCallback((page) => {
    setPage(page.selected + 1);
  }, []);

  useEffect(() => {
    fetchReviewRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  const fetchReviewRequests = () => {
    const data = {
      apiEndpoint: `${UPDATE_PROFILE_REQUEST_LISTING_URL}?page=${page}`,
    };

    dispatch(getEditProfileRequestListing(data)).then((res) => {
      if (res.type === "getEditProfileRequestListing/fulfilled") {
        setSizePages(res.payload.data.count);
        setEditProfileRequests(res.payload.data.results);
      }
    });
  };

  const handleChangeStatus = (id, status) => {
    const data = {
      apiEndpoint: `/admin/profile-update-request/${id}/change_status/`,
      requestData: JSON.stringify({ request_status: status }),
    };

    // dispatch(approveReviewRequest(data)).then((res) => {
    //   if (res.type === "approveReviewRequest/fulfilled") {
    //     setPage(1);
    //     fetchReviewRequests();
    //   }
    // });
  };

  // const handleRejectRequestClick = (email) => {
  //   const data = {
  //     apiEndpoint: ADMIN_REJECT_REVIEW_REQUEST_URL,
  //     requestData: JSON.stringify({ email }),
  //   };

  //   dispatch(rejectReviewRequest(data)).then((res) => {
  //     if (res.type === "rejectReviewRequest/fulfilled") {
  //       setPage(1);
  //       fetchReviewRequests();
  //     }
  //   });
  // };

  useEffect(() => {
    if (editProfileRequests.length > 0) {
      let requestArray = [];
      editProfileRequests.forEach((request) =>
        requestArray.push({
          license: request?.license,
          stc_pay: request?.stc_pay,
          saudireps_number: request?.saudireps_number,
          request_status: (
            <div className="d-flex align-items-center justify-content-center">
              <div
                className={`me-2 ${
                  request?.request_status === "Pending"
                    ? "bg-warning"
                    : request?.request_status === "Declined"
                    ? "bg-danger"
                    : "bg-success"
                } rounded-circle`}
                style={{ minWidth: "8px", minHeight: "8px" }}
              ></div>
              <span>{request?.request_status}</span>
            </div>
          ),
          action: (
            <div className="d-flex align-items-center justify-content-md-center">
              <span
                className={`iconBadge px-2 cursorPointer`}
                onClick={() => handleChangeStatus(request?.id)}
              >
                <BsFillPersonXFill size={22} className="rejectUser mb-1" />
              </span>
              <span
                className={`iconBadge px-2 cursorPointer`}
                onClick={() => handleChangeStatus(request?.id)}
              >
                <BsPersonCheckFill size={22} className="approveUser mb-1" />
              </span>
            </div>
          ),
        })
      );
      setTableData(requestArray);
    } else {
      setTableData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editProfileRequests]);

  const columns = [
    { label: "License Number", dataKey: "license" },
    { label: "STC Phone No", dataKey: "stc_pay" },
    { label: "Saudireps Number", dataKey: "saudireps_number" },
    { label: "Status", dataKey: "request_status", align: "center" },
    { label: "Action", dataKey: "action", align: "center" },
  ];

  return (
    <Row className="h-100">
      {loading === "pending" && <LoadingScreen />}
      <Col md={12}>
        <Card className="border-0 h-100 text-start">
          <CardHeader className="bg-transparent border-0 p-0">
            <PageHeading headingText="Edit Profile Requests" categoryText="" />
          </CardHeader>
          <CardBody className="tableBodyWrapperPagination">
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

export default EditProfileRequest;
