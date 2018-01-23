import React, {Component} from 'react';

export default class Question extends Component {
    render() {
        const {answers, correctAnswer, classBtn, handleClick} = this.props;

        const data = answers.map((item) => {
            return <button className={'quiz-question ' + (item.correct === correctAnswer ? classBtn: '')}
                        key={item.id}
                        data-correct={item.correct}
                        onClick={handleClick}>{item.text}</button>
        });

        return <div className="quiz-question-wrap">{data}</div>
    }
}