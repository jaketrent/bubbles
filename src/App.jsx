/** @jsx jsx */
import { Global, jsx } from '@emotion/react'

import * as css from './App.styles.js'
import { Board } from './Board.jsx'
import { Bubble } from './Bubble.jsx'
import { Header } from './Header.jsx'
import { Layout } from './Layout.jsx'

export default () => (
  <Layout>
    <Global styles={css.global} />
    <Header />
    <Board>
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
    </Board>
  </Layout>
)
