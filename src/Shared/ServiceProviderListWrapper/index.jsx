import styles from "./style.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FillBtn from "../../Shared/Buttons/FillBtn";
import {
  Card,
  CardBody,
  Col,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import InformationModal from "../Modal/InformationModal";
import OutlineBtn from "../../Shared/Buttons/OutlineBtn";
import { getGuestDataLimit } from "../../utils/functions";
import React, { useState, useCallback, memo } from "react";
import Images from "../../HelperMethods/Constants/ImgConstants";
import ServiceProviderListCard from "../../Shared/ServiceProviderListCard";
import {
  TRAINER,
  NUTRITIONIST,
  TRAINER_NUTRITIONIST,
} from "../../utils/constants";
import FilterIcon from "../../Assets/Images/serviceProviderListScreen/filterIcon.png";
import { useTranslation } from "react-i18next";

const NutritionistData = [
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

const TrainerAndNutritionistData = [
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

const ServiceProviderListWrapper = (props) => {

   const { cardLink } = props;
  const [
    showSubscriptionInformationModal,
    setShowSubscriptionInformationModal,
  ] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [listingRole, setListingRole] = useState(TRAINER);

  const { isGuest } = useSelector((state) => state?.user);
  const navigate = useNavigate();
  const { t } = useTranslation("");
  const TrainerData = [
    {
      infoImg: Images.PROFILE_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "20",
    },
    {
      infoImg: Images.PROFILE_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "20",
    },
    {
      infoImg: Images.PROFILE_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "20",
    },
    {
      infoImg: Images.PROFILE_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "20",
    },
    {
      infoImg: Images.PROFILE_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "20",
    },
    {
      infoImg: Images.PROFILE_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "20",
    },
    {
      infoImg: Images.PROFILE_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "20",
    },
  ];

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleDropdownItemClick = (role) => {
    setListingRole(role);
  };

  const handleCardOnClick = useCallback(
    (isDisable) => {
      if (isDisable) {
        setShowSubscriptionInformationModal(true);
      } else {
        navigate(cardLink);
      }
    },
    [navigate, cardLink]
  );

  const handleSeeMoreClick = useCallback(() => {
    setShowSubscriptionInformationModal(true);
  }, []);

  const handleNotNowClick = useCallback(() => {
    setShowSubscriptionInformationModal(false);
  }, []);

  const handleRegisterClick = useCallback(() => {
    navigate("/registerAs");
  }, [navigate]);

  const handleSubscriptionInformationModalClose = useCallback(() => {
    setShowSubscriptionInformationModal(false);
  }, []);

  return (
    <Card
      className={`BorderRadius shadow my-3 ${styles.serviceProviderListWrapper}`}
    >
      <CardBody>
        <Row className="align-items-center mb-5">
          <Col className="text-left">
            <h4 className="fw-bold fs-3 p-3">
              {" "}
              {t("guest.listOfText")} {listingRole}
            </h4>
          </Col>
          <Col className="text-end">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle data-toggle="dropdown" tag="span">
                <img src={FilterIcon} alt="filter-icon" />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => handleDropdownItemClick(TRAINER)}>
                  Trainers
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleDropdownItemClick(NUTRITIONIST)}
                >
                  Nutritionists
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleDropdownItemClick(TRAINER_NUTRITIONIST)}
                >
                  Both
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          {listingRole === TRAINER &&
            TrainerData.map((item, index) => {
              const isDisable = isGuest && index >= getGuestDataLimit();
              return (
                <Col lg={3} md={4} col={6} className="mb-3" key={index}>
                  <ServiceProviderListCard
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
          {listingRole === NUTRITIONIST &&
            NutritionistData.map((item, index) => {
              const isDisable = isGuest && index >= getGuestDataLimit();
              return (
                <Col lg={3} md={4} col={6} className="mb-3" key={index}>
                  <ServiceProviderListCard
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
          {listingRole === TRAINER_NUTRITIONIST &&
            TrainerAndNutritionistData.map((item, index) => {
              const isDisable = isGuest && index >= getGuestDataLimit();
              return (
                <Col lg={3} md={4} col={6} className="mb-3" key={index}>
                  <ServiceProviderListCard
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
          <InformationModal
            size={"md"}
            TOneClassName={"fw-bold mb-4 fs-5 text-center"}
            className={"p-4"}
            isOpen={showSubscriptionInformationModal}
            onClose={handleSubscriptionInformationModalClose}
            ModalTextOne={t("guest.subscribeToSeeText")}
            ButtonOne={
              <FillBtn
                text={t("guest.registerText")}
                className="py-2 p-3"
                handleOnClick={handleRegisterClick}
              />
            }
            ButtonTwo={
              <OutlineBtn
                text={t("guest.notNowText")}
                className="py-2 p-3"
                handleOnClick={handleNotNowClick}
              />
            }
          />
        </Row>
        <Row className="justify-content-center">
          <Col md={4} sm={10}>
            <div className="my-3 text-center">
              <FillBtn
                className="w-100 text-dark fw-bold py-2 px-5"
                handleOnClick={handleSeeMoreClick}
                text={t("guest.seeMoreText")}
              />
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default memo(ServiceProviderListWrapper);
