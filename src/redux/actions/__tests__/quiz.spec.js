import { testUtils, asyncCall } from '../../../utils'

import { actionTypes } from '../../constants'

import { initial, checkQuestion, selectQuestion } from '../quiz'

describe('actions quiz', () => {
  it('initial action', () => {
    const expectedAction = { type: actionTypes.QUIZ_INITIAL }
    expect(initial()).toEqual(expectedAction)
  })

  it('select correct question action', () => {
    const store = testUtils.mockStore({})
    const question = { id: '123', correct: true }
    const expectedAction = {
      type: actionTypes.QUIZ_CORRECT_ANSWER,
      payload: { id: '123' },
    }

    store.dispatch(checkQuestion(question))

    const actions = store.getActions()

    expect(actions).toEqual([expectedAction])
  })

  it('select incorrect question action', () => {
    const store = testUtils.mockStore({})
    const question = { id: '123', correct: false }
    const expectedAction = {
      type: actionTypes.QUIZ_INCORRECT_ANSWER,
      payload: { id: '123' },
    }

    store.dispatch(checkQuestion(question))
    const actions = store.getActions()

    expect(actions).toEqual([expectedAction])
  })

  it('check next question', (done) => {
    const store = testUtils.mockStore({
      quiz: {
        currentQuestion: 1,
        maxQuestions: 2,
      },
    })
    const question = { id: '123', correct: true }
    const expectedAction = [
      {
        type: actionTypes.QUIZ_CORRECT_ANSWER,
        payload: { id: '123' },
      },
      {
        type: actionTypes.QUIZ_NEXT_QUESTION,
      },
    ]

    store.dispatch(selectQuestion(question))

    const actions = store.getActions()

    asyncCall(() => {
      expect(actions).toEqual(expectedAction)
      done()
    })
  })

  it('check end quiz', (done) => {
    const store = testUtils.mockStore({
      quiz: {
        currentQuestion: 2,
        maxQuestions: 1,
      },
    })
    const question = { id: '123', correct: true }
    const expectedAction = [
      {
        type: actionTypes.QUIZ_CORRECT_ANSWER,
        payload: { id: '123' },
      },
      {
        type: actionTypes.QUIZ_END,
      },
    ]

    store.dispatch(selectQuestion(question))

    const actions = store.getActions()

    asyncCall(() => {
      expect(actions).toEqual(expectedAction)
      done()
    })
  })
})
