import styles from "./style.module.scss";
import FillBtn from "../Buttons/FillBtn";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CURRENCY } from "../../utils/constants";
import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardFooter } from "reactstrap";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { setSubscriptionPlan } from "../../Redux/features/Subscription/subscriptionSlice";

const SubscriptionCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("");
  const { duration, price, id } = props;
  const { user } = useSelector((state) => state.user);

  const handleSubscribeClick = useCallback(() => {
    if (user) {
      dispatch(setSubscriptionPlan({ id, duration, price }));
      navigate("/trainee/subscription/creditCardDetail");
    } else {
      navigate("/registerAs");
    }
  }, [dispatch, duration, id, navigate, price, user]);

  return (
    <Card
      className={`text-center BorderRadius text-black-custom p-0 h-100 mb-5 ${styles.cardHeaderDesign}`}
    >
      <div className="text-center d-flex justify-content-center">
        <div className={`${styles.headerCard} BorderRadius shadow-sm`}>
          {duration} {"Month"}
        </div>
      </div>

      <CardBody className="mt-5">
        <h1 className="mb-3">
          {CURRENCY} {price}
        </h1>
        <img className="fluid w-50 my-2" src={Images.ONE_MONTH_IMG} alt="" />
      </CardBody>
      <CardFooter className="bg-transparent border-0 py-3">
        <FillBtn
          className={"px-5"}
          text={t("guest.subscribeText")}
          handleOnClick={handleSubscribeClick}
        />
      </CardFooter>
    </Card>
  );
};

export default memo(SubscriptionCard);
