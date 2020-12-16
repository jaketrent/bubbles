import { css } from '@emotion/react'

export const picker = css`
  position: absolute;
  top: 1vw;
  right: 1vw;
  background: rgb(var(--colorsLight));
  color: rgb(var(--colorsDark));
  border: 1px solid rgb(var(--colorsDark));
  border-radius: 5px;
  padding: 0.25em 1em;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1em;
`
export const pickerHuge = css`
  font-size: 3em;
`
