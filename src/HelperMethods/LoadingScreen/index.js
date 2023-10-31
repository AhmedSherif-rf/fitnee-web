import React from "react";
import { Spinner } from "reactstrap";
import styles from "./style.module.scss";

const LoadingScreen = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Spinner className={styles.spinner} color={"warning"} type="grow" />
      </div>
    </>
  );
};

export default LoadingScreen;
