/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

const Header = () => {
  return (
    <div className="Header">
      <Logo className="logo" >
      <span>Simpu</span>
      </Logo>
      <div className="left">
        <div className="oval">
          <span className="s">S</span>
        </div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <span className="organisation-name">Organisation Name</span>
        </div>
        <div>
          <i class="fas fa-angle-down icon-color" ></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
