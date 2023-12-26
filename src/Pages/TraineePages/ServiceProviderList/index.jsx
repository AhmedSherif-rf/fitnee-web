import React from "react";
import { useTranslation } from "react-i18next";
import PageHeading from "../../../Shared/Headings/PageHeading";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import ServiceProvider from "../../../Shared/ServiceProviderListRow";

const Index = () => {
  const { t } = useTranslation("");
  const ServiceProviders = [
    {
      useImages: `${Images.PROFILE4_IMG}`,
      userName: "Nayyar Mehdi",
      serviceProvider: t("traineeServiceProviderList.trainerText"),
      duration: t("traineeServiceProviderList.twoMonthDurationText"),
      fee: "SAR 1000",
      startDate: "12/10/2023",
      endDate: "11/12/2023",
    },
    {
      useImages: `${Images.PROFILE4_IMG}`,
      userName: "Nayyar Mehdi",
      serviceProvider: t("traineeServiceProviderList.trainerText"),
      duration: t("traineeServiceProviderList.twoMonthDurationText"),
      fee: "SAR 1000",
      startDate: "12/10/2023",
      endDate: "11/12/2023",
    },
    {
      useImages: `${Images.PROFILE4_IMG}`,
      userName: "Nayyar Mehdi",
      serviceProvider: t("traineeServiceProviderList.trainerText"),
      duration: t("traineeServiceProviderList.twoMonthDurationText"),
      fee: "SAR 1000",
      startDate: "12/10/2023",
      endDate: "11/12/2023",
    },
    {
      useImages: `${Images.PROFILE4_IMG}`,
      userName: "Nayyar Mehdi",
      serviceProvider: t("traineeServiceProviderList.trainerText"),
      duration: t("traineeServiceProviderList.twoMonthDurationText"),
      fee: "SAR 1000",
      startDate: "12/10/2023",
      endDate: "11/12/2023",
    },
    {
      useImages: `${Images.PROFILE4_IMG}`,
      userName: "Nayyar Mehdi",
      serviceProvider: t("traineeServiceProviderList.trainerText"),
      duration: t("traineeServiceProviderList.twoMonthDurationText"),
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
                          <span className="mb-0 mx-1"> / </span>
                          <h6 className="mb-0 fw-bold">
                            {t("traineeServiceProviderList.endDateText")}
                          </h6>
                        </div>
                      </div>
                    </Col>
                  </Row>
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

export default Index;
