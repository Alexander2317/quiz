import React from 'react'

import { Layout, Link, Typography } from '../../components'
import { constants } from '../../redux'

import style from './style.scss'

const { routes } = constants

const NotFound = () => (
  <Layout centerContent>
    <div className={style.container}>
      <Typography.Title mode="h1">Page not found...</Typography.Title>
      <Link href={routes.index}>Go to main</Link>
    </div>
  </Layout>
)

export default NotFound
