import InputField from "../../InputField";
import FillBtn from "../../Buttons/FillBtn";
import OutlineBtn from "../../Buttons/OutlineBtn";
import React, { useCallback, useState, memo } from "react";
import InformationModal from "../../Modal/InformationModal";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaCaretDown, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import {
  Card,
  CardHeader,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";

const CategoryCard = (props) => {
  const { CategoryName, Actions, LinkTo } = props;

  const navigate = useNavigate();
  const [showCategoryEditModal, setShowCategoryEditModal] = useState(false);
  const [showCategoryDeleteModal, setShowCategoryDeleteModal] = useState(false);

  const handleCategoryEditClick = useCallback(() => {
    setShowCategoryEditModal(true);
  }, []);
  const handleEditSubmitModalClose = useCallback(() => {
    setShowCategoryEditModal(false);
  }, []);
  const handleDeleteModalClose = useCallback(() => {
    setShowCategoryDeleteModal(false);
  }, []);

  const handleDeleteSuccessClick = useCallback(() => {
    setShowCategoryDeleteModal(false);
    navigate("/admin/settings/category");
  }, [navigate]);

  const handleCategoryDeleteModal = useCallback(() => {
    setShowCategoryDeleteModal(true);
  }, []);

  const handleSubscriptionClick = useCallback(() => {
    setShowCategoryEditModal(false);
    navigate("/admin/settings/category");
  }, [navigate]);

  return (
    <>
      <Card className={`border-0 p-0 CategoryCard`}>
        <CardHeader
          className={`p-0 onlyBorderRadius d-flex align-items-center justify-content-between border-0`}
        >
          <Link className="w-100" to={LinkTo}>
            <div
              className={`w-100 p-3 onlyBorderRadius  ${`CategoryCardHeader`}`}
            >
              <h6 className="mb-0 text-start fw-bold textGrey">
                {CategoryName}
              </h6>
            </div>
          </Link>
          <div className="w-25">
            <UncontrolledDropdown className={`UncontrolledDropdown`}>
              <DropdownToggle
                className={`p-0 d-flex align-items-center justify-content-center`}
                nav
              >
                <div className=" rounded-circle text-black-custom">
                  <FaCaretDown className="fs-3" />
                </div>
              </DropdownToggle>
              <DropdownMenu
                className={`DropdownMenu`}
                style={{ right: 0, left: "auto" }}
              >
                <DropdownItem className={`p-0 DropdownItem`}>
                  <div className="d-flex align-items-center justify-content-center w-100 text-black-custom">
                    <button
                      className=" w-100 border-0 bg-transparent fs-6 pb-2 text-primary"
                      onClick={handleCategoryEditClick}
                    >
                      <FaRegEdit />
                    </button>
                    <span className="fs-2">/</span>
                    <button
                      className=" w-100 border-0  bg-transparent fs-6 pb-2 text-danger"
                      onClick={handleCategoryDeleteModal}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </CardHeader>
      </Card>
      <InformationModal
        heading={CategoryName}
        size={"md"}
        TOneClassName={"fw-bold mb-4 fs-5 text-center"}
        className={"p-4"}
        isOpen={showCategoryEditModal}
        onClose={handleEditSubmitModalClose}
        ModalTextOne={
          <Row>
            <Col md={12} className="mb-3">
              <InputField
                placeholder="Type Category"
                type="text"
                name="category"
                className="py-3 mt-1"
              />
            </Col>
          </Row>
        }
        ButtonOne={
          <FillBtn
            text={"Update"}
            className="py-2 px-5"
            handleOnClick={handleSubscriptionClick}
          />
        }
        ButtonTwo={
          <OutlineBtn
            text={"Cancel"}
            className="py-2 px-5"
            handleOnClick={handleEditSubmitModalClose}
          />
        }
      />

      <InformationModal
        heading={CategoryName}
        size={"md"}
        TOneClassName={"fw-bold mb-4 fs-5 text-center"}
        className={"p-4"}
        isOpen={showCategoryDeleteModal}
        onClose={handleEditSubmitModalClose}
        ModalTextOne={"Are you sure to delete?"}
        ButtonOne={
          <FillBtn
            text={"Yes"}
            className="py-2 px-5"
            handleOnClick={handleDeleteSuccessClick}
          />
        }
        ButtonTwo={
          <OutlineBtn
            text={"No"}
            className="py-2 px-5"
            handleOnClick={handleDeleteModalClose}
          />
        }
      />
    </>
  );
};

export default memo(CategoryCard);
