import React from 'react'
import { NavLink } from 'react-router-dom'

import Layout from '../../components/layout'

const Home = () => (
  <Layout>
    <NavLink to="/quiz">Hello, let's start to play!</NavLink>
  </Layout>
)

export default Home
