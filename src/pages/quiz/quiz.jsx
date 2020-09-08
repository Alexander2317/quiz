import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import PropTypes from 'prop-types'

import { selectors, actions } from '../../redux'
import { Layout, Typography, Button } from '../../components'

import style from './style.scss'

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
  initialAction,
}) => {
  useEffect(() => {
    initialAction()
  }, [initialAction])

  return (
    <Layout centerContent>
      <div className={style.container}>
        <Typography.Title mode="h1">Quiz!</Typography.Title>
        <Typography.Title mode="h2">
          Question {numberQuestion} of {maxQuestions}
        </Typography.Title>

        <Typography.Title mode="h3">{title}</Typography.Title>
        <div className={style.buttons}>
          {answers.map((answer) => {
            const isSelectAnswer = answer.id === selectAnswerId

            return (
              <Button
                key={answer.id}
                onClick={handleClick({ action: selectQuestionAction, answer })}
                mode={isSelectAnswer ? reaction : ''}
                disable={isSelectAnswer}
              >
                {answer.text}
              </Button>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

Quiz.propTypes = {
  currentQuestion: PropTypes.shape({
    title: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
  }).isRequired,
  numberQuestion: PropTypes.number.isRequired,
  maxQuestions: PropTypes.number.isRequired,
  reaction: PropTypes.string.isRequired,
  selectAnswerId: PropTypes.number,
  selectQuestionAction: PropTypes.func.isRequired,
  initialAction: PropTypes.func.isRequired,
}

Quiz.defaultProps = {
  selectAnswerId: null,
}

const mapStateToProps = (state) => ({
  currentQuestion: selectors.quizGetCurrentQuestionSelector(state),
  numberQuestion: selectors.quizNumberQuestionSelector(state),
  maxQuestions: selectors.quizMaxQuestionsSelector(state),
  reaction: selectors.quizReactionSelector(state),
  selectAnswerId: selectors.quizSelectAnswerIdSelector(state),
})

const mapDispatchToProps = {
  initialAction: actions.quiz.initial,
  selectQuestionAction: actions.quiz.selectQuestion,
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
