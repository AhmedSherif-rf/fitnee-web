import styles from "./style.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState, useCallback } from "react";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import OutlineBtn from "../../../Shared/Buttons/OutlineBtn";
import { getGuestDataLimit } from "../../../utils/functions";
import TrainerListCard from "../../../Shared/TrainerListCard";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import SubscriptionInformationModal from "../../../Shared/Modal/SubscriptionInformationModal";

const TrainerData = [
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "20",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "20",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "20",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "20",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "20",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "20",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "20",
  },
];

const ServiceProviderList = (props) => {
  const [
    showSubscriptionInformatoinModal,
    setShowSubscriptionInformatoinModal,
  ] = useState(false);
  const { isGuest } = useSelector((state) => state?.user);

  const navigate = useNavigate();

  const handleCardOnClick = useCallback(
    (isDisable) => {
      if (isDisable) {
        setShowSubscriptionInformatoinModal(true);
      } else {
        navigate("/guest/serviceProviderProfile");
      }
    },
    [navigate]
  );

  const handleSeeMoreClick = useCallback(() => {
    setShowSubscriptionInformatoinModal(true);
  }, []);

  const handleNotNowClick = useCallback(() => {
    setShowSubscriptionInformatoinModal(false);
  }, []);

  const handleRegisterClick = useCallback(() => {
    navigate("/registerAs");
  }, [navigate]);

  const handleSubscriptionInformationModalClose = useCallback(() => {
    setShowSubscriptionInformatoinModal(false);
  }, []);

  return (
    <Container fluid className={`${styles.trainerListWrapper}`}>
      <Row>
        <Col md={12}>
          <Card className="BorderRadius shadow my-3">
            <CardBody>
              <Row>
                <Col md={12}>
                  <h4 className="fw-bold fs-3 p-3">List of Trainers</h4>
                </Col>
              </Row>
              <Row>
                {TrainerData.map((item, index) => {
                  const isDisable = isGuest && index >= getGuestDataLimit();
                  return (
                    <Col lg={3} md={4} col={6} className="mb-3" key={index}>
                      <TrainerListCard
                        className={`${
                          isDisable ? styles.blurCard : styles.activeTrainerCard
                        }`}
                        infoLogo={item.infoLogo}
                        infoTitle={item.infoTitle}
                        infoRating={item.infoRating}
                        infoImg={item.infoImg}
                        infoDes={item.infoDes}
                        CardHeight={item.Height}
                        handleOnClick={() => handleCardOnClick(isDisable)}
                      />
                    </Col>
                  );
                })}
                <Col md={12}>
                  <div className="my-3 text-center">
                    <FillBtn
                      className="w-25 text-dark fw-bold py-2"
                      handleOnClick={handleSeeMoreClick}
                      text={"See More"}
                    />
                  </div>
                </Col>
                <SubscriptionInformationModal
                  size={"md"}
                  TOneClassName={"fw-bold mb-4 fs-5 text-center"}
                  className={"p-4"}
                  isOpen={showSubscriptionInformatoinModal}
                  onClose={handleSubscriptionInformationModalClose}
                  ModalText1="Subscribe to  see  more  trainers  and  nutritionists"
                  ButtonOne={
                    <FillBtn
                      text={"Register"}
                      className="py-2 p-3"
                      handleOnClick={handleRegisterClick}
                    />
                  }
                  ButtonTwo={
                    <OutlineBtn
                      text={"Not now"}
                      className="py-2 p-3"
                      handleOnClick={handleNotNowClick}
                    />
                  }
                />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceProviderList;
