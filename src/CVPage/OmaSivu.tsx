import React from "react";
import { PageText } from "../components/generic/PageText";
import style from "../styles";

const omaKertomus : string[] = [
  "Eli miksi CV:ssäni ja työhistoriassani on suuri musta aukko... Olin lapsena kaikilla lomillani lähestulkoon aina isoäitini hoidossa Lapissa ja siten minulla oli huomattavan läheiset suhteet häneen. Hän oli kuitenkin iäkäs ja sairastui vakavasti uuden vuosituhannen alussa. Piakkoin hän ei enää pärjännyt yksin (isoisäni oli kuollut hoitovirheen johdosta jo aiemmin) ja hänet täytyi siirtää hoitokotiin. Vain noin vuotta myöhemmin hän menehtyi. Tämä kosketti minua erittäin syvästi.",
  "Olin tässä vaiheessa saanut maisterin opintoni yliopistossa lähes valmiiksi, ja olin jo tekemässä erikoistyötäni. Sain erikoistyöni tehdyksi ja sen selostuksen valmiiksi, mutta en siinä mielentilassa mikä minulla oli pystynyt kirjoittamaan varsinaista Pro Gradua loppuun saakka. Kirjoitin sen lähes valmiiksi useaan otteeseen, mutta kyennyt ylittämään maaliviiva. Tavallaan gradu assosioitui isoäitini kuolemaan. En myöskään osannut pyytää apua tähän ongelmaan, jolloin yliopistolta tullut opastus ja patistus oli lähinnä enemmän haitaksi kuin hyödyksi.",
  "Tämä jätti gradun kuin limboon. Etenkin kun tähän liittyvä erikoistyö ei varsinaisesti tuottanut toivottua tulosta - tämä tosin johtui ohjaajien oletuksista jotka eivät toteutuneet. Tällä välin opettelin itse ohjelmoimaan, tein keikkatöitä 'firaabelina' turvakameroiden asennuksessa ja tietokoneiden asentamisessa. Palasin kuitenkin aina takaisin tuohon graduun, mutta sen saaminen valmiiksi oli uskomattoman vaikeaa. Lopulta pakotin itseni kohtaamaan tuon ja tein kaikki lopputentit ennen gradun lopullista kirjoittamista. Asian osaamisesta ei mikään ollut kiinni, lopputentit menivät läpi arvosanoilla 5/5, 5/5 ja 4/5. Gradukin valmistui lopulta nopeasti tämän jälkeen.",
]

const omaKuvaus : string[] = [
  "Olen tietotekniikasta ja tietojenkäsittelystä kiinnostunut vuonna 1981 syntynyt elintarvikekemian maisteri. Luonteeltani olen rauhallinen, harkitsevainen, ja tulen helposti toimeen muiden kanssa. Olen innokas oppimaan uutta etenkin tietotekniikan alalta.",
  "Harrastan pelaamista (ei kilpamielessä), lukemista, sekä ulkoilua niin kävellen kuin pyöräillenkin.",
  "Osaan käyttää tavanomaisia toimisto-ohjelmia tehokkaasti. Osaan perusteet kuvankäsittelystä ja 3D-mallinnuksesta. Olen käyttänyt pääosin Windows koneita, mutta olen myös tutustunut Linux:n toimintaan (Ubuntu). Ymmärrän web-sivujen rakentamisen perusteet (HTML, CSS ja JS). Olen myös tutustunut konttiteknologioihin (Docker). Olen ohjelmoinut joko omaan käyttöön tai osana opintoja useilla eri ohjelmointikielillä (Basic, Visual Basic, Java, Python, Lua, C, C++, C#, Haskell, JavaScript (mm. React, TypeScript, GraphQL)."
]

const OmaSivu = () => {
  //<a href="https://www.dropbox.com/s/mtnkna4rwp1cllz/Ruissalo_02.jpg?raw=1" alt="Luminen ja jäinen maisemakuva, Ruissalo." target="_blank">
  //              <img src="https://www.dropbox.com/s/mtnkna4rwp1cllz/Ruissalo_02.jpg?raw=1" height=150 width=200 class="img-thumbnail" >
  //</a>

  return (
    <div>
      <div style={{padding:10}}>
        <div style={style.otsikkoTeksti}>
          <PageText>Omakuvaus</PageText>
        </div>
        {omaKuvaus.map(osio =>
          <div style={style.tekstiLaatikko} key={osio}>
            <PageText>{osio}</PageText>
          </div>
        )}
      </div>
      <div style={style.kuvapalkki}>
        <img src="https://www.dropbox.com/s/sdz4az83wz3edx2/omakuva.jpg?raw=1" style={style.kuvaKoivuAsetin} alt="omakuva" />
      </div>
      <div style={{padding:10}}>
        <div style={style.otsikkoTeksti}>
            <PageText>Miksi tiedoissa on iso aukko?</PageText>
        </div>
        {omaKertomus.map(osio =>
          <div style={style.tekstiLaatikko} key={osio}>
            <PageText>{osio}</PageText>
          </div>
        )}
      </div>
    </div>
  )
}

export default OmaSivu