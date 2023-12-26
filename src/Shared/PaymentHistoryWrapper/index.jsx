import { memo } from "react";
import { useTranslation } from "react-i18next";
import PageHeading from "../Headings/PageHeading";
import TransactionDetail from "../TransactionDetail";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { CardBody, CardHeader, Card, Col, Row } from "reactstrap";

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
    <Row className="text-black-custom">
      <Col md={12}>
        <CardHeader className="bg-transparent border-0 p-0">
          <PageHeading
            headingText="Payment History"
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
                    <h3 className="fw-bold">
                      {t("paymentHistory.availableBalanceText")}
                    </h3>
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
      </Col>
    </Row>
  );
};

export default memo(PaymentHistoryWrapper);
