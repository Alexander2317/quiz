import React, {Component} from 'react';
import Quiz from "./Quiz";
import cx from 'classnames/bind';

export default class App extends Component {
    constructor(props) {
        super(props);

        const {data} = this.props;

        this.state = {
            maxQuestion: data.length,
            currentQuestion: 0,
            idCorrectAnswer: null,
            idWrongAnswer: null,
            setClassBtnWrong: null,
            endGame: true
        }
    }

    handleClick = (e) => {
        const {
            currentQuestion,
            maxQuestion,
            endGame
        } = this.state;

        const question = this.props.data[currentQuestion].answers;

        const rightAnswer = parseInt(question.find((el) => {
            return el.correct === true
        }).id);

        const targetValue = parseInt(e.target.dataset.idAnswer);

        if (currentQuestion >= (maxQuestion - 1)) {
            this.setState({
                endGame: !endGame
            });

            return;
        }

        const checkCorrect = rightAnswer === targetValue;

        this.setState({
            idCorrectAnswer: rightAnswer,
            idWrongAnswer: checkCorrect ? rightAnswer : targetValue,
            setClassBtnRight: cx({
                'disable quiz-btn-right': checkCorrect,
            }),
            setClassBtnWrong: cx({
                'disable quiz-btn-wrong': !checkCorrect
            })
        });

        setTimeout(() => {
            this.setState({
                currentQuestion: currentQuestion + 1,
                idCorrectAnswer: null,
                idWrongAnswer: null,
                setClassBtnRight: null,
                setClassBtnWrong: null
            });
        }, 5000);
    }

    render() {
        const {
            currentQuestion,
            idCorrectAnswer,
            idWrongAnswer,
            setClassBtnWrong,
            endGame
        } = this.state;

        const {data} = this.props;

        if (endGame) {
            return <Quiz data={data[currentQuestion]}
                         idCorrectAnswer={idCorrectAnswer}
                         idWrongAnswer={idWrongAnswer}
                         setClassBtnWrong={setClassBtnWrong}
                         handleClick={this.handleClick}/>
        } else {
            return <div>End</div>
        }
    }
}