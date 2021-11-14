import React from "react";
import { PageText } from "../components/generic/PageText";
import style from "../styles";

const tekstiOsa : string[] = [
  "Olen osallistunut FreeSpace 2 Open pelimoottorin muokkaamiseen osana 'the Source Code Project' (myöhemmin 'SCP') projektia - pelimoottori oli alunperin FreeSpace 2 pelin pelimoottori, jonka julkaisija oli avannut vapaaseen ei-kaupalliseen levitykseen (tosin vain pelimoottorin, ei varsinaista dataa). Aloitin pelin parissa vain pelailemalla, mutta siirryin aika nopeasti muokkaamaan pelin data (ASCII) tiedostoja. Kun pyytämiäni koodimuokkauksia ei toteutettu, päätin ohjelmoida kyseessä olevat kohdat itse. Tämä johdatti minut opettelemaan ohjelmointia C/C++ kielillä joilla pelimoottori oli alunperin julkaistu. SCP:ssä tapana oli, että koodiin sai luvan lisätä omia osioita, kunhan ensin korjasi tietyn määrän Mantis -alustalla ilmoitettuja bugeja. Lisäksi kaiken uuden ohjelmakoodin tuli olla 100% taaksepäin yhteensopivaa.",
  "Tämä prosessi tutustutti minut varsin monipuolisesti toimintaan koodin, ohjelmoijien, datan, modaajien, sekä varsinaisten pelaajien välillä. Raportoidut virheet vaihtelivat kaikesta pelaajien omasta tekemisestä aina pelimoottorin keskeisiin osiin saakka (esim. liukulukulaskennan epätarkkuuteen pelimaailman 'ulkorajoilla'). Kävin läpi kaikenlaista pelin varsinaisen logiikan puolella, mutta en juurikaan koskenut grafiikkamoottoriin tai suoraan käyttöjärjestelmäintegraatioon (peli oli alunperin vain Windows-pohjainen, mutta muokattiin myös Linux ja Mac yhteensopivaksi SCP projektissa.",
  "Omat muokkaukseni keskittyivät irrottamaan 'kovakoodattuja' ominaisuuksia irti C/C++ koodista ja antamaan nämä modaajien saataville mahdollistamalla näiden tietojen muokkauksen tekstitiedostojen kautta. Lisäsin myös paljon toivottuja ominaisuuksia peliin, ja käsittelin paljon etenkin pelin alusten tekoälyn käyttämiä ominaisuuksia, ja muokkasin myös tekoälyn toimintaa. Lua-skriptauskielen tultua integroiduksi koitin edistää sen käyttöä tuottamalla joitain muokkaajien ja bugien etsintätyökaluja, mutta rakensin myös Lua-parserin, parannetun hiirikontrollin (peli oli suunniteltu joystickille) ja käytin skriptausta efektien lisäämiseen peliin.",
  "Otin osaa useisiin modeihin ja totaalikonversioihin. Autoin myös ratkaisemaan monia muiden modaajien ja muokkausten aiheuttamia tai muutoin esille tuomia ongelmia ja bugeja."
]

export const FS2data = [
  {
    id: 'E1',
    muokkaus: 'Diaspora: Shattered Armistice',
    perustuu: 'Battlestar Galactica (tv-sarja v. 2004-)',
    linkki: "https://diaspora.hard-light.net/index.html"
  },
  {
    id: 'E2',
    muokkaus: 'The Babylon Project',
    perustuu: 'Babylon 5 (tv-sarja v. 1993-)',
    linkki: "https://babylon.hard-light.net/"
  },
  {
    id: 'E3',
    muokkaus: 'Wing Commander Saga',
    perustuu: 'Wing Commander (pelisarja, etenkin Wing Commander III)',
    linkki: "https://www.wcsaga.com/"
  }
]

export const opinnotCB = [
  {
    id: 'A1',
    nimi: "CodeBootcamp",
    kieli: "JavaScript",
    tarkennus: "Kurssin keskeinen alue oli web-sovellukset"
  },
  {
    id: 'A2',
    nimi: "CodeBootcamp - projektityö",
    kieli: "C#",
    tarkennus: "Dotnet ja ASP MVC ympäristön käyttöä"
  }
]

