import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { selectors, constants } from '../../redux'
import { Layout, Typography, Button } from '../../components'

import style from './style.scss'

const { routes } = constants

const Result = ({ quizIsEnd, points }) => (
  <Layout>
    <div className={style.container}>
      {quizIsEnd ? (
        <Fragment>
          <Typography.Title mode="h1">You were finished quiz!</Typography.Title>
          <Typography.Description>
            You scored {points} points
          </Typography.Description>
          <br />
          <Button>
            <Link to={routes.quiz}>try again!</Link>
          </Button>
        </Fragment>
      ) : (
        <Fragment>
          <Typography.Title mode="h1">
            If you want to see a result you should finish the quiz
          </Typography.Title>
          <br />
          <Button>
            <Link to={routes.quiz}>try to play if you're not a chick!</Link>
          </Button>
        </Fragment>
      )}
    </div>
  </Layout>
)

const mapStateToProps = (state) => ({
  points: selectors.quizPointsSelector(state),
  quizIsEnd: selectors.quizIsEndSelector(state),
})

export default connect(mapStateToProps)(Result)
