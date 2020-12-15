/** @jsx jsx */
import { jsx } from '@emotion/react'

import * as css from './ThemePicker.styles.js'

export const ThemePicker = (props) => (
  /* WOLOLO - selector as function */
  <button css={css.picker(props)} {...props}>
    {props.theme}
  </button>
)
