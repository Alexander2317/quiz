import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Question(props) {
    const {
        answers,
        idCorrectAnswer,
        idWrongAnswer,
        handleClick
    } = props;

    const dataAnswers = answers.map((answer) => {
        return <button
            className={'quiz-question ' +
            (parseInt(answer.id) === idCorrectAnswer ? 'disable quiz-btn-right' : '') +
            (parseInt(answer.id) === idWrongAnswer ? 'disable quiz-btn-wrong' : '')}
            key={answer.id}
            data-id-answer={answer.id}
            onClick={handleClick}>{answer.text}</button>
    });

    return <div className="quiz-question-wrap">{dataAnswers}</div>
}

Question.propTypes = {
    answers: PropTypes.array.isRequired,
    idCorrectAnswer: PropTypes.any,
    idWrongAnswer: PropTypes.any,
    handleClick: PropTypes.func.isRequired
}