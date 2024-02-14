import { Card } from "reactstrap";
import React, { memo } from "react";
import FillBtn from "../Buttons/FillBtn";
import { useTranslation } from "react-i18next";
import OutlineBtn from "../Buttons/OutlineBtn";
import { useSelector } from "react-redux";

const Notification = () => {
  const { t, i18n } = useTranslation("");
  const { notifications } = useSelector((state) => state.user);

  console.log(notifications);

  return (
    <div className={`${i18n.dir()} w-100`}>
      {" "}
      <h5 className="fw-bold my-2 p-4">{t("topBar.notificationsText")}</h5>
      {notifications.map((notification, index) => (
        <Card key={index} className={` ms-1 border-0 px-2`}>
          <div
            className={`BorderRadius p-3 ${
              !notification.is_read && "bgNotification"
            }`}
          >
            <div>
              <h6 className="fw-bold mb-0">{notification.title}</h6>
              <p className="mb-0 small">{notification.text}</p>
            </div>

            <div className="mx-1 text-end">
              {!notification.is_read && (
                <h6 className="small fw-bold mb-0">{t("topBar.markAsRead")}</h6>
              )}
            </div>
          </div>
          <br />
        </Card>
      ))}
    </div>
  );
};

export default memo(Notification);
