import React from "react";
import { Link } from "react-router-dom";
import style from "../styles";
import { PageText } from "./generic/PageText";
import pdffillet from "../static/CV_Vesa_Puoskari_2021_uusi.pdf";

const EtuSivu = () => {
  return (
    <>
      <div style={style.tekstiLaatikko}>
        <PageText>
          Pienimuotoinen kotisivu, jossa kerron itsestäni, ja esittelen
          joitakuita demoja. Demo-osuus on pahasti kesken, eli se ei vielä
          toimi.
        </PageText>
      </div>
      <div style={style.tekstiLaatikko}>
        <PageText>
          Omia ohjelmointiprojektejani löytyy GitHub:sta, osoitteesta{" "}
          <a href="https://github.com/VPuosk">https://github.com/VPuosk</a>,
          pääosa näistä koostuu opiskeluprojekteista (Yliopisto, Udemy). Mukana
          on muitakin, kuten kuten Pythonilla kirjoitettu toteutus{" "}
          <a href="https://github.com/VPuosk/python_Dijkstra">
            Dijkstran algoritmista
          </a>
          , ja .NET teknologialla (MVC tyyppinen, C# ja JavaScript) toteuttu{" "}
          <a href="https://github.com/VPuosk/Bootcamp-projekti">
            kurssiprojekti
          </a>
          .
        </PageText>
      </div>
      <div style={style.tekstiLaatikko}>
        <PageText>
          Ohessa myös linkit{" "}
          <Link to="Kotisivu/CV/HY">yliopisto opintoihini</Link>,{" "}
          <Link to="Kotisivu/CV/Muut">muihin opintoihini (mm. Udemy)</Link> ja
          myös{" "}
          <a href={pdffillet} rel="noopener noreferrer" target="_blank">
            CV dokumenttiin
          </a>
          .
        </PageText>
      </div>
    </>
  );
};

export default EtuSivu;
