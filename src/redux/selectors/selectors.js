import { createSelector } from 'reselect'

const getIdentifier = (x) => x

const quizState = (state) => state.quiz
export const quizSelector = createSelector(quizState, getIdentifier)
