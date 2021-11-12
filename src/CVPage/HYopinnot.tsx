import React from "react";
import { PageText } from "../components/generic/PageText";
import style from "../styles";

export const opinnot = [
  {
    id: 'C01',
    kurssi: "Ohjelmoinnit perusteet",
    kieli: "Java",
    laajuus: 5,
    suoritusaika: "2019-06-08"
  },
  {
    id: 'C02',
    kurssi: "Ohjelmoinnit jatkokurssi",
    kieli: "Java",
    laajuus: 5,
    suoritusaika: "2019-06-08"
  },
  {
    id: 'C03',
    kurssi: "Data Analysis with Python",
    kieli: "Python",
    laajuus: 5,
    suoritusaika: "2019-09-17"
  },
  {
    id: 'C04',
    kurssi: "Tietokoneen toiminnan perusteet",
    kieli: " - ",
    laajuus: 2,
    suoritusaika: "2019-10-31"
  },
  {
    id: 'C05',
    kurssi: "Tietokoneen toiminnan jatkokurssi",
    kieli: "TTK-91",
    laajuus: 3,
    suoritusaika: "2020-09-02"
  },
  {
    id: 'C06',
    kurssi: "Tietorakenteet ja algoritmit",
    kieli: "Java",
    laajuus: 10,
    suoritusaika: "2020-01-07"
  },
  {
    id: 'C07',
    kurssi: "Tietokokantojen perusteet",
    kieli: "Java ja SQL",
    laajuus: 5,
    suoritusaika: "2020-02-29"
  },
  {
    id: 'C08',
    kurssi: "Tietoliikenteen perusteet 1",
    kieli: " - ",
    laajuus: 2,
    suoritusaika: "2020-04-03"
  },
  {
    id: 'C09',
    kurssi: "Tietoliikenteen perusteet 2",
    kieli: " - ",
    laajuus: 3,
    suoritusaika: "2020-05-29"
  },
  {
    id: 'C10',
    kurssi: "Algoritmit ongelmanratkaisussa",
    kieli: "C++",
    laajuus: 10,
    suoritusaika: "2020-05-31"
  },
  {
    id: 'C11',
    kurssi: "Web-palvelinohjelmointi Java",
    kieli: "Java",
    laajuus: 5,
    suoritusaika: "2020-06-29"
  },
  {
    id: 'C12',
    kurssi: "Tietokone työvälineenä",
    kieli: "HTML, CSS",
    laajuus: 1,
    suoritusaika: "2020-01-07"
  },
  {
    id: 'C13',
    kurssi: "Functional Programming I",
    kieli: "Haskell",
    laajuus: 5,
    suoritusaika: "2021-07-28"
  },
  {
    id: 'C14',
    kurssi: "Functional Programming II",
    kieli: "Haskell",
    laajuus: 5,
    suoritusaika: "2021-07-28"
  },
  {
    id: 'C15',
    kurssi: "Elements of AI: Tekoälyn perusteet",
    kieli: " - ",
    laajuus: 2,
    suoritusaika: "2019-05-30"
  },
  {
    id: 'C16',
    kurssi: "DevOps with Docker",
    kieli: " - ",
    laajuus: 1,
    suoritusaika: "2021-06-09"
  },
  {
    id: 'C17',
    kurssi: "DevOps with Docker, docker-compose",
    kieli: " - ",
    laajuus: 1,
    suoritusaika: "2021-06-09"
  },
  {
    id: 'C18',
    kurssi: "DevOps with Docker, security and optimization",
    kieli: " - ",
    laajuus: 1,
    suoritusaika: "2021-06-09"
  },
  {
    id: 'C19',
    kurssi: "Full Stack -websovelluskehitys",
    kieli: "JavaScript",
    laajuus: 5,
    suoritusaika: "2021-10-04"
  },
  {
    id: 'C20',
    kurssi: "Full Stack -websovelluskehitys, lisäosa 1",
    kieli: "JavaScript",
    laajuus: 1,
    suoritusaika: "2021-10-04"
  },
  {
    id: 'C21',
    kurssi: "Full Stack -websovelluskehitys, lisäosa 2",
    kieli: "JavaScript",
    laajuus: 1,
    suoritusaika: "2021-10-04"
  },
  {
    id: 'C22',
    kurssi: "Full Stack -websovelluskehitys, GraphQL",
    kieli: "JavaScript",
    laajuus: 1,
    suoritusaika: "2021-10-04"
  },
  {
    id: 'C23',
    kurssi: "Full Stack -websovelluskehitys, TypeScript",
    kieli: "JavaScript",
    laajuus: 1,
    suoritusaika: "2021-10-09"
  },
  {
    id: 'C24',
    kurssi: "Full Stack -websovelluskehitys, React Native",
    kieli: "JavaScript",
    laajuus: 2,
    suoritusaika: "2021-10-18"
  },
  {
    id: 'C25',
    kurssi: "Full Stack -websovelluskehitys, jatkuva integraatio",
    kieli: "JavaScript",
    laajuus: 1,
    suoritusaika: "2021-10-22"
  },
  {
    id: 'C26',
    kurssi: "Full Stack -websovelluskehitys, Containers",
    kieli: "JavaScript",
    laajuus: 1,
    suoritusaika: "2021-10-31"
  },
  {
    id: 'C27',
    kurssi: "Tekoälyn etiikka, johdanto",
    kieli: " - ",
    laajuus: 2,
    suoritusaika: "2021-08-16"
  },
  {
    id: 'C28',
    kurssi: "Elements of AI: Building AI - Intermediate",
    kieli: "Python",
    laajuus: 1,
    suoritusaika: "2021-08-04"
  },
  {
    id: 'C29',
    kurssi: "Elements of AI: Building AI - Advanced",
    kieli: "Python",
    laajuus: 1,
    suoritusaika: "2021-08-04"
  },
  {
    id: 'C30',
    kurssi: "Cyber Security Base: Introduction to Cyber Security",
    kieli: "Python",
    laajuus: 1,
    suoritusaika: "2021-04-14"
  },
  {
    id: 'C31',
    kurssi: "Cyber Security Base: Course Project I",
    kieli: "Python",
    laajuus: 1,
    suoritusaika: "2021-06-01"
  },
  {
    id: 'C32',
    kurssi: "Cyber Security Base: Securing Software",
    kieli: "Python",
    laajuus: 3,
    suoritusaika: "2021-04-10"
  },
]

