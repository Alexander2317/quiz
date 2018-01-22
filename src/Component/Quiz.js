import React, {Component} from "react";

import "./style.css";
import QuestionTitle from './QuestionTitle';
import Question from './Question';

export default class Quiz extends Component {


    render() {
        const {data: {title, options, correct}, classBtn, handleClick} = this.props;

        return <div className="quiz">
            <QuestionTitle title={title}/>
            <Question correct={correct} variant={options} classBtn = {classBtn} handleClick={handleClick}/>
        </div>
    }
}