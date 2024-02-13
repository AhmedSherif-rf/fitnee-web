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
  const { t, i18n } = useTranslation("");
  const dispatch = useDispatch();
  const { entity, checkoutId, loading, serviceProvider, subscriptionPlan } =
    useSelector((state) => state.subscription);
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
      if (res.type === "checkPaymentStatus/fulfilled") {
        setIsPaymentSucceed(true);
      } else if (res.type === "checkPaymentStatus/rejected") {
        setIsPaymentSucceed(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid className={i18n.dir()}>
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
                      {t("appLink.congratulationsText")}
                    </h3>
                    {subscriptionPlan?.type !== "Exercise" && (
                      <p className="px-5">
                        {t("appLink.youHaveSubscribedWithText")}{" "}
                        <span className="fw-bold">
                          {serviceProvider?.full_name}
                        </span>
                        {t("appLink.downloadAppText")}
                      </p>
                    )}
                    {subscriptionPlan?.type === "Exercise" && (
                      <p className="px-5">
                        {t("appLink.exerciseDownloadText")}
                      </p>
                    )}
                  </div>
                  <div className="text-center">
                    <img className="w-75" src={Images.CREDIT_CARD_IMG} alt="" />
                  </div>
                </Col>
                <Col md="6">
                  <div className="d-flex justify-content-center mb-md-4 mb-0">
                    <div className="QRcodeDiv py-4 text-center">
                      <img
                        className="mb-3"
                        style={{ width: "60%" }}
                        src={Images.QR_CODE_IMG_IMG}
                        alt=""
                      />
                      <h6 className="text-black-custom fw-bold text-center">
                        {t("appLink.getAppText")}
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
                  <p className="fw-bold">{t("messages.paymentFailedText")}</p>
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
