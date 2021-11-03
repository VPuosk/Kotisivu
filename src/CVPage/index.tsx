import React from "react";
import { opinnot as HYopinnot } from "./HYopinnot";
import style from "../styles";
import { PageText } from "../components/generic/PageText";

type Kurssitiedot = {
  kurssi: string;
  kieli: string;
  laajuus: number;
  suoritusaika: string;
}

interface KurssiPropsi {
  kurssinTiedot: Kurssitiedot,
}

const Opinto = ({ kurssinTiedot }: KurssiPropsi) => {
  return (
    <>
      <PageText style={{ width: "30%" }}>{kurssinTiedot.kurssi}</PageText>
      <PageText style={{ width: "10%" }}>{kurssinTiedot.kieli}</PageText>
      <PageText style={{ width: "10%" }}>{kurssinTiedot.laajuus}</PageText>
      <PageText style={{ width: "20%" }}>{kurssinTiedot.suoritusaika}</PageText>
    </>
  )
}

const HY = () => {
  const opinnot = HYopinnot

  return (
    <div style={style.CVlist}>
      {opinnot.map(kurssi =>
        <div key={kurssi.kurssi} style={style.CVitemBar}>
          <Opinto kurssinTiedot={kurssi} />
        </div>
      )}
    </div>
  )
}

const CVPage = () => {

  return (
    <div>
      <HY />
      Work-In-Progress
    </div>
  )
}

export default CVPage