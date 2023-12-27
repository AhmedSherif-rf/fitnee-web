import React from "react";
import { Container, Col, Row } from "reactstrap";
import InputField from "../../../../Shared/InputField";
import FillBtn from "../../../../Shared/Buttons/FillBtn";
import OutlineBtn from "../../../../Shared/Buttons/OutlineBtn";
import PageHeading from "../../../../Shared/Headings/PageHeading";
import AddExerciseFrom from "../../../../Shared/AdminShared/Components/AddExerciseForm";

const ContactUs = (props) => {
  return (
    <Container>
      <Row>
        <Col md="12" className="text-start">
          <PageHeading headingText="Add Exercises" categoryText="" />
        </Col>
        <Col md={12}>
          <AddExerciseFrom />
        </Col>

        <Row className="ms-0">
          <Col md={6} className="ms-3 mb-3">
            <label htmlFor="" className="fw-bold w-100 text-start">
              Add Exercises Video
            </label>

            <div className="dummy-upload-image"></div>
            <InputField
              className="form-control-lg"
              type="file"
              placeholder="Add Details"
              name="details"
              // onChangeHandle={handleChange}
              // onBlurHandle={handleBlur}
              // value={values.bio}
            />
          </Col>
        </Row>
        <Row className="mb-2 justify-content-center">
          <Col md="4">
            <FillBtn text="Submit" className="w-100 py-2" />
          </Col>
          <Col md="4">
            <OutlineBtn text="Discard" className="w-100 py-2" />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default ContactUs;
