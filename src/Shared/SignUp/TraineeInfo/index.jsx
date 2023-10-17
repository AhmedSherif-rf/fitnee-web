import React, { useState } from "react";
import MyDropdown from "../MyDropdown";
import { Col, Label, Row } from "reactstrap";
import InputField from "../../InputField/InputField";

function TraineeInfo() {
  const [Goal, setGoals] = useState([{ id: 1, TriningGoal: "" }]);
  const Goals = [
    "Body Building",
    "Gain Weight",
    "Healthy Lifestyle",
    "Lose Weight",
    "Power Lifting",
  ];
  const Activity = ["Beginner", "Intermediate", "Advanced"];
  const FoodSensitive = ["Sea food", "Fast food", "Not yet"];

  const Injury = ["Yes", "No"];

  const handleTimeRowChange = (id, field, val) => {
    const updatedTimeRows = Goal.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: val };
      }
      return row;
    });
    setGoals(updatedTimeRows);
  };
  return (
    <Row className="mb-3">
      <Col md={6}>
        <Label className="mb-0 fw-bold">My goal</Label>
        <InputField
          className="BorderYellow"
          type="text"
          placeholder="I want to lose my 5kg weight in 4 weeks"
        />
      </Col>
      <Col md={6}>
        <Label className="mb-0 fw-bold">Training goal</Label>
        {Goal.map((Goal) => (
          <Row key={Goal.id} className="Goal">
            <Col md={12} className="mb-2">
              <MyDropdown
                className="w-100"
                DefaultOption="Select Training goal"
                Options={Goals}
                SelectedOption={Goal.TriningGoal}
                onChange={(val) =>
                  handleTimeRowChange(Goal.id, "TriningGoal", val)
                }
              />
            </Col>
          </Row>
        ))}
      </Col>
      <Col md={6}>
        <Label className="mb-0 fw-bold">Activity level</Label>
        {Goal.map((Goal) => (
          <Row key={Goal.id} className="Goal">
            <Col md={12} className="mb-2">
              <MyDropdown
                className="w-100"
                DefaultOption="Select Activity"
                Options={Activity}
                SelectedOption={Goal.Activities}
                onChange={(val) =>
                  handleTimeRowChange(Goal.id, "Activities", val)
                }
              />
            </Col>
          </Row>
        ))}
      </Col>

      <Col md={6}>
        <Label className="mb-0 fw-bold">Any Food Sensitive:</Label>
        {Goal.map((Goal) => (
          <Row key={Goal.id} className="Goal">
            <Col md={12} className="mb-2">
              <MyDropdown
                className="w-100"
                DefaultOption="Select Any Food Sensitive"
                Options={FoodSensitive}
                SelectedOption={Goal.FoodSensitives}
                onChange={(val) =>
                  handleTimeRowChange(Goal.id, "FoodSensitives", val)
                }
              />
            </Col>
          </Row>
        ))}
      </Col>

      <Col md={6}>
        <Label className="mb-0 fw-bold">Any Injuries:</Label>
        {Goal.map((Goal) => (
          <Row key={Goal.id} className="Goal">
            <Col md={12} className="mb-2">
              <MyDropdown
                className="w-100"
                DefaultOption="Select Any Injuries"
                Options={Injury}
                SelectedOption={Goal.Injuries}
                onChange={(val) =>
                  handleTimeRowChange(Goal.id, "Injuries", val)
                }
              />
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  );
}

export default TraineeInfo;
