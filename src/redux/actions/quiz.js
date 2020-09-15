import { push } from 'connected-react-router'

import { asyncCall } from '../../utils'
import { actionTypes, routes } from '../constants'
import selectors from '../selectors'

const { quizNumberQuestionSelector, quizMaxQuestionsSelector } = selectors

export const initial = () => ({
  type: actionTypes.QUIZ_INITIAL,
})

export const checkQuestion = ({ id, correct }) => (dispatch) => {
  if (!correct) {
    return dispatch({
      type: actionTypes.QUIZ_INCORRECT_ANSWER,
      payload: { id },
    })
  }

  return dispatch({
    type: actionTypes.QUIZ_CORRECT_ANSWER,
    payload: { id },
  })
}

export const selectQuestion = (question) => (dispatch, getState) => {
  const maxQuestion = quizMaxQuestionsSelector(getState())
  const numberQuestion = quizNumberQuestionSelector(getState())

  dispatch(checkQuestion(question))

  asyncCall(() => {
    if (numberQuestion >= maxQuestion) {
      dispatch({
        type: actionTypes.QUIZ_END,
      })

      return dispatch(push(routes.result))
    }

    return dispatch({
      type: actionTypes.QUIZ_NEXT_QUESTION,
    })
  })
}
