import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import style from './style.scss'

const Description = ({ text, children, color, isInline }) => {
  const props = {
    className: cx(style.description, style[color]),
  }

  return isInline ? (
    <span {...props}>{text || children}</span>
  ) : (
    <p {...props}>{text || children}</p>
  )
}

Description.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  isInline: PropTypes.bool,
}

Description.defaultProps = {
  text: '',
  children: null,
  color: '',
  isInline: false,
}

export default Description
