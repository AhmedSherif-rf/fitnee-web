import React, { Component } from "react";
import "./multipleImgStyle.scss";
import { Col, Label, Row } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";


export default class MultipleImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [], // An array to store selected files
    };
    this.inputRef = React.createRef(); // Reference to the input element
  }

  handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files); // Convert FileList to an array
    this.setState((prevState) => ({
      files: [...prevState.files, ...selectedFiles], // Append new files to the existing array
    }));
  };

  render() {
    const { files } = this.state;

    return (
      <Row className="mb-3">
        <Col md={12}>
          <h5>Attach your files</h5>
        </Col>
        <Col md={12}>
          <div className="form-group multi-preview d-flex flex-wrap align-items-center">
            {files.map((file, index) => (
              <div
                key={index}
                className="col-sm-4 col-md-2 col-lg-2 col-xl-2 m-2 position-relative BorderRadius BorderYellow"
              >
                <span className="imgTitle w-100 py-2 text-center h6 mb-0">
                  <input
                    type="text"
                    className="TitleInput"
                    placeholder="Title"
                  />
                </span>
                <div
                  className="BorderRadius"
                  style={{
                    width: "100%",
                    height: "170px",
                    backgroundImage: `url(${URL.createObjectURL(file)})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            ))}
            <Label
              id="UploadImgLabel"
              className="BorderRadius BorderYellow text-center mb-0"
              style={{
                minWidth: "200px",
                maxHeight: "170px",
              }}
            >
              <img src={Images.UPLOAD_BG_IMG} alt="" />
              <input
                type="file"
                className="form-control mb-0 d-none text-danger"
                id="UploadImgLabel"
                onChange={this.handleFileChange}
                multiple // Allow multiple file selection
                ref={this.inputRef}
              />
              <h6>Upload Image</h6>
            </Label>
          </div>
        </Col>
      </Row>
    );
  }
}
