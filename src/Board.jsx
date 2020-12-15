/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Children } from 'react'

import * as css from './Board.styles.js'

export const Board = (props) => (
  <div css={css.board}>
    {Children.map(props.children, (child) => {
      const top = rand(25, 55) + 'vh'
      const animationDelay = rand(0.25, 1) + 's'
      return (
        <div css={css.wrapper} style={{ top, animationDelay }}>
          {child}
        </div>
      )
    })}
  </div>
)

function rand(min, max) {
  return (Math.random() * (min - max) + max).toFixed(1)
}
