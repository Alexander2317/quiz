import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import baseStyle from '../styles/classes.scss'
import style from './style.scss'

const Button = ({ text, children, mode, ...props }) => (
  <button className={cx(style.button, baseStyle[mode])} {...props}>
    {text || children}
  </button>
)

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  mode: PropTypes.string,
}

Button.defaultProps = {
  text: '',
  mode: '',
  children: null,
}

export default Button
