import { CardHeader } from "reactstrap";
import FillBtn from "../Buttons/FillBtn";
import { useNavigate } from "react-router-dom";
import React, { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { Card, CardBody, CardFooter } from "reactstrap";

const SubscriptionCard = (props) => {
  const { isGuest } = useSelector((state) => state.user);
  const { headerText, price, ImgSrc } = props;
  const navigate = useNavigate();

  const handleSubscribeClick = useCallback(() => {
    if (!isGuest) {
      navigate("/trainee/subscriptions/creditCardDetail");
    } else {
      navigate("/registerAs");
    }
  }, [isGuest, navigate]);

  return (
    <Card className="text-center BorderRadius BorderYellow p-0 h-100">
      <CardHeader className="bg-transparent border-0 h4 py-3">
        {headerText}
      </CardHeader>
      <CardBody>
        <h1 className="mb-3">{price}</h1>
        <img className="fluid w-50 my-3" src={ImgSrc} alt="" />
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
