/** @jsx jsx */
import { Global, jsx } from '@emotion/react'
import * as React from 'react'

import * as css from './App.styles.js'
import { Board } from './Board.jsx'
import { Bubble } from './Bubble.jsx'
import { Header } from './Header.jsx'

export default () => (
  <>
    <Global styles={css.global} />
    <Board>
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
    </Board>
    <Header />
  </>
)
