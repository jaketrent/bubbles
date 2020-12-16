import { css } from '@emotion/react'

export const picker = (props) => css`
  position: absolute;
  top: 1vw;
  right: 1vw;
  background: rgb(var(--colorsLight));
  color: rgb(var(--colorsDark));
  border: 1px solid rgb(var(--colorsDark));
  border-radius: 5px;
  font-size: ${!!props.huge ? '3em' : '1.5em'};
  padding: 0.25em 1em;
  cursor: pointer;
  text-transform: uppercase;
`
