import React from "react";
import PageHeading from "../../../Shared/Headings/PageHeading";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import ServiceProvider from "../../../Shared/ServiceProviderListRow";

const Index = () => {
  const TraineeList = [
    {
      useImages: `${Images.PROFILE4_IMG}`,
      userName: "Nayyar Mehdi",
      serviceProvider: "Trainee",
      duration: "2 Months",
      fee: "SAR 1000",
      startDate: "12/10/2023",
      endDate: "11/12/2023",
    },
    {
      useImages: `${Images.PROFILE4_IMG}`,
      userName: "Nayyar Mehdi",
      serviceProvider: "Trainee",
      duration: "2 Months",
      fee: "SAR 1000",
      startDate: "12/10/2023",
      endDate: "11/12/2023",
    },
    {
      useImages: `${Images.PROFILE4_IMG}`,
      userName: "Nayyar Mehdi",
      serviceProvider: "Trainee",
      duration: "2 Months",
      fee: "SAR 1000",
      startDate: "12/10/2023",
      endDate: "11/12/2023",
    },
    {
      useImages: `${Images.PROFILE4_IMG}`,
      userName: "Nayyar Mehdi",
      serviceProvider: "Trainee",
      duration: "2 Months",
      fee: "SAR 1000",
      startDate: "12/10/2023",
      endDate: "11/12/2023",
    },
    {
      useImages: `${Images.PROFILE4_IMG}`,
      userName: "Nayyar Mehdi",
      serviceProvider: "Trainee",
      duration: "2 Months",
      fee: "SAR 1000",
      startDate: "12/10/2023",
      endDate: "11/12/2023",
    },
  ];
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card className="BorderRadius contentCard">
            <CardBody className="px-4">
              <Row>
                <Col md={12}>
                  <PageHeading
                    headingText="My Current Subscribers"
                    categoryText=""
                  />
                </Col>
              </Row>
              <Row className="align-items-center text-black-custom justify-content-center   d-md-flex d-none border-bottom text-black-custom py-2 mb-2">
                <Col md={3} className="mb-md-0 mb-2">
                  <div className="px-5">
                    <h6 className="mb-0 fw-bold ">Name</h6>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="fw-bold text-center p-2 rounded-3">
                    <h6 className="mb-0 fw-bold ">Duration</h6>
                  </div>
                </Col>

                <Col md={2}>
                  <div className="fw-bold text-center p-2 rounded-3">
                    <h6 className="mb-0 fw-bold ">Price</h6>
                  </div>
                </Col>
                <Col md={4}>
                  <Row className="align-items-center h-100 ">
                    <Col md={12} xs={12} className="text-center">
                      <div className="p-2 rounded-3 d-md-flex d-block align-items-center justify-content-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <h6 className="mb-0 fw-bold">Start Date</h6>
                          <span className="mb-0 mx-1"> / </span>
                          <h6 className="mb-0 fw-bold">End Date</h6>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              {TraineeList.map((item) => {
                return (
                  <ServiceProvider
                    useImages={item.useImages}
                    userName={item.userName}
                    serviceProvider={item.serviceProvider}
                    duration={item.duration}
                    fee={item.fee}
                    startDate={item.startDate}
                    endDate={item.endDate}
                  />
                );
              })}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
