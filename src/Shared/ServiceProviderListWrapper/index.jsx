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
import SubscriptionInformationModal from "../../Shared/Modal/SubscriptionInformationModal";

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
  const [
    showSubscriptionInformatoinModal,
    setShowSubscriptionInformatoinModal,
  ] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [listingRole, setListingRole] = useState(TRAINER);

  const { isGuest } = useSelector((state) => state?.user);
  const navigate = useNavigate();

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleDropdownItemClick = (role) => {
    setListingRole(role);
  };

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
    <Card
      className={`BorderRadius shadow my-3 ${styles.serviceProviderListWrapper}`}
    >
      <CardBody>
        <Row className="align-items-center mb-5">
          <Col className="text-left">
            <h4 className="fw-bold fs-3 p-3">List of {listingRole}</h4>
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
                <DropdownItem onClick={() => handleDropdownItemClick(NUTRITIONIST)}>
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
          {listingRole === TRAINER && TrainerData.map((item, index) => {
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
          {listingRole === NUTRITIONIST && NutritionistData.map((item, index) => {
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
          {listingRole === TRAINER_NUTRITIONIST && TrainerAndNutritionistData.map((item, index) => {
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
  );
};

export default memo(ServiceProviderListWrapper);
