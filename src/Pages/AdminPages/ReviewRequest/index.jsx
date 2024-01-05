import { Col, Row } from "reactstrap";
import styles from "./styles.module.scss";
import Pagination from "../../../Shared/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { PER_PAGE_COUNT } from "../../../utils/constants";
import PageHeading from "../../../Shared/Headings/PageHeading";
import React, { useState, useEffect, useCallback } from "react";
import LoadingScreen from "../../../HelperMethods/LoadingScreen";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import { ADMIN_REVIEW_REQUEST_URL } from "../../../utils/constants";
import { BsFillPersonXFill, BsPersonCheckFill } from "react-icons/bs";
import ListingTable from "../../../Shared/AdminShared/Components/ListingTable";
import {
  getReviewRequestListing,
  approveReviewRequest,
} from "../../../Redux/features/Admin/ReviewRequest/ReviewRequestApi";

const ReviewRequest = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.reviewRequest);
  const [page, setPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [totalSize, setSizePages] = useState(0);
  const [reviewRequests, setReviewRequests] = useState([]);

  const handlePageChange = useCallback((page) => {
    setPage(page.selected + 1);
  }, []);

  useEffect(() => {
    fetchReviewRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  const fetchReviewRequests = () => {
    const data = {
      apiEndpoint: `${ADMIN_REVIEW_REQUEST_URL}?page=${page}`,
    };

    dispatch(getReviewRequestListing(data)).then((res) => {
      if (res.type === "getReviewRequestListing/fulfilled") {
        setSizePages(res.payload.data.count);
        setReviewRequests(res.payload.data.results);
      }
    });
  };

  const handleApproveRequestClick = (email) => {
    const data = {
      apiEndpoint: `/service_provider_approve/`,
      requestData: JSON.stringify({ email }),
    };

    dispatch(approveReviewRequest(data)).then((res) => {
      if (res.type === "approveReviewRequest/fulfilled") {
        setPage(1);
        fetchReviewRequests();
      }
    });
  };

  useEffect(() => {
    if (reviewRequests.length > 0) {
      let requestArray = [];
      reviewRequests.forEach((request) =>
        requestArray.push({
          full_name: (
            <div className="d-flex align-items-center">
              <div
                className="bgProperties rounded-circle me-2"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundImage:
                    request?.profile_pic === null
                      ? `url(${Images.PROFILE3_IMG})`
                      : request?.profile_pic,
                }}
              ></div>
              <h6 className="text-secondary fw-bold mb-0">
                {request?.full_name}
              </h6>
            </div>
          ),
          request_id: (
            <div className="fw-bold text-secondary">{request?.request_id}</div>
          ),
          email: request?.email,
          phone_number: request?.phone_number,
          action: (
            <div className="d-flex align-items-center justify-content-md-center">
              <span className={`iconBadge px-2 cursorPointer`}>
                <BsFillPersonXFill size={22} className="rejectUser mb-1" />
              </span>
              <span
                className={`iconBadge px-2 cursorPointer`}
                onClick={() => handleApproveRequestClick(request?.email)}
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
  }, [reviewRequests]);

  const columns = [
    { label: "Full Name", dataKey: "full_name" },
    { label: "Request ID", dataKey: "request_id" },
    { label: "Email", dataKey: "email", align: "center" },
    { label: "Phone", dataKey: "phone_number", align: "center" },
    { label: "Action", dataKey: "action", align: "center" },
  ];

  return (
    <React.Fragment>
      {loading === "pending" && <LoadingScreen />}
      <Row>
        <Col
          md="12"
          className={`text-start ${styles.reviewRequestTableWrapper}`}
        >
          <PageHeading headingText="Review Requests" categoryText="" />
          <ListingTable data={tableData} columns={columns} />
        </Col>
        {totalSize > PER_PAGE_COUNT && (
          <Col md="12 mt-3">
            <Pagination size={totalSize} handlePageChange={handlePageChange} />
          </Col>
        )}
      </Row>
    </React.Fragment>
  );
};

export default ReviewRequest;
