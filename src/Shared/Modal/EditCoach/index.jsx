import { Formik } from "formik";
import React, { memo, useEffect, useState } from "react";
import InputField from "../../InputField";
import FillBtn from "../../Buttons/FillBtn";
import OutlineBtn from "../../Buttons/OutlineBtn";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_COACH } from "../../../utils/constants";
import { EDIT_COACH_SCHEMA } from "../../ValidationData/validation";
import { EditCoach } from "../../../Redux/features/Admin/UserListing/userListingApi";
import { Modal, ModalBody, ModalHeader, Label, Form } from "reactstrap";
import UploadPic from "../../UploadPic";

const EditCoachModal = (props) => {
  const { onClose, isOpen, className, size, coachData, handleRefetchHistory } =
    props;

  const [displayImages, setDisplayImages] = useState("");
  const { loading } = useSelector((state) => state.userListing);
  const dispatch = useDispatch();
  const [isChangePassword, setIsChangePassword] = useState(false);

  const { t, i18n } = useTranslation("");

  const toggleChangePassword = () => {
    setIsChangePassword(!isChangePassword);
  };

  const handleEditCoachSubmit = async (values) => {
    const requestData = new FormData();
    if (values.profile_pic && typeof values.profile_pic === "object") {
      requestData.append("profile_pic", values.profile_pic);
    }
    requestData.append("email", values.email);
    if (isChangePassword) {
      requestData.append("password", values.password);
      requestData.append("re_password", values.re_password);
    }
    requestData.append("description", values.description);
    requestData.append("role", "coach_fitnee");
    // requestData.append("is_active", "True");
    // requestData.append("is_approved", "True");

    const data = {
      apiEndpoint: EDIT_COACH + coachData.id + "/",
      requestData,
    };

    await dispatch(EditCoach(data)).then((res) => {
      if (res.type === "EditCoach/fulfilled") {
        handleRefetchHistory();
      }
    });
  };

  useEffect(() => {
    if (isOpen) {
      setIsChangePassword(false);
      setDisplayImages(coachData?.profile_pic);
    } else {
      setDisplayImages("");
    }
  }, [isOpen]);

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size={size}
      isOpen={isOpen}
      onClosed={onClose}
      toggle={onClose}
      className={`${className} ${i18n.dir()}`}
    >
      <ModalHeader className="border-0">
        <b>{t("coachListing.editCoach")}</b>
      </ModalHeader>
      <ModalBody className="px-4">
        <Formik
          initialValues={{ ...coachData }}
          validationSchema={EDIT_COACH_SCHEMA}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            await handleEditCoachSubmit(values);
            setDisplayImages("");
            onClose();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className="mb-2">
                <UploadPic
                  setFieldValue={setFieldValue}
                  displayImages={displayImages}
                  setDisplayImages={setDisplayImages}
                />
                <p className="errorField">
                  {t(errors.profile_pic) &&
                    touched.profile_pic &&
                    t(errors.profile_pic)}
                </p>
              </div>
              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("coachListing.emailLabel")}`}
                </Label>
                <InputField
                  type="email"
                  name="email"
                  placeholder={t("coachListing.emailPlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.email}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.email) && touched.email && t(errors.email)}
                </p>
              </div>

              <p
                style={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={toggleChangePassword}
              >
                {t("coachListing.changePassword")}
              </p>
              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("coachListing.passwordLabel")}`}
                </Label>
                <InputField
                  type="password"
                  name="password"
                  disabled={!isChangePassword}
                  placeholder={t("coachListing.passwordPlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.password}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.password) && touched.password && t(errors.password)}
                </p>
              </div>
              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("coachListing.confirmPasswordLabel")}`}
                </Label>
                <InputField
                  type="password"
                  name="re_password"
                  disabled={!isChangePassword}
                  placeholder={t("coachListing.confirmPasswordPlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.re_password}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.re_password) &&
                    touched.re_password &&
                    t(errors.re_password)}
                </p>
              </div>
              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("coachListing.descriptionLabel")}`}
                </Label>
                <InputField
                  type="text"
                  name="description"
                  placeholder={t("coachListing.descriptionPlaceholder")}
                  onChangeHandle={handleChange}
                  onBlurHandle={handleBlur}
                  value={values.description}
                  className={"form-control-lg BorderRadiusInput py-3 px-2"}
                />
                <p className="errorField">
                  {t(errors.description) &&
                    touched.description &&
                    t(errors.description)}
                </p>
              </div>
              <div className="w-100 d-flex align-items-center justify-content-center gap-3">
                <FillBtn
                  className="w-100 py-2"
                  text={t("coachListing.saveText")}
                  disabled={loading === "pending" ? true : false}
                  type={"submit"}
                />
                <OutlineBtn
                  className="w-100 py-2"
                  disabled={loading === "pending" ? true : false}
                  text={t("login.cancelText")}
                  handleOnClick={() => onClose()}
                />
              </div>
            </Form>
          )}
        </Formik>
      </ModalBody>
    </Modal>
  );
};

export default memo(EditCoachModal);
