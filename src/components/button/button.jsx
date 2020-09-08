import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import baseStyle from '../styles/classes.scss'
import style from './style.scss'

const Button = ({ text, children, mode, disable, ...props }) => (
  <button
    className={cx(style.button, baseStyle[mode], disable && baseStyle.disable)}
    {...props}
  >
    {text || children}
  </button>
)

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  mode: PropTypes.string,
  disable: PropTypes.bool,
}

Button.defaultProps = {
  text: '',
  children: null,
  mode: '',
  disable: false,
}

export default Button
