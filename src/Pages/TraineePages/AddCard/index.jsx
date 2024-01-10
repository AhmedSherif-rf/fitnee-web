import "./styles.scss";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Card } from "reactstrap";

const AddCard = () => {
  const { checkoutId } = useParams();

  useEffect(() => {
    const scriptUrl = `https://eu-test.oppwa.com/v1/paymentWidgets.js?checkoutId=${checkoutId}`;

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [checkoutId]);

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card className="BorderRadius contentCard vh-75 d-flex justify-content-center align-items-center">
            <form
              action={process.env.REACT_APP_HYPERPAY_REDIRECT_URL}
              className="paymentWidgets"
              data-brands="AMEX MADA MASTER VISA"
            ></form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddCard;
