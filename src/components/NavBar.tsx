import React from "react";
import { PageText } from "./generic/PageText";
import { Link } from "react-router-dom";
import style from "../styles";

const NavBar = () => {

  return (
    <div style={style.navbar} >
      <Link to="/">
        <PageText style={style.navbarText}>Homepage</PageText>
      </Link>
      <Link to="/CV">
        <PageText style={style.navbarText}>TEST</PageText>
      </Link>
    </div>
  );
};

export default NavBar;