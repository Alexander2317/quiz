import {createSelector} from 'reselect'

const quizState = state => state.quiz;
export const quizSelector = createSelector(quizState, (quizState) => quizState)
