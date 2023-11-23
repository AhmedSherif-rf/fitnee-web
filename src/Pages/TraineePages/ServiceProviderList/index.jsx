import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import ServiceProvider from "../../../Shared/ServiceProviderListRow";
import PageHeading from "../../../Shared/Headings/PageHeading";

const index = () => {
  const ServiceProviders = [
    {
      useImages: `${Images.PROFILE_IMG}`,
      userName: "Nayyar Mehdi",
      serviceProvider: "Trainer",
      duration: "2 Months",
      fee: "SAR 1000",
      startDate: "12/10/2023",
      endDate: "11/12/2023",
    },
    {
      useImages: `${Images.PROFILE_IMG}`,
      userName: "Nayyar Mehdi",
      serviceProvider: "Trainer",
      duration: "2 Months",
      fee: "SAR 1000",
      startDate: "12/10/2023",
      endDate: "11/12/2023",
    },
    {
      useImages: `${Images.PROFILE_IMG}`,
      userName: "Nayyar Mehdi",
      serviceProvider: "Trainer",
      duration: "2 Months",
      fee: "SAR 1000",
      startDate: "12/10/2023",
      endDate: "11/12/2023",
    },
    {
      useImages: `${Images.PROFILE_IMG}`,
      userName: "Nayyar Mehdi",
      serviceProvider: "Trainer",
      duration: "2 Months",
      fee: "SAR 1000",
      startDate: "12/10/2023",
      endDate: "11/12/2023",
    },
    {
      useImages: `${Images.PROFILE_IMG}`,
      userName: "Nayyar Mehdi",
      serviceProvider: "Trainer",
      duration: "2 Months",
      fee: "SAR 1000",
      startDate: "12/10/2023",
      endDate: "11/12/2023",
    },
  ];

  return (
    <Container fluid className="h-100 p-3">
      <Row className="h-100">
        <Col md={12}>
          <Card className="BorderRadius h-100">
            <CardBody className="px-4">
              <Row>
                <Col md={12}>
                <PageHeading headingText="My Current Trainer" categoryText="" />
                </Col>
              </Row>
              {ServiceProviders.map((item) => {
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

export default index;
