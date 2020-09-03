import React from 'react'
import cx from 'classnames'

import style from './style.scss'

const Button = ({ text, children, mode }) => (
  <button className={cx(style.button, style[mode])}>{text || children}</button>
)

export default Button
