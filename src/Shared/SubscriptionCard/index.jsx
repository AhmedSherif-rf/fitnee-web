import { CardHeader } from "reactstrap";
import styles from "./style.module.scss";
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
    <Card
      className={`text-center BorderRadius text-black-custom p-0 h-100 mb-5 mx-1 mt-2 ${styles.cardHeaderDesign}`}
    >
      <div className="text-center  d-flex justify-content-center  ">
        <div
          className={`${styles.headerCard} rounded-circle Shadow  d-flex justify-content-center align-items-center`}
          style={{ width: "200px", height: "200px" }}
        >
          <h4 className="">{price}</h4>
        </div>
      </div>

      <CardBody className="">
        <div className="mb-2">{headerText}</div>
        <img className="fluid w-50" src={ImgSrc} alt="" />
      </CardBody>
      <CardFooter className="bg-transparent border-0">
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
