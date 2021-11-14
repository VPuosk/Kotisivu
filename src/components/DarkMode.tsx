import React, { useState, MouseEvent, useEffect } from "react"
import style from "../styles"
import { PageText } from "./generic/PageText"

const DarkMode = () => {
  const [tummaTila, asetaTummaTila] = useState<boolean>(false)

  const changeTheme = (event : MouseEvent<HTMLButtonElement>) => {
    if (tummaTila) {
      asetaTummaTila(false)
    } else {
      asetaTummaTila(true)
    }
  }

  useEffect(() => {
    if (tummaTila) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark');
    }
  }, [tummaTila])

  return (
    <button onClick={changeTheme} style={style.navbarButton}>
      <PageText style={style.navbarText}>Tummatila</PageText>
    </button>
  )
}

export default DarkMode