import React from "react";
import { PageText } from "./generic/PageText";
import { Link } from "react-router-dom";
import style from "../styles";
import DarkMode from "./DarkMode";

const NavBar = () => {

  return (
    <div style={{display: 'flex'}}>
      <div style={style.navbar} >
        <Link to="/Kotisivu">
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>Etusivu</PageText>
          </button>
        </Link>
        <Link to="/Kotisivu/CV">
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>Omat tiedot</PageText>
          </button>
        </Link>
        <Link to="/Kotisivu/Demo">
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>Demoja</PageText>
          </button>
        </Link>
        <DarkMode />
      </div>
    </div>
  );
};

export default NavBar;