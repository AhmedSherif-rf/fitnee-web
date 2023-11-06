import "./CreditCardStyle.scss";
import { FormGroup } from "reactstrap";
import InputField from "../InputField";
import FillBtn from "../Buttons/FillBtn";
import React, { useState, memo, useCallback } from "react";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { Card, Col, Container, InputGroup, Row } from "reactstrap";
import {
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  InputGroupText,
  Label,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const CreditCardDetailWrapper = () => {
  const [date, setDate] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvcValue, setCvcValue] = useState("");
  const [state, setState] = useState(true);
  const navigate = useNavigate();

  const handlePayClick = useCallback(() => {
    navigate("/trainee/appDownloadLink");
  }, [navigate]);

  const handleCardNumberChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, "").slice(0, 16);
    setCardNumber(numericValue);
  };

  const handleCvcChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, "").slice(0, 4);
    setCvcValue(numericValue);
  };
  const handleDateChange = (e) => {
    const inputDate = e.target.value;
    let formattedDate = "";

    if (inputDate) {
      const parts = inputDate.split("-");
      if (parts.length === 3) {
        const year = parts[0];
        const month = parts[1];
        formattedDate = `${month}/${year}`;
      }
    }

    setDate(formattedDate);
  };

  return (
    <Container fluid className="h-100">
      <Row className="h-100 py-3 CardDetails">
        <Col md={12}>
          <h4 className="mb-2 fw-bold">Card Detail</h4>
        </Col>
        <Col md={6}>
          <div className="w-100">
            <Label className="small mb-0">Card number</Label>
            <InputGroup>
              <InputGroupText className="form-control-lg yellowBorder"
                style={{
                  borderTopLeftRadius: "14px",
                  borderBottomLeftRadius: "14px",
                }}
              >
                <img src={Images.CARD_ICON_IMG} alt="" />
                
              </InputGroupText>

              <Input
                type="text"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderTopRightRadius: "14px",
                  borderBottomRightRadius: "14px",
                }}
                placeholder="0000 0000 0000 0000"
                className="form-control-lg yellowBorder"
                value={cardNumber}
                onChange={handleCardNumberChange}
                required
              />
            </InputGroup>

            <Label className="small mt-2 mb-0">Cardholder Name</Label>
            <InputField type="text" className="" />

            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="w-100 me-3">
                <Label className="small mt-2 mb-0">Expiry date</Label>
                <InputField
                  type="date"
                  className="fs-6"
                  style={{ paddingTop: "11px", paddingBottom: "11px" }}
                  placeholder="MM/YYYY"
                  value={date}
                  onChange={handleDateChange}
                />
              </div>
              <div className="w-100">
                <Label className="small mt-2 mb-0">CVV/CVC </Label>
                <Input
                  type="text"
                  placeholder="0000"
                  className="form-control-lg BorderYellow"
                  value={cvcValue}
                  onChange={handleCvcChange}
                  required
                />
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="w-100 me-3">
                <p className="mb-0">Promo code</p>
              </div>
              <div className="d-flex align-items-center justify-content-between w-100">
                <div className="w-100 me-3">
                  <Input
                    type="text"
                    placeholder="0000"
                    className="form-control py-2 BorderYellow"
                    value={cvcValue}
                    onChange={handleCvcChange}
                    required
                  />
                </div>
                <div className="w-100">
                  <FillBtn text="Apply" className="w-100" />
                </div>
              </div>
            </div>

            <div className="CreditCard d-flex align-items-center justify-content-between mb-2">
              <div className="">
                <p className="mb-0">Use FitNee wallet</p>
              </div>
              <div className="w-50 d-flex justify-content-end ">
                <FormGroup switch>
                  <Input
                    className="form-control"
                    type="switch"
                    checked={state}
                    onClick={() => {
                      setState(!state);
                    }}
                  />
                </FormGroup>
              </div>
            </div>
            <div className="w-100">
              <FillBtn
                text="Pay"
                className="w-100"
                handleOnClick={handlePayClick}
              />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <Card className="BorderRadius my-2">
            <CardHeader className="bg-transparent">
              <h5 className="mb-0">Payment Summary</h5>
            </CardHeader>
            <CardBody>
              <div className="d-flex align-items-center justify-content-between">
                <div className="">
                  <h6>Discount %</h6>
                </div>
                <div className="">
                  <h6>SAR 0</h6>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="">
                  <h6>FitNee Wallet</h6>
                </div>
                <div className="">
                  <h6>SAR 500</h6>
                </div>
              </div>
            </CardBody>
            <CardFooter className="bg-transparent">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="mb-0">Total Pay</h6>
                </div>
                <div>
                  <h6 className="mb-0">SAR 500</h6>
                </div>
              </div>
            </CardFooter>
          </Card>
          <div className="text-center mt-4">
            <img className="w-75" src={Images.CREDIT_CARD_IMG} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(CreditCardDetailWrapper);
