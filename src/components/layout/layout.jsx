import React from 'react'
import cx from 'classnames'

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

export default Layout
