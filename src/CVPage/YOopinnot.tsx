import React from "react";
import { PageText } from "../components/generic/PageText";
import HYopinnot from "./HYopinnot";
import style from "../styles";

const ETKopinnot : string[] = [
  "Tein maisterin opintoni Turun Yliopiston biokemian ja elintarvikekemian laitoksella elintarvikekemian linjalla ja valmistuin vuonna 2016. Oma erikoistyöni keskittyi koivun (betula pendula) haihtuviin yhdisteisiin ja niiden analysointiin. Koska työn ohjaajien tekemät oletukset näytteen sisällöstä eivät vastanneet todellisuutta joiduin radikaalisti muuttamaan koejärjestelyitä työn edetessä.",
  "Kuten jo aiemmin opinnoissani työn ohessa käytin huomattavan paljon erilaisia analysointi menetelmiä kuten esimerkiksi ohutlevykromatografiaa (TLC, tietokoneavusteisesi 'ImageJ' -ohjelmistoa käyttäen), korkean paineen nestekromatografiaa (HPLC), sekä etenkin kaasukromatografiaa käyttäen niin liekki-ionisaatiodetektoria (GC-FID) kuin myös elektroni-ionisaatio massaspektrometria (GC-MS-EI)."
]

const YOopinnot = () => {
  return (
    <div>
      <div style={{padding:10}}> 
        <div style={style.otsikkoTeksti}>
          <PageText>Opinnot Turun Yliopistossa</PageText>
        </div>
        {ETKopinnot.map(osio =>
          <div style={style.tekstiLaatikko} key={osio}>
            <PageText>{osio}</PageText>
          </div>
        )}
      </div>
      <div style={style.kuvapalkki}>
        <img src="https://www.dropbox.com/s/iwxg40zr87w3vcf/vihta2.JPG?raw=1" style={style.kuvaKoivuAsetin} alt="vihta" />
      </div>
      <div style={{padding:10}}>
        <div style={style.otsikkoTeksti}>
          <PageText>Opinnot Helsingin Yliopiston Avoimessa Yliopistossa</PageText>
        </div>
        <HYopinnot />
      </div>
    </div>
  )
}

export default YOopinnot