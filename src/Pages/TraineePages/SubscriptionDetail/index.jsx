import React from "react";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import OutlineBtn from "../../../Shared/Buttons/OutlineBtn";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import ServiceProvider from "../../../Shared/ServiceProviderListRow";
import PageHeading from "../../../Shared/Headings/PageHeading";

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
                  <PageHeading
                    headingText="Subscription Details"
                    categoryText=""
                  />
                </Col>
              </Row>
              <Row className="align-items-center justify-content-center d-md-flex d-none text-black-custom border-bottom py-2 mb-2">
                <Col md={2} className="mb-md-0 mb-2"></Col>
                <Col md={2} className="mb-md-0 mb-2 text-end">
                  <h6 className="mb-0 w-100 fs-5 fw-bold ">Duration</h6>
                </Col>

                <Col md={2} className="d-md-block d-none pe-lg-5 pe-md-4">
                  <div className="mb-md-0 py-2">
                    <h6 className="mb-0 w-100 fs-5 fw-bold text-end">Fee</h6>
                  </div>
                </Col>
                <Col md={1}></Col>
                <Col md={3}>
                  <div className=" text-end pe-lg-4 pe-md-2">
                    <h6 className="mb-0 w-100 fs-5 fw-bold  ">Action</h6>
                  </div>
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
