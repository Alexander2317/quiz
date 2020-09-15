import { actionTypes } from '../../constants'
import reducer, { initialState } from '../quiz'

describe('quiz reducer', () => {
  it('initial quiz', () => {
    const state = initialState
    const initialQuiz = reducer(state, { type: actionTypes.QUIZ_INITIAL })

    expect(initialQuiz).toEqual({
      ...state,
      currentQuestion: 1,
      points: 0,
      reaction: '',
      selectAnswerId: null,
      isEndQuiz: false,
    })
  })

  it('correct answer', () => {
    const state = initialState
    const correctAnswer = reducer(state, {
      type: actionTypes.QUIZ_CORRECT_ANSWER,
      payload: {
        id: '123',
      },
    })

    expect(correctAnswer).toEqual({
      ...state,
      points: state.points + 1,
      reaction: 'success',
      selectAnswerId: '123',
    })
  })

  it('incorrect answer', () => {
    const state = initialState
    const correctAnswer = reducer(state, {
      type: actionTypes.QUIZ_INCORRECT_ANSWER,
      payload: {
        id: '123',
      },
    })

    expect(correctAnswer).toEqual({
      ...state,
      reaction: 'error',
      selectAnswerId: '123',
    })
  })

  it('next question', () => {
    const state = initialState
    const correctAnswer = reducer(state, {
      type: actionTypes.QUIZ_NEXT_QUESTION,
    })

    expect(correctAnswer).toEqual({
      ...state,
      currentQuestion: state.currentQuestion + 1,
      reaction: '',
      selectAnswerId: null,
    })
  })

  it('end quiz', () => {
    const state = initialState
    const correctAnswer = reducer(state, {
      type: actionTypes.QUIZ_END,
    })

    expect(correctAnswer).toEqual({
      ...state,
      isEndQuiz: true,
    })
  })
})
