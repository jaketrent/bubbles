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

export default () => {
  const [themeName, setThemeName] = useState(defaultThemeName)

  return (
    <ThemeProvider theme={{ name: themeName }}>
      {/* WOLOLO - 5 - global styles */}
      <Global styles={css.global} />
      <Board>
        {/* WOLOLO - 6 - overrides, composition */}
        <Bubble css={[css.color1, css.diamond1]} />
        <Bubble />
        <Bubble />
        <Bubble />
      </Board>
      <Header />
      {/* WOLOLO - 7 - props for dynamic styles  */}
      <ThemePicker
        theme={themeName}
        onClick={() => setThemeName(getNextThemeName(themeName))}
      />
    </ThemeProvider>
  )
}
