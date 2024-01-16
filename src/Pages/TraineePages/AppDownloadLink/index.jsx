import "./DownloadLinkStyle.scss";
import { useTranslation } from "react-i18next";
import { RxCrossCircled } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../../../HelperMethods/LoadingScreen";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import { CHECK_PAYMENT_STATUS_URL } from "../../../utils/constants";
import { checkPaymentStatus } from "../../../Redux/features/Subscription/subscriptionApi";

const AppDownloadLink = () => {
  const { t } = useTranslation("");
  const dispatch = useDispatch();
  const { entity, checkoutId, loading } = useSelector(
    (state) => state.subscription
  );
  const [isPaymentSucceed, setIsPaymentSucceed] = useState("");

  useEffect(() => {
    const data = {
      apiEndpoint: CHECK_PAYMENT_STATUS_URL,
      requestData: JSON.stringify({
        id: checkoutId,
        entity: entity,
      }),
    };
    dispatch(checkPaymentStatus(data)).then((res) => {
      console.log(res);
      if (res.type === "checkPaymentStatus/fulfilled") {
        setIsPaymentSucceed(true);
      } else if (res.type === "checkPaymentStatus/rejected") {
        setIsPaymentSucceed(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid>
      {loading === "pending" && (
        <LoadingScreen text="Checking Payment Status" />
      )}
      <Row>
        <Col md="12">
          <Card className="BorderRadius contentCard px-3">
            {isPaymentSucceed && (
              <Row>
                <Col md="6" className="text-center">
                  <div className=" pt-3">
                    <h3 className="py-3 fw-bold">
                      {t("appDownloadLink.congratulationsText")}
                    </h3>
                    <p className="px-5">
                      You have subscribed with XXX . XXX, he/she will review
                      your profile and get back to you shortly, please download
                      FitNee app and enable the notification.
                    </p>
                    <p className="px-5 mb-0">
                      Be informed that you have the right to cancel your
                      subscription for any reason within 72 hours and your money
                      will be in your wallet in the app so you can re-subscribe
                      with other trainer or nutrition specialist.
                    </p>
                    <p className="px-5">
                      Manage your profile and contact your trainer/nutrition by
                      downloading the app
                    </p>
                  </div>
                  <div className="text-center">
                    <img className="w-75" src={Images.CREDIT_CARD_IMG} alt="" />
                  </div>
                </Col>
                <Col md="6">
                  <div className="d-flex justify-content-center mb-md-4 mb-0">
                    <div className="QRcodeDiv p-5 text-center">
                      <img
                        className="mb-3"
                        style={{ width: "85%" }}
                        src={Images.QR_CODE_IMG}
                        alt=""
                      />
                      <h6 className="text-black-custom fw-bold text-center">
                        {t("appDownloadLink.getAppText")}
                      </h6>
                    </div>
                  </div>
                  <Row className="justify-content-center">
                    <Col md={5} className="mb-3 text-md-block text-center">
                      <div className="w-100">
                        <img
                          src={Images.APP_STORE_IMG}
                          className="img-fluid "
                          alt=""
                        />
                      </div>
                    </Col>
                    <Col md={5} className="mb-3 text-md-block text-center">
                      <div className="w-100">
                        <img
                          src={Images.GOOGLE_PLAY_IMG}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            )}
            {isPaymentSucceed === false && (
              <Row className="h-100 justify-content-center align-items-center text-center mx-5">
                <div className="w-50">
                  <RxCrossCircled className="mb-2" color="red" size={70} />
                  <p className="fw-bold">
                    Oops! Payment unsuccessful. It seems like there was an issue
                    processing your payment. Please try again or check your
                    payment details.
                  </p>
                </div>
              </Row>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AppDownloadLink;
