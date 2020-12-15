/** @jsx jsx */
import { Global, ThemeProvider, jsx } from '@emotion/react'
import { useState } from 'react'

import * as css from './App.styles.js'
import { Board } from './Board.jsx'
import { Bubble } from './Bubble.jsx'
import { Header } from './Header.jsx'
import { ThemePicker } from './ThemePicker.jsx'

// TODO: fix theme names
export default () => {
  const [theme, setTheme] = useState('pink')

  return (
    <ThemeProvider theme={{ name: theme }}>
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
        theme={theme}
        onClick={() => setTheme(theme === 'christmas' ? 'pink' : 'christmas')}
      />
    </ThemeProvider>
  )
}
