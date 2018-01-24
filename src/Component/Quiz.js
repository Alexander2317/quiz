import React, {Component} from "react";
import "./style.css";
import QuestionTitle from './QuestionTitle';
import Question from './Question';

export default class Quiz extends Component {
    render() {
        const {
            data: {
                title,
                answers
            },
            idCorrectAnswer,
            idWrongAnswer,
            setClassBtnRight,
            setClassBtnWrong,
            handleClick
        } = this.props;

        return <div className="quiz">
            <QuestionTitle title={title}/>
            <Question answers={answers}
                      idCorrectAnswer = {idCorrectAnswer}
                      idWrongAnswer = {idWrongAnswer}
                      setClassBtnRight={setClassBtnRight}
                      setClassBtnWrong={setClassBtnWrong}
                      handleClick={handleClick}/>
        </div>
    }
}