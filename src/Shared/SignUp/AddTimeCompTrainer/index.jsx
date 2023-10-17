import React, { useState } from "react";
import MyDropdown from "../MyDropdown";
import InputField from "../../InputField/InputField";
import { Card, CardBody, Button, Row, Col } from "reactstrap";

function AddTimeCompTrainer() {
  const [timeRows, setTimeRows] = useState([
    { id: 1, weekday: "", startTime: "", endTime: "" },
  ]);
  const weekdays = [
    "Select Week day",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const addTimeRow = () => {
    const newId = timeRows.length + 1;
    const newTimeRow = { id: newId, weekday: "", startTime: "", endTime: "" };
    setTimeRows([...timeRows, newTimeRow]);
  };

  const removeTimeRow = (id) => {
    const updatedTimeRows = timeRows.filter((row) => row.id !== id);
    setTimeRows(updatedTimeRows);
  };

const handleTimeRowChange = (id, field, value) => {
  console.log(value,"sdfsfsfsf");
  const updatedTimeRows = timeRows.map((row) => {
    if (row.id === id) {
      if (field === "startTime" || field === "endTime") {
        // Ensure the time format is in "HH:mm"
        const formattedTime = value;
        return { ...row, [field]: formattedTime };
      } else {
        return { ...row, [field]: value };
      }
    }
    return row;
  });
  setTimeRows(updatedTimeRows);
};


  return (
    <Card className="BorderRadius">
      <CardBody>
        <div className="d-flex align-items-center justify-content-between">
          <h6>You are available to respond to your trainee</h6>
          <Button
            className="border-0 textYellow bg-transparent fw-bold"
            onClick={addTimeRow}
          >
            Add more +
          </Button>
        </div>
        {timeRows.map((timeRow) => (
          <Row key={timeRow.id} className="timeRows">
            <Col md={6} className="mb-2">
              <MyDropdown
                DefaultOption="Select Week day"
                Options={weekdays}
                SelectedOption={timeRow.weekday}
                onChange={(value) =>
                  handleTimeRowChange(timeRow.id, "weekday", value)
                }
              />
            </Col>
            <Col md={3} sm={6} className="mb-2">
              <InputField
                type="time"
                className="BorderYellow"
                value={timeRow.startTime}
                onChange={(e) =>
                  handleTimeRowChange(timeRow.id, "startTime", e.target.value)
                }
              />
            </Col>
            <Col md={3} sm={6} className="mb-2">
              <InputField
                type="time"
                className="BorderYellow"
                value={timeRow.endTime}
                onChange={(e) =>
                  handleTimeRowChange(timeRow.id, "endTime", e.target.value)
                }
              />
            </Col>
            {timeRows.length > 1 && (
              <Button
                className="border-0 text-danger bg-transparent"
                onClick={() => removeTimeRow(timeRow.id)}
              >
                Remove
              </Button>
            )}
          </Row>
        ))}
      </CardBody>
    </Card>
  );
}

export default AddTimeCompTrainer;
