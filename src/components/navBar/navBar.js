import React from "react";

import Logo from "../Logo/Logo.js";
import Search from "../Search/Search.js";
import Date from "../date/date.js";
import logo from "../../img/logo.jpeg";
import "./navBar.css";

function navBar(props) {
  return (
    <div className="navbar">
      <div className="leftNav">
        <Logo src={logo} />
        <Search />
      </div>
      <div className="rightNav">
        <Date />
      </div>
    </div>
  );
}

export default navBar;
