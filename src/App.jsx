/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { Bubble } from './Bubble'
import { Header } from './Header'
import { Layout } from './Layout'

export default () => (
  <Layout>
    <Bubble />
    <Bubble />
    <Header />
    <Bubble />
    <Bubble />
  </Layout>
)
