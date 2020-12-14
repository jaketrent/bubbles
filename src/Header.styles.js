import { css } from '@emotion/react'

export const header = css`
  font-size: 6em;
  -webkit-background-clip: text;
  color: transparent !important;
  color: rgb(var(--colorsPinkDark));

  background-image: linear-gradient(
    to bottom,
    rgb(var(--colorsPinkLight)),
    rgb(var(--colorsPinkDark))
  );
`
