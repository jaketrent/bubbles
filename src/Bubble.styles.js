import { css } from '@emotion/react'

export const bubble = css`
  position: relative;
  height: 20vw;
  width: 20vw;
  border-radius: 50%;
  background: radial-gradient(
    circle at 70%,
    rgb(var(--colorsLight)),
    rgb(var(--colorsDark)) 75%
  );

  :after {
    content: ' ';
    position: absolute;
    top: 3vw;
    right: 3vw;
    height: 6vw;
    width: 6vw;
    background: radial-gradient(
      circle at 100% 20%,
      transparent,
      rgba(255, 255, 255, 0.3) 90%
    );
    border-radius: 50%;
  }
`
