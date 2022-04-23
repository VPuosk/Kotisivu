import React from "react";
import { PageText } from "../components/generic/PageText";
import style from "../styles";

const tekstiOsa: string[] = [
  "Olen osallistunut FreeSpace 2 Open pelimoottorin muokkaamiseen osana 'the Source Code Project' (myöhemmin 'SCP') projektia - pelimoottori oli alunperin FreeSpace 2 pelin pelimoottori, jonka julkaisija oli avannut vapaaseen ei-kaupalliseen levitykseen (tosin vain pelimoottorin, ei varsinaista dataa). Aloitin pelin parissa vain pelailemalla, mutta siirryin aika nopeasti muokkaamaan pelin data (ASCII) tiedostoja. Kun pyytämiäni koodimuokkauksia ei toteutettu, päätin ohjelmoida kyseessä olevat kohdat itse. Tämä johdatti minut opettelemaan ohjelmointia C/C++ kielillä joilla pelimoottori oli alunperin julkaistu. SCP:ssä tapana oli, että koodiin sai luvan lisätä omia osioita, kunhan ensin korjasi tietyn määrän Mantis -alustalla ilmoitettuja bugeja. Lisäksi kaiken uuden ohjelmakoodin tuli olla 100% taaksepäin yhteensopivaa.",
  "Tämä prosessi tutustutti minut varsin monipuolisesti toimintaan koodin, ohjelmoijien, datan, modaajien, sekä varsinaisten pelaajien välillä. Raportoidut virheet vaihtelivat kaikesta pelaajien omasta tekemisestä aina pelimoottorin keskeisiin osiin saakka (esim. liukulukulaskennan epätarkkuuteen pelimaailman 'ulkorajoilla'). Kävin läpi kaikenlaista pelin varsinaisen logiikan puolella, mutta en juurikaan koskenut grafiikkamoottoriin tai suoraan käyttöjärjestelmäintegraatioon (peli oli alunperin vain Windows-pohjainen, mutta muokattiin myös Linux ja Mac yhteensopivaksi SCP projektissa.",
  "Omat muokkaukseni keskittyivät irrottamaan 'kovakoodattuja' ominaisuuksia irti C/C++ koodista ja antamaan nämä modaajien saataville mahdollistamalla näiden tietojen muokkauksen tekstitiedostojen kautta. Lisäsin myös paljon toivottuja ominaisuuksia peliin, ja käsittelin paljon etenkin pelin alusten tekoälyn käyttämiä ominaisuuksia, ja muokkasin myös tekoälyn toimintaa. Lua-skriptauskielen tultua integroiduksi koitin edistää sen käyttöä tuottamalla joitain muokkaajien ja bugien etsintätyökaluja, mutta rakensin myös Lua-parserin, parannetun hiirikontrollin (peli oli suunniteltu joystickille) ja käytin skriptausta efektien lisäämiseen peliin.",
  "Otin osaa useisiin modeihin ja totaalikonversioihin. Autoin myös ratkaisemaan monia muiden modaajien ja muokkausten aiheuttamia tai muutoin esille tuomia ongelmia ja bugeja.",
];

export const FS2data = [
  {
    id: "E1",
    muokkaus: "Diaspora: Shattered Armistice",
    perustuu: "Battlestar Galactica (tv-sarja v. 2004-)",
    linkki: "https://diaspora.hard-light.net/index.html",
  },
  {
    id: "E2",
    muokkaus: "The Babylon Project",
    perustuu: "Babylon 5 (tv-sarja v. 1993-)",
    linkki: "https://babylon.hard-light.net/",
  },
  {
    id: "E3",
    muokkaus: "Wing Commander Saga",
    perustuu: "Wing Commander (pelisarja, etenkin Wing Commander III)",
    linkki: "https://www.wcsaga.com/",
  },
];

export const opinnotSaranen = [
  {
    id: "A1",
    nimi: "Code Bootcamp",
    kieli: "Useita",
    tarkennus: "Ohjelmistokehityksen koulutusta eri kielillä ja menetelmillä",
  },
  {
    id: "A2",
    nimi: "Digi Talent Pro",
    kieli: "Useita",
    tarkennus: "Ohjelmistokehityksen koulutusta eri kielillä ja menetelmillä",
  },
];

