import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";

const Header = () => {
  return (
    <div className="borders">
      
      <div className="left-header">
        <img src="/images/img.jpg"/>
      </div>

      <div className="right-header">

        <div className="item-1">
          <NotificationsActiveIcon />
        </div>
        <div className="item">
          <img src='/images/img1.jpg' />
        </div>
        <div className="items-text">
          <h6>Akkarapol </h6>
        </div>
        <div className="items-icon">
        <ArrowDropDownIcon />
        </div>

      </div>

    </div>
  );
};

export default Header;
