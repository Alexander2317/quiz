import React from 'react'
import cx from 'classnames'

import style from './style.scss'

const Description = ({ text, color, isInline }) => {
  const props = {
    className: cx(style.description, style[color]),
  }

  return isInline ? <span {...props}>{text}</span> : <p {...props}>{text}</p>
}

export default Description
