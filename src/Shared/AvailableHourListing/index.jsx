import React, { memo } from "react";
import AvailableHourCard from "../AvailableHourCard";

const AvailableHourList = (props) => {
  const { data: hoursData } = props;

  return (
    <>
      {hoursData.map((item, index) => {
        return (
          <AvailableHourCard
            className="rounded-3"
            day={item.day}
            time={item.time}
            index={index}
          />
        );
      })}
    </>
  );
};

export default memo(AvailableHourList);
