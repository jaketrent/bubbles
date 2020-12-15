import { css } from '@emotion/react'

export const header = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 1px);
  font-size: 6em;
  color: #fff;
  margin: 0;

  &:after {
    content: 'BUBBLES';
    position: absolute;
    top: 6px;
    left: 0;
    height: 50px;
    color: rgb(var(--colorsPinkDark));
    transition: all 500ms;
  }

  &:hover:after {
    top: 18px;
  }
`
