import React from "react";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import OutlineBtn from "../../../Shared/Buttons/OutlineBtn";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import ServiceProvider from "../../../Shared/ServiceProviderListRow";

const SubscriptionDetail = () => {
  const ServiceProviders = [
    {
      useImages: `${Images.PROFILE_IMG}`,
      userName: "Nayyar Mehdi",
      duration: "2 Months",
      fee: "SAR 1000",
      CancelButton: <FillBtn className="w-50 py-2" text="Cancel Plan" />,
    },
    {
      useImages: `${Images.PROFILE_IMG}`,
      userName: "Nayyar Mehdi",
      duration: "2 Months",
      fee: "SAR 1000",
      CancelButton: (
        <OutlineBtn className="w-50 disabled py-2 " text="Cancelled" />
      ),
    },
    {
      useImages: `${Images.PROFILE_IMG}`,
      userName: "Nayyar Mehdi",
      duration: "2 Months",
      fee: "SAR 1000",
      CancelButton: <FillBtn className="w-50 py-2" text="Cancel Plan" />,
    },
    {
      useImages: `${Images.PROFILE_IMG}`,
      userName: "Nayyar Mehdi",
      duration: "2 Months",
      fee: "SAR 1000",
      CancelButton: (
        <OutlineBtn className="w-50 disabled py-2" text="Cancelled" />
      ),
    },
    {
      useImages: `${Images.PROFILE_IMG}`,
      userName: "Nayyar Mehdi",
      duration: "Expiry Date:12/11/2023",
      fee: "SAR 1000",
      CancelButton: <FillBtn className="w-50 py-2" text="Cancel Plan" />,
    },
  ];

  return (
    <Container fluid className="h-100 p-3">
      <Row className="h-100">
        <Col md={12}>
          <Card className="BorderRadius border-0 h-100">
            <CardBody className="px-4">
              <Row>
                <Col md={12}>
                  <h5 className="fw-bold text-black-custom fs-3 pt-3 pb-5">Subscription Details</h5>
                </Col>
              </Row>
              {ServiceProviders.map((item) => {
                return (
                  <ServiceProvider
                    useImages={item.useImages}
                    userName={item.userName}
                    duration={item.duration}
                    fee={item.fee}
                    CancelButton={item.CancelButton}
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

export default SubscriptionDetail;
