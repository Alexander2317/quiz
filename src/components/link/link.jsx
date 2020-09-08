import React, { useCallback } from 'react'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'
import cx from 'classnames'
import PropTypes from 'prop-types'

import baseStyle from '../styles/classes.scss'

import style from './style.scss'

const Link = ({ text, children, mode, href, ...props }) => {
  const dispatch = useDispatch()
  const handleClick = useCallback(
    (event) => {
      event.preventDefault()
      dispatch(push(href))
    },
    [dispatch, href],
  )

  return (
    <a
      href={href}
      className={cx(style.button, baseStyle[mode])}
      onClick={handleClick}
      {...props}
    >
      {text || children}
    </a>
  )
}

Link.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  mode: PropTypes.string,
  href: PropTypes.string.isRequired,
}

Link.defaultProps = {
  text: '',
  children: null,
  mode: '',
}

export default Link
