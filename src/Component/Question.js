import React, {Component} from 'react';

export default class Question extends Component {
    render() {
        const {correct, variant, handleClick, classBtn} = this.props;

        const data = variant.map((item, idx) => {
            return <div className={'quiz-question ' + classBtn} key={item} data-correct={idx === correct ? 1 : 0}
                        onClick={handleClick}>{item}</div>
        });

        return <div className="quiz-question-wrap">{data}</div>
    }
}