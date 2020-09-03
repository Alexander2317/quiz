import React from 'react'
import cx from 'classnames'

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

export default Description
