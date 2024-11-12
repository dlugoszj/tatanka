import React from "react";

import "./css/Menus.css";
import "../../public/css/fonts.css";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar-home">
        <div className="krzysztof">
          <a href="/">K R Z Y S Z T O F &nbsp; D L U G O S Z</a>
        </div>
        <div className="other-menu-opts">
          <a href="/"> PORTFOLIO </a>
          <a href="/"> BLOG </a>
          <a href="/"> ABOUT </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
