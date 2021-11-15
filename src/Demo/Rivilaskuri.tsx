import React, { useState, ChangeEvent } from "react";
import { PageText } from "../components/generic/PageText";
import style from "../styles";

const prioriteetti = new Map([
  ['^', 4],
  ['*', 3],
  ['/', 3],
  ['+', 1],
  ['-', 1],
  ['(', 0],
  [')', 0],
  ['loppu', 0],
]);

const Rivilaskuri = () => {
  const [syöte, setSyöte] = useState<string>('')
  const [tulos, setTulos] = useState<number>(0)
  const [evalTulos, setEvalTulos] = useState<number>(0)
  const [virhe, asetaVirhe] = useState<string>('')
  let operaattorit : string[] = []
  let jono : string[] = []
  let laskupakka : number[] = []

  const suoritaLasku = (arvoA : number, arvoB : number, operaattori : string) : number => {
    switch (operaattori) {
      case '^':
        return Math.pow(arvoA, arvoB);
      case '*':
        return arvoA * arvoB;
      case '/':
        return arvoA / arvoB;
      case '+':
        return arvoA + arvoB;
      case '-':
        return arvoA - arvoB;
      default:
        throw new Error(`Virhe laskennassa: a: ${arvoA}, b: ${arvoB}, op: ${operaattori}`);
    }
  }

  const haePrioriteettiKartasta = ( merkki : string ) : number => {
    const result : number | undefined = prioriteetti.get(merkki)
    if (result === undefined) {
      asetaVirhe('määrittämätön arvo');
      return 0;
    }
    return result;
  }

  const haeOperaattoriPinosta = () : string => {
    const arvo : string = operaattorit[operaattorit.length - 1]
    return arvo;
  }

  const haePrioriteettiPinosta = () : number => {
    if (operaattorit.length === 0) {
      return 0;
    } else  {
      return haePrioriteettiKartasta(haeOperaattoriPinosta());
    }
  }

  const laske = () => {
    jono.map(nykyinenMerkki => {
      let nykyinenPr = haePrioriteettiPinosta();
      let uusiPr : number;

      switch (nykyinenMerkki) {
        case ("^"):
        case ("*"):
        case ("/"):
        case ("+"):
        case ("-"):
        case (")"):
          // eli siis operaattori...
          uusiPr = haePrioriteettiKartasta(nykyinenMerkki)
          while(uusiPr < nykyinenPr) {
            if (virhe !== '') {
              break;
            }
            try {
              if (laskupakka.length < 2) {
                continue;
              }
              const toiminto = operaattorit.pop();
              const toka = laskupakka.pop()
              const eka = laskupakka.pop()

              if ((eka === undefined) || (toka === undefined) || (toiminto === undefined)) {
                throw new Error(`Jokin määrittämätön arvo, eka: ${eka}, toka: ${toka}, toiminto: ${toiminto} `);
              }

              laskupakka.push(suoritaLasku(eka, toka, toiminto));

              nykyinenPr = haePrioriteettiPinosta();
            } catch(e) {
              const vika = (e as Error).message;
              asetaVirhe(vika)
            }
          }

          if (nykyinenMerkki === ")" && haeOperaattoriPinosta() ==="(") {
            // varmistetaan, ettei ')' lisätä ja '(' poistetaan
            operaattorit.pop()
            break;
          }

          // lisätään uusi operaattori listalle
          operaattorit.push(nykyinenMerkki)
          break;
        case '(':
          operaattorit.push(nykyinenMerkki)
          break;
        case 'loppu':
          while (laskupakka.length > 1) {
            try {
              const toiminto = operaattorit.pop();
              const toka = laskupakka.pop()
              const eka = laskupakka.pop()

              if ((eka === undefined) || (toka === undefined) || (toiminto === undefined)) {
                throw new Error("Error");
              }

              laskupakka.push(suoritaLasku(eka, toka, toiminto));
            } catch(e){
              const vika = (e as Error).message;
              asetaVirhe(`loppulasku ${vika}`)
            }
          }
          break;
        default:
          // kyseessä numero...
          try {
            laskupakka.push(Number(nykyinenMerkki.replace(',','.')));
          } catch(e){
            const vika = (e as Error).message;
            asetaVirhe(vika)
          }
          break;
      }

    })
  }

  const alustaRakenteet = () => {
    setTulos(0)
    setEvalTulos(0)
    asetaVirhe('')
    jono = []
    operaattorit = []
    laskupakka = []
  }

  const laskeMerkkijono = (merkkijono : string) => {
    const values = merkkijono.replace(/\s+/g, '').match(/[\d.]+|\D/g)
    if (values === null) {
      throw new Error("Virhe");
    }
    values.push('loppu')
    jono = values;
  }

  const handleChange = (event : ChangeEvent<HTMLTextAreaElement>) => {
    setSyöte(event.target.value)
  }

  const käsitteleLasku = () => {
    alustaRakenteet()
    laskeMerkkijono(syöte)
    setEvalTulos(eval(syöte))
    laske()
    if (virhe === '') {
      setTulos(laskupakka[0])
    } else {
      console.log('virhe:', virhe)
    }
  }

  return (
    <div style={style.tekstiLaatikko}>
      <PageText>Syötä laskettavat arvot:</PageText>
      <div>
        <textarea value={syöte} onChange={handleChange}></textarea>
      </div>
      <button onClick={käsitteleLasku} id='laske'>Laske</button>
      <div>
        <PageText>Tulos: {tulos}</PageText>
      </div>
      <div>
        <PageText>Natiivi-JS eval: {evalTulos}</PageText>
      </div>
    </div>
  )
}

export default Rivilaskuri