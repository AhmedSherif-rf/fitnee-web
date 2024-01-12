import React from "react";

import { useSelector } from "react-redux";
import DocumentCard from "../DocumentCard";
import { useTranslation } from "react-i18next";
import { Row, Col, Container, Badge } from "reactstrap";
import Images from "../../HelperMethods/Constants/ImgConstants";

const ProfileViewWrapper = () => {
  const { t } = useTranslation("");
  const { user } = useSelector((state) => state.user);

  return (
    <Container fluid>
      <Row className=" justify-content-center">
        <Col md="12">
          <Row>
            <div className="d-flex justify-content-center align-items-center my-2">
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
            </div>

            <Row className=" my-3">
              <Col md={6} sm={12}>
                <h5 className="fw-bold my-2">{t("signup.fullNameText")}</h5>
                <p className="small">{user?.full_name}</p>

                <h5 className="fw-bold my-2">{t("signup.genderText")}</h5>
                <p className="small">{user?.gender}</p>
                <h5 className="fw-bold my-2">{t("trainer.bioText")}</h5>
                <p className="small">{user?.bio}</p>
              </Col>
              <Col md={6} sm={12}>
                <h5 className="fw-bold my-2">{t("contactUs.emailText")}</h5>
                <p className="small">{user?.email}</p>
                <h5 className="fw-bold my-2">{t("signup.experienceText")}</h5>
                <p className="small">{user?.experience}</p>
                <h5 className="fw-bold my-2">{t("signup.roleText")}</h5>
                <p className="small">{user?.role}</p>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h5 className="fw-bold my-2">
                  {t("guest.qualificationExperienceText")}
                </h5>
              </Col>
              {user?.ServiceProvider_Certification &&
                user?.ServiceProvider_Certification?.map(
                  (certificate, index) => (
                    <DocumentCard
                      key={index}
                      className="BorderYellow"
                      documentTitle={certificate?.title}
                      documentImg={certificate?.certificate_image}
                    />
                  )
                )}
            </Row>
            <Row>
              <Col md={12}>
                <h5 className="fw-bold my-2">{t("guest.areaSpecialtyText")}</h5>
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
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileViewWrapper;
