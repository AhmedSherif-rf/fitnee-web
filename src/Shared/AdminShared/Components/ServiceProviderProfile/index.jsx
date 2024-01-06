import { useTranslation } from "react-i18next";
import DocumentCard from "../../../DocumentCard";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import React, { memo, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AvailableHourList from "../../../AvailableHourListing";
import LoadingScreen from "../../../../HelperMethods/LoadingScreen";
import ProfileInformationCard from "../../../ProfileInformationCard";
import { BsFillPersonXFill, BsPersonCheckFill } from "react-icons/bs";
import { Row, Container, Col, Card, CardBody, Badge } from "reactstrap";
import { GUEST_SERVICE_PROVIDER_PROFILE_URL } from "../../../../utils/constants";
import { getServiceProviderProfile } from "../../../../Redux/features/Guest/guestApi";
import {
  ADMIN_APPROVE_REVIEW_REQUEST_URL,
  ADMIN_REJECT_REVIEW_REQUEST_URL,
} from "../../../../utils/constants";
import {
  approveReviewRequest,
  rejectReviewRequest,
} from "../../../../Redux/features/Admin/ReviewRequest/ReviewRequestApi";

const ServiceProviderProfileWrapper = (props) => {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.guest);
  const { loading: reviewRequestLoading } = useSelector(
    (state) => state.reviewRequest
  );

  const [serviceProviderProfile, setServiceProviderProfile] = useState(null);

  const dispatch = useDispatch();
  const { t } = useTranslation("");

  useEffect(() => {
    const data = {
      apiEndpoint: `${GUEST_SERVICE_PROVIDER_PROFILE_URL}?uuid=${uuid}`,
    };

    dispatch(getServiceProviderProfile(data)).then((res) => {
      if (res.type === "getServiceProviderProfile/fulfilled") {
        setServiceProviderProfile(res.payload.data[0]);
      }
    });
  }, [dispatch, uuid]);

  const handleApproveRequestClick = (email) => {
    const data = {
      apiEndpoint: ADMIN_APPROVE_REVIEW_REQUEST_URL,
      requestData: JSON.stringify({ email }),
    };

    dispatch(approveReviewRequest(data));
  };

  const handleRejectRequestClick = (email) => {
    const data = {
      apiEndpoint: ADMIN_REJECT_REVIEW_REQUEST_URL,
      requestData: JSON.stringify({ email }),
    };

    dispatch(rejectReviewRequest(data));
  };

  return (
    <Container fluid className="p-2">
      <div
        className="d-flex align-items-end textYellow cursorPointer"
        onClick={() => navigate(-1)}
      >
        <div>
          <IoIosArrowRoundBack size={40} />
        </div>
        <div>
          <h5>Go Back</h5>
        </div>
      </div>
      <Row>
        {(loading === "pending" || reviewRequestLoading === "pending") && (
          <LoadingScreen />
        )}
        {serviceProviderProfile && (
          <Col md={12} className="text-start">
            <Row>
              <Col lg={3} md={4}>
                <ProfileInformationCard
                  providerProfile={serviceProviderProfile}
                />
                <div className="mt-2">
                  <h6 className="fw-bold text-dark">Available Hours</h6>
                  <AvailableHourList
                    data={serviceProviderProfile?.profile_availability}
                  />
                </div>
              </Col>
              <Col lg={9} md={8}>
                <Card className="BorderRadius border-0 text-black-custom">
                  <CardBody>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h3 className="fw-bold my-2">
                          {serviceProviderProfile?.full_name}
                        </h3>
                      </div>
                      {/* <div>
                      <span
                        className={`iconBadge px-2 cursorPointer`}
                        onClick={() =>
                          handleRejectRequestClick(
                            serviceProviderProfile?.email
                          )
                        }
                      >
                        <BsFillPersonXFill
                          size={22}
                          className="rejectUser mb-1"
                        />
                      </span>
                      <span
                        className={`iconBadge px-2 cursorPointer`}
                        onClick={() =>
                          handleApproveRequestClick(
                            serviceProviderProfile?.email
                          )
                        }
                      >
                        <BsPersonCheckFill
                          size={22}
                          className="approveUser mb-1"
                        />
                      </span>
                    </div> */}
                    </div>
                    <div
                      className="overflow-scroll onlyBorderRadius p-3 border border-light"
                      style={{ maxHeight: "100px" }}
                    >
                      <p className="small">{serviceProviderProfile?.bio}</p>
                    </div>

                    <Row>
                      <Col md={12}>
                        <h5 className="fw-bold my-2">
                          {t("guest.qualificationExperienceText")}
                        </h5>
                      </Col>
                      {serviceProviderProfile?.ServiceProvider_Certification &&
                        serviceProviderProfile?.ServiceProvider_Certification?.map(
                          (certificate, index) => (
                            <DocumentCard
                              key={index}
                              className="BorderYellow"
                              documentTitle={certificate?.title}
                              documentImg={certificate?.certificate_image}
                            />
                          )
                        )}
                    </Row>
                    <Row>
                      <Col md={12}>
                        <h5 className="fw-bold my-2">
                          {t("guest.areaSpecialtyText")}
                        </h5>
                        {serviceProviderProfile?.specialities &&
                          serviceProviderProfile?.specialities?.map(
                            (specialty, index) => (
                              <Badge
                                key={index}
                                color="custom"
                                className="me-2 mb-2 text-black-custom fw-normal custom-badge px-3 small text-center"
                              >
                                {specialty.name}
                              </Badge>
                            )
                          )}
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default memo(ServiceProviderProfileWrapper);
