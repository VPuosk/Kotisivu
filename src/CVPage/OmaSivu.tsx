import React from "react";
import { PageText } from "../components/generic/PageText";
import style from "../styles";

const omaKertomus : string[] = [
  "Eli miksi CV:ssäni ja työhistoriassani on suuri musta aukko... Olin lapsena kaikilla lomillani lähestulkoon aina isoäitini hoidossa Lapissa ja siten minulla oli huomattavan läheiset suhteet häneen. Hän oli kuitenkin iäkäs ja sairastui vakavasti uuden vuosituhannen alussa. Piakkoin hän ei enää pärjännyt yksin (isoisäni oli kuollut hoitovirheen johdosta jo aiemmin) ja hänet täytyi siirtää hoitokotiin. Vain noin vuotta myöhemmin hän menehtyi. Tämä kosketti minua erittäin syvästi.",
  "Olin tässä vaiheessa saanut maisterin opintoni yliopistossa lähes valmiiksi, ja olin jo tekemässä erikoistyötäni. Sain erikoistyöni tehdyksi ja sen selostuksen valmiiksi, mutta en siinä mielentilassa mikä minulla oli pystynyt kirjoittamaan varsinaista Pro Gradua loppuun saakka. Kirjoitin sen lähes valmiiiksi useaan otteeseen, mutta kyennyt ylittämään maaliviiva. Tavallaan gradu assosioitui isoäitini kuolemaan. En myöskään osannut pyytää apua tähän ongelmaan, jolloin yliopistolta tullut opastus ja patistus oli lähinnä enemmän haitaksi kuin hyödyksi.",
  "Tämä jätti gradun kuin limboon. Etenkin kun tähän liittyvä erikoistyö ei varsinaisesti tuottanut toivottua tulosta - tämä tosin johtui ohjaajien oletuksista jotka eivät toteutuneet. Tällä välin opettelin itse ohjelmoimaan, tein keikkatöitä 'firaabelina' turvakameroiden asennuksessa ja tietokoneiden asentamisessa. Palasin kuitenkin aina takaisin tuohon graduun, mutta sen saaminen valmiiksi oli uskottamattoman vaikeaa. Lopulta pakotin itseni kohtaamaan tuon ja tein kaikki lopputentit ennen gradun lopullista kirjoittamista. Asian osaamisesta ei mikään ollut kiinni, lopputentit menivät läpi arvosanoilla 5/5, 5/5 ja 4/5. Gradukin valmistui lopulta nopeasti tämän jälkeen.",
]

const OmaSivu = () => {

  return (
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
  )
}

export default OmaSivu