type Kurssitiedot = {
  id: string;
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
      <PageText style={{ width: "60%" }}>{kurssinTiedot.kurssi}</PageText>
      <PageText style={{ minWidth: "90px" }}>{kurssinTiedot.kieli}</PageText>
      <PageText style={{ minWidth: "40px" }}>{kurssinTiedot.laajuus}</PageText>
      <PageText style={{ minWidth: "100px" }}>{kurssinTiedot.suoritusaika}</PageText>
    </>
  )
}

const HYopinnot = () => {
  return (
    <div style={style.CVlist}>
      <div style={style.CVitemHeader}>
        <PageText style={{ width: "60%" }}>Kurssi</PageText>
        <PageText style={{ minWidth: "90px" }}>Kieli</PageText>
        <PageText style={{ minWidth: "40px" }}>OP</PageText>
        <PageText style={{ minWidth: "100px" }}>Suoritettu</PageText>
      </div>
      <hr style={style.CVHR}  />
      {opinnot
        .sort((a, b) => {
          if (a.suoritusaika < b.suoritusaika) {
            return -1;
          }
          if (a.suoritusaika > b.suoritusaika) {
            return 1;
          }
          return 0;
        })
        .map(kurssi =>
        <div key={kurssi.id} style={style.CVitemBar}>
          <Opinto kurssinTiedot={kurssi} />
        </div>
      )}
    </div>
  )
}

export default HYopinnot