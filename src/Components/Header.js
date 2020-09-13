import React, { useState } from "react";
import "../CSS/Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
function Header() {
  const [{ user }] = useStateValue();

  const handleSignIn = e => auth.signOut();

  return (
    <div className="header">
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleSignIn} className="header__option">
            <span className="header__optionLineOne">
              Hello,
              {!user
                ? " Guest"
                : ` ${user.email.substr(0, user.email.indexOf("@"))}`}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/">
          <div className="header__option">
            <span className="header__option2">View all stories</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
