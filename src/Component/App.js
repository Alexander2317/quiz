import React, {Component} from 'react';
import Quiz from "./Quiz";
import Result from './Result';
import PropTypes from 'prop-types';

export default class App extends Component {
    constructor(props) {
        super(props);

        const {data} = this.props;

        this.state = {
            maxQuestion: data.length,
            currentQuestion: 0,
            countCorrectAnswer: 0,
            idCorrectAnswer: null,
            idWrongAnswer: null,
            endGame: true
        }
    }

    static propTypes = {
        data: PropTypes.array.isRequired
    }

    handleClick = (e) => {
        const {
            currentQuestion,
            maxQuestion,
            countCorrectAnswer,
            endGame
        } = this.state;

        const question = this.props.data[currentQuestion].answers;

        const rightAnswer = parseInt(question.find((el) => {
            return el.correct === true
        }).id);

        const targetValue = parseInt(e.target.dataset.idAnswer);
        const checkCorrect = rightAnswer === targetValue;

        this.setState({
            countCorrectAnswer: checkCorrect ? countCorrectAnswer + 1 : countCorrectAnswer
        });

        if (currentQuestion >= (maxQuestion - 1)) {
            this.setState({
                endGame: !endGame
            });

            return;
        }

        this.setState({
            idCorrectAnswer: rightAnswer,
            idWrongAnswer: !checkCorrect ?  targetValue : null
        });

        setTimeout(() => {
            this.setState({
                currentQuestion: currentQuestion + 1,
                idCorrectAnswer: null,
                idWrongAnswer: null
            });
        }, 2000);
    }

    render() {
        const {
            currentQuestion,
            idCorrectAnswer,
            idWrongAnswer,
            countCorrectAnswer,
            maxQuestion,
            endGame
        } = this.state;

        const {data} = this.props;

        if (endGame) {
            return <Quiz data={data[currentQuestion]}
                         idCorrectAnswer={idCorrectAnswer}
                         idWrongAnswer={idWrongAnswer}
                         handleClick={this.handleClick}/>
        } else {
            return <Result countCorrectAnswer = {countCorrectAnswer} maxQuestion = {maxQuestion} />
        }
    }
}