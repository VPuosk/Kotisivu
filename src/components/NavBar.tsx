import React from "react";
import { PageText } from "./generic/PageText";
import { Link } from "react-router-dom";
import style from "../styles";

const NavBar = () => {

  return (
    <div style={{display: 'flex'}}>
      <div style={style.navbar} >
        <Link to="/">
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>Etusivu</PageText>
          </button>
        </Link>
        <Link to="/CV">
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>Omat tiedot</PageText>
          </button>
        </Link>
        <Link to="/Demo">
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>Demoja</PageText>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;