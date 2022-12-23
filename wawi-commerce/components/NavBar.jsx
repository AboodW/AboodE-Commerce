import React from "react";
import Link from "next/link";

import { AiOutlineShopping } from "react-icons/ai";

const NavBar = () => {
  return (
    <div>
      <div className="navbar-container">
        <p className="logo">
          <Link href="/">Wawi Store</Link>
        </p>

        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">1</span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
