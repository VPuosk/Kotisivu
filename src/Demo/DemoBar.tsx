import React from "react";
import { Link } from "react-router-dom";
import style from "../styles";
import { PageText } from "../components/generic/PageText";

const DemoBar = () => {
  const path = "/Kotisivu/Demo"
  return (
    <div style={{marginTop:10, display: 'flex'}}>
      <div style={style.navbar} >
        <Link to={`${path}`}>
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>Yleistä</PageText>
          </ button>
        </Link>
        <Link to={`${path}/Rivilasku`}>
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>Rivilasku</PageText>
          </button>
        </Link>
        <Link to={`${path}/BFS`}>
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>BFS</PageText>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default DemoBar
