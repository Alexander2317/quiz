import React from 'react'
import cx from 'classnames'

import style from './style.scss'

const Button = ({ text, children, mode, ...props }) => (
  <button className={cx(style.button, style[mode])} {...props}>
    {text || children}
  </button>
)

export default Button
