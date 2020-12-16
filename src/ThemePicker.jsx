/** @jsx jsx */
import { jsx } from '@emotion/react'

import * as css from './ThemePicker.styles.js'

export const ThemePicker = (props) => (
  /* WOLOLO - selector as function */
  <button css={css.picker(props)} {...props}>
    {props.theme}
  </button>
)

const themeNames = ['pink', 'mono', 'christmas']

export const defaultThemeName = 'pink'

export const getNextThemeName = (current) => {
  let i = themeNames.findIndex((name) => name === current)
  return i < themeNames.length - 1 ? themeNames[++i] : themeNames[0]
}
