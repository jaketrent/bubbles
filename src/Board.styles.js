import { css } from '@emotion/react'

export const board = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  height: 100vh;
`

export const wrapper = css`
  @keyframes float {
    0% {
      transform: translateY(0);
      -webkit-transform: translateY(0);
    }

    50% {
      transform: translateY(1rem);
      -webkit-transform: translateY(1rem);
    }

    100% {
      transform: translateY(0);
      -webkit-transform: translateY(0);
    }
  }
  position: relative;
  animation: float 3s ease-in-out infinite;
`
