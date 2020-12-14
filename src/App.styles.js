import { css } from '@emotion/react'

export const global = css`
  @font-face {
    font-family: 'SigmarOne';
    src: url('/SigmarOne-Regular.ttf') format('truetype');
    font-display: block;
  }
  :root {
    --colorsPinkDark: 241, 110, 170;
    --colorsPinkLight: 255, 212, 231;
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
      rgb(255, 255, 255),
      rgb(var(--colorsPinkLight))
    );
    font-size: 18px;
  }
`
