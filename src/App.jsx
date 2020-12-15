import { Global, ThemeProvider } from '@emotion/react'
import * as React from 'react'

import * as css from './App.styles.js'
import { Board } from './Board.jsx'
import { Bubble } from './Bubble.jsx'
import { Header } from './Header.jsx'
import { ThemePicker } from './ThemePicker.jsx'

// TODO: compose classes
// TODO: style overrides
// TODO: dynamic styles based on props
export default () => {
  const [theme, setTheme] = React.useState('pink')

  return (
    <ThemeProvider theme={{ name: theme }}>
      {/* WOLOLO */}
      <Global styles={css.global} />
      <Board>
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
      </Board>
      <Header />
      <ThemePicker
        theme={theme}
        onClick={() => setTheme(theme === 'christmas' ? 'pink' : 'christmas')}
      />
    </ThemeProvider>
  )
}
