import React, {Component} from 'react';

export default class Question extends Component {
    render() {
        const {
            answers,
            idCorrectAnswer,
            idWrongAnswer,
            setClassBtnWrong,
            handleClick
        } = this.props;

        const dataAnswers = answers.map((answer) => {
            return <button
                className={'quiz-question ' +
                (parseInt(answer.id) === idCorrectAnswer ? 'disable quiz-btn-wrong' : '') +
                (parseInt(answer.id) === idWrongAnswer ? setClassBtnWrong : '')
                }
                key={answer.id}
                data-id-answer={answer.id}
                onClick={handleClick}>{answer.text}</button>
        });

        return <div className="quiz-question-wrap">{dataAnswers}</div>
    }
}