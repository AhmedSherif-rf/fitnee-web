import React, { memo } from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

const NotificationToaster = (props) => {
  const { i18n } = useTranslation("");
  const { showNotification, setShowNotification, notificationData } = props;

  return (
    <div className={`${styles.toaster} ${i18n.dir()}`}>
      <Toast className={`${styles.toaster}`} isOpen={showNotification}>
        <ToastHeader
          className={`${styles.toasterHeader}`}
          toggle={() => setShowNotification(false)}
        >
          {notificationData?.title}
        </ToastHeader>
        <ToastBody className={`${styles.toasterBody}`}>
          {notificationData?.body}
        </ToastBody>
      </Toast>
    </div>
  );
};

export default memo(NotificationToaster);
