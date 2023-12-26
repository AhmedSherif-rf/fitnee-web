import React from "react";
import PageHeading from "../../../Shared/Headings/PageHeading";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import ServiceProviderRow from "../../../Shared/ServiceProviderListRow";

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
    <Container fluid className="vh-100 text-black-custom">
      <Row className="vh-100">
        <Col md={12}>
          <Card className="BorderRadius border-0 h-100">
            <CardBody className="px-4">
              <Row>
                <Col md={12}>
                  <PageHeading
                    headingText="My Current Trainees"
                    categoryText=""
                  />
                </Col>
              </Row>
              {TraineeList.map((item) => {
                return (
                  <ServiceProviderRow
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
