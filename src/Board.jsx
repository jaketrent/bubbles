/** @jsx jsx */
import { jsx } from '@emotion/react'

import * as css from './Board.styles.js'

export const Board = (props) => <div css={css.board}>{props.children}</div>
