/** @jsx jsx */
import { jsx } from '@emotion/react'

import * as css from './ThemePicker.styles.js'

export const ThemePicker = (props) => (
  <button css={css.picker} {...props}>
    {props.theme}
  </button>
)
