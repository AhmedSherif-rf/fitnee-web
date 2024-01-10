import styles from "./style.module.scss";
import FillBtn from "../Buttons/FillBtn";
import { useNavigate } from "react-router-dom";
import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardFooter } from "reactstrap";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { setSubscriptionId } from "../../Redux/features/Subscription/subscriptionSlice";

const SubscriptionCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { duration, price, id } = props;
  const { user } = useSelector((state) => state.user);

  const handleSubscribeClick = useCallback(() => {
    if (user) {
      dispatch(setSubscriptionId(id));
      navigate("/trainee/subscription/creditCardDetail");
    } else {
      navigate("/registerAs");
    }
  }, [dispatch, id, navigate, user]);

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
        <h1 className="mb-3">{price}</h1>
        <img className="fluid w-50 my-2" src={Images.ONE_MONTH_IMG} alt="" />
      </CardBody>
      <CardFooter className="bg-transparent border-0 py-3">
        <FillBtn
          className={"px-5"}
          text={"Subscribe"}
          handleOnClick={handleSubscribeClick}
        />
      </CardFooter>
    </Card>
  );
};

export default memo(SubscriptionCard);
