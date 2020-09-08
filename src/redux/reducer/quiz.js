import { questions } from '../../config'

import { actionTypes } from '../constants'

const initialState = {
  questions,
  currentQuestion: 1,
  maxQuestions: questions.length,
  points: 0,
  reaction: '',
  selectAnswerId: null,
  isEndQuiz: false,
}

export default function quiz(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case actionTypes.QUIZ_INITIAL:
      return {
        ...state,
        currentQuestion: 1,
        points: 0,
        reaction: '',
        selectAnswerId: null,
        isEndQuiz: false,
      }
    case actionTypes.QUIZ_CORRECT_ANSWER:
      return {
        ...state,
        points: state.points + 1,
        reaction: 'success',
        selectAnswerId: payload.id,
      }
    case actionTypes.QUIZ_INCORRECT_ANSWER:
      return {
        ...state,
        reaction: 'error',
        selectAnswerId: payload.id,
      }
    case actionTypes.QUIZ_NEXT_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        reaction: '',
        selectAnswerId: null,
      }
    case actionTypes.QUIZ_END:
      return {
        ...state,
        isEndQuiz: true,
      }
    default:
      return state
  }
}
