/** @jsx jsx */
import { jsx } from '@emotion/react'

import * as css from './ThemePicker.styles.js'

export const ThemePicker = ({ huge, theme, ...rest }) => (
  <button css={[css.picker, !!huge && css.pickerHuge]} {...rest}>
    {theme}
  </button>
)

const themeNames = ['pink', 'mono', 'christmas']

export const defaultThemeName = 'pink'

export const getNextThemeName = (current) => {
  let i = themeNames.findIndex((name) => name === current)
  return i < themeNames.length - 1 ? themeNames[++i] : themeNames[0]
}
