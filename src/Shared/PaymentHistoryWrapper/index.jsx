import { memo } from "react";
import { CardBody, CardHeader } from "reactstrap";
import TransactionDetail from "../TransactionDetail";
import { Card, Col, Container, Row } from "reactstrap";
import Images from "../../HelperMethods/Constants/ImgConstants";

const PaymentHistoryWrapper = () => {
  const Transactions = [
    {
      ArrowIcon: Images.ARROW_UP_IMG,
      Dr_or_Cr: "-",
      Currency: "SAR",
      Amount: "500",
      AmountTitle: "Amount Released",
      TransactionTime: "11:40:30",
    },
    {
      ArrowIcon: Images.ARROW_UP_IMG,
      Dr_or_Cr: "-",
      Currency: "SAR",
      Amount: "500",
      AmountTitle: "Amount Released",
      TransactionTime: "11:40:30",
    },
    {
      ArrowIcon: Images.ARROW_UP_IMG,
      Dr_or_Cr: "-",
      Currency: "SAR",
      Amount: "500",
      AmountTitle: "Amount Released",
      TransactionTime: "11:40:30",
    },
    {
      ArrowIcon: Images.ARROW_UP_IMG,
      Dr_or_Cr: "-",
      Currency: "SAR",
      Amount: "500",
      AmountTitle: "Amount Released",
      TransactionTime: "11:40:30",
    },
    {
      ArrowIcon: Images.ARROW_UP_IMG,
      Dr_or_Cr: "-",
      Currency: "SAR",
      Amount: "500",
      AmountTitle: "Amount Released",
      TransactionTime: "11:40:30",
    },
  ];

  return (
    <Container fluid className="mt-3">
      <Row className="justify-content-center">
        <Col md={12}>
          <Card className="BorderRadius shadow vh-auto">
            <CardHeader className="bg-transparent border-0 p-3">
              <h4>Payment History</h4>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md={12}>
                  <Card className="BorderRadius shadow py-3 px-2">
                    <CardBody className="d-flex align-items-center justify-content-center">
                      <div className="w-100 text-center">
                        <h3 className="fw-bold">Available Balance</h3>
                      </div>
                      <div className="w-25 text-center">
                        <hr className="fw-bold textOrange border-2" />
                      </div>
                      <div className="w-100 text-center">
                        <h1 className="fw-bold">SAR 500</h1>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="my-2">
                <Col md={12}>
                  <h5>Today</h5>
                  {Transactions.map((item, index) => {
                    return (
                      <TransactionDetail
                        key={index}
                        ArrowIcon={item.ArrowIcon}
                        Dr_or_Cr={item.Dr_or_Cr}
                        Currency={item.Currency}
                        Amount={item.Amount}
                        AmountTitle={item.AmountTitle}
                        TransactionTime={item.TransactionTime}
                      />
                    );
                  })}
                </Col>
              </Row>
              <Row className="my-2">
                <Col md={12}>
                  <h5>Aug 23</h5>
                  {Transactions.map((item, index) => {
                    return (
                      <TransactionDetail
                        key={index}
                        ArrowIcon={item.ArrowIcon}
                        Dr_or_Cr={item.Dr_or_Cr}
                        Currency={item.Currency}
                        Amount={item.Amount}
                        AmountTitle={item.AmountTitle}
                        TransactionTime={item.TransactionTime}
                      />
                    );
                  })}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(PaymentHistoryWrapper);
