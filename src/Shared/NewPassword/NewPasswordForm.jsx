import InputField from "../InputField";
import FillBtn from "../Buttons/FillBtn";
import { useNavigate } from "react-router-dom";
import OutlineBtn from "../Buttons/OutlineBtn";
import { useTranslation } from "react-i18next";
import React, { memo, useCallback } from "react";
import { Col, Container, Form, Row } from "reactstrap";
import Images from "../../HelperMethods/Constants/ImgConstants";

const NewPasswordForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("");

  const handleCancelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleSubmit = useCallback(() => {
    navigate("/trainee/dashboard");
  }, [navigate]);

  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col lg={7} md={12} sm={10}>
          <h1 className="text-center mb-5">
            {t("changePassword.changePasswordText")}
          </h1>
          <Form>
            <InputField
              placeholder={t("changePassword.currentPasswordText")}
              type="password"
              icon={<img src={Images.PASSWORD_ICON_IMG} alt="password-icon" />}
              className={"mb-2 py-3 px-5"}
            />
            <InputField
              placeholder={t("changePassword.newPasswordText")}
              type="password"
              icon={<img src={Images.PASSWORD_ICON_IMG} alt="password-icon" />}
              className={"mb-2 py-3 px-5"}
            />
            <InputField
              placeholder={t("changePassword.confirmPasswordText")}
              type="password"
              icon={<img src={Images.PASSWORD_ICON_IMG} alt="password-icon" />}
              className={"mb-2 py-3 px-5"}
            />

            <FillBtn
              className="w-100 py-3 mb-3 mt-5"
              text={t("changePassword.confirmText")}
              handleOnClick={handleSubmit}
            />
            <OutlineBtn
              className="w-100 py-3"
              text={t("changePassword.cancelText")}
              handleOnClick={handleCancelClick}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(NewPasswordForm);
