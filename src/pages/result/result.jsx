import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { selectors, constants } from '../../redux'
import { Layout, Typography, Link } from '../../components'

import style from './style.scss'

const { routes } = constants

const Result = ({ quizIsEnd, points }) => (
  <Layout centerContent>
    <div className={style.container}>
      {quizIsEnd ? (
        <Fragment>
          <Typography.Title mode="h1">You were finished quiz!</Typography.Title>
          <Typography.Description>
            You scored {points} points
          </Typography.Description>
          <br />
          <Link href={routes.quiz}>try again!</Link>
        </Fragment>
      ) : (
        <Fragment>
          <Typography.Title mode="h1">
            If you want to see a result you should finish the quiz
          </Typography.Title>
          <br />
          <Link href={routes.quiz}>try to play if you're not a chick!</Link>
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
