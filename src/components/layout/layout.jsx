import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import '../styles/base.scss'

import { Footer } from './components'
import style from './style.scss'

const Layout = ({ centerContent, children }) => (
  <section className={style.wrapper}>
    <main className={cx(style.content, centerContent && style.centerContent)}>
      {children}
    </main>
    <Footer />
  </section>
)

Layout.propTypes = {
  centerContent: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  centerContent: false,
}

export default Layout
