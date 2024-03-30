import { Card } from "reactstrap";
import React, { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../../HelperMethods/LoadingScreen";
import { USER_NOTIFICATIONS_URL } from "../../utils/constants";
import {
  markUserNotificationAsRead,
  getUserNotifications,
} from "../../Redux/features/User/userApi";

const Notification = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation("");
  const { notifications, loading } = useSelector((state) => state.user);

  useEffect(() => {
    fetchUserNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const markNotificationAsRead = (id) => {
    const data = {
      apiEndpoint: `${USER_NOTIFICATIONS_URL}${id}/`,
      requestData: JSON.stringify({ is_read: true }),
    };
    dispatch(markUserNotificationAsRead(data)).then((res) => {
      if (res.type === "markUserNotificationAsRead/fulfilled") {
        fetchUserNotifications();
      }
    });
  };

  const fetchUserNotifications = () => {
    const data = {
      apiEndpoint: USER_NOTIFICATIONS_URL,
    };
    dispatch(getUserNotifications(data));
  };

  return (
    <div className={`${i18n.dir()} w-100`}>
      {loading === "pending" && <LoadingScreen />}
      <h5 className="fw-bold my-2 p-4">{t("topBar.notificationsText")}</h5>

      {notifications.length === 0 ? (
        <div className="d-flex align-items justify-content-center h-100">
          <p className="my-4">{t("topBar.noNotificationsText")}</p>
        </div>
      ) : (
        notifications.map((notification, index) => (
          <Card key={index} className={`ms-1 border-0 px-2 mb-1`}>
            <div
              className={`BorderRadius p-3 ${
                !notification.is_read && "bgNotification"
              }`}
            >
              <div>
                <p className="mb-0 small">{notification?.body}</p>
              </div>

              <div
                className={`mx-1 ${
                  i18n.dir() === "ltr" ? "text-end" : "text-start"
                }`}
              >
                {!notification?.is_read && (
                  <div onClick={() => markNotificationAsRead(notification?.id)}>
                    <p className="small fw-bold mb-0 cursorPointer">
                      {t("topBar.markAsRead")}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default memo(Notification);
