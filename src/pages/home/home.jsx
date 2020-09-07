import React from 'react'

import { constants } from '../../redux'
import { Layout, Typography, Link } from '../../components'

import style from './style.scss'

const { routes } = constants

const Home = () => (
  <Layout centerContent>
    <div className={style.container}>
      <Typography.Title mode="h1">Hello!</Typography.Title>
      <Link href={routes.quiz}>let's start to play!</Link>
    </div>
  </Layout>
)

export default Home
