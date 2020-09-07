import React from 'react'
import cx from 'classnames'

import baseStyle from '../styles/classes.scss'
import style from './style.scss'

const Button = ({ text, children, mode, ...props }) => (
  <button className={cx(style.button, baseStyle[mode])} {...props}>
    {text || children}
  </button>
)

export default Button
