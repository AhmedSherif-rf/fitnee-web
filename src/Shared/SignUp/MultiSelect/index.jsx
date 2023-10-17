import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import FillBtn from "../../Buttons/FillBtn";
import OutlineBtn from "../../Buttons/OutlineBtn";

const SelectComponent = (props) => {
  const { className } = props;
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [unselectedButtons, setUnselectedButtons] = useState([
    "Body Building",
    "Health Issue",
    "Power Lifting",
    "Healthy Lifestyle",
  ]);

  const handleButtonClick = (buttonText) => {
    if (selectedButtons.includes(buttonText)) {
      setSelectedButtons(selectedButtons.filter((btn) => btn !== buttonText));
      console.log(buttonText, "test one");
    } else {
      console.log(buttonText, "test two");
      setSelectedButtons([...selectedButtons, buttonText]);
    }
  };

  const handleDeselect = (buttonText) => {
    setSelectedButtons(selectedButtons.filter((btn) => btn !== buttonText));
  };

  return (
    <div className={className}>
      <div className="border BorderRadius my-2">
        {selectedButtons.length > 0 && (
          <div className="selected-container d-flex align-items-center p-2">
            {selectedButtons.map((selectedButton) => (
              <div
                key={selectedButton}
                className="selected-button mx-1 border rounded-3 p-1"
              >
                {selectedButton}
                <FaTimes
                  onClick={() => handleDeselect(selectedButton)}
                  className="deselect-icon text-secondary ms-1"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="border-0 d-flex">
        {unselectedButtons.map((buttonText) => (
          <div className="mx-1 d-flex align-items-center">
            {selectedButtons.includes(buttonText) ? (
              <FillBtn
                text={buttonText}
                onClick={() => handleButtonClick(buttonText)}
              />
            ) : (
              <OutlineBtn
                text={buttonText}
                onClick={() => handleButtonClick(buttonText)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectComponent;
