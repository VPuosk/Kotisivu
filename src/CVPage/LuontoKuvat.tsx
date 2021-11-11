import React from "react";
import style from "../styles";
import { PageText } from "../components/generic/PageText";

type kuvaTiedot = {
  id: string;
  osoite: string;
  kuvaus: string;
}

const kuvat : kuvaTiedot[] = [
  {
    id: "kuva01",
    osoite: "https://www.dropbox.com/s/mtnkna4rwp1cllz/Ruissalo_02.jpg?raw=1",
    kuvaus: "Luminen ja jäinen maisemakuva, Ruissalo.",
  },
  {
    id: "kuva02",
    osoite: "https://www.dropbox.com/s/fmm3wk1vlxtp92t/Ruissalo_05.jpg?raw=1",
    kuvaus: "Kukkivasta puu Ruissalon kasvitieteellinen puutarha.",
  },
  {
    id: "kuva03",
    osoite: "https://www.dropbox.com/s/2sb832en2y3i0vq/Ruissalo_06.jpg?raw=1",
    kuvaus: "Metsäinen polku Kuuvannokan tienoilta Ruissalosta.",
  },
  {
    id: "kuva04",
    osoite: "https://www.dropbox.com/s/cxjjl9kp3ktri4a/Mylly_01.jpg?raw=1",
    kuvaus: "Syksyinen polku Raision Myllyn seudulla.",
  },
  {
    id: "kuva05",
    osoite: "https://www.dropbox.com/s/sfup66mn2515ccv/Raisio_01_muokattu.jpg?raw=1",
    kuvaus: "Muokattu kuva syksyisestä polusta Raision Myllyn seudulla.",
  }
]

const LuontoKuvat = () => {
  //<a href={kuva.osoite} rel="noreferrer" target="_blank">
  //<img src={kuva.osoite} style={{width:'300px'}} alt={kuva.kuvaus} />
  //</a>
  return (
    <div>
      <div style={style.otsikkoTeksti}>
        <PageText>Luontokuvia Turun ympäristöstä</PageText>
      </div>
      <div style={{padding: 20}}>
        <div style={{display: 'flex', flexWrap: 'wrap', maxWidth: '800px', alignContent: 'space-between'}}>
        {kuvat.map(kuva => 
          <div key={kuva.id} style={{width:'40%', padding:20}}>
            <a href={kuva.osoite} rel="noreferrer" target="_blank">
              <img src={kuva.osoite} style={{width:'100%'}} alt={kuva.kuvaus} />
            </a>
            <PageText>{kuva.kuvaus}</PageText>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default LuontoKuvat