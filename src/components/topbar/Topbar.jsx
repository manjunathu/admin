import React from "react";
import "./topbar.css";
import EcoIcon from "@material-ui/icons/Eco";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topLeft">
          <span className="logo">
            <EcoIcon />
            Spendly
            Admin
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />   
          </div>
          <div className="topbarIconContainer">
            <PersonIcon /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
