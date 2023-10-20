import InputField from "../InputField";
import FillBtn from "../Buttons/FillBtn";
import { useNavigate } from "react-router-dom";
import OutlineBtn from "../Buttons/OutlineBtn";
import { Col, Container, Form, Row } from "reactstrap";
import InformationModal from "../Modal/InformationModal";
import React, { memo, useCallback, useState } from "react";
import Images from "../../HelperMethods/Constants/ImgConstants";

const ContactUsForm = () => {
  const navigate = useNavigate();

  const [showContactUsConfirmModal, setShowContactUsConfirmModal] = useState(
    false
  );

  const handleCancelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleSendClick = useCallback(() => {
    setShowContactUsConfirmModal(true);
  }, []);

  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col lg={7} md={12} sm={10}>
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
                  icon={<img src={Images.PHONE_ICON} alt="" />}
                />
              </Col>
              <Col md={12}>
                <InputField
                  className="mb-3 py-3 px-5"
                  type="textarea"
                  placeholder="Describe your issue"
                  name="text"
                />
              </Col>
            </Row>
            <FillBtn
              className="w-100 py-3 mb-2 mt-4"
              handleOnClick={handleSendClick}
              text="Send"
            />
            <OutlineBtn
              className="w-100 py-3"
              handleOnClick={handleCancelClick}
              text="Cancel"
            />
            <InformationModal
              size={"md"}
              TOneClassName={"mb-3 text-center"}
              TTwoClassName={"mb-3 text-center"}
              isOpen={showContactUsConfirmModal}
              onClose={useCallback(() => setShowContactUsConfirmModal(false))}
              ModalTextOne="Your email has been sent. Our representative will reach out to you within 72 hours."
              ModalTextTwo="In order to serve you better, we have generated a ticket ID for your request, please check your email."
              ButtonThree={
                <FillBtn
                  className="w-50"
                  text={"Ok"}
                  handleOnClick={useCallback(() =>
                    setShowContactUsConfirmModal(false)
                  )}
                />
              }
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(ContactUsForm);
