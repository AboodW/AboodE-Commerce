import React from "react";
import styles from "./FormComponents.module.css";

const LoginButton = () => {
  return (
    <div className={styles.inputBox}>
      <input type="submit" value="Login" />
    </div>
  );
};

export default LoginButton;
