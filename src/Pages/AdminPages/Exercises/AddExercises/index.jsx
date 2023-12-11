import React from "react";
import { Col, Row } from "reactstrap";
import InputField from "../../../../Shared/InputField";
import MyDropdown from "../../../../Shared/MyDropdown";
import FillBtn from "../../../../Shared/Buttons/FillBtn";
import OutlineBtn from "../../../../Shared/Buttons/OutlineBtn";
import PageHeading from "../../../../Shared/Headings/PageHeading";
import { exerciseLevel, category } from "../../../../utils/constants";
import Images from "../../../../HelperMethods/Constants/ImgConstants";

const ContactUs = (props) => {
  return (
    <React.Fragment>
      <Row>
        <Col md="12" className="text-start">
          <PageHeading headingText="Add Exercises" categoryText="" />
        </Col>
        <Col md="6" className="mb-2">
          <InputField
            className="form-control-lg  py-3 px-4"
            type="text"
            placeholder="Add exercise name"
            name="firstName"
            // onChangeHandle={handleChange}
            // onBlurHandle={handleBlur}
            // value={values.firstName}
          />
        </Col>
        <Col md="6" className="mb-2">
          <InputField
            className="form-control-lg  py-3 px-4"
            type="text"
            placeholder="Warm-up"
            name="Warm-up"
            // onChangeHandle={handleChange}
            // onBlurHandle={handleBlur}
            // value={values.firstName}
          />
        </Col>
        <Col md="6" className="mb-2">
          <MyDropdown
            className="border border-danger py-2 px-4 mb-0"
            Options={category}
            name={"role"}
            // onChangeHandle={handleChange}
            // onBlurHandle={handleBlur}
            // value={values.role}
          />
        </Col>
        <Col md="6" className="mb-2">
          <MyDropdown
            className="border py-2 px-4 mb-0"
            Options={exerciseLevel}
            name={"role"}
            // onChangeHandle={handleChange}
            // onBlurHandle={handleBlur}
            // value={values.role}
          />
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
        <Col md="12" className="mb-3">
          <div>
            <label htmlFor="" className="fw-bold w-100 text-start">
              Add Exercises Video
            </label>
            <div className="upload-container">
              <div className="dummy-upload-image"></div>
              <InputField
                className="form-control-lg px-4"
                type="file"
                placeholder="Add Details"
                name="details"
                // onChangeHandle={handleChange}
                // onBlurHandle={handleBlur}
                // value={values.bio}
              />
            </div>
          </div>
        </Col>
        <Col md="6" className="mb-4">
          <div className="">
            <label htmlFor="" className="fw-bold w-100 text-start">
              Add Secondary Muscle
            </label>
            <InputField
              className="form-control-lg  px-4 mb-3"
              type="file"
              placeholder="Add Details"
              name="details"
              // onChangeHandle={handleChange}
              // onBlurHandle={handleBlur}
              // value={values.bio}
            />
            <div
              className="bgProperties BorderRadius"
              style={{
                backgroundImage: `url(${Images.PROFILE2_IMG})`,
                minHeight: "300px",
              }}
            ></div>
          </div>
        </Col>
        <Col md="6" className="mb-4">
          <div className="">
            <label htmlFor="" className="fw-bold w-100 text-start">
              Add Secondary Muscle
            </label>
            <InputField
              className="form-control-lg  px-4 mb-3"
              type="file"
              placeholder="Add Details"
              name="details"
              // onChangeHandle={handleChange}
              // onBlurHandle={handleBlur}
              // value={values.bio}
            />
            <div
              className="bgProperties BorderRadius"
              style={{
                backgroundImage: `url(${Images.PROFILE2_IMG})`,
                minHeight: "300px",
              }}
            ></div>
          </div>
        </Col>

        <Col md="6" className="mb-2">
          <FillBtn text="Submit" className="w-100 py-2" />
        </Col>
        <Col md="6" className="mb-2">
          <OutlineBtn text="Discard" className="w-100 py-2" />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ContactUs;
