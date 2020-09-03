import React from 'react'

import '../styles/base.scss'

import { Footer } from './components'
import style from './style.scss'

const Layout = ({ children }) => (
  <section className={style.wrapper}>
    <main style={style.content}>{children}</main>
    <Footer />
  </section>
)

export default Layout
