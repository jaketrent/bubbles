// WOLOLO
import { css } from '@emotion/react'

const variables = {
  pink: `
    --colorsDark: 241, 110, 170;
    --colorsLight: 255, 212, 231;
  `,
  mono: `
    --colorsDark: 0, 0, 0;
    --colorsLight: 255, 255, 255;
  `,
  christmas: `
    --colorsDark: 196, 0, 81;
    --colorsLight: 109, 255, 182;
  `,
}

export const global = (theme) => css`
  // WOLOLO
  @font-face {
    font-family: 'SigmarOne';
    src: url('/SigmarOne-Regular.ttf') format('truetype');
    font-display: block;
  }
  // WOLOLO
  :root {
    ${variables[theme.name]}
  }
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  body {
    font-family: SigmarOne, system-ui, sans-serif;
    background-image: linear-gradient(
      to bottom,
      rgb(var(--colorsLight)),
      rgb(var(--colorsDark))
    );
    font-size: 18px;
  }
`

export const color1 = css`
  background: radial-gradient(circle at 70%, yellow, green 75%);
`

export const color2 = css`
  background: radial-gradient(circle at 70%, blue, purple 75%);
`

export const color3 = css`
  background: radial-gradient(circle at 70%, red, purple 75%);
`

export const color4 = css`
  background: radial-gradient(circle at 70%, yellow, orange 75%);
`

export const diamond1 = css`
  border-radius: 2em;
  transform: rotate(45deg);
`

export const diamond2 = css`
  border-radius: 4em 50%;
  transform: rotate(52deg) skew(15deg);
`
