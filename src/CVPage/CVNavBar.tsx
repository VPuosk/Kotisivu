import React from "react";
import { Link } from "react-router-dom";
import style from "../styles";
import { PageText } from "../components/generic/PageText";

import pdffillet from '../static/CV_Vesa_Puoskari_2021_uusi.pdf';

const CVNavBar = () => {
  const path = "/Kotisivu/CV"
  return (
    <div style={{marginTop:10, display: 'flex'}}>
      <div style={style.navbar} >
        <Link to={`${path}`}>
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>Minä</PageText>
          </ button>
        </Link>
        <a href={pdffillet} rel="noopener noreferrer" target="_blank">
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>CV - pdf</PageText>
          </button>
        </a>
        <Link to={`${path}/HY`}>
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>Opintoja</PageText>
          </button>
        </Link>
        <Link to={`${path}/Muut`}>
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>Ohjelmointia</PageText>
          </button>
        </Link>
        <Link to={`${path}/Kuvat`}>
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>Kuvia</PageText>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CVNavBar