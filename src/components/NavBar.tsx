import React from "react";
import { PageText } from "./generic/PageText";
import { Link } from "react-router-dom";
import style from "../styles";

const NavBar = () => {

  return (
    <div style={style.navbar} >
      <Link to="/">
        <button style={style.navbarButton}>
          <PageText style={style.navbarText}>Homepage</PageText>
        </button>
      </Link>
      <Link to="/CV">
        <button style={style.navbarButton}>
          <PageText style={style.navbarText}>TEST</PageText>
        </button>
      </Link>
    </div>
  );
};

export default NavBar;