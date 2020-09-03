import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { selectors } from '../../redux'
import { Layout, Typography, Button } from '../../components'

import style from './style.scss'

const Quiz = ({ quiz }) => (
  <Layout>
    <div className={style.container}>
      <Typography.Title mode="h1">Quiz!</Typography.Title>
      {quiz.map(({ id, title, answers }) => (
        <Fragment key={id}>
          <Typography.Title mode="h2">{title}</Typography.Title>
          <div className={style.buttons}>
            {answers.map((answer) => (
              <Button key={`${title}-${answer.id}`}>
                <Link to="/quiz">{answer.text}</Link>
              </Button>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  </Layout>
)

const mapStateToProps = (state) => ({
  quiz: selectors.quizSelector(state),
})

export default connect(mapStateToProps)(Quiz)
