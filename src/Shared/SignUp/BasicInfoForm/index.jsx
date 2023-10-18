import "./BasicInfoStyle.scss";
import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { Col, Form, Input, Row } from "reactstrap";
import InputField from "../../InputField/InputField";
import { InputGroup, InputGroupText } from "reactstrap";
import { FaBirthdayCake, FaVenus, FaMars } from "react-icons/fa";
import Images from "../../../HelperMethods/Constants/ImgConstants";

function BasicInfo() {
  const [state, setState] = useState({ phone: "" });
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };
  return (
    <div className="mb-3">
      <Form>
        <Row className="justify-content-center">
          <Col md={2} className="my-4">
            <div className="d-flex justify-content-center align-items-center">
              <div
                className="rounded-circle bgProperties position-relative"
                style={{
                  backgroundImage: `url(${Images.DEFAULT_USER_IMG})`,
                  height: "160px",
                  width: "160px",
                }}
              >
                <span className="CameraImg d-flex justify-content-center align-items-center bgProperties">
                  <img src={Images.CAMERA_IMG} className="img-fluid" alt="" />
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h5>Your information</h5>
          </Col>
          <Col lg={6} md={6} className="mb-2">
            <div className="text-end" style={{ marginBottom: "-15px" }}>
              *
            </div>
            <InputField
              required
              type="text"
              placeholder="Full Name"
            ></InputField>
          </Col>
          <Col lg={6} md={6} className="mb-2">
            <div className="text-end" style={{ marginBottom: "-15px" }}>
              *
            </div>
            <InputField
              required
              type="email"
              placeholder="example@gmail.com"
            ></InputField>
          </Col>
          <Col lg={6} md={6} className="mb-2">
            <div className="text-end" style={{ marginBottom: "-15px" }}>
              *
            </div>
            <InputField
              required
              type="password"
              autocomplete="new-password"
              placeholder="Password"
            ></InputField>
          </Col>
          <Col lg={6} md={6} className="mb-2">
            <div className="text-end" style={{ marginBottom: "-15px" }}>
              *
            </div>
            <InputField
              className="form-control-lg BorderRadius"
              type="password"
              autocomplete="confirm-password"
              placeholder="Confirm Password"
            ></InputField>
          </Col>

          <Col lg={6} md={6} className="mb-2">
            <Row className="p-0">
              <Col md={12} className="mb-2">
                <div className="text-end" style={{ marginBottom: "-15px" }}>
                  *
                </div>
                <div className="d-flex genderBtn align-items-center justify-content-between gap-2">
                  <div
                    className={`d-flex align-items-center justify-content-between form-control-lg border w-100 BorderRadius ${
                      selectedGender === "male" ? "selected" : ""
                    }`}
                    onClick={() => handleGenderClick("male")}
                  >
                    <h6 className="mb-0">Male</h6>
                    <FaMars />
                  </div>
                  <div
                    className={`d-flex align-items-center justify-content-between form-control-lg border w-100 BorderRadius ${
                      selectedGender === "female" ? "selected" : ""
                    }`}
                    onClick={() => handleGenderClick("female")}
                  >
                    <h6 className="mb-0">Female</h6>
                    <FaVenus />
                  </div>
                </div>
              </Col>
              <Col md={12} className="mb-2">
                <div className="text-end" style={{ marginBottom: "-15px" }}>
                  *
                </div>
                <PhoneInput
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                    className: "form-control-lg w-100 BorderRadius",
                  }}
                  country={"us"}
                  value={state.phone}
                  onChange={(phone) => setState({ phone })}
                />
              </Col>
              <Col md={12} className="mb-2">
                <div className="text-end" style={{ marginBottom: "-15px" }}>
                  *
                </div>
                <InputGroup>
                  <InputGroupText
                    className="BorderYellow"
                    style={{
                      borderTopLeftRadius: "15px",
                      borderBottomLeftRadius: "15px",
                    }}
                  >
                    <FaBirthdayCake />
                  </InputGroupText>
                  <Input
                    type="date"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      borderTopRightRadius: "15px",
                      borderBottomRightRadius: "15px",
                    }}
                    placeholder="Date of Birthday"
                    className="form-control-lg BorderYellow"
                    required
                  />
                </InputGroup>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={6} className="mb-2">
            <Row className="p-0">
              <Col md={12} className="mb-2">
                <div className="text-end" style={{ marginBottom: "-15px" }}>
                  *
                </div>
                <Input
                  className="form-control-lg BorderRadius"
                  type="textarea"
                  style={{ minHeight: "180px" }}
                  placeholder="Add your bio here.."
                ></Input>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default BasicInfo;
