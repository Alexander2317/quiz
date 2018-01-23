import React, {Component} from "react";

import "./style.css";
import QuestionTitle from './QuestionTitle';
import Question from './Question';

export default class Quiz extends Component {


    render() {
        const {data: {title, answers}, classBtn, correctAnswer, handleClick} = this.props;

        return <div className="quiz">
            <QuestionTitle title={title}/>
            <Question answers={answers} correctAnswer = {correctAnswer} classBtn = {classBtn} handleClick={handleClick}/>
        </div>
    }
}