import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

import { selectors, constants, actions } from '../../redux'
import { Layout, Typography, Button } from '../../components'

import style from './style.scss'

const { routes } = constants

const handleClick = ({ action, answer }) =>
  _.memoize((event) => {
    event.preventDefault()
    action(answer)
  })

const Quiz = ({
  currentQuestion: { title, answers },
  numberQuestion,
  maxQuestions,
  reaction,
  selectAnswerId,
  selectQuestionAction,
}) => (
  <Layout>
    <div className={style.container}>
      <Typography.Title mode="h1">Quiz!</Typography.Title>
      <Typography.Title mode="h2">
        Question {numberQuestion} of {maxQuestions}
      </Typography.Title>

      <Typography.Title mode="h3">{title}</Typography.Title>
      <div className={style.buttons}>
        {answers.map((answer) => (
          <Button
            key={answer.id}
            onClick={handleClick({ action: selectQuestionAction, answer })}
            mode={answer.id === selectAnswerId ? reaction : ''}
          >
            <Link to={routes.quiz}>{answer.text}</Link>
          </Button>
        ))}
      </div>
    </div>
  </Layout>
)

const mapStateToProps = (state) => ({
  currentQuestion: selectors.quizGetCurrentQuestionSelector(state),
  numberQuestion: selectors.quizNumberQuestionSelector(state),
  maxQuestions: selectors.quizMaxQuestionsSelector(state),
  reaction: selectors.quizReactionSelector(state),
  selectAnswerId: selectors.quizSelectAnswerIdSelector(state),
})

const mapDispatchToProps = {
  selectQuestionAction: actions.quiz.selectQuestion,
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
