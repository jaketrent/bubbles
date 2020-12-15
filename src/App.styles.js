// WOLOLO
import { css } from '@emotion/react'

export const global = (theme) => css`
  // WOLOLO
  @font-face {
    font-family: 'SigmarOne';
    src: url('/SigmarOne-Regular.ttf') format('truetype');
    font-display: block;
  }
  // WOLOLO
  :root {
    ${theme.name === 'christmas'
      ? `
    --colorsDark: 0, 0, 0;
    --colorsLight: 255, 255, 255;
    `
      : `
        --colorsDark: 241, 110, 170;
    --colorsLight: 255, 212, 231;
    `}
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

export const bubble1 = css`
  background: radial-gradient(circle at 70%, yellow, green 75%);
`

export const bubble2 = css`
  background: radial-gradient(circle at 70%, blue, purple 75%);
`

export const bubble3 = css`
  background: radial-gradient(circle at 70%, red, purple 75%);
`

export const bubble4 = css`
  background: radial-gradient(circle at 70%, yellow, orange 75%);
`