export const ohjelmoinnit = [
  {
    id: "B1",
    nimi: "Ensimmäiset ohjelmoinnit",
    kieli: "Basic",
  },
  {
    id: "B2",
    nimi: "Roolipelitietojen generaattoreita",
    kieli: "Basic",
  },
  {
    id: "B3",
    nimi: "Roolipelitietojen generaattoreita",
    kieli: "C/C++",
  },
  {
    id: "B4",
    nimi: "FreeSpace 2 Open - Source Code Project",
    kieli: "C/C++",
    tarkennus: "Pelimoottorin ohjelmointikieli",
  },
  {
    id: "B5",
    nimi: "FreeSpace 2 Open - Source Code Project",
    kieli: "Lua",
    tarkennus: "Pelimoottorin skriptauskieli",
  },
];

const udemyKurssit = [
  {
    id: "udemy1",
    nimi: "Python Django - The Practical Guide",
    kieli: "Python",
    tunniste: "ude.my/UC-b3ab92ea-9ad5-40e1-ada7-ab0f38061e44",
    pituus: "23 h",
  },
  {
    id: "udemy2",
    nimi: "Build a Backend REST API with Python & Django - Advanced",
    kieli: "Python",
    tunniste: "ude.my/UC-89900638-1269-4d50-8d33-651934b01ad5",
    pituus: "8 h",
  },
  {
    id: "udemy3",
    nimi: "Clean Code",
    kieli: " - ",
    tunniste: "ude.my/UC-5377a240-cf20-4986-b126-bbd531cd1d94",
    pituus: "6.5 h",
  },
  {
    id: "udemy4",
    nimi: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    kieli: "React (JS)",
    tunniste: "ude.my/UC-9f230b46-492c-45a4-927a-53807dda9c4e",
    pituus: "48.5 h",
  },
  {
    id: "udemy5",
    nimi: "Understanding TypeScript - 2022 Edition",
    kieli: "TypeScript",
    tunniste: "ude.my/UC-7de0f69b-f9dc-46d4-bbee-b14b5477e924",
    pituus: "15 h",
  },
  {
    id: "udemy6",
    nimi: "NestJS Zero to Hero - Modern TypeScript Back-end Development",
    kieli: " - ",
    tunniste: "ude.my/UC-085e37c9-eb1b-478a-9f1e-fd6162f8190c",
    pituus: "9 h",
  },
  {
    id: "udemy7",
    nimi: "Learn Apache Camel Framework with Spring Boot",
    kieli: "Java",
    tunniste: "ude.my/UC-164fb6c0-fb06-4f04-b009-9ae88faf1f8b",
    pituus: "4 h",
  },
  {
    id: "udemy8",
    nimi: "Next.js & React - The Complete Guide (incl. Two Paths!)",
    kieli: "React (JS)",
    tunniste: "ude.my/UC-88afef65-a41c-43ae-851c-4108a358185d",
    pituus: "25 h",
  },
  {
    id: "udemy9",
    nimi: "MERN Stack Course 2022 - MongoDB, Express, React and NodeJS",
    kieli: "React (JS)",
    tunniste: "ude.my/UC-c0bfdec0-afa9-4fb9-9ebd-c6cc5633cc39",
    pituus: "18.5 h",
  },
  {
    id: "udemy10",
    nimi: "React Styled Components Course (V5)",
    kieli: "React (JS)",
    tunniste: "ude.my/UC-ce066d1e-c7e3-4517-a5d1-988fb25eee04",
    pituus: "3 h",
  },
];

type Udemy = {
  id: string;
  nimi: string;
  tunniste: string;
  pituus: string;
  kieli: string;
};

interface IUdemyKurssi {
  kurssiTiedot: Udemy;
}

type FSTiedot = {
  id: string;
  muokkaus: string;
  perustuu: string;
  linkki: string;
};

interface FSPropsi {
  modiTiedot: FSTiedot;
}

type Tiedot = {
  id: string;
  nimi: string;
  kieli: string;
  tarkennus?: string;
};

interface OpintoPropsi {
  opinnonTiedot: Tiedot;
}

