import React from "react";
import { Col, Container, Row } from "reactstrap";
import InputField from "../../../Shared/InputField";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import CategoryCard from "../../../Shared/AdminShared/CategoryCard";

const Settings = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={9} className="mb-3">
            <InputField
              placeholder="Type Category"
              type="text"
              name="category"
              className="py-3 mt-1"
            />
          </Col>
          <Col md={3} className="mb-3">
            <FillBtn
              type={"submit"}
              text={"Add Category"}
              className="w-100 py-3"
            />
          </Col>
        </Row>
        <Row className="p-4">
          <Col md={4} className="mb-2">
            <CategoryCard CategoryName="Text Category" LinkTo="/admin/settings/category/subCategory" />
          </Col>
          <Col md={4} className="mb-2">
            <CategoryCard CategoryName="Text Category One" LinkTo="/admin/settings/category/subCategory" />
          </Col>
          <Col md={4} className="mb-2">
            <CategoryCard CategoryName="Text Category Two" LinkTo="/admin/settings/category/subCategory" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Settings;
