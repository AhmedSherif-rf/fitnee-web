import moment from "moment";
import GoBack from "../GoBack";
import ListingTable from "../ListingTable";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { memo, useState, useEffect } from "react";
import { Row, Container, Col, Card, CardBody } from "reactstrap";
import LoadingScreen from "../../../../HelperMethods/LoadingScreen";
import ProfileInformationCard from "../../../ProfileInformationCard";
import Images from "../../../../HelperMethods/Constants/ImgConstants";
import { getTraineeDetail } from "../../../../Redux/features/Admin/UserListing/userListingApi";
import {
  ADMIN_TRAINEE_PROFILE_URL,
  CURRENCY,
} from "../../../../utils/constants";

const TraineeProfileWrapper = (props) => {
  const { id } = useParams();
  const { loading } = useSelector((state) => state.userListing);

  const [traineeProfile, setTraineeProfile] = useState(null);
  const [tableData, setTableData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      apiEndpoint: ADMIN_TRAINEE_PROFILE_URL.replace("userId", id),
    };

    dispatch(getTraineeDetail(data)).then((res) => {
      if (res.type === "getTraineeDetail/fulfilled") {
        setTraineeProfile({ ...res.payload.data, role: "Trainee" });
      }
    });
  }, [dispatch, id]);

  useEffect(() => {
    if (traineeProfile && traineeProfile.membership.length > 0) {
      let subscriptionArray = [];

      traineeProfile.membership.forEach((membership) => {
        subscriptionArray.push({
          sp: (
            <div className="d-flex align-items-center">
              <div
                className="bgProperties rounded-circle me-2"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundImage:
                    membership?.serviceprovider?.profile_pic === null
                      ? `url(${Images.USER_DUMMY_IMG})`
                      : `url(${membership?.serviceprovider?.profile_pic})`,
                }}
              ></div>
              <h6 className="text-secondary fw-bold mb-0">
                {membership?.serviceprovider?.full_name}
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
  }, [traineeProfile]);

  const columns = [
    { label: "Service Provider", dataKey: "sp" },
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
        {traineeProfile && (
          <Col md={12} className="text-start">
            <Row>
              <Col lg={3} md={4}>
                <ProfileInformationCard providerProfile={traineeProfile} />
              </Col>
              <Col lg={9} md={8}>
                <Card className="BorderRadius border-0 text-black-custom">
                  <CardBody>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h3 className="fw-bold my-2">
                          {traineeProfile?.first_name}{" "}
                          {traineeProfile?.last_name}
                        </h3>
                      </div>
                    </div>
                    <div className="lh-1 mt-2">
                      <h6 className="fw-bold">Gender</h6>
                      <p className="small">{traineeProfile?.gender}</p>
                    </div>
                    <div className="lh-1 mt-2">
                      <h6 className="fw-bold">Phone Number</h6>
                      <p className="small">{traineeProfile?.phone_number}</p>
                    </div>
                    <div className="lh-1 mt-2">
                      <h6 className="fw-bold">Date of Birth</h6>
                      <p className="small">
                        {moment(traineeProfile?.date_of_birth).format(
                          "MMMM Do YYYY"
                        )}
                      </p>
                    </div>

                    {traineeProfile?.body_images !== null &&
                      traineeProfile?.body_images !== "" && (
                        <Row>
                          <Col md={12}>
                            <h5 className="fw-bold my-2">InBody</h5>
                          </Col>
                          <Col md={6}>
                            <img
                              src={traineeProfile?.body_images}
                              alt="body_images"
                              className="uploaded-image BorderRadius"
                              style={{
                                width: "100%",
                                height: "170px",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            />
                          </Col>
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

export default memo(TraineeProfileWrapper);