const UdemyKurssi = ({ kurssiTiedot }: IUdemyKurssi) => {
  return (
    <>
      <div style={style.muutOhjelmointiPalkki}>
        <div style={style.muutOhjelmointiRivi}>
          <PageText style={{ width: "100px" }}>{kurssiTiedot.kieli}</PageText>
          <PageText style={{ minWidth: "100px" }}>{kurssiTiedot.nimi}</PageText>
        </div>
        <div style={style.muutOhjelmointiRivi}>
          <span style={{ width: "100px" }} />
          <PageText style={{ width: "50px" }}>{kurssiTiedot.pituus}</PageText>
          <PageText style={{ minWidth: "100px" }}>
            {kurssiTiedot.tunniste}
          </PageText>
        </div>
      </div>
    </>
  );
};

const Opinto = ({ opinnonTiedot }: OpintoPropsi) => {
  return (
    <>
      <div style={style.muutOhjelmointiPalkki}>
        <div style={style.muutOhjelmointiRivi}>
          <PageText style={{ width: "100px" }}>{opinnonTiedot.kieli}</PageText>
          <PageText style={{ minWidth: "100px" }}>
            {opinnonTiedot.nimi}
          </PageText>
        </div>
        <div style={style.muutOhjelmointiRivi}>
          <span style={{ width: "100px" }} />
          <PageText style={{ minWidth: "100px" }}>
            {opinnonTiedot.tarkennus}
          </PageText>
        </div>
      </div>
    </>
  );
};

const FSmodi = ({ modiTiedot }: FSPropsi) => {
  return (
    <>
      <div style={style.muutOhjelmointiPalkki}>
        <div style={style.muutOhjelmointiRivi}>
          <PageText style={{ width: "50%" }}>{modiTiedot.muokkaus}</PageText>
          <PageText style={{ width: "50%" }}>{modiTiedot.perustuu}</PageText>
        </div>
        <div style={style.muutOhjelmointiRivi}>
          <span style={{ width: "20px" }} />
          <a href={modiTiedot.linkki}>
            <PageText>{modiTiedot.linkki}</PageText>
          </a>
        </div>
      </div>
    </>
  );
};

const MuutOpinnot = () => {
  return (
    <div>
      <div>
        <div style={style.otsikkoTeksti}>
          <PageText>Saranen Consulting -koulutukset</PageText>
        </div>
        <div style={style.CVlist}>
          <div style={style.CVitemHeader}>
            <PageText style={{ width: "100px" }}>Kieli</PageText>
            <PageText style={{ minWidth: "100px" }}>Kuvaus</PageText>
          </div>
          <hr style={style.CVHR} />
          {opinnotSaranen.map((opinto) => (
            <div key={opinto.id} style={style.CVitemBar}>
              <Opinto opinnonTiedot={opinto} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={style.otsikkoTeksti}>
          <PageText>Udemy-kursseja</PageText>
        </div>
        <div style={style.CVlist}>
          <div style={style.CVitemHeader}>
            <PageText style={{ width: "100px" }}>Kieli</PageText>
            <PageText style={{ minWidth: "100px" }}>Kuvaus</PageText>
          </div>
          <hr style={style.CVHR} />
          {udemyKurssit.map((opinto) => (
            <div key={opinto.id} style={style.CVitemBar}>
              <UdemyKurssi kurssiTiedot={opinto} />
            </div>
          ))}
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
          <hr style={style.CVHR} />
          {ohjelmoinnit.map((opinto) => (
            <div key={opinto.id} style={style.CVitemBar}>
              <Opinto opinnonTiedot={opinto} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={style.otsikkoTeksti}>
          <PageText>FreeSpace 2 Open ohjelmointi</PageText>
        </div>
        {tekstiOsa.map((osio) => (
          <div style={style.tekstiLaatikko} key={osio}>
            <PageText>{osio}</PageText>
          </div>
        ))}
        <div style={style.CVlist}>
          <div style={style.CVitemHeader}>
            <PageText style={{ width: "50%" }}>Muokkaus</PageText>
            <PageText style={{ width: "50%" }}>Perustuu</PageText>
          </div>
          <hr style={style.CVHR} />
          {FS2data.map((data) => (
            <div key={data.id} style={style.CVitemBar}>
              <FSmodi modiTiedot={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MuutOpinnot;
