import { css, keyframes } from '@emotion/react'

const float = keyframes`
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
`

export const board = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100vh;
`

export const wrapper = css`
  position: relative;
  animation: ${float} 3s ease-in-out infinite;
`
