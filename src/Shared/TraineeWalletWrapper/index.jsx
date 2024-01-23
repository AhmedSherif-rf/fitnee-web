import WalletDetail from "../WalletDetail";
import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import PageHeading from "../Headings/PageHeading";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../../HelperMethods/LoadingScreen";
import { TRANSACTION_HISTORY_URL } from "../../utils/constants";
import { CardBody, CardHeader, Card, Col, Row } from "reactstrap";
import { getTransactionHistory } from "../../Redux/features/User/userApi";

const PaymentHistoryWrapper = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation("");
  const { loading } = useSelector((state) => state.user);
  const [transactionHistoryData, setTransactionHistoryData] = useState([]);

  useEffect(() => {
    fetchTransactionHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTransactionHistory = () => {
    const data = {
      apiEndpoint: TRANSACTION_HISTORY_URL,
    };

    dispatch(getTransactionHistory(data)).then((res) => {
      if (res.type === "getTransactionHistory/fulfilled") {
        setTransactionHistoryData(res?.payload?.data?.results);
      }
    });
  };

  return (
    <Row className={`text-black-custom ${i18n.dir()}`}>
      {loading === "pending" && <LoadingScreen />}
      <Col md={12}>
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
              {transactionHistoryData &&
                transactionHistoryData.map((item, index) => {
                  return (
                    <WalletDetail index={index} data={item?.transactions} />
                  );
                })}
              {transactionHistoryData && transactionHistoryData.length <= 0 && (
                <div className="d-flex justify-content-center py-4 text-black-custom">
                  {t("messages.noDataFoundText")}
                </div>
              )}
            </Col>
          </Row>
        </CardBody>
      </Col>
    </Row>
  );
};

export default memo(PaymentHistoryWrapper);
