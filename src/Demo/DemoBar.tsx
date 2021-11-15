import React from "react";
import { Link } from "react-router-dom";
import style from "../styles";
import { PageText } from "../components/generic/PageText";

const DemoBar = () => {
  return (
    <div style={{marginTop:10, display: 'flex'}}>
      <div style={style.navbar} >
        <Link to="/Demo">
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>Yleistä</PageText>
          </ button>
        </Link>
        <Link to="/Demo/Rivilasku">
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>Rivilasku</PageText>
          </button>
        </Link>
        <Link to="/Demo/BFS">
          <button style={style.navbarButton}>
            <PageText style={style.navbarText}>BFS</PageText>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default DemoBar
