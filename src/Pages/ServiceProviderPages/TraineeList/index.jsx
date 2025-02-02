import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import Pagination from "../../../Shared/Pagination";
import {
  FITNEE_COACH_MEMBERSHIP_URL,
  NUTRITIONIST_ROLE,
} from "../../../utils/constants";
import PageHeading from "../../../Shared/Headings/PageHeading";
import React, { useState, useCallback, useEffect } from "react";
import LoadingScreen from "../../../HelperMethods/LoadingScreen";
import TraineeListRow from "../../../Shared/TraineeListRow";
import TraineeList2Row from "../../../Shared/TraineeList2Row";
import { getMyTrainees } from "../../../Redux/features/User/userApi";
import { MEMBERSHIP_URL, PER_PAGE_COUNT } from "../../../utils/constants";
import { Card, CardBody, Col, Container, Row, CardFooter } from "reactstrap";

const Index = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation("");
  const { loading, user } = useSelector((state) => state.user);

  const [page, setPage] = useState(1);
  const [totalSize, setSizePages] = useState(0);
  const [traineesData, setTraineesData] = useState([]);
  const [fitneeCoachData, setFitneeCoachData] = useState([]);

  const handlePageChange = useCallback((page) => {
    setPage(page.selected + 1);
  }, []);

  useEffect(() => {
    fetchTraineesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  const fetchTraineesData = () => {
    const data = {
      apiEndpoint: `${MEMBERSHIP_URL}?page=${page}`,
    };

    dispatch(getMyTrainees(data)).then((res) => {
      if (res.type === "getMyTrainees/fulfilled") {
        setSizePages((prev) =>
          res.payload.data.count > prev ? res.payload.data.count : prev
        );
        setTraineesData(res.payload.data.results);
      }
    });

    const fitneeCoach = {
      apiEndpoint: `${FITNEE_COACH_MEMBERSHIP_URL}?page=${page}`,
    };

    dispatch(getMyTrainees(fitneeCoach)).then((res) => {
      if (res.type === "getMyTrainees/fulfilled") {
        setSizePages((prev) =>
          res.payload.data.count > prev ? res.payload.data.count : prev
        );
        setFitneeCoachData(
          res.payload.data?.length
            ? res.payload.data
            : res.payload.data.results?.length
            ? res.payload.data.results
            : []
        );
      }
    });
  };

  return (
    <Container fluid>
      {loading === "loading" && <LoadingScreen />}
      <Row>
        <Col md={12}>
          <Card className="BorderRadius contentCard">
            <CardBody className={`${i18n.dir()} px-4`}>
              <Row>
                <Col md={12}>
                  <PageHeading
                    headingText={
                      user?.role === NUTRITIONIST_ROLE
                        ? t("trainer.trainerSubscriberText")
                        : t("trainer.myCurrentTraineeText")
                    }
                    categoryText=""
                  />
                </Col>
              </Row>
              <Row className="align-items-center text-black-custom justify-content-center   d-md-flex d-none border-bottom text-black-custom py-2 mb-2">
                <Col md={3} className="mb-md-0 mb-2">
                  <div className="px-5">
                    <h6 className="mb-0 fw-bold ">{t("trainer.nameText")}</h6>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="fw-bold text-center p-2 rounded-3">
                    <h6 className="mb-0 fw-bold ">
                      {t("signup.phoneNumberText")}
                    </h6>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="fw-bold text-center p-2 rounded-3">
                    <h6 className="mb-0 fw-bold ">
                      {t("subscription.ageLabel")}
                    </h6>
                  </div>
                </Col>
                <Col md={4}>
                  <Row className="align-items-center h-100 ">
                    <Col md={12} xs={12} className="text-center">
                      <div className="fw-bold text-center p-2 rounded-3">
                        <h6 className="mb-0 fw-bold ">
                          {t("general.trainingLevel")}
                        </h6>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              {traineesData?.map((data, index) => {
                if (!data?.is_expired && !data?.is_refund) {
                  return <TraineeListRow data={data} key={index} />;
                }
                return null;
              })}
              {fitneeCoachData?.map((data, index) => {
                if (!data?.is_expired && !data?.is_refund) {
                  return <TraineeList2Row data={data} key={index} />;
                }
                return null;
              })}
              {traineesData?.length && fitneeCoachData?.length <= 0 ? (
                <div className="d-flex justify-content-center py-4 text-black-custom">
                  {t("messages.noDataFoundText")}
                </div>
              ) : null}
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
