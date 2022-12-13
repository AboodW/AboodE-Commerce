import React, { useState, useContext, createContest } from "react";
import styles from "./SignInBox.module.css";
const SignInBox = () => {
  return (
    <>
      <div className={styles.content}>
        <h2>Sign In</h2>
        <form>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Username" />
          </div>
          <div className={styles.inputBox}>
            <input type="password" placeholder="Password" />
          </div>
          <div className={styles.inputBox}>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInBox;
