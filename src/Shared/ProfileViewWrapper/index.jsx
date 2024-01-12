import React, { memo } from "react";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DocumentCard from "../DocumentCard";
import { useTranslation } from "react-i18next";
import {
  NUTRITIONIST_ROLE,
  TRAINER_NUTRITIONIST_ROLE,
  TRAINER_ROLE,
} from "../../utils/constants";
import { Row, Col, Container, Badge } from "reactstrap";
import AvailableHourListing from "../AvailableHourListing";
import Images from "../../HelperMethods/Constants/ImgConstants";

const ProfileViewWrapper = () => {
  const { t } = useTranslation("");
  const { user } = useSelector((state) => state.user);

  return (
    <Container>
      <Row className=" justify-content-center">
        <Col md="12">
          <div className="d-flex justify-content-center align-items-center my-4 gap-4">
            <div className="rounded-circle bgProperties position-relative">
              {user?.profile_pic ? (
                <img
                  src={user?.profile_pic}
                  className="rounded-circle bgProperties position-relative"
                  alt="Profile Preview"
                  style={{
                    height: "160px",
                    width: "160px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div
                  className="rounded-circle bgProperties position-relative"
                  style={{
                    backgroundImage: `url(${Images.USER_DUMMY_IMG})`,
                    height: "160px",
                    width: "160px",
                  }}
                />
              )}
            </div>
            <div className="vertical-align-start">
              <Link
                to={
                  user?.role === TRAINER_ROLE
                    ? "/serviceProvider/editProfile/trainer"
                    : "/serviceProvider/editProfile/nutritionist"
                }
              >
                <CiEdit className="profileEditIcon" size={30} color="#000" />
              </Link>
            </div>
          </div>

          <Row className="my-3">
            <Col md={6} sm={12} className="lh-1">
              <h6 className="fw-bold my-2">{t("signup.fullNameText")}</h6>
              <p className="small">{user?.full_name}</p>
              <h6 className="fw-bold my-2">{t("signup.genderText")}</h6>
              <p className="small">{user?.gender}</p>
              <h6 className="fw-bold my-2">{t("trainer.bioText")}</h6>
              <p className="small">{user?.bio}</p>
            </Col>
            <Col md={6} sm={12} className="lh-1">
              <h6 className="fw-bold my-2">{t("contactUs.emailText")}</h6>
              <p className="small">{user?.email}</p>
              <h6 className="fw-bold my-2">{t("signup.experienceText")}</h6>
              <p className="small">{user?.experience} years</p>
              <h6 className="fw-bold my-2">{t("signup.roleText")}</h6>
              <p className="small">{user?.role}</p>
            </Col>
          </Row>
          <Row className="my-3">
            <Col md={6} sm={12} className="lh-1">
              {(user?.role === TRAINER_ROLE ||
                user?.role === TRAINER_NUTRITIONIST_ROLE) && (
                <>
                  <div className="d-flex align-items-center gap-2">
                    <h6 className="fw-bold my-2">{"SAUDIREPS number"}</h6>
                    <small className="textYellow">(Change)</small>
                  </div>

                  <p className="small">{user?.saudireps_number}</p>
                </>
              )}
              {(user?.role === NUTRITIONIST_ROLE ||
                user?.role === TRAINER_NUTRITIONIST_ROLE) && (
                <>
                  <div className="d-flex align-items-center gap-2">
                    <h6 className="fw-bold my-2">
                      {"Professional license number"}
                    </h6>
                    <small className="textYellow">(Change)</small>
                  </div>
                  <p className="small">{user?.saudireps_number}</p>
                </>
              )}
            </Col>
            <Col md={6} sm={12} className="lh-1">
              <div className="d-flex align-items-center gap-2">
                <h6 className="fw-bold my-2">{"STC Pay Account"}</h6>
                <small className="textYellow">(Change)</small>
              </div>

              <p className="small">{user?.stc_pay}</p>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="lh-1">
              <div className="d-flex align-items-center gap-2">
                <h6 className="fw-bold my-2">
                  {t("guest.qualificationExperienceText")}
                </h6>
                <small className="textYellow">(Change)</small>
              </div>
            </Col>
            {user?.ServiceProvider_Certification &&
              user?.ServiceProvider_Certification?.map((certificate, index) => (
                <DocumentCard
                  key={index}
                  className="BorderYellow"
                  documentTitle={certificate?.title}
                  documentImg={certificate?.certificate_image}
                />
              ))}
          </Row>
          <Row>
            <Col md={12} className="lh-1">
              <h6 className="fw-bold my-2">{t("guest.areaSpecialtyText")}</h6>
              {user?.specialities &&
                user?.specialities?.map((specialty, index) => (
                  <Badge
                    key={index}
                    color="custom"
                    className="me-2 mb-2 text-black-custom fw-normal custom-badge px-3 small text-center"
                  >
                    {specialty.name}
                  </Badge>
                ))}
            </Col>
          </Row>
          <Row>
            <h6 className="fw-bold">Available Hours</h6>
            <Col md={6}>
              <AvailableHourListing data={user?.profile_availability} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(ProfileViewWrapper);
