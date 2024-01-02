import styles from "./style.module.scss";
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
import { useSelector, useDispatch } from "react-redux";
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
    infoImg: Images.PROFILE4_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "38",
  },
  {
    infoImg: Images.PROFILE4_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "38",
  },
  {
    infoImg: Images.PROFILE4_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "38",
  },
  {
    infoImg: Images.PROFILE4_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "38",
  },
  {
    infoImg: Images.PROFILE4_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "38",
  },
  {
    infoImg: Images.PROFILE4_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "38",
  },
  {
    infoImg: Images.PROFILE4_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "38",
  },
];

const TrainerAndNutritionistData = [
  {
    infoImg: Images.PROFILE4_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "38",
  },
  {
    infoImg: Images.PROFILE4_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "38",
  },
  {
    infoImg: Images.PROFILE4_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "38",
  },
  {
    infoImg: Images.PROFILE4_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "38",
  },
  {
    infoImg: Images.PROFILE4_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "38",
  },
  {
    infoImg: Images.PROFILE4_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "38",
  },
  {
    infoImg: Images.PROFILE4_IMG,
    infoLogo: Images.SHORTLOGO_IMG,
    infoTitle: "Shane",
    infoRating: 4,
    infoDes: "2 Years",
    Height: "38",
  },
];

const TraineeServiceProviderListWrapper = (props) => {
  const { cardLink, roleType } = props;
  const [
    showSubscriptionInformationModal,
    setShowSubscriptionInformationModal,
  ] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [listingRole, setListingRole] = useState(roleType);

  const { isGuest } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { t } = useTranslation("");
  const TrainerData = [
    {
      infoImg: Images.PROFILE1_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "38",
    },
    {
      infoImg: Images.GOAL_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "38",
    },
    {
      infoImg: Images.PROFILE3_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "38",
    },
    {
      infoImg: Images.GOAL_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "38",
    },
    {
      infoImg: Images.PROFILE5_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "38",
    },
    {
      infoImg: Images.GOAL_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "38",
    },
    {
      infoImg: Images.PROFILE4_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: `2  ${t("guest.yearsText")}`,
      Height: "38",
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
    <Card
      className={`BorderRadius contentCard ${styles.serviceProviderListWrapper}`}
    >
      <CardBody>
        <Row className="align-items-center mb-2">
          <Col xs={10} sm={6} className="text-left">
            <PageHeading
              headingText={`${t("guest.listOfText")} ${conditionalHeader()}`}
              categoryText=""
            />
          </Col>
          <Col xs={2} sm={6} className="text-end">
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
                  {/* <ServiceProviderListCard
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
                  /> */}
                </Col>
              );
            })}
          {listingRole === NUTRITIONIST_TYPE &&
            NutritionistData.map((item, index) => {
              const isDisable = isGuest && index >= getGuestDataLimit();
              return (
                <Col lg={3} md={4} col={6} className="mb-3" key={index}>
                  {/* <ServiceProviderListCard
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
                  /> */}
                </Col>
              );
            })}
          {listingRole === TRAINER_NUTRITIONIST_TYPE &&
            TrainerAndNutritionistData.map((item, index) => {
              const isDisable = isGuest && index >= getGuestDataLimit();
              return (
                <Col lg={3} md={4} col={6} className="mb-3" key={index}>
                  {/* <ServiceProviderListCard
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
                  /> */}
                </Col>
              );
            })}

          <Col lg={3} md={4} col={6} className="mb-3">
            <Card
              className={`bgProperties h-100 BorderRadius`}
              style={{
                backgroundImage: `url(${Images.SEE_MORE_BG_IMG})`,
                cursor: "pointer",
              }}
              onClick={handleSeeMoreClick}
            >
              <CardBody>
                <div
                  className="w-100 d-flex align-items-center justify-content-center"
                  style={{ height: "30vh" }}
                >
                  <div className="">
                    <p className="mb-0 fs-4 fw-bold">
                      {t("guest.seeMoreText")}
                    </p>
                    <div className="w-100 text-center">
                      <img
                        className="img-fluid w-50"
                        src={Images.ARROW_RIGHT_IMG}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
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
      </CardBody>
    </Card>
  );
};

export default memo(TraineeServiceProviderListWrapper);
