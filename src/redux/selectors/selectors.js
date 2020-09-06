import { createSelector } from 'reselect'
import utils from './utils'

const quiz = 'quiz'
const quizState = (state) => state[quiz]
const quizQuestionsState = (state) => state[quiz].questions
const quizCurrentQuestionState = (state) => state[quiz].currentQuestion
const quizMaxQuestionsState = (state) => state[quiz].maxQuestions
const quizPointsState = (state) => state[quiz].points
const quizReactionState = (state) => state[quiz].reaction
const quizSelectAnswerIdState = (state) => state[quiz].selectAnswerId
const quizIsEndState = (state) => state[quiz].isEndQuiz

export const quizSelector = createSelector(quizState, utils.getIdentifier)

export const quizQuestionSelector = createSelector(
  quizQuestionsState,
  utils.getIdentifier,
)

export const quizNumberQuestionSelector = createSelector(
  quizCurrentQuestionState,
  utils.getIdentifier,
)

export const quizMaxQuestionsSelector = createSelector(
  quizMaxQuestionsState,
  utils.getIdentifier,
)

export const quizGetCurrentQuestionSelector = createSelector(
  quizQuestionSelector,
  quizCurrentQuestionState,
  (questions, number) => questions[number - 1],
)

export const quizPointsSelector = createSelector(
  quizPointsState,
  utils.getIdentifier,
)

export const quizReactionSelector = createSelector(
  quizReactionState,
  utils.getIdentifier,
)

export const quizSelectAnswerIdSelector = createSelector(
  quizSelectAnswerIdState,
  utils.getIdentifier,
)

export const quizIsEndSelector = createSelector(
  quizIsEndState,
  utils.getIdentifier,
)
