import React from "react";
import styles from "./FormComponents.module.css";

const Password = () => {
  return (
    <div className={styles.inputBox}>
      <input type="password" placeholder="Password" />
    </div>
  );
};

export default Password;
