import React from "react";
import { PageText } from "../components/generic/PageText";
import style from "../styles";

export const opinnotCB = [
  {
    nimi: "CodeBootcamp",
    kieli: "JavaScript",
    tarkennus: "Kurssin keskeinen alue oli web-sovellukset"
  },
  {
    nimi: "CodeBootcamp - projektityö",
    kieli: "C#",
    tarkennus: "Dotnet ja ASP MVC ympäristön käyttöä"
  }
]

export const ohjelmoinnit = [
  {
    nimi: "Ensimmäiset ohjelmoinnit",
    kieli: "Basic",
  },
  {
    nimi: "Roolipelitietojen generaattoreita",
    kieli: "Basic"
  },
  {
    nimi: "Roolipelitietojen generaattoreita",
    kieli: "C/C++",
  },
  {
    nimi: "FreeSpace 2 Open - Source Code Project",
    kieli: "C/C++",
    tarkennus: "Pelimoottorin ohjelmointikieli"
  },
  {
    nimi: "FreeSpace 2 Open - Source Code Project",
    kieli: "Lua",
    tarkennus: "Pelimoottorin skriptauskieli"
  }
]

type Tiedot = {
  nimi: string;
  kieli: string;
  tarkennus?: string;
}

interface OpintoPropsi {
  opinnonTiedot: Tiedot,
}

const Opinto = ({ opinnonTiedot }: OpintoPropsi) => {
  return (
    <>
      <div style={style.muutOhjelmointiPalkki}>
        <div style={style.muutOhjelmointiRivi}>
          <PageText style={{ width: "15%" }}>{opinnonTiedot.kieli}</PageText>
          <PageText style={{ width: "85%" }}>{opinnonTiedot.nimi}</PageText>
        </div>
        <div style={style.muutOhjelmointiRivi}>
          <span style={{ width: "15%"}}/>
          <PageText style={{ width: "85%" }}>{opinnonTiedot.tarkennus}</PageText>
        </div>
      </div>
      
      
    </>
  )
}

const MuutOpinnot = () => {
  return (
    <div>
      <div style={style.CVlist}>
        <div style={style.CVitemHeader}>
          <PageText style={{ width: "15%" }}>Kieli</PageText>
          <PageText style={{ width: "85%" }}>Kuvaus</PageText>
        </div>
        <hr style={style.CVHR}  />
        {opinnotCB.map(opinto =>
          <div key={opinto.nimi} style={style.CVitemBar}>
            <Opinto opinnonTiedot={opinto} />
          </div>
        )}
      </div>
      <div style={style.CVlist}>
        <div style={style.CVitemHeader}>
          <PageText style={{ width: "15%" }}>Kieli</PageText>
          <PageText style={{ width: "85%" }}>Kuvaus</PageText>
        </div>
        <hr style={style.CVHR}  />
        {ohjelmoinnit.map(opinto =>
          <div key={opinto.nimi} style={style.CVitemBar}>
            <Opinto opinnonTiedot={opinto} />
          </div>
        )}
      </div>
    </div>
  )
}

export default MuutOpinnot