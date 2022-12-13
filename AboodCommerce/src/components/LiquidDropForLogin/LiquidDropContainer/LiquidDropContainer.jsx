import React from "react";
import styles from "./LiquidDropContainer.module.css";
import SignInBox from "../SignIn/SignInBox";
import { BrowserRouter as Router, Link } from "react-router-dom";

const LiquidDropContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.drop}>
        <SignInBox />
      </div>
      <Router>
        <Link to="/" className={styles.forgetPassword}>
          Forget Password
        </Link>
        <Link to="/" className={styles.signUp}>
          Sign Up
        </Link>
      </Router>
    </div>
  );
};

export default LiquidDropContainer;
