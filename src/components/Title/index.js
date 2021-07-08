import React from "react";

import "./index.css";
import logo from "../../assets/logos/logo.png";

function Title() {
  return (
    <header className="header-title">
      <img src={logo} alt="logo" />
      <h1 className="title">Consulta GitHub</h1>
    </header>
  );
}

export default Title;
