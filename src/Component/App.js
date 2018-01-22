import React, {Component} from 'react';
import Quiz from "./Quiz";

export default class App extends Component {
    state = {
        currentQuestion: 0,
        correctAnswers: 0,
        maxQuestion: 0,
        classBtn: '',
        endGame: true
    }

    componentDidMount() {
        const {data} = this.props;

        this.setState({
            maxQuestion: data.length
        });
    }

    handleClick = (e) => {
        const {currentQuestion, maxQuestion, endGame} = this.state;
        const checkCorrect = +e.target.dataset.correct;

        if(currentQuestion >= (maxQuestion - 1)) {
            this.setState({
                endGame: !endGame
            });

            return;
        }

        // if(checkCorrect) {
        //     e.target.classList.add('quiz-btn-right')
        // } else {
        //     e.target.classList.add('quiz-btn-wrong')
        // }

        setTimeout(()=>{
            this.setState({
                currentQuestion: currentQuestion + 1,
                classBtn: ''
            });
        },5000);
    }

    render() {
        const {currentQuestion, classBtn, endGame} = this.state;
        const {data} = this.props;

        if(endGame) {
            return <Quiz data={data[currentQuestion]} classBtn = {classBtn} handleClick={this.handleClick}/>
        } else {
            return <div>End</div>
        }
    }
}