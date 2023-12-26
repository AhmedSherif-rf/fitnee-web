import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import SubscriptionCard from "../../../Shared/SubscriptionCard";
import Images from "../../../HelperMethods/Constants/ImgConstants";

const Subscription = () => {
  const { t } = useTranslation("");

  const subscriptionData = [
    {
      text:  t("traineeSubscription.oneMonthDurationText"),
      price: "SAR 500",
      image: Images.ONE_MONTH_IMG,
    },
    {
      text:t("traineeSubscription.twoMonthsDurationText"),
      price: "SAR 600",
      image: Images.TWO_MONTH_IMG,
    },
    {
      text: t("traineeSubscription.threeMontshDurationText"),
      price: "SAR 700",
      image: Images.THREE_MONTH_IMG,
    },
  ];
  return (
    <Container fluid className="py-md-5 py-2">
      <Row className="justify-content-center align-items-center mt-3">
        <Col md={8}>
          <Row className="mt-md-5 mt-1">
            {subscriptionData?.map((item, index) => {
              return (
                <Col
                  md={4}
                  className={`mb-md-0 mb-5 ${
                    index === 1 && window.innerWidth >= 768
                      ? "middle-subscription-card"
                      : ""
                  }`}
                >
                  <SubscriptionCard
                    headerText={item.text}
                    price={item.price}
                    ImgSrc={item.image}
                    buttonText={t("traineeSubscription.subscribeText")}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Subscription;
