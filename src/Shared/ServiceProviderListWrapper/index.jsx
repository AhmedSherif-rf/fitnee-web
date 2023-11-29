import styles from "./style.module.scss";
import { useSelector } from "react-redux";

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
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import PageHeading from "../Headings/PageHeading";
import FillBtn from "../../Shared/Buttons/FillBtn";
import InformationModal from "../Modal/InformationModal";
import OutlineBtn from "../../Shared/Buttons/OutlineBtn";
import { getGuestDataLimit } from "../../utils/functions";
import React, { useState, useCallback, memo } from "react";
import Images from "../../HelperMethods/Constants/ImgConstants";
import ServiceProviderListCard from "../../Shared/ServiceProviderListCard";
import {
  TRAINER_TYPE,
  NUTRITIONIST_TYPE,
  TRAINER_NUTRITIONIST_TYPE,
} from "../../utils/constants";
import FilterIcon from "../../Assets/Images/serviceProviderListScreen/filterIcon.png";

const NutritionistData = [
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "30",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "30",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "30",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "30",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "30",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "30",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "30",
  },
];

const TrainerAndNutritionistData = [
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "30",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "30",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "30",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "30",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "30",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "30",
  },
  {
    infoImg: Images.PROFILE_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "30",
  },
];

const ServiceProviderListWrapper = (props) => {
  const { cardLink, roleType } = props;
  const [
    showSubscriptionInformationModal,
    setShowSubscriptionInformationModal,
  ] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [listingRole, setListingRole] = useState(roleType);

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
      Height: "30",
    },
    {
      infoImg: Images.PROFILE_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "30",
    },
    {
      infoImg: Images.PROFILE_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "30",
    },
    {
      infoImg: Images.PROFILE_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "30",
    },
    {
      infoImg: Images.PROFILE_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "30",
    },
    {
      infoImg: Images.PROFILE_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "30",
    },
    {
      infoImg: Images.PROFILE_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "30",
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

  const conditionalHeader = () => {
    if (listingRole === TRAINER_TYPE) {
      return "Trainers";
    } else if (listingRole === NUTRITIONIST_TYPE) {
      return "Nutritionists";
    } else {
      return "Trainers & Nutritionists";
    }
  };

  return (
    <Card className={`BorderRadius my-3 ${styles.serviceProviderListWrapper}`}>
      <CardBody>
        <Row className="align-items-center">
          <Col className="text-left">
            <PageHeading
              headingText={`${t("guest.listOfText")} ${conditionalHeader()}`}
              categoryText=""
            />
          </Col>
          <Col className="text-end">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle data-toggle="dropdown" tag="span">
                <img
                  className={`${styles.filterIcon}`}
                  src={FilterIcon}
                  alt="filter-icon"
                />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => handleDropdownItemClick(TRAINER_TYPE)}
                >
                  Trainers
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleDropdownItemClick(NUTRITIONIST_TYPE)}
                >
                  Nutritionists
                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    handleDropdownItemClick(TRAINER_NUTRITIONIST_TYPE)
                  }
                >
                  Both
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          {listingRole === TRAINER_TYPE &&
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
          {listingRole === NUTRITIONIST_TYPE &&
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
          {listingRole === TRAINER_NUTRITIONIST_TYPE &&
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
                className="py-2 px-5"
                handleOnClick={handleRegisterClick}
              />
            }
            ButtonTwo={
              <OutlineBtn
                text={t("guest.notNowText")}
                className="py-2 px-5"
                handleOnClick={handleNotNowClick}
              />
            }
          />
        </Row>
        <Row className="justify-content-center">
          <Col md={4} sm={10}>
            <div className="my-3 text-center">
              <FillBtn
                className="w-100 py-2 px-5"
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
