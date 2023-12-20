import React from "react";
import { Col, Container, Row } from "reactstrap";
import SubscriptionCard from "../../../Shared/SubscriptionCard";
import Images from "../../../HelperMethods/Constants/ImgConstants";

const subscriptionData = [
  {
    text: "1 Month",
    price: "SAR 500",
    image: Images.ONE_MONTH_IMG,
  },
  {
    text: "2 Month",
    price: "SAR 600",
    image: Images.TWO_MONTH_IMG,
  },
  {
    text: "3 Month",
    price: "SAR 700",
    image: Images.THREE_MONTH_IMG,
  },
];

const Subscription = () => {
  return (
    <Container fluid className="vh-100">
        <Row className="justify-content-center align-items-center mt-5">
          <Col md={8}>
            <Row className="m-md-2">
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
                      buttonText={"Edit"}
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
