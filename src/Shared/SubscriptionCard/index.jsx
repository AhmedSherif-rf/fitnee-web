import styles from "./style.module.scss";
import FillBtn from "../Buttons/FillBtn";
import { useNavigate } from "react-router-dom";
import React, { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { Card, CardBody, CardFooter } from "reactstrap";

const SubscriptionCard = (props) => {
  const { isGuest } = useSelector((state) => state.user);
  const { headerText, price, ImgSrc, buttonText } = props;
  const navigate = useNavigate();

  const handleSubscribeClick = useCallback(() => {
    if (buttonText !== "Edit") {
      if (!isGuest) {
        navigate("/trainee/subscription/creditCardDetail");
      } else {
        navigate("/registerAs");
      }
    }
  }, [isGuest, navigate, buttonText]);

  return (
    <Card
      className={`text-center BorderRadius text-black-custom p-0 h-100 mb-5 ${styles.cardHeaderDesign}`}
    >
      <div className="text-center d-flex justify-content-center">
        <div className={`${styles.headerCard} BorderRadius shadow-sm`}>
          {headerText}
        </div>
      </div>

      <CardBody className="mt-5">
        <h1 className="mb-3">{price}</h1>
        <img className="fluid w-50 my-2" src={ImgSrc} alt="" />
      </CardBody>
      <CardFooter className="bg-transparent border-0 py-3">
        <FillBtn
          className={"px-5"}
          text={buttonText}
          handleOnClick={handleSubscribeClick}
        />
      </CardFooter>
    </Card>
  );
};

export default memo(SubscriptionCard);
