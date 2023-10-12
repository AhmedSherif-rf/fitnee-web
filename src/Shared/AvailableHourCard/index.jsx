import React, { memo } from "react";

const AvailableHourCard = (props) => {
  const { index, day, time, className } = props;

  return (
    <div
      key={index}
      className={`d-flex justify-content-between shadow mb-2 p-2 ${className}`}
    >
      <div>{day}</div>
      <div>{time}</div>
    </div>
  );
};

export default memo(AvailableHourCard);
