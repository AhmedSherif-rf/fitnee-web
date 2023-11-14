import "./CreditCardStyle.scss";
import { FormGroup } from "reactstrap";
import InputField from "../InputField";
import FillBtn from "../Buttons/FillBtn";
import ToggleSwitch from "../ToggleSwitch";
import { useNavigate } from "react-router-dom";
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

const CreditCardDetailWrapper = () => {
  const [date, setDate] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvcValue, setCvcValue] = useState("");
  // const [state, setState] = useState(true);
  const navigate = useNavigate();
  const [checked, setChecked] = useState(true);

  const handleToggle = () => {
    setChecked(!checked);
  };
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
          <div className="w-100 card h-100 border-0">
            <div className="card-body">
              <Label className="small mb-0 fw-bold">Card number</Label>
              <InputGroup>
                <InputGroupText
                  className="form-control-lg yellowBorder py-3"
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
                  className="form-control-lg yellowBorder fs-6 py-3"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  required
                />
              </InputGroup>

              <Label className="small mt-2 mb-0 fw-bold">Cardholder name</Label>
              <InputField
                type="text"
                className="small py-3"
                placeholder="XyzAbc"
              />

              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="w-100 me-3">
                  <Label className="small mt-2 mb-0 fw-bold">Expiry date</Label>
                  <InputField
                    type="date"
                    className="fs-6 py-3"
                    style={{ paddingTop: "11px", paddingBottom: "11px" }}
                    placeholder="MM/YYYY"
                    // value={""}
                    onChange={handleDateChange}
                  />
                </div>
                <div className="w-100">
                  <Label className="small mt-2 mb-0 fw-bold">
                    <span className="d-flex align-items-center gap-2">
                      <span>CVV/CVC</span>
                      <span className="mb-1">
                        <img src={Images.CVV_IMG} alt="" />
                      </span>
                    </span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="0000"
                    className="form-control-lg BorderYellow fs-6 py-3"
                    value={cvcValue}
                    onChange={handleCvcChange}
                    required
                  />
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="w-100 me-3">
                  <p className="mb-0 fw-bold">Promo code</p>
                </div>
                <div className="d-flex align-items-center justify-content-between w-100">
                  <div className="w-100 me-3">
                    <Input
                      type="text"
                      placeholder="0000"
                      className="form-control py-3 BorderYellow"
                      value={""}
                      onChange={handleCvcChange}
                      required
                    />
                  </div>
                  <div className="w-100">
                    <FillBtn text="Apply" className="w-100 py-3" />
                  </div>
                </div>
              </div>

              <div className="CreditCard d-flex align-items-center justify-content-between mb-2">
                <div className="">
                  <p className="mb-0 fw-bold">Use FitNee wallet</p>
                </div>
                <div className="w-50 d-flex justify-content-end ">
                  <ToggleSwitch isOn={checked} handleToggle={handleToggle} />
                </div>
              </div>
            </div>
            <div className="w-100 bg-transparent border-0 card-footer">
              <FillBtn
                text="Pay"
                className="w-100 py-3"
                handleOnClick={handlePayClick}
              />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <Card className="BorderRadius my-2">
            <CardHeader className="bg-transparent py-4 fw-bold">
              <h6 className="mb-0 fw-bold">Payment Summary</h6>
            </CardHeader>
            <CardBody>
              <div className="d-flex align-items-center justify-content-between">
                <div className="">
                  <h6>Discount %</h6>
                </div>
                <div style={{ width: "20%" }}>
                  <h6>SAR 0</h6>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="">
                  <h6>FitNee Wallet</h6>
                </div>
                <div style={{ width: "20%" }}>
                  <h6>SAR 500</h6>
                </div>
              </div>
            </CardBody>
            <CardFooter className="bg-transparent">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="mb-0 py-3 fw-bold">Total Pay</h6>
                </div>
                <div style={{ width: "20%" }}>
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
