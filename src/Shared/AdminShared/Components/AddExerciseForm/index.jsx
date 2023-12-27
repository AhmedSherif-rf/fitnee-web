import "./styleExercise.scss";
import classnames from "classnames";
import React, { useState } from "react";
import InputField from "../../../../Shared/InputField";
import MyDropdown from "../../../../Shared/MyDropdown";
import ToggleSwitch from "../../../../Shared/ToggleSwitch";
import { exerciseLevel, category } from "../../../../utils/constants";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";

const AddExerciseForm = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [checked, setChecked] = useState(true);

  const handleToggle = () => {
    setChecked(!checked);
  };

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className="navTab">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={`${classnames({
              active: activeTab === "1",
            })}`}
            onClick={() => {
              toggle("1");
            }}
          >
            العنوان الفرعي العربي
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`${classnames({
              active: activeTab === "2",
            })}`}
            onClick={() => {
              toggle("2");
            }}
          >
            English sub title
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="m-3">
            <Col md="6" className="mb-2">
              <InputField
                className="form-control-lg  py-3 px-4"
                type="text"
                placeholder="أضف اسم التمرين"
                name="firstName"
              />
            </Col>
            <Col md="6" className="mb-2">
              <MyDropdown
                className="border py-3 px-4 mb-0"
                Options={category}
                name={"role"}
                defaultSelected="اختر الفئة"
                // onChangeHandle={handleChange}
                // onBlurHandle={handleBlur}
                // value={values.role}
              />
            </Col>
            <Col md="6" className="mb-2">
              <MyDropdown
                className="border py-3 px-4 mb-0"
                Options={exerciseLevel}
                name={"role"}
                defaultSelected="اختار مستوى"
                // onChangeHandle={handleChange}
                // onBlurHandle={handleBlur}
                // value={values.role}
              />
            </Col>{" "}
            <Col md="6" className="mb-2">
              <div className="d-flex align-items-center h-100 justify-content-between">
                <h6 className="mb-0">تسخين</h6>
                <ToggleSwitch id="1" isOn={checked} handleToggle={handleToggle} />
              </div>
            </Col>
            <Col md="12" className="mb-2">
              <InputField
                className="form-control-lg  py-3 px-4"
                type="textarea"
                style={{ minHeight: "115px" }}
                placeholder="أضف التفاصيل"
                name="details"
                // onChangeHandle={handleChange}
                // onBlurHandle={handleBlur}
                // value={values.bio}
              />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="m-3">
            <Col md="6" className="mb-2">
              <InputField
                className="form-control-lg  py-3 px-4"
                type="text"
                placeholder="Add exercise name"
                name="firstName"
              />
            </Col>
            <Col md="6" className="mb-2">
              <MyDropdown
                className="border py-3 px-4 mb-0"
                Options={category}
                name={"role"}
                defaultSelected="Select Category"
                // onChangeHandle={handleChange}
                // onBlurHandle={handleBlur}
                // value={values.role}
              />
            </Col>
            <Col md="6" className="mb-2">
              <MyDropdown
                className="border py-3 px-4 mb-0"
                Options={exerciseLevel}
                name={"role"}
                defaultSelected="Select Level"
                // onChangeHandle={handleChange}
                // onBlurHandle={handleBlur}
                // value={values.role}
              />
            </Col>
            <Col md="6" className="mb-2">
              <div className="d-flex align-items-center h-100 justify-content-between">
                <h6 className="mb-0">Warm Up</h6>
                <ToggleSwitch id="2" isOn={checked} handleToggle={handleToggle} />
              </div>
            </Col>
            <Col md="12" className="mb-2">
              <InputField
                className="form-control-lg  py-3 px-4"
                type="textarea"
                style={{ minHeight: "115px" }}
                placeholder="Add Details"
                name="details"
                // onChangeHandle={handleChange}
                // onBlurHandle={handleBlur}
                // value={values.bio}
              />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default AddExerciseForm;
