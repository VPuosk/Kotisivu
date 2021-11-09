import React from "react";
import { Link } from "react-router-dom";
import style from "../styles";
import { PageText } from "../components/generic/PageText";

import pdffillet from '../static/CV_Vesa_Puoskari_2021_uusi.pdf';

const CVNavBar = () => {
  return (
    <div style={{padding:10}}>
      <div style={style.navbar} >
        <Link to="/CV">
          <PageText style={style.navbarText}>Curriculum Vitae</PageText>
        </Link>
        <a href={pdffillet} rel="noopener noreferrer" target="_blank">
          <PageText style={style.navbarText}>CV - pdf</PageText>
        </a>
        <Link to="/CV/HY">
          <PageText style={style.navbarText}>Ohjelmointia - HY</PageText>
        </Link>
        <Link to="/CV/Muut">
          <PageText style={style.navbarText}>Ohjelmointia - Muut</PageText>
        </Link>
      </div>
    </div>
  )
}

export default CVNavBar