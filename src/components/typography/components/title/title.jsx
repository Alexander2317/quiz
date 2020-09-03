import React from 'react'
import cx from 'classnames'

import style from './style.scss'

const Title = ({ mode, text, children }) => (
  <div className={cx(style.title, style[mode])}>{text || children}</div>
)

export default Title
