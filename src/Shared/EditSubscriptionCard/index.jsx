import Toaster from "../Toaster";
import InputField from "../InputField";
import styles from "./style.module.scss";
import FillBtn from "../Buttons/FillBtn";
import { useSelector } from "react-redux";
import { Card, CardBody, CardFooter } from "reactstrap";
import React, { memo, useCallback, useState } from "react";
import { CURRENCY, TRAINER_TYPE } from "../../utils/constants";
import Images from "../../HelperMethods/Constants/ImgConstants";

const EditSubscriptionCard = (props) => {
  const { user } = useSelector((state) => state.user);
  const { duration, price, isDummy, handleOnEdit } = props;

  const [packagePrice, setPackagePrice] = useState(price);

  const handleEditClick = () => {
    if (packagePrice === "") {
      Toaster.error("Add price to create subscription plan");
    } else {
      handleOnEdit(
        {
          price: Number(packagePrice),
          duration: duration,
          membership_type: user === TRAINER_TYPE ? "Trainer" : "Nutrition",
        },
        duration
      );
    }
  };

  const handlePriceChange = useCallback((e) => {
    setPackagePrice(e.target.value);
  }, []);

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
        {!isDummy && (
          <h1 className="mb-3">
            {CURRENCY} {price}
          </h1>
        )}
        {isDummy && (
          <div className="d-flex justify-content-center">
            <InputField
              placeholder="Add Price"
              className="text-center fs-4 border-0 w-50"
              type="number"
              value={packagePrice}
              onChangeHandle={handlePriceChange}
            />
          </div>
        )}
        <img className="fluid w-50 my-2" src={Images.ONE_MONTH_IMG} alt="" />
      </CardBody>
      <CardFooter className="bg-transparent border-0 py-3">
        {isDummy && (
          <FillBtn
            className={"px-5"}
            text={"Add"}
            handleOnClick={handleEditClick}
          />
        )}
      </CardFooter>
    </Card>
  );
};

export default memo(EditSubscriptionCard);
