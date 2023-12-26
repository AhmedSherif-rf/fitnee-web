import { memo } from "react";
import { useTranslation } from "react-i18next";
import PageHeading from "../Headings/PageHeading";
import { CardBody, CardHeader } from "reactstrap";
import TransactionDetail from "../TransactionDetail";
import { Card, Col, Container, Row } from "reactstrap";
import Images from "../../HelperMethods/Constants/ImgConstants";

const PaymentHistoryWrapper = () => {
  const { t } = useTranslation("");
  const Transactions = [
    {
      ArrowIcon: Images.ARROW_UP_IMG,
      Dr_or_Cr: "-",
      Currency: "SAR",
      Amount: "500",
      AmountTitle: t("paymentHistory.amountReleasedText"),
      TransactionTime: "11:40 am",
    },
    {
      ArrowIcon: Images.ARROW_UP_IMG,
      Dr_or_Cr: "-",
      Currency: "SAR",
      Amount: "500",
      AmountTitle: t("paymentHistory.amountReleasedText"),
      TransactionTime: "11:40 am",
    },
    {
      ArrowIcon: Images.ARROW_UP_IMG,
      Dr_or_Cr: "-",
      Currency: "SAR",
      Amount: "500",
      AmountTitle: t("paymentHistory.amountReleasedText"),
      TransactionTime: "11:40 am",
    },
    {
      ArrowIcon: Images.ARROW_UP_IMG,
      Dr_or_Cr: "-",
      Currency: "SAR",
      Amount: "500",
      AmountTitle: t("paymentHistory.amountReleasedText"),
      TransactionTime: "11:40 am",
    },
    {
      ArrowIcon: Images.ARROW_UP_IMG,
      Dr_or_Cr: "-",
      Currency: "SAR",
      Amount: "500",
      AmountTitle: t("paymentHistory.amountReleasedText"),
      TransactionTime: "11:40 am",
    },
  ];

  return (
    <Container className="p-4 text-black-custom">
      <Row className="justify-content-center">
        <Col md={12}>
          <Card className="BorderRadius vh-auto mb-3 p-0">
            <CardHeader className="bg-transparent border-0 p-0">
              <PageHeading
                headingText={t("paymentHistory.paymentHistoryTitleText")}
                className="mb-0"
                categoryText=""
              />
            </CardHeader>
            <CardBody>
              <Row>
                <Col md={12}>
                  <Card className="BorderYellow text-black-custom BorderRadius px-2">
                    <CardBody className="">
                      <div className="w-100 text-center">
                        <h3 className="fw-bold">{t("paymentHistory.availableBalanceText")}</h3>
                      </div>
                      <div className="w-100 text-center">
                        <h1 className="fw-bold mb-0">SAR 500</h1>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="my-2 text-black-custom">
                <Col md={12}>
                  <h5 className="my-3">{t("paymentHistory.todayText")}</h5>
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
              <Row className="my-2 text-black-custom">
                <Col md={12}>
                  <h5>Aug / 23 / 23</h5>
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
