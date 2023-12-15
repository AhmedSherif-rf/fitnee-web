import { Container, Row } from "reactstrap";
import PaymentHistoryWrapper from "../../../Shared/PaymentHistoryWrapper";

const PaymentHistory = () => {
  return (
    <Container fluid className="mt-3">
      <Row className="justify-content-center">
        <PaymentHistoryWrapper />
      </Row>
    </Container>
  );
};

export default PaymentHistory;
