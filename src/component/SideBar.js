import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidenav">

      <div className="top-side-bar">
        <img src="/images/img.jpg" />
      </div>

      <div className="middle-side-bar">
        <img src="/images/img2.jpg" />
        <div className="text">
          <h5>Place</h5>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
