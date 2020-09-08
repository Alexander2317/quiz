import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import style from './style.scss'

const Title = ({ mode, text, children }) => (
  <div className={cx(style.title, style[mode])}>{text || children}</div>
)

Title.propTypes = {
  mode: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
}

Title.defaultProps = {
  mode: '',
  text: '',
  children: null,
}

export default Title
