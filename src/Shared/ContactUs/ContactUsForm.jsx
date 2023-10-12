import Checkbox from "../Checkbox";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import FillBtn from "../Buttons/FillBtn";
import OutlineBtn from "../Buttons/OutlineBtn";
import InputField from "../InputField/InputField";
import { Col, Container, Form, Row, Input } from "reactstrap";
import Images from "../../HelperMethods/Constants/ImgConstants";

const ContactUsForm = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={8} className="">
          <h1 className="text-center mb-5 f-w-bold ">Contact Us</h1>
          <Form>
            <Row md={12}>
              <Col md={6}>
                <InputField
                  className="mb-3 py-3 px-5"
                  type="text"
                  placeholder="First name"
                  icon={<img src={Images.PERSON_ICON} alt="" />}
                />
              </Col>
              <Col md={6}>
                <InputField
                  className="mb-3 py-3 px-5"
                  type="text"
                  placeholder="Last name"
                  icon={<img src={Images.PERSON_ICON} alt="" />}
                />
              </Col>
              <Col md={12}>
                <InputField
                  className="mb-3 py-3 px-5"
                  type="email"
                  placeholder="Email"
                  icon={<img src={Images.EMAIL_ICON} alt="" />}
                />
              </Col>
              <Col md={12}>
                <InputField
                  className="mb-3 py-3 px-5"
                  type="text"
                  placeholder="Phone"
                  icon={<img src={Images.Phone_img} alt="" />}
                />
              </Col>
              <Col md={12}>
                <Input
                  className="mb-3 py-3 px-5 BorderRadius"
                  type="textarea"
                  name="text"
                  id="exampleText"
                />
              </Col>
            </Row>
            {/* <Row className="justify-content-center my-4 gap-3">
              <Col md={3}>
              <FillBtn className="w-100" onClick={() => setModalShow(true)} text="Send"/>
              </Col>
              <Col md={3}>
              <OutlineBtn className="w-100"  onClick={() => setModalShow(false)} text="Cancel"/>
              
              </Col>
            </Row> */}
            {/* <InfoModal
              size={"md"}
              TOneClassName={"mb-3 text-center"}
              TTwoClassName={"mb-3 text-center"}
              isOpen={modalShow}
              onClose={() => setModalShow(false)}
              ModalText1="Your email has been sent. Our representative will reach out to you within 72 hours."
              ModalText2="In order to serve you better, we have generated a ticket ID for your request, please check your email."
              ButtonThree={<FillBtn className="w-50" text={"Ok"} onClick={() => setModalShow(false)}/>}
            /> */}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(ContactUsForm);
