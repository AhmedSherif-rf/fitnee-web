import React, { memo, useRef } from "react";
import Images from "../../HelperMethods/Constants/ImgConstants";

const UploadPic = ({ setFieldValue, displayImages, setDisplayImages }) => {
  const imageRef = useRef(null);

  //   ----------- functions --------------
  const handleImageChange = function (e) {
    const fileList = e.target.files;
    if (!fileList) return;

    let display = URL.createObjectURL(fileList[0]);
    setDisplayImages(display);
    setFieldValue("profile_pic", fileList[0]);
  };

  return (
    <div className="d-md-flex align-items-center justify-content-center">
      <div
        className="bgProperties rounded-circle me-2"
        style={{
          cursor: "pointer",
          width: "60px",
          height: "60px",
          backgroundImage: !displayImages?.length
            ? `url(${Images.USER_DUMMY_IMG})`
            : `url(${displayImages})`,
        }}
        onClick={() => {
          imageRef?.current?.click();
        }}
      ></div>
      <input
        style={{ display: "none" }}
        ref={imageRef}
        type="file"
        id="logo"
        name="logo"
        accept="image/*"
        onChange={(event) => {
          handleImageChange(event);
        }}
      />
    </div>
  );
};

export default memo(UploadPic);
