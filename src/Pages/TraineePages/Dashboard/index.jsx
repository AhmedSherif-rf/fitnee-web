import React, { memo } from "react";
import InfoCard from "../../../Shared/InfoCard";
import ProgressBar from "../../../Shared/ProfileProgressBar";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import TraineeProfileButtonList from "../../../Shared/TraineeProfileButtonList";

const infoData = [
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "25",
    TraineeEmail: "shane@gmail.com",
  },
];

const ProfileProgress = () => {
  return (
    <Container fluid className="pt-2 bg-light">
      <Row className="py-2">
        <Col lg={3} md={4} className="mb-2">
          <Card className="shadow p-3 BorderRadius border-0">
            <div className="mb-2">
              {infoData.map((item) => {
                return (
                  <InfoCard
                    infoLogo={item.infoLogo}
                    infoTitle={item.infoTitle}
                    infoRating={item.infoRating}
                    infoImg={item.infoImg}
                    infoDes={item.infoDes}
                    CardHeight={item.Height}
                    TraineeEmail={item.TraineeEmail}
                  />
                );
              })}
            </div>
            <TraineeProfileButtonList />
          </Card>
        </Col>
        <Col lg={9} md={8}>
          <Card className="BorderRadius border-0 shadow">
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

export default memo(ProfileProgress);
