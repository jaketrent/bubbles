/** @jsx jsx */
import { jsx } from '@emotion/react'

import * as css from './Bubble.styles.js'

export const Bubble = (props) => {
  return <div css={css.bubble} {...props}></div>
}
