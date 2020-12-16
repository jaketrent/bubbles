/** @jsx jsx */
import { Global, ThemeProvider, jsx } from '@emotion/react'
import { useState } from 'react'

import * as css from './App.styles.js'
import { Board } from './Board.jsx'
import { Bubble } from './Bubble.jsx'
import { Header } from './Header.jsx'
import {
  ThemePicker,
  defaultThemeName,
  getNextThemeName,
} from './ThemePicker.jsx'

// TODO: favicon
export default () => {
  const [themeName, setThemeName] = useState(defaultThemeName)

  return (
    <ThemeProvider theme={{ name: themeName }}>
      {/* WOLOLO */}
      <Global styles={css.global} />
      <Board>
        {/* WOLOLO - overrides, composition */}
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
      </Board>
      <Header />
      {/* WOLOLO - props for dynamic styles  */}
      <ThemePicker
        theme={themeName}
        onClick={() => setThemeName(getNextThemeName(themeName))}
      />
    </ThemeProvider>
  )
}
