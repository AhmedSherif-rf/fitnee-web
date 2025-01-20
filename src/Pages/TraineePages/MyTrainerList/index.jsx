import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../Shared/Pagination";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import { useDispatch, useSelector } from "react-redux";
import PageHeading from "../../../Shared/Headings/PageHeading";
import React, { useState, useCallback, useEffect } from "react";
import LoadingScreen from "../../../HelperMethods/LoadingScreen";
import ServiceProvider from "../../../Shared/ServiceProviderListRow";
import {
  PER_PAGE_COUNT,
  MEMBERSHIP_URL,
  TRAINER_ROLE,
} from "../../../utils/constants";
import { getMyServiceProviders } from "../../../Redux/features/User/userApi";
import { Card, CardBody, CardFooter, Col, Container, Row } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import moment from "moment";

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("");
  const { loading } = useSelector((state) => state.user);

  const [page, setPage] = useState(1);
  const [totalSize, setSizePages] = useState(0);
  const [trainersData, setTrainersData] = useState([]);
  const [fitneeCoachData, setFitneeCoachData] = useState([]);

  const handlePageChange = useCallback((page) => {
    setPage(page.selected + 1);
  }, []);

  useEffect(() => {
    fetchTrainersData();
    fetchFitneeCoachData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  const fetchTrainersData = () => {
    const data = {
      apiEndpoint: `${MEMBERSHIP_URL}?role=${TRAINER_ROLE}&page=${page}`,
    };

    dispatch(getMyServiceProviders(data)).then((res) => {
      if (res.type === "getMyServiceProviders/fulfilled") {
        setSizePages(res.payload.data.count);
        setTrainersData(res.payload.data.results);
      }
    });
  };

  const fetchFitneeCoachData = () => {
    const user = window.localStorage.getItem("user");
    const trainee_id = JSON.parse(user).traineeId;

    const data = {
      apiEndpoint: `package-users/1/get_specific_user_package?user_id=${trainee_id}`,
    };

    dispatch(getMyServiceProviders(data)).then((res) => {
      if (res.type === "getMyServiceProviders/fulfilled") {
        // setSizePages(res.payload.data.count);
        setFitneeCoachData(res.payload.data);
      }
    });
  };

  const handleAllServiceProviderClick = useCallback(() => {
    navigate("/trainee/allServiceProvider/trainer");
  }, [navigate]);

  return (
    <Container fluid>
      {loading === "pending" && <LoadingScreen />}
      <FillBtn
        className={`mb-2 py-2 ${
          i18n.dir() === "ltr"
            ? "allServiceProvidersFloatingBtnRight"
            : "allServiceProvidersFloatingBtnLeft"
        }`}
        text={t("traineeDashboard.trainerListText")}
        handleOnClick={handleAllServiceProviderClick}
      />
      <Row>
        <Col md={12}>
          <Card className="BorderRadius contentCard border-0">
            <CardBody className={`${i18n.dir()} px-4`}>
              <Row>
                <Col md={12}>
                  <PageHeading
                    headingText={t(
                      "traineeServiceProviderList.myCurrentTrainerText"
                    )}
                    categoryText=""
                  />
                </Col>
              </Row>
              <Row className="align-items-center text-black-custom justify-content-center   d-md-flex d-none border-bottom text-black-custom py-2 mb-2">
                <Col md={3} className="mb-md-0 mb-2">
                  <div className="px-5">
                    <h6 className="mb-0 fw-bold ">
                      {t("traineeServiceProviderList.nameText")}
                    </h6>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="fw-bold text-center p-2 rounded-3">
                    <h6 className="mb-0 fw-bold ">
                      {t("traineeServiceProviderList.durationText")}
                    </h6>
                  </div>
                </Col>

                <Col md={2}>
                  <div className="fw-bold text-center p-2 rounded-3">
                    <h6 className="mb-0 fw-bold ">
                      {t("traineeServiceProviderList.priceText")}
                    </h6>
                  </div>
                </Col>
                <Col md={4}>
                  <Row className="align-items-center h-100 ">
                    <Col md={12} xs={12} className="text-center">
                      <div className="p-2 rounded-3 d-md-flex d-block align-items-center justify-content-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <h6 className="mb-0 fw-bold">
                            {t("traineeServiceProviderList.startDateText")}
                          </h6>
                          <span className="mb-0 mx-1"> - </span>
                          <h6 className="mb-0 fw-bold">
                            {t("traineeServiceProviderList.endDateText")}
                          </h6>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              {fitneeCoachData?.map((coach, index) => {
                return (
                  <Row
                    key={index}
                    className="align-items-center justify-content-center text-black-custom border-bottom text-black-custom py-2 mb-2"
                  >
                    <Col md={3} className="mb-md-0 mb-2">
                      <div
                        className="d-flex align-items-center"
                        onClick={() => {
                          navigate(
                            `/trainee/serviceProviderProfile/fitneeCoach`
                          );
                        }}
                      >
                        <div
                          className="me-2 bgProperties rounded-circle"
                          style={{
                            width: "60px",
                            height: "60px",
                            cursor: "pointer",
                            backgroundImage:
                              coach?.trainer?.profile_pic === null
                                ? `url(${Images.USER_DUMMY_IMG})`
                                : `url(${coach?.trainer?.profile_pic})`,
                            border: "1px solid transparent",
                          }}
                        ></div>
                        <div>
                          <h6 className="mb-0 fw-bold mx-2">
                            {coach?.serviceprovider
                              ? coach?.serviceprovider?.full_name
                              : `${coach?.trainer?.first_name} ${coach?.trainer?.last_name}`}
                          </h6>
                          <span className="text-black-custom mx-2">
                            {/* {coach?.serviceprovider
                          ? coach?.serviceprovider?.role ===
                            TRAINER_ROLE
                            ? t("registerAs.trainerText")
                            : coach?.serviceprovider?.role ===
                              NUTRITIONIST_ROLE
                            ? t("registerAs.nutritionistText")
                            : t("registerAs.trainerNutritionistText")
                          : t("registerAs.traineeText")} */}
                            {t("registerAs.trainerText")}
                          </span>
                          <div className="mb-md-0 d-md-none d-block py-2 mx-2">
                            <h6 className="mb-0 w-100 small fw-bold ">
                              {coach?.transition?.total_amount === null
                                ? coach?.transition?.current_price
                                : coach?.transition?.total_amount}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md={2} className="d-md-block d-none">
                      <div className="mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3">
                        {coach?.subscription?.duration === 1
                          ? t("trainerPackages.monthText")
                          : coach?.subscription?.duration === 2
                          ? t("trainerPackages.twoMonthText")
                          : t("trainerPackages.threeMonthText")}
                      </div>
                    </Col>
                    <Col md={2} className="d-md-block d-none">
                      <div className="mb-md-0 text-center py-2 rounded-3">
                        <h6 className="mb-0 w-100 fs-5 fw-bold ">
                          {coach?.transition?.total_amount === null
                            ? coach?.transition?.current_price
                            : coach?.transition?.total_amount}
                        </h6>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="BorderYellow p-2 rounded-3 d-md-flex d-block align-items-center justify-content-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <p className="mb-0 small">
                            {moment(coach?.start_date).format("DD/MM/YYYY")}
                          </p>
                          <span className="mb-0 mx-1">-</span>
                          <p className="mb-0 small">
                            {moment(coach?.end_date).format("DD/MM/YYYY")}
                          </p>
                        </div>
                        <span className="d-md-none d-block textDark text-center">
                          {coach?.subscription?.duration === 1
                            ? t("trainerPackages.monthText")
                            : coach?.subscription?.duration === 2
                            ? t("trainerPackages.twoMonthText")
                            : t("trainerPackages.threeMonthText")}
                        </span>
                      </div>
                    </Col>
                  </Row>
                );
              })}

              {trainersData?.map((data, index) => {
                if (
                  !data?.is_expired &&
                  !data?.is_refund &&
                  !data?.have_exercise_subscription
                ) {
                  return (
                    <ServiceProvider key={index} data={data} index={index} />
                  );
                }
                return null;
              })}
              {trainersData.length <= 0 && (
                <div className="d-flex justify-content-center py-4 text-black-custom">
                  {t("messages.noDataFoundText")}
                </div>
              )}
            </CardBody>
            <CardFooter>
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
    </Container>
  );
};

export default Index;
