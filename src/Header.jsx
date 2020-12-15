/** @jsx jsx */
import { jsx } from '@emotion/react'

import * as css from './Header.styles.js'

export const Header = (props) => (
  <h1 css={css.header} {...props}>
    BUBBLES
  </h1>
)
