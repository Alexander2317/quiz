import React from 'react'
import { Link } from 'react-router-dom'

import { constants } from '../../redux'
import { Layout, Typography, Button } from '../../components'

import style from './style.scss'

const { routes } = constants

const Home = () => (
  <Layout>
    <div className={style.container}>
      <Typography.Title mode="h1">Hello!</Typography.Title>
      <Button>
        <Link to={routes.quiz}>let's start to play!</Link>
      </Button>
    </div>
  </Layout>
)

export default Home
