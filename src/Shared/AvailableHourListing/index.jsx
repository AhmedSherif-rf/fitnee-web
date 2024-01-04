import moment from "moment";
import React, { memo } from "react";
import AvailableHourCard from "../AvailableHourCard";

const AvailableHourList = (props) => {
  const { data: hoursData } = props;

  return (
    <>
      {hoursData?.map((item, index) => {
        return (
          <AvailableHourCard
            className="rounded-3 BorderRadius bg-white"
            day={item.day}
            time={`${moment(item?.starttime, "HH:mm:ss").format(
              "h:mm a"
            )} - ${moment(item?.endtime, "HH:mm:ss").format("h:mm a")}`}
            index={index}
          />
        );
      })}
    </>
  );
};

export default memo(AvailableHourList);
