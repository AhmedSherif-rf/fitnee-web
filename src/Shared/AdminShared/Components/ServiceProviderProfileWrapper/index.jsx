import moment from "moment";
import GoBack from "../GoBack";
import ListingTable from "../ListingTable";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DocumentCard from "../../../DocumentCard";
import { useSelector, useDispatch } from "react-redux";
import React, { memo, useState, useEffect } from "react";
import AvailableHourListing from "../../../AvailableHourListing";
import LoadingScreen from "../../../../HelperMethods/LoadingScreen";
import ProfileInformationCard from "../../../ProfileInformationCard";
import Images from "../../../../HelperMethods/Constants/ImgConstants";
import { Row, Container, Col, Card, CardBody, Badge } from "reactstrap";
import {
  ADMIN_SERVICE_PROVIDER_PROFILE_URL,
  CURRENCY,
} from "../../../../utils/constants";
import { getServiceProviderDetail } from "../../../../Redux/features/Admin/ReviewRequest/ReviewRequestApi";

const ServiceProviderProfileWrapper = (props) => {
  const { uuid } = useParams();
  const { loading } = useSelector((state) => state.reviewRequest);

  const [tableData, setTableData] = useState([]);
  const [serviceProviderProfile, setServiceProviderProfile] = useState(null);

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation("");

  useEffect(() => {
    const data = {
      apiEndpoint: ADMIN_SERVICE_PROVIDER_PROFILE_URL.replace("userId", uuid),
    };

    dispatch(getServiceProviderDetail(data)).then((res) => {
      if (res.type === "getServiceProviderDetail/fulfilled") {
        setServiceProviderProfile(res.payload.data);
      }
    });
  }, [dispatch, uuid]);

  useEffect(() => {
    if (
      serviceProviderProfile &&
      serviceProviderProfile.active_subscriptions.length > 0
    ) {
      let subscriptionArray = [];

      serviceProviderProfile.active_subscriptions.forEach((membership) => {
        subscriptionArray.push({
          sp: (
            <div className="d-flex align-items-center">
              <div
                className="bgProperties rounded-circle me-2"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundImage:
                    membership?.trainee?.profile_pic === null
                      ? `url(${Images.USER_DUMMY_IMG})`
                      : `url(${membership?.trainee?.profile_pic})`,
                }}
              ></div>
              <h6 className="text-secondary fw-bold mb-0">
                {membership?.trainee?.first_name}{" "}
                {membership?.trainee?.last_name}
              </h6>
            </div>
          ),
          price: (
            <p className="fw-bold mb-0">
              {CURRENCY} {membership?.subscription?.price}
            </p>
          ),
          duration: (
            <p className="mb-0">{`${membership?.subscription?.duration} Months`}</p>
          ),
          Status: (
            <>
              {!membership?.is_expired && !membership?.is_refund && (
                <div className="mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3">
                  <span>{`Start Date : ${moment(membership?.created_at).format(
                    "DD/MM/YYYY"
                  )}`}</span>
                  <br />
                  <span>{`End Date : ${moment(membership?.expire_date).format(
                    "DD/MM/YYYY"
                  )}`}</span>
                </div>
              )}
              {membership?.is_expired && !membership?.is_refund && (
                <div className="mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3">
                  {`Expired On : ${moment(membership?.expire_date).format(
                    "DD/MM/YYYY"
                  )}`}
                </div>
              )}
              {membership?.is_refund && (
                <div className="mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3">
                  Refunded
                </div>
              )}
            </>
          ),
        });
      });

      setTableData(subscriptionArray);
    } else {
      setTableData([]);
    }
  }, [serviceProviderProfile]);

  const columns = [
    { label: "Trainee", dataKey: "sp" },
    {
      label: "Price",
      dataKey: "price",
      align: "center",
    },
    { label: "Duration", dataKey: "duration", align: "center" },
    { label: "Status", dataKey: "Status", align: "center" },
  ];

  return (
    <Container fluid className="p-2">
      <GoBack />
      <Row className="tableBodyWrapperPagination py-2">
        {loading === "pending" && <LoadingScreen />}
        {serviceProviderProfile && (
          <Col md={12} className="text-start">
            <Row>
              <Col lg={3} md={4}>
                <ProfileInformationCard
                  providerProfile={serviceProviderProfile}
                />
                <div className="mt-2">
                  <h6 className="fw-bold text-dark">Available Hours</h6>
                  <AvailableHourListing
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
                              index={index}
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
                                {i18n.dir() === "ltr"
                                  ? specialty.name
                                  : specialty.arabic_name}
                              </Badge>
                            )
                          )}
                      </Col>
                    </Row>
                    {serviceProviderProfile?.profile_subscriptions && (
                      <Row>
                        <h5 className="fw-bold my-2">Subscription Plans</h5>
                        {serviceProviderProfile?.profile_subscriptions?.map(
                          (plan, index) => (
                            <Col md={4} key={index}>
                              <Card className="border-0">
                                <div className="d-flex justify-content-between align-items-center p-4 BorderRadius shadow-sm">
                                  <p className="mb-0">
                                    {plan?.duration} Months
                                  </p>
                                  <p className="mb-0 fw-bold">
                                    {CURRENCY} {plan?.price}
                                  </p>
                                </div>
                              </Card>
                            </Col>
                          )
                        )}
                      </Row>
                    )}
                    <Row className="mt-4">
                      <Col md={12}>
                        <h5 className="fw-bold my-2">Subscriptions</h5>
                      </Col>
                      <Col md={12}>
                        <ListingTable data={tableData} columns={columns} />
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
