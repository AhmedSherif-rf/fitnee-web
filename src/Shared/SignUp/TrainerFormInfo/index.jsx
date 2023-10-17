import "./FormInfoStyle.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MultiSelect from "../MultiSelect";
import "react-phone-input-2/lib/style.css";
import FillBtn from "../../Buttons/FillBtn";
import PhoneInput from "react-phone-input-2";
import { Col, Input, Label, Row } from "reactstrap";
import InputField from "../../InputField/InputField";
import AddTimeCompTrainer from "../AddTimeCompTrainer";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const TrainerInfo = () => {
  const [state, setState] = useState({ phone: "" });
  const [selectedJob, setSelectedJob] = useState(null);

  const handleGenderClick = (toggle) => {
    setSelectedJob(toggle);
  };

  return (
    <>
      <MultiSelect className="my-3" />
      <Row>
        <Col md={6} className="mb-3">
          <Label className="mb-1">Your SAUDIREPS number</Label>
          <InputField
            className="BorderYellow"
            placeholder={"Your SAUDIREPS number"}
            type="text"
          />
        </Col>
        <Col md={6} className="mb-3">
          <Label className="mb-1">
            Enter the phone number that has an STC Pay Account
          </Label>
          <PhoneInput
            inputProps={{
            name: "phone",
            required: true,
            className: "form-control-lg w-100 BorderYellow",
            }}
            country={"us"}
            value={state.phone}
            onChange={(phone) => setState({ phone })}
          />
        </Col>
        <Col md={12} className="mb-3">
          <AddTimeCompTrainer />
        </Col>
        <Col md={6}>
          <div className="d-flex justify-content-between ">
            <div className="">
              <Label className="mb-0 py-2 text-secondary">
                Are you currently working?
              </Label>
            </div>

            <div className="d-flex genderBtn align-items-center justify-content-between gap-2 w-50">
              <div
                className={`d-flex align-items-center justify-content-between form-control-lg border w-100 BorderRadius ${
                  selectedJob === "Yes" ? "selected" : ""
                }`}
                onClick={() => handleGenderClick("Yes")}
              >
                <h6 className="mb-0">Yes</h6>
                <AiOutlineCheck />
              </div>
              <div
                className={`d-flex align-items-center justify-content-between form-control-lg border w-100 BorderRadius ${
                  selectedJob === "No" ? "selected" : ""
                }`}
                onClick={() => handleGenderClick("No")}
              >
                <h6 className="mb-0">No</h6>
                <AiOutlineClose className="fw-bold" />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} className="mb-2">
          <div className="d-flex justify-content-between align-items-center my-2">
            <Label className="mb-0 text-secondary px-2">
              Year of experience
            </Label>
            <InputField
              className="w-25"
              type="text"
              placeholder="Enter Years"
            ></InputField>
          </div>
        </Col>
      </Row>
      <Row className="mb-1 trainerInfo">
        <Col md={12}>
          <div className="d-flex align-items-center">
            <Input
              id="checkbox2"
              type="checkbox"
              className="p-2 checkBox me-2"
            />
            <Label check>
              The money will be transferred to your STC Pay account, please read
              the
              <Link to="PrivacyPolicy" className="textYellow fw-bold">
                Terms and Conditions.
              </Link>
            </Label>
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <Link to="OTPVerification">
            <FillBtn text="Next" className="w-100" />
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default TrainerInfo;
