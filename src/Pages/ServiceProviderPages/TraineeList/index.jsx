import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import ServiceProviderRow from "../../../Shared/ServiceProviderListRow";

const index = () => {
  const TraineeList = [
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
          <Card className="BorderRadius border-0 h-100">
            <CardBody className="p-4">
              <Row>
                <Col md={12}>
                  <h5 className="mb-2 fw-bold">My Current Trainees</h5>
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

export default index;
