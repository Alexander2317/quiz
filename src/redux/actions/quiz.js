import { push } from 'connected-react-router'

import { actionTypes, base, routes } from '../constants'
import selectors from '../selectors'

const { quizNumberQuestionSelector, quizMaxQuestionsSelector } = selectors

export const initial = () => ({
  type: actionTypes.QUIZ_INITIAL,
})

export const selectQuestion = (question) => (dispatch, getState) => {
  const { id, correct } = question
  const maxQuestion = quizMaxQuestionsSelector(getState())
  const numberQuestion = quizNumberQuestionSelector(getState())

  if (!correct) {
    dispatch({
      type: actionTypes.QUIZ_INCORRECT_ANSWER,
      payload: { id },
    })
  } else {
    dispatch({
      type: actionTypes.QUIZ_CORRECT_ANSWER,
      payload: { id },
    })
  }

  const timerId = setTimeout(() => {
    clearTimeout(timerId)

    if (numberQuestion >= maxQuestion) {
      dispatch({
        type: actionTypes.QUIZ_END,
      })

      return dispatch(push(routes.result))
    }

    return dispatch({
      type: actionTypes.QUIZ_NEXT_QUESTION,
    })
  }, base.DELAY_TIMER)
}
