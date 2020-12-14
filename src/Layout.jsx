/** @jsx jsx */
import { jsx } from '@emotion/react'

import * as css from './Layout.styles.js'

export const Layout = (props) => <div css={css.layout}>{props.children}</div>
