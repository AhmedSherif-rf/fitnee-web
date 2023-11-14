import React from "react";
import { Spinner } from "reactstrap";
import styles from "./style.module.scss";

const LoadingScreen = () => (
  <div className={styles.loadingOverlay}>
    <div className={styles.loadingContent}>
      <Spinner className={styles.spinner} color={"custom"} type="grow" />
    </div>
  </div>
);

export default LoadingScreen;
