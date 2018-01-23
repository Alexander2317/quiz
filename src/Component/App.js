import React, {Component} from 'react';
import Quiz from "./Quiz";
import cx from 'classnames/bind';

export default class App extends Component {
    state = {
        currentQuestion: 0,
        correctAnswer: null,
        maxQuestion: 0,
        classBtn: null,
        endGame: true
    }

    componentDidMount() {
        const {data} = this.props;

        this.setState({
            maxQuestion: data.length
        });
    }

    handleClick = (e) => {
        const {currentQuestion,maxQuestion, correctAnswer, endGame} = this.state;
        const question = this.props.data[currentQuestion].answers;

        const rightAnswer = question.find((el) => {
            return el.correct === true
        });

        const targetValue = e.target.innerHTML;

        if (currentQuestion >= (maxQuestion - 1)) {
            this.setState({
                endGame: !endGame
            });

            return;
        }

        const checkCorrect = rightAnswer.text === targetValue;

        this.setState({
            correctAnswer: checkCorrect,
            classBtn: cx({
                'quiz-btn-right': checkCorrect,
                'quiz-btn-wrong': !checkCorrect
            })
        });

        setTimeout(() => {
            this.setState({
                currentQuestion: currentQuestion + 1,
                correctAnswer: null,
                classBtn: null
            });
        }, 5000);
    }

    render() {
        const {currentQuestion, correctAnswer, classBtn, endGame} = this.state;
        const {data} = this.props;

        if (endGame) {
            return <Quiz data={data[currentQuestion]} classBtn = {classBtn} correctAnswer={correctAnswer} handleClick={this.handleClick}/>
        } else {
            return <div>End</div>
        }
    }
}