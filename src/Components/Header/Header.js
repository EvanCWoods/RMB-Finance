import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Assets/Styles/Header/header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-contnet">
        <a href="/" className="header-item">
          Services
        </a>
        <a href="/" className="header-item">
          Contact us
        </a>
      </div>
    </div>
  );
}

export default Header;
