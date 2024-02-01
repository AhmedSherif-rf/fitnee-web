import moment from "moment";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import FillBtn from "../Buttons/FillBtn";
import React, { useState, memo } from "react";
import { useTranslation } from "react-i18next";
import OutlineBtn from "../Buttons/OutlineBtn";
import { useDispatch, useSelector } from "react-redux";
import InformationModal from "../Modal/InformationModal";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { cancelSubscription } from "../../Redux/features/User/userApi";
import { CURRENCY, CANCEL_SUBSCRIPTION_URL } from "../../utils/constants";

const Index = (props) => {
  const dispatch = useDispatch();
  const { data, index, handleRefreshData } = props;
  const { loading } = useSelector((state) => state.user);

  const { t } = useTranslation("");
  const [
    showCancelSubscriptionModal,
    setShowCancelSubscriptionModal,
  ] = useState(false);
  const [subscriptionId, setSubscriptionId] = useState("");

  const checkIfRefundDatePassed = (startDateString) => {
    const startDate = moment(startDateString).startOf("day");
    const currentDate = moment().startOf("day");
    const daysDifference = currentDate.diff(startDate, "days");
    const isThreeDaysOrMorePassed = daysDifference >= 3;

    if (isThreeDaysOrMorePassed) {
      return true;
    } else {
      return false;
    }
  };

  const handleCloseSubscriptionModal = () => {
    setShowCancelSubscriptionModal(false);
  };

  const handleCancelSubscriptionClick = () => {
    const data = {
      apiEndpoint: CANCEL_SUBSCRIPTION_URL,
      requestData: JSON.stringify({ Transition_id: subscriptionId }),
    };

    dispatch(cancelSubscription(data)).then((res) => {
      if (res.type === "cancelSubscription/fulfilled") {
        handleRefreshData();
        setSubscriptionId("");
        setShowCancelSubscriptionModal(false);
      }
    });
  };

  const handleNoClick = () => {
    setShowCancelSubscriptionModal(false);
  };

  const handleCancelButtonClick = (subscriptionId) => {
    setSubscriptionId(subscriptionId);
    setShowCancelSubscriptionModal(true);
  };

  return (
    <>
      <Row
        className="align-items-center justify-content-center text-black-custom border-bottom text-black-custom py-2 mb-2"
        key={index}
      >
        <Col md={3} className="mb-md-0 mb-2">
          <div className="d-flex align-items-center">
            <Link
              className="text-decoration-none"
              to={`/trainee/serviceProviderProfile/${data?.serviceprovider?.uuid}`}
            >
              <div
                className="me-2 bgProperties rounded-circle"
                style={{
                  width: "60px",
                  height: "60px",
                  cursor: "pointer",
                  backgroundImage:
                    data?.serviceprovider?.profile_pic === null
                      ? `url(${Images.USER_DUMMY_IMG})`
                      : `url(${data?.serviceprovider?.profile_pic})`,
                  border: "1px solid transparent",
                }}
              ></div>
            </Link>
            <div>
              <h6 className="mb-0 fw-bold px-2">
                {data?.serviceprovider?.full_name}
              </h6>
              <span className="text-black-custom px-2">
                {data?.serviceprovider?.role}
              </span>
              <div className="mb-md-0 d-md-none d-block py-2 px-2">
                <h6 className="mb-0 w-100 small fw-bold ">
                  {CURRENCY} {data?.transition?.current_price}
                </h6>
              </div>
            </div>
          </div>
        </Col>
        <Col md={2} className="d-block">
          {!data?.is_expired && !data?.is_refund && (
            <div className="mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3">
              <span>{`${t(
                "traineeServiceProviderList.startDateText"
              )} : ${moment(data?.created_at).format("DD/MM/YYYY")}`}</span>
              <br />
              <span>{`${t("traineeServiceProviderList.endDateText")} : ${moment(
                data?.expire_date
              ).format("DD/MM/YYYY")}`}</span>
            </div>
          )}
          {data?.is_expired && !data?.is_refund && (
            <div className="mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3">
              {`${t("traineeServiceProviderList.expiredOnText")} : ${moment(
                data?.expire_date
              ).format("DD/MM/YYYY")}`}
            </div>
          )}
          {data?.is_refund && (
            <div className="mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3">
              {t("traineeServiceProviderList.refundedText")}
            </div>
          )}
        </Col>
        <Col md={2} className="d-md-block d-none">
          <div className="mb-md-0 text-center py-2 rounded-3">
            <h6 className="mb-0 w-100 fs-5 fw-bold ">
              {CURRENCY} {data?.transition?.current_price}
            </h6>
          </div>
        </Col>
        <Col md={4} className="text-center">
          {data?.is_refund && (
            <OutlineBtn
              text={t("traineeServiceProviderList.cancelledText")}
              className="py-2 px-5 w-md-50 w-100"
              disabled={true}
            />
          )}
          {!data?.is_refund && !data?.is_expired && (
            <FillBtn
              text={
                checkIfRefundDatePassed(data?.created_at)
                  ? t("traineeServiceProviderList.cannotCancelText")
                  : t("traineeServiceProviderList.cancelText")
              }
              className="py-2 px-5 w-100"
              handleOnClick={() =>
                handleCancelButtonClick(data?.transition?.id)
              }
              disabled={
                checkIfRefundDatePassed(data?.created_at) ? true : false
              }
            />
          )}
          {data?.is_expired && (
            <OutlineBtn
              text={t("traineeServiceProviderList.expiredText")}
              className="py-2 px-5 w-100"
              disabled={true}
            />
          )}
        </Col>
      </Row>

      <InformationModal
        size={"md"}
        TOneClassName={"mb-4 fs-5 text-center"}
        className={"p-4"}
        isOpen={showCancelSubscriptionModal}
        onClose={handleCloseSubscriptionModal}
        ModalTextOne={t("signup.cancellingSubscriptionModalText")}
        ButtonOne={
          <FillBtn
            text={t("signup.yesText")}
            className="py-2 px-5"
            handleOnClick={handleCancelSubscriptionClick}
            disabled={loading === "pending" ? true : false}
          />
        }
        ButtonTwo={
          <OutlineBtn
            text={t("signup.noText")}
            className="py-2 px-5"
            handleOnClick={handleNoClick}
            disabled={loading === "pending" ? true : false}
          />
        }
      />
    </>
  );
};

export default memo(Index);
