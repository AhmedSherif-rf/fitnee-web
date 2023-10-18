import React from "react";
import "./ProgressBarStyle.scss";
import { Progress } from "reactstrap";
import { FaCheck } from "react-icons/fa";

function CustomProgressBar({ value }) {
  const percentageCircleStyle = {
    position: "absolute",
    fontSize: "8px",
    left: `${value}%`,
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "25px",
    height: "25px",
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#91F533",
    fontWeight: "bold",
    border: "1px solid #91F533",
  };
  return (
    <div style={{ position: "relative" }}>
      <div className="startingPointStyle">
        <FaCheck />
      </div>
      <div className="endingPointStyle"></div>
      <Progress
        animated
        color="warning"
        striped
        value={value}
        className="CustomProgress"
      >
        <div style={percentageCircleStyle}>{value}%</div>
      </Progress>
    </div>
  );
}

function index() {
  const progressValue = 100;

  return (
    <div>
      <CustomProgressBar value={progressValue} />
    </div>
  );
}

export default index;