export const ohjelmoinnit = [
  {
    id: 'B1',
    nimi: "Ensimmäiset ohjelmoinnit",
    kieli: "Basic",
  },
  {
    id: 'B2',
    nimi: "Roolipelitietojen generaattoreita",
    kieli: "Basic"
  },
  {
    id: 'B3',
    nimi: "Roolipelitietojen generaattoreita",
    kieli: "C/C++",
  },
  {
    id: 'B4',
    nimi: "FreeSpace 2 Open - Source Code Project",
    kieli: "C/C++",
    tarkennus: "Pelimoottorin ohjelmointikieli"
  },
  {
    id: 'B5',
    nimi: "FreeSpace 2 Open - Source Code Project",
    kieli: "Lua",
    tarkennus: "Pelimoottorin skriptauskieli"
  }
]

type FSTiedot = {
  id: string,
  muokkaus: string,
  perustuu: string,
  linkki: string,
}

interface FSPropsi {
  modiTiedot: FSTiedot,
}

type Tiedot = {
  id: string;
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
          <PageText style={{ width: "100px" }}>{opinnonTiedot.kieli}</PageText>
          <PageText style={{ minWidth: "100px" }}>{opinnonTiedot.nimi}</PageText>
        </div>
        <div style={style.muutOhjelmointiRivi}>
          <span style={{ width: "100px"}}/>
          <PageText style={{ minWidth: "100px" }}>{opinnonTiedot.tarkennus}</PageText>
        </div>
      </div>
    </>
  )
}

const FSmodi = ({ modiTiedot }: FSPropsi) => {
  return (
    <>
      <div style={style.muutOhjelmointiPalkki}>
        <div style={style.muutOhjelmointiRivi}>
          <PageText style={{ width: "50%" }}>{modiTiedot.muokkaus}</PageText>
          <PageText style={{ width: "50%" }}>{modiTiedot.perustuu}</PageText>
        </div>
        <div style={style.muutOhjelmointiRivi}>
          <span style={{ width: "20px"}}/>
          <a href={modiTiedot.linkki}> 
            <PageText >{modiTiedot.linkki}</PageText>
          </a>
        </div>
      </div>
    </>
  )
}

const MuutOpinnot = () => {
  return (
    <div>
      <div>
        <div style={style.otsikkoTeksti}>
          <PageText>CodeBootCamp koulutus</PageText>
        </div>
        <div style={style.CVlist}>
          <div style={style.CVitemHeader}>
            <PageText style={{ width: "100px" }}>Kieli</PageText>
            <PageText style={{ minWidth: "100px" }}>Kuvaus</PageText>
          </div>
          <hr style={style.CVHR}  />
          {opinnotCB.map(opinto =>
            <div key={opinto.id} style={style.CVitemBar}>
              <Opinto opinnonTiedot={opinto} />
            </div>
          )}
        </div>
      </div>
      <div>
        <div style={style.otsikkoTeksti}>
          <PageText>Muu ohjelmointi</PageText>
        </div>
        <div style={style.CVlist}>
          <div style={style.CVitemHeader}>
            <PageText style={{ width: "100px" }}>Kieli</PageText>
            <PageText style={{ minWidth: "100px" }}>Kuvaus</PageText>
          </div>
          <hr style={style.CVHR}  />
          {ohjelmoinnit.map(opinto =>
            <div key={opinto.id} style={style.CVitemBar}>
              <Opinto opinnonTiedot={opinto} />
            </div>
          )}
        </div>
      </div>
      <div>
        <div style={style.otsikkoTeksti}>
          <PageText>FreeSpace 2 Open ohjelmointi</PageText>
        </div>
        {tekstiOsa.map(osio =>
        <div style={style.tekstiLaatikko} key={osio}>
          <PageText>{osio}</PageText>
        </div>
        )}
        <div style={style.CVlist}>
          <div style={style.CVitemHeader}>
            <PageText style={{ width: "50%" }}>Muokkaus</PageText>
            <PageText style={{ width: "50%" }}>Perustuu</PageText>
          </div>
          <hr style={style.CVHR}  />
          {FS2data.map(data =>
            <div key={data.id} style={style.CVitemBar}>
              <FSmodi modiTiedot={data} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MuutOpinnot