import { useSelector } from "react-redux";
import React, { useCallback } from "react";
import { useNavigate } from "react-router";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import ProgressBar from "../../../Shared/ProfileProgressBar";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import ProfileInformationCard from "../../../Shared/ProfileInformationCard";

const InfoData = {
  infoImg: Images.PROFILE_IMG,
  infoLogo: Images.SHORTLOGO_IMG,
  infoTitle: "Shane",
  infoRating: 4,
  infoDes: "2 Years",
  Height: "25",
  TraineeEmail: "Shane@gmail.com",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const handleCurrentTrainerClick = useCallback(() => {
    navigate("/trainee/serviceProviderList");
  }, [navigate]);

  const handleCurrentNutritionistClick = useCallback(() => {
    navigate("/trainee/serviceProviderList");
  }, [navigate]);

  const handleSubscriptionHistoryClick = useCallback(() => {
    navigate("/trainee/subscriptionHistory");
  }, [navigate]);

  const handleMyProgressClick = useCallback(() => {
    navigate("/trainee/myProgress");
  }, [navigate]);

  const handleAllServiceProviderClick = useCallback(() => {
    navigate("/trainee/allServiceProvider");
  }, [navigate]);

  return (
    <Container fluid className="pt-2">
      <Row className="py-2">
        <Col lg={3} md={4} className="mb-2">
          <Card className="p-3 BorderRadius border-0">
            <div className="mb-2">
              <ProfileInformationCard
                infoLogo={InfoData.infoLogo}
                infoTitle={InfoData.infoTitle}
                infoRating={InfoData.infoRating}
                infoImg={InfoData.infoImg}
                infoDes={InfoData.infoDes}
                CardHeight={InfoData.Height}
                TraineeEmail={InfoData.email}
              />
            </div>
            <Row className="my-3">
              <Col md={12}>
                <FillBtn
                  className="w-100 mb-2 py-2"
                  text="My Current Trainer"
                  handleOnClick={handleCurrentTrainerClick}
                />
                <FillBtn
                  className="w-100 mb-2 py-2"
                  text="My Current Nutritionist"
                  handleOnClick={handleCurrentNutritionistClick}
                />
                <FillBtn
                  className="w-100 mb-2 py-2"
                  text="My Subscription History"
                  handleOnClick={handleSubscriptionHistoryClick}
                />
                <FillBtn
                  className="w-100 mb-2 py-2"
                  text="My Progress"
                  handleOnClick={handleMyProgressClick}
                />

                <FillBtn
                  className="w-100 mb-2 py-2"
                  text="All Service Providers"
                  handleOnClick={handleAllServiceProviderClick}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={9} md={8}>
          <Card className="BorderRadius border-0">
            <CardBody>
              <Row>
                <Col md={12} className="mb-2">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h5 className="mb-0">My Progress</h5>
                  </div>
                </Col>
                <Col md={12}>
                  <ProgressBar />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
